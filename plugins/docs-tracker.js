import fs from "node:fs"
import path from "node:path"

const seenCalls = new Set()

function readConfig(directory) {
  const candidates = [
    path.join(directory, ".opencode", "hooks", "docs-tracker.env"),
    path.join(directory, ".github", "hooks", "docs-tracker.env"),
    path.join(directory, ".opencode", "hooks", "reference", "docs-tracker.env"),
    path.join(__dirname, "..", "hooks", "reference", "docs-tracker.env"),
  ]
  const file = candidates.find((candidate) => fs.existsSync(candidate))
  const values = { TRACKED_PATHS: "/docs /files", LOG_FILE: "/tmp/docs-tracker.log" }
  if (!file) return values
  for (const line of fs.readFileSync(file, "utf8").split(/\r?\n/)) {
    const match = line.match(/^\s*(TRACKED_PATHS|LOG_FILE)\s*=\s*["']?(.*?)["']?\s*$/)
    if (match) values[match[1]] = match[2]
  }
  return values
}

function extractPaths(value) {
  if (!value || typeof value !== "object") return []
  return [value.filePath, value.path, value.file, value.filename].filter(
    (item) => typeof item === "string",
  )
}

export const DocsTracker = async ({ directory }) => ({
  "tool.execute.after": async (input) => {
    const callId = input?.callID ?? input?.callId
    if (callId && seenCalls.has(callId)) return
    if (callId) seenCalls.add(callId)
    const tool = String(input?.tool ?? "")
    if (!["read", "grep", "glob", "read_file", "grep_search", "file_search"].includes(tool)) return
    const config = readConfig(directory)
    const args = input?.args ?? input?.tool_input ?? {}
    const paths = extractPaths(args)
    const tracked = config.TRACKED_PATHS.split(/\s+/).filter(Boolean)
    const matched = paths.some((candidate) => tracked.some((prefix) => {
      const normalized = prefix.replace(/\/$/, "")
      return candidate === normalized || candidate.startsWith(`${normalized}/`) || candidate.includes(`${normalized}/`)
    }))
    if (!matched) return
    const timestamp = new Date().toISOString().replace("T", " ").replace(/\.\d{3}Z$/, "")
    const line = `[${timestamp}] ${tool} -> ${paths.join(", ")}`
    fs.appendFileSync(config.LOG_FILE, `${line}\n`)
  },
})
