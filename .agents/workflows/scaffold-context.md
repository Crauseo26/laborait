---
description: Context Scaffolding Workflow
---
// turbo-all

> **Trigger Hook**: Execute this workflow at the very beginning of a new session or chat to instantly restore context.

### Context Scaffolding Tasks

1. **Read the Role Definition**: The agent MUST explicitly read `.agents/role.md` using `view_file` to strictly align with its identity, performance budgets (like <100kb JS), conversion focus, and overall mission for Laborait.
2. **Read the Context Memory**: The agent MUST explicitly read `.agents/context-memory.md` using `view_file` to understand what were the last 3 tasks worked on and the critical lessons learned to avoid any regressions.
3. **Acknowledge and Start**: Once both documents are read and assimilated, the agent should output a brief summary of what it understood as the current project state, and ask the user what the exact next step or task is.
