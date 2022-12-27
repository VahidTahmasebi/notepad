import NotesAPI from "./NotesAPI.js";
import NotesView from "./NotesView.js";

const app = document.getElementById("app");

const view = new NotesView(app, {
  onNoteAdd() {},
  onNoteEdit(newTitle, newBody) {},
  onNoteSelect(noteId) {},
  onNoteDelete(noteId) {},
});

view.updateNoteList(NotesAPI.getAllNotes());
view.updateActiveNote(NotesAPI.getAllNotes()[0]);
