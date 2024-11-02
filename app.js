const addTitle = document.getElementById("add-title");
const addContent = document.getElementById("add-content");
const addBtn = document.getElementById("add-note");
const notes = document.getElementById("notes");

let notesArr = [];

function addNotes() {
  const noteObj = {
    title: addTitle.value,
    content: addContent.value,
  };

  notesArr.push(noteObj);
}

function showNotes() {}
