# Instrucciones compartidas

- Lee patrones existentes antes de proponer código nuevo.
- Mantén los cambios pequeños y enfocados.
- Si una tarea afecta a varias capas, explicita el impacto por capa.
- No inventes contratos si ya existe un tipo, DTO o esquema equivalente.
- No mezcles infraestructura con cambios funcionales sin una razón concreta.
- Revisa productor y consumidor cuando cambies un contrato.
- Al terminar informa de cambios, impacto, riesgos, supuestos y pruebas.
- No delegues tareas pequeñas y autocontenidas.
- Las instrucciones específicas del repositorio de trabajo tienen prioridad sobre estas reglas generales.

## OpenCode

Los agentes se invocan con `@nombre` y las skills se activan por sus descripciones. Los agentes no heredan automáticamente los nombres de agentes de GitHub: delega con la herramienta `task` usando el nombre OpenCode correspondiente.
