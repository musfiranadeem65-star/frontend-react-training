function calculate(operator){
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;
    if(isNaN(num1) || isNaN(num2)){
        alert("Please enter valid numbers.");
        return;
    }
    if(operator === "+"){
        result = num1 + num2;
    }
    else if(operator === "-"){
        result = num1 - num2;
    }
    else if(operator === "*"){
        result = num1 * num2;
    }
    else if(operator === "/"){
        if(num2 === 0){
            alert("Cannot divide by 0.");
            return;
        }
        else{
            result = num1/num2;
        }
    }
    document.getElementById("result").innerText = result;
}
//task management code

//global scope array to store tasks
const tasks=[];
//reusable validation function for task title
function validateTaskTitle(title){
    //condition to check if title is empty or less than 3 characters
    if(title.trim() === ""){
        alert("Task title cannot be empty.");
        return false;
    }
    if(title.trim().length <3){
        alert("Task title must be at least 3 characters long.");
        return false;
    }
    return true;
}
//helper function to clear the form after adding a task
function clearForm(){
    document.getElementById("taskName").value = "";
    document.getElementById("description").value = "";
    document.getElementById("category").value = "Work";
    document.getElementById("priority").value = "Low";
    document.getElementById("dueDate").value = "";
}
//add task function to add a new task
function addTask() {

    const taskName = document.getElementById("taskName").value;
    const description = document.getElementById("description").value;
    const category = document.getElementById("category").value;
    const priority = document.getElementById("priority").value;
    const dueDate = document.getElementById("dueDate").value;

//reusable logic to validate task title before adding the task
    if (!validateTaskTitle(taskName)) {
        return;
    }
// condition to check if due date is selected
    if (dueDate === "") {
        alert("Please select Due Date.");
        return;
    }
//create taskobject
    const task = {
        taskName,
        description,
        category,
        priority,
        dueDate,
        completed: false
    };
//add task into array
    tasks.push(task);
//call display function
    displayTasks();
//helper function call
    clearForm();
}
//display function in pending section
function displayTasks() {

    const pendingList = document.getElementById("pendingList");
//clear the existing list before displaying
    pendingList.innerHTML = "";
//loop display every task in the array
    for (const task of tasks) {

        const li = document.createElement("li");

        li.innerHTML = `
            <strong>${task.taskName}</strong><br>
            ${task.description}<br>
            ${task.category} | ${task.priority} | ${task.dueDate}
        `;

        pendingList.appendChild(li);
    }

}
