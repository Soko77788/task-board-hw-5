const $taskForm = $('#taskForm');
const $taskTitleInput = $('#taskTitle');
const $taskDueDateInput = $('#taskDueDate');
const $taskDescriptionInput = $('#taskDescription');
const $taskModal = $('#formModal')
//list selections
const $todoList = $('#todo-cards');
const $inProgressList = $('#in-progress-cards');
const $doneList = $('#done-cards');
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
 
//create card
function createCardEl(projectData) {
    const card = $(`
    <div class="card" style="width: 18rem;">
  <div class="card-body" data-id="${projectData.id}' data-status="${projectData.status}">
    <h5 class="card-title">${projectData.title}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${projectData.dueDate}</h6>
    <p class="card-text">${projectData.description}</p>
    <button class="btn btn-danger">Delete</button>
   
  </div>
</div>
    `)
    return card
}

function renderCardsToLists() {
    const savedProjects = loadProjectsFromLocalStorage()

    $todoList.empty()
    $inProgressList.empty()
    $doneList.empty()

    for (const projectData of savedProjects) {
        const cardEl = createCardEl(projectData)

        if (projectData.status === 'todo') {
            $todoList.append(cardEl)
        } else if (projectData.status === 'in-progress') {
            $inProgressList.append(cardEl)
        } else {
            $doneList.append(cardEl)
        }
    }
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
    id: Math.random(),
    title: taskTitle,
    dueDate: taskDueDate,
    description: taskDescription,
    status: 'todo'
}

// add new project to the list of savedProject
projects.push(newProject)

// save cards to localStorage
saveProjectsToLocalStorage(projects)

//create a card
// re-render cards in their lanes

renderCardsToLists()
// reset form
$taskTitleInput.val('')
$taskDueDateInput.val('')
$taskDescriptionInput.val('')


}
// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
$taskForm.on('submit', handleTaskFormSubmit)

renderCardsToLists()
});



