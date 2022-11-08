//import checkComplete from "./components/checkComplete.js";
//import deleteIcon from "./components/deleteIcon.js";
import { addTask } from "./components/addTask.js";
import { readTasks } from "./components/readTasks.js";

const btn = document.querySelector("[data-form-btn]");

//arrow functions o funciones anónimas 
btn.addEventListener("click", addTask);

readTasks();

