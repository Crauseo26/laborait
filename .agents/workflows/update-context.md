---
description: Context Memory Update Workflow
---
// turbo-all

> **Trigger Hook**: Execute this workflow IMMEDIATELY AFTER a successful execution of `.agents/workflows/branching-strategy.md` Phase 2 (specifically, after the new branch has been successfully merged into `develop`).

### Update Memory Tasks

1. **Update Recent Tasks**:
   - Open and edit `.agents/context-memory.md`.
   - Discard the oldest task at the bottom of the "Últimas 3 Tareas Finalizadas" section.
   - Push the freshly completed task to the top (Position 1) with a brief, concise technical summary of what was accomplished (1-2 sentences).

2. **Evaluate and Update Lessons Learned**:
   - Assess if there was any new critical "gotcha", pattern, or error resolved during this implementation that should never be forgotten.
   - If so, add it to the top of the "Lecciones Aprendidas" flat list.
   - Ensure the list NEVER exceeds 20 items. If adding a new item pushes the count to 21, remove the oldest or least relevant item from the bottom of the list.
