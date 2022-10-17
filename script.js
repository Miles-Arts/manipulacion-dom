(() => {
    const btn = document.querySelector("[data-form-btn]");

    const createTask = (evento) => {
        evento.preventDefault()
        const input = document.querySelector("[data-form-input]");
        const value = input.value;
        const list = document.querySelector("[data-list]");
        const task = document.createElement("li");
        task.classList.add("card");
        input.value = "";
        const taskContent = document.createElement("div");
        taskContent.appendChild(checkComplete());
        const titleTask = document.createElement("span");
        titleTask.classList.add("task");
        titleTask.innerText = value;
        taskContent.appendChild(titleTask);
        //taskContent.appendChild(deleteIcon());
        //task.innerHTML = content;
        task.appendChild(taskContent);
        task.appendChild(deleteIcon());
        list.appendChild(task);
    };
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

    //Funciones cuando se declaran se ejecutan IIFE
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

    const deleteIcon = () => {
        /*const content = `<i class="fas fa-trash-alt trashIcon icon"></i>`; //backticks*/
        const i = document.createElement("i");
        i.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");
        i.addEventListener("click", deleteTask);
        return i;
    }

    const deleteTask = (event) => {
        //console.log("Eliminar Tarea");
        const parent = event.target.parentElement;
        //console.log(event.target.parentElement);
        parent.remove();
        console.log(parent);
    }

})();