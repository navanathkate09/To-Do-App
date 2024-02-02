console.log("Script loaded...");

const userInput = document.querySelector(".userInput");
const listContainer = document.querySelector(".listContainer");
const addbtn = document.querySelector("button");

addbtn.addEventListener("click", (e) => {
  // console.log(userInput.value)
  if (userInput.value === "") {
    alert("Please enter the task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = userInput.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  userInput.value = "";
  saveData(); 
});

listContainer.addEventListener("click", (e) => {
  // console.log(e.target.tagName);
  if (e.target.tagName === "LI") {
    e.target.classList.toggle('checked');
    saveData();
  } 
  else if(e.target.tagName==='SPAN'){
      e.target.parentElement.remove();
      saveData();
  }
});

function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
}

function showTask(){
  listContainer.innerHTML=localStorage.getItem('data');
}

showTask();