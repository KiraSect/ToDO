function addTask() {
    var input = document.querySelector('.input');
    var taskName = input.value;

    var newTask = document.createElement('div');
    newTask.classList.add('TasksToDo');

    if (taskName.trim() === '') {
        return; 
    }
    var taskNameElement = document.createElement('h3');
    taskNameElement.classList.add('infotodoh3');
    taskNameElement.textContent = taskName;

    var checkIcon = document.createElement('img');
    checkIcon.src = 'Check.png';
    checkIcon.alt = 'Check';

    var trashIcon = document.createElement('img');
    trashIcon.src = 'TrashSimple.png';
    trashIcon.alt = 'Trash';

    newTask.appendChild(taskNameElement);
    newTask.appendChild(checkIcon);
    newTask.appendChild(trashIcon);

    var tasksToDoSection = document.querySelector('.ToDO');
    tasksToDoSection.appendChild(newTask);
    input.value = '';

    var tasksToDoCounter = document.getElementById('tasksToDoCounter');
    tasksToDoCounter.textContent = parseInt(tasksToDoCounter.textContent) + 1;

    trashIcon.addEventListener('click', function() {
        newTask.remove();
        tasksToDoCounter.textContent = parseInt(tasksToDoCounter.textContent) - 1;
    });

    checkIcon.addEventListener('click', function() {
        var newTask2 = document.createElement('div');
        newTask2.classList.add('TasksDone');

        var taskNameElement2 = document.createElement('h3');
        taskNameElement2.classList.add('infodoneh3');
        taskNameElement2.textContent = taskName;

        newTask2.appendChild(taskNameElement2);
        var tasksDoneSection = document.querySelector('.Done');
        tasksDoneSection.appendChild(newTask2);
        newTask.remove();

        var tasksDoneCounter = document.getElementById('tasksDoneCounter');
        tasksDoneCounter.textContent = parseInt(tasksDoneCounter.textContent) + 1;
        tasksToDoCounter.textContent = parseInt(tasksToDoCounter.textContent) - 1;
    });
}
