# Contributing to NoteNest

Thanks for contributing. This project is intentionally small, so it's a
good place to practice the real open-source contribution workflow before
trying it on a bigger project.

## Before you start

1. Read this file fully.
2. Look through [ISSUES.md](ISSUES.md) or the repo's Issues tab and pick
   one that isn't already claimed by someone else.
3. Comment on the issue saying you'd like to work on it. This avoids two
   people accidentally doing the same work.

## Workflow

1. **Fork** this repository to your own GitHub account.
2. **Clone** your fork locally:
   ```
   git clone <your-fork-url>
   ```
3. **Create a branch** for your change — don't work directly on `main`:
   ```
   git switch -c fix-search-case-sensitivity
   ```
   Name your branch after what it does, not your own name.
4. **Make your change.** Keep it focused on the one issue you picked —
   don't fix five unrelated things in the same PR.
5. **Test it manually** by opening `index.html` in your browser and trying
   the feature you changed.
6. **Commit** with a clear message that explains *why*, not just *what*:
   ```
   git add .
   git commit -m "Make note search case-insensitive"
   ```
7. **Push** your branch to your fork:
   ```
   git push origin fix-search-case-sensitivity
   ```
8. **Open a Pull Request** against this repo's `main` branch. In the PR
   description, link the issue it resolves (e.g. "Closes #4").

## What makes a good PR here

- One PR = one issue. Small and focused beats large and sprawling.
- Match the existing code style — this project deliberately avoids
  frameworks and build tools, so please don't introduce any.
- Add a short comment if your change isn't obvious from the code alone.
- If your change affects how something looks, mention it in the PR
  description (a screenshot helps but isn't required).

## Code of conduct

Be kind, be patient, and assume good intent. Everyone here is learning.
