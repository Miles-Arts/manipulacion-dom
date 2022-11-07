import checkComplete from "./checkComplete.js";
import deleteIcon from "./deleteIcon.js";


const addTask = (evento) => {

    const list = document.querySelector("[data-list]");
    const task = createTask(evento);
    list.appendChild(task);

}

const taskList = [];

const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const calendar = document.querySelector("[data-form-date]");

    const value = input.value;
    const date = calendar.value;

    const dateFormat = moment(date).format("DD/MM/YYYY");
    console.log(dateFormat);


    const task = document.createElement("li");
    task.classList.add("card");
    input.value = "";
    // BACKTICKS


    const taskContent = document.createElement("div");

    console.log(value, dateFormat);

    const taskObj = {
        value,
        dateFormat,
    };

    taskList.push(taskObj);


    localStorage.setItem("tasks", JSON.stringify(taskList));

    taskContent.appendChild(checkComplete());
    const titleTask = document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerText = value;
    taskContent.appendChild(titleTask);
    // TASK.INNERHTML     

    const dateElement = document.createElement("span");

    dateElement.innerHTML = dateFormat;


    task.appendChild(taskContent);
    task.appendChild(dateElement);
    task.appendChild(deleteIcon());
    return task;

};


