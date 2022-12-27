export default class NotesView {
  constructor(root) {
    this.root = root;

    this.root.innerHTML = `
    <nav class="notes__sidebar">
        <div class="notes__logo">Note APP</div>
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
  }
}
