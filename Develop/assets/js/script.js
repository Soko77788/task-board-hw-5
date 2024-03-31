const $taskForm = $('#taskForm');
const $taskTitleInput = $('#taskTitle');
const $taskDueDateInput = $('#taskDueDate');
const $taskDescriptionInput = $('#taskDescription');
const $taskModal = $('#formModal')
// Retrieve tasks and nextId from localStorage
// let taskList = JSON.parse(localStorage.getItem("tasks"));
// let nextId = JSON.parse(localStorage.getItem("nextId"));



// Todo: create a function to generate a unique task id
function generateTaskId() {

}

// Todo: create a function to create a task card
function createTaskCard(taskTitle, taskDueDate, taskDescription) {
    
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task
function handleAddTask(event){

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}


function loadProjectsFromLocalStorage() {
    const savedProjects = JSON.parse(localStorage.getItem('tasks')) || []
    return savedProjects
}

function saveProjectsToLocalStorage(projectsData) {
    localStorage.setItem('tasks', JSON.stringify(projectsData))
}

function handleTaskFormSubmit(event) {
event.preventDefault();
$taskModal.modal('hide');

// get form field values
const taskTitle = $taskTitleInput.val();
const taskDueDate = $taskDueDateInput.val();
const taskDescription = $taskDescriptionInput.val();

// console.log(taskTitle, taskDueDate, taskDescription)

// get current saved projects
const projects = loadProjectsFromLocalStorage()

// new project data
const newProject = {
    title: taskTitle,
    dueDate: taskDueDate,
    description: taskDescription
}

// add new project to the list of savedProject
projects.push(newProject)

// save cards to localStorage
saveProjectsToLocalStorage(projects)

//create a card
// re-render cards in their lanes


// reset form
$taskTitleInput.val('')
$taskDueDateInput.val('')
$taskDescriptionInput.val('')


}
// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
$taskForm.on('submit', handleTaskFormSubmit)
});



