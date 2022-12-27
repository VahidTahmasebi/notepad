export default class NotesView {
  constructor(root) {
    this.root = root;
    const { onNoteAdd, onNoteEdit } = handlers;
    this.onNoteAdd = onNoteAdd;
    this.onNoteEdit = onNoteEdit;

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
        <textarea name="" class="notes__body" placeholder="notes..."></textarea></main>
    `;

    // access to dom
    const addNotesBtn = this.root.querySelector(".notes__add");
    const inputTitle = this.root.querySelector(".notes__title");
    const inputBody = this.root.querySelector(".notes__body");

    // Command new note button
    addNotesBtn.addEvenListener("click", () => {
      this.onNoteAdd();
    });
    // command event title and body preview
    [inputTitle, inputBody].forEach((inputFiled) => {
      inputFiled.addEvenListener("blur", () => {
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
  updateNoteList(notes) {}
}
