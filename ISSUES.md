# Issue Backlog

A curated set of tasks for practicing contributions. If this repo is hosted
on GitHub, each of these should be copied into the Issues tab individually
(with the suggested labels) so students practice picking a real issue,
commenting on it, and opening a real PR against it.

Difficulty is relative to this specific codebase — everything here is
solvable by reading `js/script.js` and `css/style.css` end to end.

---

### 🟢 Good first issue: Search should ignore letter case
**Labels:** `good first issue`, `bug`

Right now, searching for "groceries" won't find a note titled "Groceries" —
the search in `render()` inside `js/script.js` does a plain, case-sensitive
match. Fix it so search works regardless of capitalization.

*Hint: look at the `matchesSearch` line, and consider what string method
lowercases text.*

---

### 🟢 Good first issue: Confirm before deleting a note
**Labels:** `good first issue`

Clicking "Delete" on a note removes it immediately with no way to undo.
Add a confirmation step (a browser `confirm()` dialog is fine to start
with) so a note isn't deleted by an accidental click.

*Where to look: the `deleteNote()` function in `js/script.js`.*

---

### 🟢 Good first issue: Show how many notes are in each category
**Labels:** `good first issue`, `enhancement`

The filter buttons ("Personal", "Work", "Idea"...) currently just show the
category name. Update them to also show a count, e.g. "Work (3)".

*Where to look: the filter buttons are built in `index.html`; you'll need
to update their text from `js/script.js` after notes are loaded or changed.*

---

### 🟡 Add an "Edit note" option
**Labels:** `enhancement`, `help wanted`

There's currently no way to edit a note after creating it — only add or
delete. Add an "Edit" button on each note card that lets you update its
title, category, or content.

*This is a bigger change than the ones above: think about whether editing
should reuse the existing "Add a note" form or open something new.*

---

### 🟡 Add a relative timestamp to each note
**Labels:** `enhancement`

Each note already stores a `createdAt` field, but it isn't shown anywhere.
Display it on the note card as a relative time, e.g. "2 hours ago" or
"3 days ago", instead of a raw date string.

---

### 🟡 Add sorting options (newest, oldest, A–Z)
**Labels:** `enhancement`

Notes are currently always shown newest-first. Add a small dropdown that
lets someone re-sort the visible notes by newest, oldest, or title
(A–Z).

---

### 🔴 Add a character limit with a live counter
**Labels:** `enhancement`, `help wanted`

Add a reasonable character limit (e.g. 500) to the note content textarea,
with a live counter shown underneath it that updates as someone types, and
prevents submitting past the limit.

---

### 🔴 Dark mode toggle
**Labels:** `enhancement`, `help wanted`

Add a toggle in the header that switches the whole app to a dark color
scheme and remembers the choice on reload (localStorage).

*This is a good issue for practicing CSS custom properties — most of the
color values are already defined as variables in `:root` in
`css/style.css`.*

---

## Suggested labels legend

- 🟢 `good first issue` — small, self-contained, good for a first PR
- 🟡 medium — touches more than one part of the code
- 🔴 `help wanted` — larger feature, good for someone on their second or
  third contribution
