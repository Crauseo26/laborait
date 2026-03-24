---
description: Git Branching Strategy and PR Workflow
---
// turbo-all

> **Trigger Hook**: Execute this workflow *BEFORE* executing any new Implementation Plan, and *AFTER* validation is complete for that plan.

### Phase 1: Pre-Implementation (Branch Creation)
1. Always base new work off the latest `develop` branch. Fetch and sync before branching.
```bash
git checkout develop
git pull origin develop
```

2. Checkout a new branch based on the upcoming changes. **Nomenclature**: Use standard Git conventions (`feature/`, `fix/`, `refactor/`, `chore/`) followed by a concise dashed description (e.g., `feature/contact-form`).
```bash
git checkout -b <branch-name>
```

### Phase 2: Post-Implementation (Validation & PR Simulation)
1. After writing the code, execute BOTH the `.agents/workflows/performance-seo-validation.md` AND `.agents/workflows/design-validation.md` workflows. You may only proceed to Phase 2 if both validations yield zero errors and pass all manual design audits.
2. Stage and commit your changes onto the new branch using descriptive conventional commits.
```bash
git add .
git commit -m "type: descriptive summary of changes implemented"
```
3. Push the new feature branch up to the remote repository.
```bash
git push -u origin <branch-name>
```
4. **Pull Request & Merge Process**: Because GitHub CLI (`gh`) access may not be natively available, you will emulate a PR approval process locally by executing a non-fast-forward merge into `develop`. Provide a detailed summary of the changes in the merge commit message.
```bash
git checkout develop
git merge <branch-name> --no-ff -m "Merge branch '<branch-name>': Implemented [descriptive functionality]"
git push origin develop
```
5. **Clean Up**: Delete the remote and local feature branches. The remote repository must remain strictly clean, containing ONLY `master` and `develop`.
```bash
git push origin --delete <branch-name>
git branch -d <branch-name>
```

6. **Context Update**: Immediately after merging, you MUST execute the `.agents/workflows/update-context.md` workflow to record the completed task in the context memory document.
