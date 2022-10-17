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
};

export default deleteIcon;