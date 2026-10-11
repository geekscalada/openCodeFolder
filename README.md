# Distribución OpenCode

Esta carpeta es la réplica completa y adaptada de `.github/` para OpenCode.

- `agents/`: agentes OpenCode, uno por fichero Markdown.
- `commands/`: comandos invocables como `/opsx-explore`.
- `skills/`: skills con `SKILL.md` y frontmatter compatible.
- `instructions.md`: reglas transversales.
- `opencode.json`: configuración local de este repositorio.
- `plugins/`: equivalentes OpenCode de hooks que sí tienen API compatible.
- `hooks/reference/`: scripts y configuración original conservados como referencia.
- `reference/` y `utilities/`: documentación auxiliar trasladada.
- `MANIFEST.md`: correspondencia completa entre ambas estructuras.

La configuración local solo se descubre al ejecutar OpenCode dentro de este repositorio. Para usar esta distribución desde un repositorio hermano, configura las rutas en `~/.config/opencode/opencode.jsonc` o enlaza `.opencode` en el repositorio de trabajo. Consulta `SETUP.md` para elegir una opción.
