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

export default checkComplete;