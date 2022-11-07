import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";

const btn = document.querySelector("[data-form-btn]");

const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const calendar = document.querySelector("[data-form-date]");
    
    const value = input.value;
    const date = calendar.value;
    console.log(moment(date).format("DD/MM/YYYY"));
    const list = document.querySelector("[data-list]");
    const task = document.createElement("li");
    task.classList.add("card");
    input.value = "";
    // BACKTICKS


    const taskContent = document.createElement("div");
    taskContent.appendChild(checkComplete());
    const titleTask = document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerText = value;
    taskContent.appendChild(titleTask);
    // TASK.INNERHTML     


    task.appendChild(taskContent);
    task.appendChild(deleteIcon());
    list.appendChild(task);
};

btn.addEventListener("click", createTask);

