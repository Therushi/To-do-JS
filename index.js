const inputText = document.querySelector("#inputText");

const addNote = document.querySelector("#addNote");
const editBtn = document.querySelector("#editBtn");
const h2 = document.querySelectorAll("h2");
let notes = [];
let id = 0;
let oldValue = "";
function createNote(noteValue) {

    const container = document.querySelector("#container");
    const div = document.createElement('div');
    div.className = "flex justify-center item-center mt-5 gap-3";
    const h2 = document.createElement('h2');
    h2.className = "rounded-md w-[300px] px-3 py-1 bg-gray-300 text-gray-700 h-[40px] text-xl font-medium";
    h2.innerText = noteValue;
    div.appendChild(h2);

    const editBtn = document.createElement('button');
    editBtn.className = "text-green-700 font-medium text-md bg-green-300 px-3 py-1 cursor-pointer rounded-md";
    editBtn.innerText = "Edit";
    editBtn.id = "editBtn"
    editBtn.setAttribute("onClick", `edit(${id + 1})`);
    div.appendChild(editBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.className = "text-red-700 font-medium text-md bg-red-300 px-3 py-1 cursor-pointer rounded-md";
    deleteBtn.innerText = "Delete";
    deleteBtn.setAttribute("onClick", `deleteNote(${id + 1})`);
    div.appendChild(deleteBtn);
    container.appendChild(div);
}

addNote.addEventListener('click',() => {
    if(addNote.innerHTML == "update"){
        let note = notes.find(note => note.id == id);
        console.log(note);
        note.note = inputText.value;
        h2.forEach(item=>{
            if(item.innerHTML == oldValue){
                item.innerHTML = inputText.value
            }
        })
    }else{
        createNote(inputText.value);
        notes.push({
            id : id + 1,
            note : inputText.value.toLowerCase()
        });
        id = id + 1;
    }
    if(inputText.value){
        inputText.value = "";
    }
});

function edit(id){
    oldValue = "";
   const note = notes.find(note => note.id == id)
    inputText.value = note.note;
    addNote.innerHTML = "update";
    oldValue = note.note;
}   

function deleteNote(id) {
    const div = document.querySelectorAll('#container')
    console.log(div);
    const note = notes.find(note => note.id == id);
    notes = notes.filter(item => item.id != id)
    console.log(notes);
}