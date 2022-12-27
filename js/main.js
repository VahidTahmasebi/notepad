const notes = [
  {
    id: 1,
    title: "first note",
    body: "some dummy text first",
    updated: "2021-10-31T15:02:00.411Z",
  },
  {
    id: 2,
    title: "second note",
    body: "some dummy text second",
    updated: "2021-10-31T15:03:23.556Z",
  },
  {
    id: 3,
    title: "third note",
    body: "some dummy text third",
    updated: "2021-11-01T10:47:26.889Z",
  },
];

class NotesAPI {
  // sort data
  static getAllNotes() {
    const savedNotes = notes || [];
    return savedNotes.sort((a, b) => {
      return new Date(a.updated) > new Date(b.updated) ? -1 : 1;
    });
  }
  saveNote(noteToSave) {
    const notes = NotesApi.getAllNotes();

    const existedNote = notes.find((n) => n.id == noteToSave.id);

    if (existedNote) {
      existedNote.title = noteToSave.title;
      existedNote.body = noteToSave.body;
      existedNote.updated = new Date().toISOString();
    } else {
      noteToSave.id = new Date().getTime();
      noteToSave.updated = new Date().toISOString();
      notes.push(noteToSave);
    }
  }
  deleteNote() {}
}
