---
name: openspec-workflow
description: Use when exploring, proposing, implementing, or archiving changes managed by the OpenSpec CLI.
---

# OpenSpec workflow

Use `openspec list --json`, `openspec status --change <name> --json`, and `openspec instructions ... --json` instead of guessing artifact names. Exploration must not implement application code. Proposals create all artifacts required by the schema. Apply reads the returned context files and updates task checkboxes one by one. Archive checks incomplete artifacts, tasks and delta specs before moving the change.
