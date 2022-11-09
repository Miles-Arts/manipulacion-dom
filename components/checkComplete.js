const checkComplete = (id) => {
    const i = document.createElement("i")
    i.classList.add("far", "fa-check-square", "icon");
    i.addEventListener("click", (event) => completeTask(event , id));
    return i;
};

//Funciones cuando se declaran se ejecutan IIFE
const completeTask = (event, id) => {
    //console.log(event.target);
    const element = event.target;
    //element.classList.add("fas");
    //element.classList.add("completeIcon");
    //element.classList.remove("far");
    element.classList.toggle("fas");
    element.classList.toggle("completeIcon");
    element.classList.toggle("far");

    const tasks = JSON.parse(localStorage.getItem("tasks"));
    const index = tasks.findIndex( item  => item.id == id );

 };

export default checkComplete;