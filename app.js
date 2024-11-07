const addTitle = document.getElementById("add-title");
const addContent = document.getElementById("add-content");
const addBtn = document.getElementById("add-note");
const notes = document.getElementById("notes");

addBtn.addEventListener("click", addNotes);
window.addEventListener("DOMContentLoaded", () => {
  showNotes();
});

function addNotes() {
  let notesArr = localStorage.getItem("notes");
  if (notesArr === null) {
    notesArr = [];
  } else {
    notesArr = JSON.parse(notesArr);
  }
  const noteObj = {
    title: addTitle.value,
    content: addContent.value,
  };

  addTitle.value = "";
  addContent.value = "";

  notesArr.push(noteObj);
  localStorage.setItem("notes", JSON.stringify(notesArr));
  showNotes();
  // console.log(noteObj);
}

function showNotes() {
  let notesHtml = "";
  let notesArr = localStorage.getItem("notes");
  if (notesArr === null) {
    return;
  } else {
    notesArr = JSON.parse(notesArr);
  }
  for (let i = 0; i < notesArr.length; i++) {
    notesHtml += `<div class = 'note-card'> 
                  <h4 class ="title">${notesArr[i].title}</h4>
                  <p class= 'content'>${notesArr[i].content}</p>
                  <button class='edit-btn' onclick="editNote(${i})">Edit</button>
                  <button class='delete-btn' onclick="deleteNote(${i})">Delete</button>
                  
                  </div>
    `;
  }
  notes.innerHTML = notesHtml;
}

function deleteNote(ind) {
  let notesArr = localStorage.getItem("notes");
  if (notesArr === null) {
    return;
  } else {
    notesArr = JSON.parse(notesArr);
  }
  notesArr.splice(ind, 1);
  localStorage.setItem("notes", JSON.stringify(notesArr));
  showNotes();
}

function editNote(ind) {
  let notesArr = localStorage.getItem("notes");
  if (notesArr === null) {
    return;
  } else {
    notesArr = JSON.parse(notesArr);
  }

  addTitle.value = notesArr[ind].title;
  addContent.value = notesArr[ind].content;

  notesArr.splice(ind, 1);
  localStorage.setItem("notes", JSON.stringify(notesArr));
  showNotes();
}
