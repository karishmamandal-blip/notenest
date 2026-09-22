/* =========================================
   NoteNest — app logic
   Plain JavaScript, no frameworks or build step.
   Notes are stored as an array of objects and
   persisted to localStorage.
   ========================================= */

// Match these to the --cat-* variables in css/style.css
const CATEGORY_COLORS = {
  personal: "#8b5fbf",
  work: "#3d6b5c",
  idea: "#c97b3d",
  study: "#3a6ea5",
  todo: "#b14a3c",
};

const STORAGE_KEY = "notenest-notes";

// App state
let notes = loadNotes();
let activeCategory = "all";
let searchTerm = "";

// DOM references
const form = document.getElementById("note-form");
const titleInput = document.getElementById("note-title");
const categoryInput = document.getElementById("note-category");
const contentInput = document.getElementById("note-content");
const notesGrid = document.getElementById("notes-grid");
const emptyState = document.getElementById("empty-state");
const searchInput = document.getElementById("search-input");
const filterTabs = document.getElementById("filter-tabs");

/* ---------- storage helpers ---------- */

function loadNotes() {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved ? JSON.parse(saved) : [];
}

function saveNotes() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
}

/* ---------- rendering ---------- */

function render() {
  // Apply the active category filter
  let visibleNotes = notes.filter((note) => {
    const matchesCategory =
      activeCategory === "all" || note.category === activeCategory;

    // NOTE: this does a plain substring match, so searching is
    // currently case-sensitive ("Groceries" won't match "groceries").
    // See ISSUES.md — "Search should ignore letter case" is a
    // good first issue for fixing this.
    const matchesSearch =
      searchTerm === "" ||
      note.title.includes(searchTerm) ||
      note.content.includes(searchTerm);

    return matchesCategory && matchesSearch;
  });

  // Newest notes first
  visibleNotes = visibleNotes.slice().reverse();

  notesGrid.innerHTML = "";

  if (visibleNotes.length === 0) {
    emptyState.hidden = false;
  } else {
    emptyState.hidden = true;
    visibleNotes.forEach((note) => {
      notesGrid.appendChild(buildNoteCard(note));
    });
  }
}

function buildNoteCard(note) {
  const card = document.createElement("div");
  card.className = "note-card";
  card.style.borderLeftColor = CATEGORY_COLORS[note.category] || "#333";

  const title = document.createElement("h3");
  title.textContent = note.title;

  const content = document.createElement("p");
  content.className = "note-content";
  content.textContent = note.content;

  const meta = document.createElement("div");
  meta.className = "note-meta";

  const categoryTag = document.createElement("span");
  categoryTag.className = "category-tag";
  categoryTag.textContent = note.category;
  categoryTag.style.color = CATEGORY_COLORS[note.category] || "#333";

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", () => deleteNote(note.id));

  meta.appendChild(categoryTag);
  meta.appendChild(deleteBtn);

  card.appendChild(title);
  card.appendChild(content);
  card.appendChild(meta);

  return card;
}

/* ---------- actions ---------- */

function addNote(title, category, content) {
  const note = {
    id: Date.now().toString(),
    title: title.trim(),
    category,
    content: content.trim(),
    createdAt: new Date().toISOString(),
  };
  notes.push(note);
  saveNotes();
  render();
}

function deleteNote(id) {
  if (!window.confirm("Are you sure you want to delete this note?")) {
    return;
  }

  notes = notes.filter((note) => note.id !== id);

  saveNotes();
  render();
}

/* ---------- event listeners ---------- */

form.addEventListener("submit", (event) => {
  event.preventDefault();
  addNote(titleInput.value, categoryInput.value, contentInput.value);
  form.reset();
  titleInput.focus();
});

searchInput.addEventListener("input", (event) => {
  searchTerm = event.target.value;
  render();
});

filterTabs.addEventListener("click", (event) => {
  const button = event.target.closest(".filter-btn");
  if (!button) return;

  // update active state
  filterTabs
    .querySelectorAll(".filter-btn")
    .forEach((btn) => {
      btn.classList.remove("active");
      btn.setAttribute("aria-selected", "false");
    });
  button.classList.add("active");
  button.setAttribute("aria-selected", "true");

  activeCategory = button.dataset.category;
  render();
});

/* ---------- initial render ---------- */

render();
