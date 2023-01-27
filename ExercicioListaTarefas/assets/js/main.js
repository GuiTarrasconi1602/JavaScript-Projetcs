const inputTask = document.querySelector('.input-task')
const btnNewTask = document.querySelector('.btn-new-task')
const ULTasks = document.querySelector('.ul-tasks')


inputTask.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        if (!inputTask.value) return
        createTask(inputTask.value)
    }
});

btnNewTask.addEventListener('click', function(e) {
    if (!inputTask.value) return
    createTask(inputTask.value)
});

document.addEventListener('click', function(e) { 
    const removeBtn = e.target;
    if(removeBtn.classList.contains('remove-task')) 
        removeBtn.parentElement.remove();
    saveTaskList();
});

function createTask(TaskValue) {
const liTag = createTag('li');
liTag.innerText = TaskValue
ULTasks.appendChild(liTag);

addRemoveBTN(liTag);
clearInput();
saveTaskList();
}

function createTag(newTag) {
    const Tag = document.createElement(newTag)
    return Tag
}

function clearInput() {
    inputTask.value = ''
    inputTask.focus(); // Function to mantain the cursor in the add new task input field
}

function addRemoveBTN(li) {
    li.innerText += ' '
    const removeButton = createTag('button')
    removeButton.innerText = 'Remove'
    removeButton.setAttribute('class', 'remove-task')
    removeButton.setAttribute('title', 'Click to remove this task!')
    li.appendChild(removeButton)
}

function saveTaskList() {
    const liTasks = ULTasks.querySelectorAll('li')
    const TasksList = [];

    for (let task of liTasks){
        let textTasks = task.innerText;
        textTasks = textTasks.replace('Remove', '').trim();

        TasksList.push(textTasks);
    }
    const tasksJSON = JSON.stringify(TasksList);
    localStorage.setItem('tasks', tasksJSON);

}

function loadTaskList(){
    const tasks = localStorage.getItem('tasks');
    const taskList = JSON.parse(tasks);

    for(let task of taskList) {
        createTask(task);
    }
}
loadTaskList();