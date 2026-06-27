# DECISIONS — Historical Record (append-only)

> Append-only. Entries are never edited; a revised decision gets a NEW dated entry.

---

## [2026-06-27] A. Sistema de Autodocumentación Cartographer
**Choice:** Adoptar la tríada base de Cartographer (`ROUTER.md`, `STATE.md`, `DECISIONS.md`) y una regla de agente para asegurar la consistencia.
**Reasoning:** Evitar el "drift" de documentación. Asegurar que cualquier agente de IA que tome este proyecto en el futuro sepa exactamente el estado actual, las dependencias y el foco, sin requerir re-explicar todo el contexto.
**Discarded:** Mantener toda la documentación en un solo `README.md` (rechazado porque se vuelve demasiado grande y el agente pierde contexto) o no tener sistema (rechazado por causar pérdida de memoria entre sesiones).
