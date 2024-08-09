let taskForm = document.getElementById("task-form");
let taskDisplay = document.getElementById('task-display');
let taskCount = 0;
let editingTask = null;

window.addEventListener('load', loadTasks);

taskForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Getting values from form
    const title = document.getElementById("task-title").value;
    const description = document.getElementById("task-description").value;
    const dueDate = document.getElementById("task-date").value;

    if (editingTask) {
        updateTask(editingTask, title, description, dueDate);
    } else {
        createTask(title, description, dueDate);
    }

    taskForm.reset();
    editingTask = null;
    taskForm.querySelector('button').textContent = 'Add Task';
});

// Creating a new task 
function createTask(title, description, dueDate) {
    taskCount++;
    const taskId = Date.now(); 

    const taskItem = document.createElement('li');
    taskItem.dataset.id = taskId;

    const taskTitle = document.createElement('div');
    taskTitle.classList.add('task-title');
    taskTitle.textContent = `Task ${taskCount}`;

    const taskContent = createTaskContent(title, description, dueDate);

    const taskIcons = createTaskIcons(taskItem, taskId);

    taskItem.append(taskContent, taskIcons);
    taskDisplay.append(taskTitle, taskItem);

    saveTaskToLocalStorage(taskId, title, description, dueDate);
}

// Function to update an existing task
function updateTask(taskItem, title, description, dueDate) {
    const taskContent = taskItem.querySelector('.task-content');
    taskContent.innerHTML = formatTaskContent(title, description, dueDate);

    const taskId = taskItem.dataset.id;
    updateTaskInLocalStorage(taskId, title, description, dueDate);
}

// Function to create task content
function createTaskContent(title, description, dueDate) {
    const taskContent = document.createElement('div');
    taskContent.classList.add('task-content');
    taskContent.innerHTML = formatTaskContent(title, description, dueDate);
    return taskContent;
}

function formatTaskContent(title, description, dueDate) {
    return `<strong>Title:</strong> ${title}<br> <strong>Description:</strong> ${description}<br> <strong>Due Date:</strong> ${dueDate}`;
}

// Function to create task icons 
function createTaskIcons(taskItem, taskId) {
    const taskIcons = document.createElement('div');
    taskIcons.classList.add('task-icons');

    // Edit Task Button
    const editBtn = document.createElement('i');
    editBtn.innerHTML = `<i class="ri-edit-box-fill"></i>`;
    editBtn.addEventListener('click', function() {
        startEditingTask(taskItem);
    });

    // Delete Task Button
    const deleteBtn = document.createElement('i');
    deleteBtn.innerHTML = `<i class="ri-delete-bin-2-fill"></i>`;
    deleteBtn.addEventListener('click', function() {
        deleteTask(taskItem, taskId);
    });

    // Done Task Button
    const doneBtn = document.createElement('i');
    doneBtn.innerHTML = `<i class="ri-check-fill"></i>`;
    doneBtn.addEventListener('click', function() {
        markTaskAsDone(taskItem);
    });

    taskIcons.append(editBtn, deleteBtn, doneBtn);
    return taskIcons;
}

// Function to start editing a task
function startEditingTask(taskItem) {
    const taskContent = taskItem.querySelector('.task-content').innerText;
    const [title, description, dueDate] = taskContent.split('\n').map(line => line.split(': ')[1]);

    document.getElementById("task-title").value = title;
    document.getElementById("task-description").value = description;
    document.getElementById("task-date").value = dueDate;

    taskForm.querySelector('button').textContent = 'Update Task';
    editingTask = taskItem;
}

// Function to delete a task
function deleteTask(taskItem, taskId) {
    if (confirm("Do you want to delete this task?")) {
        taskItem.previousElementSibling.remove(); 
        taskItem.remove();
        removeTaskFromLocalStorage(taskId);

        taskCount--;
        updateTaskTitles();
    }
}

// Function to mark a task as done 
function markTaskAsDone(taskItem) {
    taskItem.style.backgroundColor = '#5ced73';
    taskItem.querySelector('.task-icons i.ri-check-fill').remove();
}

// Function to update task titles after a task is deleted
function updateTaskTitles() {
    document.querySelectorAll('.task-title').forEach((title, index) => {
        title.textContent = `Task ${index + 1}`;
    });
}

// Local Storage Functions
function saveTaskToLocalStorage(taskId, title, description, dueDate) {
    let tasks = getTasksFromLocalStorage();
    tasks.push({ id: taskId, title, description, dueDate });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    let tasks = getTasksFromLocalStorage();
    tasks.forEach(task => {
        taskCount++;
        const taskItem = document.createElement('li');
        taskItem.dataset.id = task.id;

        const taskTitle = document.createElement('div');
        taskTitle.classList.add('task-title');
        taskTitle.textContent = `Task ${taskCount}`;

        const taskContent = createTaskContent(task.title, task.description, task.dueDate);
        const taskIcons = createTaskIcons(taskItem, task.id);

        taskItem.append(taskContent, taskIcons);
        taskDisplay.append(taskTitle, taskItem);
    });
}

function updateTaskInLocalStorage(taskId, title, description, dueDate) {
    let tasks = getTasksFromLocalStorage();
    tasks = tasks.map(task => task.id == taskId ? { id: taskId, title, description, dueDate } : task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTaskFromLocalStorage(taskId) {
    let tasks = getTasksFromLocalStorage();
    tasks = tasks.filter(task => task.id != taskId);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function getTasksFromLocalStorage() {
    return JSON.parse(localStorage.getItem('tasks')) || [];
}
