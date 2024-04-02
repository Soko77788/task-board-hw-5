const $swimLanesContainer = $('.swim-lanes')
const $taskForm = $('#taskForm');
const $taskTitleInput = $('#taskTitle');
const $taskDueDateInput = $('#taskDueDate');
const $taskDescriptionInput = $('#taskDescription');
const $taskModal = $('#formModal')
console.log($swimLanesContainer, $taskForm, $taskTitleInput, $taskDueDateInput, $taskDescriptionInput, $taskModal)
//list selections
const $todoList = $('#todo-cards');
const $inProgressList = $('#in-progress-cards');
const $doneList = $('#done-cards');
console.log($todoList, $inProgressList, $doneList)

// Retrieve tasks and nextId from localStorage
// let taskList = JSON.parse(localStorage.getItem("tasks"));
// let nextId = JSON.parse(localStorage.getItem("nextId"));

function loadProjectsFromLocalStorage() {
    const savedProjects = JSON.parse(localStorage.getItem('tasks')) || []
    return savedProjects
}

function saveProjectsToLocalStorage(projectsData) {
    localStorage.setItem('tasks', JSON.stringify(projectsData))
}

// Todo: create a function to generate a unique task id
function generateTaskId() {

}

// Todo: create a function to create a task card
function createTaskCard(taskTitle, taskDueDate, taskDescription) {
    
}

//create card
function createCardEl(projectData) {
    const card = $(`
    <div class="card draggable" data-id='${projectData.id}' data-status='${projectData.status}' style="width: 18rem;">
    <div class="card-body"> 
    <h5 class="card-title">${projectData.title}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${projectData.dueDate}</h6>
    <p class="card-text">${projectData.description}</p>
    <button class="btn btn-danger delete-card">Delete</button>
   
  </div>
</div>
    `)
    return card
}


// Todo: create a function to render the task list and make cards draggable
function renderTaskList(event, ui) {
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

    $('.draggable').draggable({
        stack: '.swim-lanes'
    })
}


// Todo: create a function to handle adding a new task
function handleAddTask(event){

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



// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {
    const targetListId = event.target.id.replace('-cards', '')
    const card = ui.draggable[0]
    const projectId = $(card).data('id')

    const projects = loadProjectsFromLocalStorage()

    for (const projectData of projects) {
        // find object in saved Project with same id
        if (projectData.id === projectId) {
            // update it's status to the target swim-lanes id
            projectData.status = targetListId
        }
    }

    //re-save updated projectData List
    saveProjectsToLocalStorage(projects)

    //re-render the cards
    renderCardsToLists()
}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

function deleteCard(event) {
    const cardId = $(event.target).closest('.card').data('id')
console.log(cardId)
    const projects = loadProjectsFromLocalStorage()

    const projectsToKeep = []

    for (const projectData of projects) {
if (cardId !== projectData.id) {
projectsToKeep.push(projectData)
    }
}

saveProjectsToLocalStorage(projectsToKeep)

renderCardsToLists()
}




 







// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker

//init
$(document).ready(function () {
$taskForm.on('submit', handleTaskFormSubmit)

renderCardsToLists()

$('.swim-lane').droppable({
    drop: handleDrop
})

$('.swim-lanes').on('click', '.delete-card', deleteCard) 
});



