import NotesAPI from "./NotesAPI.js";
import NotesView from "./NotesView.js";

const app = document.getElementById("app");

const view = new NotesView(app, {
  onNoteAdd() {},
  onNoteEdit(newTitle, newBody) {},
  onNoteSelect(noteId) {},
});

view.updateNoteList(NotesAPI.getAllNotes());
