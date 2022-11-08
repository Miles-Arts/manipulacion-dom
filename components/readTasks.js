import { createTask } from "./addTask.js";
import { uniqueDates }  from "../services/date.js";
import dateElement from "./dateElement.js";

export const readTasks = () => {

    const list = document.querySelector("[data-list]");
    console.log(list);

    const tasksList = JSON.parse(localStorage.getItem("tasks")) || [];
    //console.log(dateElement("14/09/2022"));
    const dates = uniqueDates(tasksList);

    dates.forEach( date => {
        console.log(date);
    })

    tasksList.forEach((task) => {

        list.appendChild(dateElement(task.dateFormat));

        list.appendChild(createTask(task));

    });
};