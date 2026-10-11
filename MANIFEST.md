# Réplica `.github` -> `.opencode`

Esta distribución conserva el contenido funcional de `.github` y lo adapta al cargador de OpenCode.

| Origen | Destino OpenCode | Adaptación |
|---|---|---|
| `.github/agents/*.md` y `*.agent.md` | `.opencode/agents/*.md` | Se elimina la metadata exclusiva de Copilot y se usa `mode`, `hidden` y `description`. |
| `.github/skills/**/SKILL.md` | `.opencode/skills/**/SKILL.md` | Se conserva el contenido completo y se normalizan nombres/frontmatter. |
| recursos dentro de skills | misma skill | Se conservan en la carpeta de la skill. |
| `.github/prompts/*.prompt.md` | `.opencode/commands/*.md` | Se convierten en comandos con `$ARGUMENTS` y agentes OpenCode. |
| `.github/extraUtilities/*` | `.opencode/utilities/` o `.opencode/commands/` | Documentación como utility y prompts accionables como comandos. |
| `.github/hooks/docs-tracker.*` | `.opencode/hooks/reference/` | Copia de referencia de configuración y scripts originales. |
| `PostToolUse` de docs-tracker | `.opencode/plugins/docs-tracker.js` | Implementación equivalente con `tool.execute.after`. |
| `.github/readme.md`, `exampleAGENTS.md` | `.opencode/reference/` | Material de referencia, no instrucciones automáticas. |

`.github/.git/` no se replica: es metadata de Git de un repositorio separado, no configuración de agentes.
