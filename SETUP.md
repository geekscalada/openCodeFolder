# Uso desde repositorios hermanos

OpenCode descubre `.opencode/` a partir del directorio de trabajo y su raíz. No busca automáticamente configuraciones en un repositorio hermano.

## Opción recomendada: configuración global

En `~/.config/opencode/opencode.jsonc`, añade:

```jsonc
{
  "$schema": "https://opencode.ai/config.json",
  "skills": {
    "paths": ["/mnt/f/jose/vaultsObsi/Programacion/.opencode/skills"]
  },
  "references": {
    "iaflow": {
      "path": "/mnt/f/jose/vaultsObsi/Programacion",
      "description": "Agentes, skills e instrucciones compartidas de IA"
    }
  }
}
```

Las skills, comandos, agentes y el plugin de tracking quedan disponibles globalmente mediante `~/.config/opencode/`. Los wrappers globales delegan en la réplica canónica de este repositorio.

## Opción por repositorio

Desde cada repositorio de trabajo, crea un enlace de `.opencode` hacia esta carpeta o copia la carpeta. Esta opción permite añadir instrucciones específicas del proyecto sin hacerlas globales.

## Importante

Las rutas absolutas dependen de esta máquina. Si cambia la ubicación, actualiza la configuración. El agente puede leer referencias externas, pero las ediciones se harán en el repositorio activo y requieren permiso para directorios externos. Los scripts originales del hook están en `.opencode/hooks/reference/scripts`; el equivalente activo es `.opencode/plugins/docs-tracker.js`.
