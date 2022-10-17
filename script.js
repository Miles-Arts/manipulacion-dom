const btn = document.querySelector("[data-form-btn]");

const createTask = (evento) => {
    evento.preventDefault()
    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    const list = document.querySelector("[data-list]");
    const task = document.createElement("li");
    task.classList.add("card");
    input.value = "";
    console.log(checkComplete);
    const taskContent = document.createElement("div");
    taskContent.appendChild(checkComplete());
    const titleTask = document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerText = value;
    taskContent.appendChild(titleTask);
    const content = `<i class="fas fa-trash-alt trashIcon icon"></i>`; //backticks
    //task.innerHTML = content;
    task.appendChild(taskContent);
    list.appendChild(task);
    console.log(content);
};

console.log(btn);
//Arrow functions o Funciones anónimas

/*btn.addEventListener("click", function (evento) {
    evento.preventDefault()
    const input = document.querySelector("[data-form-input]");
    console.log(input.value);
})*/

btn.addEventListener("click", createTask);

const checkComplete = () => {
    const i = document.createElement("i")
    i.classList.add("far", "fa-check-square", "icon");
    i.addEventListener("click", completeTask);
    return i;
};

const completeTask = (event) => {
    //console.log(event.target);
    const element = event.target;
    //element.classList.add("fas");
    //element.classList.add("completeIcon");
    //element.classList.remove("far");
    element.classList.toggle("fas");
    element.classList.toggle("completeIcon");
    element.classList.toggle("far");
};