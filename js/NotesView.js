export default class NotesView {
  constructor(root, handlers) {
    this.root = root;

    const { onNoteAdd, onNoteEdit, onNoteSelect, onNoteDelete } = handlers;
    this.onNoteAdd = onNoteAdd;
    this.onNoteEdit = onNoteEdit;
    this.onNoteSelect = onNoteSelect;
    this.onNoteDelete = onNoteDelete;

    // add DOM
    this.root.innerHTML = `
    <nav class="notes__sidebar">
        <div class="notes__logo">NOTE APP</div>
        <div class="notes__list">
        </div>
        <button class="notes__add">New Note</button>
      </nav>
      <main class="notes__preview">
        <input
          type="text"
          class="notes__title"
          placeholder="Subject..."/>
        <textarea name="" class="notes__body" placeholder="note..."></textarea></main>
    `;

    // access to dom
    const addNotesBtn = this.root.querySelector(".notes__add");
    const inputTitle = this.root.querySelector(".notes__title");
    const inputBody = this.root.querySelector(".notes__body");

    // Command new note button
    addNotesBtn.addEventListener("click", () => {
      this.onNoteAdd();
    });
    // command event title and body preview
    [inputTitle, inputBody].forEach((inputField) => {
      inputField.addEventListener("blur", () => {
        const newTitle = inputTitle.value.trim();
        const newBody = inputBody.value.trim();
        this.onNoteEdit(newTitle, newBody);
      });
    });
  }

  _createListItemHTML(id, title, body, updated) {
    // The maximum length of the text
    const MAX_BODY_LENGTH = 50;
    return `
      <div class="notes__list-item" data-note-id='${id}'>
         <div class="notes__item-header">
         <div class="notes__small-title">${title}</div>
         <span class="notes__list-trash" data-note-id='${id}'><i class="far fa-trash-alt"></i></span>
         </div>
         
         <div class="notes__small-body">${body}
         ${body.substring(0, MAX_BODY_LENGTH)}
         ${body.length > MAX_BODY_LENGTH ? "..." : ""}
         </div>
         <div class="notes__small-updated">
         ${new Date(updated).toLocaleString("en", {
           dateStyle: "full",
           timeStyle: "short",
         })}
         </div>
      </div>
    `;
  }

  updateNoteList(notes) {
    const notesContainer = this.root.querySelector(".notes--list");

    notesContainer.innerHTML = "";
    let notesList = "";
    for (const note of notes) {
      const { id, title, body, updated } = note;

      const html = this._createListItemHTML(id, title, body, updated);
      notesList += html;
    }
    notesContainer.querySelectorAll(".notes__list-item").forEach((noteItem) => {
      noteItem.addEventListener("click", () =>
        this.onNoteSelect(noteItem.dataset.noteId),
      );
    });
    notesContainer
      .querySelectorAll(".notes__list-trash")
      .forEach((noteItem) => {
        item.addEventListener("click", () =>
          this.onNoteDelete(noteItem.dataset.noteId),
        );
      });
  }
}
