class TaskManager {
  constructor() {
    this.tasksToDoSection = document.querySelector('.ToDO');
    this.tasksDoneSection = document.querySelector('.Done');
    this.tasksToDoCounter = document.getElementById('tasksToDoCounter');
    this.tasksDoneCounter = document.getElementById('tasksDoneCounter');
    this.savedTasks = localStorage.getItem('savedTasks')
      ? JSON.parse(localStorage.getItem('savedTasks'))
      : [];
    this.savedCompletedTasks = localStorage.getItem('savedCompletedTasks')
      ? JSON.parse(localStorage.getItem('savedCompletedTasks'))
      : [];
  }

  addTask(taskName) {
    if (taskName.trim() === '') {
      return;
    }

    const newTask = document.createElement('div');
    newTask.classList.add('TasksToDo');

    const taskNameElement = document.createElement('h3');
    taskNameElement.classList.add('infotodoh3');
    taskNameElement.textContent = taskName;

    const checkIcon = document.createElement('img');
    checkIcon.src = 'Check.png';
    checkIcon.alt = 'Check';

    const trashIcon = document.createElement('img');
    trashIcon.src = 'TrashSimple.png';
    trashIcon.alt = 'Trash';

    newTask.appendChild(taskNameElement);
    newTask.appendChild(checkIcon);
    newTask.appendChild(trashIcon);

    this.tasksToDoSection.appendChild(newTask);
    this.tasksToDoCounter.textContent = parseInt(this.tasksToDoCounter.textContent) + 1;

    trashIcon.addEventListener('click', () => {
      newTask.remove();
      this.tasksToDoCounter.textContent = parseInt(this.tasksToDoCounter.textContent) - 1;
      const index = this.savedTasks.indexOf(taskName);
      if (index > -1) {
        this.savedTasks.splice(index, 1);
        localStorage.setItem('savedTasks', JSON.stringify(this.savedTasks));
      }
    });

    checkIcon.addEventListener('click', () => {
      const newTask2 = document.createElement('div');
      newTask2.classList.add('TasksDone');

      const taskNameElement2 = document.createElement('h3');
      taskNameElement2.classList.add('infodoneh3');
      taskNameElement2.textContent = taskName;

      newTask2.appendChild(taskNameElement2);
      this.tasksDoneSection.appendChild(newTask2);
      newTask.remove();

      this.tasksDoneCounter.textContent = parseInt(this.tasksDoneCounter.textContent) + 1;
      this.tasksToDoCounter.textContent = parseInt(this.tasksToDoCounter.textContent) - 1;

      const index = this.savedTasks.indexOf(taskName);
      if (index > -1) {
        this.savedTasks.splice(index, 1);
        localStorage.setItem('savedTasks', JSON.stringify(this.savedTasks));
      }

      this.savedCompletedTasks.push(taskName);
      localStorage.setItem('savedCompletedTasks', JSON.stringify(this.savedCompletedTasks));
    });

    this.savedTasks.push(taskName);
    localStorage.setItem('savedTasks', JSON.stringify(this.savedTasks));
  }

  loadSavedTasks() {
    this.savedTasks.forEach((taskName) => {
      const newTask = document.createElement('div');
      newTask.classList.add('TasksToDo');
  
      const taskNameElement = document.createElement('h3');
      taskNameElement.classList.add('infotodoh3');
      taskNameElement.textContent = taskName;
  
      const checkIcon = document.createElement('img');
      checkIcon.src = 'Check.png';
      checkIcon.alt = 'Check';
  
      const trashIcon = document.createElement('img');
      trashIcon.src = 'TrashSimple.png';
      trashIcon.alt = 'Trash';
  
      newTask.appendChild(taskNameElement);
      newTask.appendChild(checkIcon);
      newTask.appendChild(trashIcon);
  
      this.tasksToDoSection.appendChild(newTask);
      this.tasksToDoCounter.textContent = parseInt(this.tasksToDoCounter.textContent) + 1;
  
      trashIcon.addEventListener('click', () => {
        newTask.remove();
        this.tasksToDoCounter.textContent = parseInt(this.tasksToDoCounter.textContent) - 1;
        const index = this.savedTasks.indexOf(taskName);
        if (index > -1) {
          this.savedTasks.splice(index, 1);
          localStorage.setItem('savedTasks', JSON.stringify(this.savedTasks));
        }
      });
  
      checkIcon.addEventListener('click', () => {
        const newTask2 = document.createElement('div');
        newTask2.classList.add('TasksDone');
  
        const taskNameElement2 = document.createElement('h3');
        taskNameElement2.classList.add('infodoneh3');
        taskNameElement2.textContent = taskName;
  
        newTask2.appendChild(taskNameElement2);
        this.tasksDoneSection.appendChild(newTask2);
        newTask.remove();
  
        this.tasksDoneCounter.textContent = parseInt(this.tasksDoneCounter.textContent) + 1;
        this.tasksToDoCounter.textContent = parseInt(this.tasksToDoCounter.textContent) - 1;
  
        const index = this.savedTasks.indexOf(taskName);
        if (index > -1) {
          this.savedTasks.splice(index, 1);
          localStorage.setItem('savedTasks', JSON.stringify(this.savedTasks));
        }
  
        this.savedCompletedTasks.push(taskName);
        localStorage.setItem('savedCompletedTasks', JSON.stringify(this.savedCompletedTasks));
      });
    });

    this.tasksToDoCounter.textContent = this.savedTasks.length;
    this.tasksDoneCounter.textContent = this.savedCompletedTasks.length;
  }

  loadCompletedTasks() {
    this.savedCompletedTasks.forEach((taskName) => {
      const newTask = document.createElement('div');
      newTask.classList.add('TasksDone');

      const taskNameElement = document.createElement('h3');
      taskNameElement.classList.add('infodoneh3');
      taskNameElement.textContent = taskName;

      newTask.appendChild(taskNameElement);
      this.tasksDoneSection.appendChild(newTask);
    });
  }
}

window.addEventListener('load', () => {
  const taskManager = new TaskManager();
  taskManager.loadSavedTasks();
  taskManager.loadCompletedTasks();

  const input = document.querySelector('.input');
  const addButton = document.getElementById('addButton');
  
  addButton.addEventListener('click', () => {
    const taskName = input.value;
    taskManager.addTask(taskName);
    input.value = '';
  });
});