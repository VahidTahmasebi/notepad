import NotesAPI from "./NotesAPI.js";
import NotesView from "./NotesView.js";

export default class App {
  constructor(root) {
    this.notes = [];
    this.activeNote = null;
    this.view = new NotesView(root, this._handlers());
    
  }
  _handlers() {
    return {
      onNoteAdd: () => {},
      onNoteEdit: (newTitle, newBody) => {},
      onNoteSelect: (noteId) => {},
      onNoteDelete: (noteId) => {},
    };
  }
}
