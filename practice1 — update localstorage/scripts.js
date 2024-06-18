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
    if (tasksToDoSection) {
      tasksToDoSection.appendChild(newTask);
    }
    input.value = '';
  
    var tasksToDoCounter = document.getElementById('tasksToDoCounter');
    tasksToDoCounter.textContent = parseInt(tasksToDoCounter.textContent) + 1;
  
    trashIcon.addEventListener('click', function() {
        newTask.remove();
        tasksToDoCounter.textContent = parseInt(tasksToDoCounter.textContent) - 1;
        
        var savedTasks = localStorage.getItem('savedTasks');
        if (savedTasks) {
          savedTasks = JSON.parse(savedTasks);
        } else {
          savedTasks = [];
        }

        var index = savedTasks.indexOf(taskName);
        if (index > -1) {
          savedTasks.splice(index, 1); 
          localStorage.setItem('savedTasks', JSON.stringify(savedTasks));
        }
      });
      checkIcon.addEventListener('click', function() {
        // Move task to completed section
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

        var savedTasks = localStorage.getItem('savedTasks');
        if (savedTasks) {
          savedTasks = JSON.parse(savedTasks);
        } else {
          savedTasks = [];
        }
        var index = savedTasks.indexOf(taskName);
        if (index > -1) {
          savedTasks.splice(index, 1);
          localStorage.setItem('savedTasks', JSON.stringify(savedTasks));
        }
        var savedCompletedTasks = localStorage.getItem('savedCompletedTasks');
        if (savedCompletedTasks) {
          savedCompletedTasks = JSON.parse(savedCompletedTasks);
        } else {
          savedCompletedTasks = [];
        }
        savedCompletedTasks.push(taskName);
        localStorage.setItem('savedCompletedTasks', JSON.stringify(savedCompletedTasks));
      });
    var savedTasks = localStorage.getItem('savedTasks');
    if (savedTasks) {
      savedTasks = JSON.parse(savedTasks);
    } else {
      savedTasks = [];
    }
    savedTasks.push(taskName);
    localStorage.setItem('savedTasks', JSON.stringify(savedTasks));
  }
  window.addEventListener('load', function() {
    var savedTasks = localStorage.getItem('savedTasks');
    if (savedTasks) {
      savedTasks = JSON.parse(savedTasks);
      savedTasks.forEach(function(taskName) {
        var newTask = document.createElement('div');
        newTask.classList.add('TasksToDo');
  
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
        if (tasksToDoSection) {
          tasksToDoSection.appendChild(newTask);
        }
  
        var tasksToDoCounter = document.getElementById('tasksToDoCounter');
        tasksToDoCounter.textContent = parseInt(tasksToDoCounter.textContent) + 1;
  
        trashIcon.addEventListener('click', function() {
            newTask.remove();
            tasksToDoCounter.textContent = parseInt(tasksToDoCounter.textContent) - 1;
            
            var savedTasks = localStorage.getItem('savedTasks');
            if (savedTasks) {
              savedTasks = JSON.parse(savedTasks);
            } else {
              savedTasks = [];
            }
    
            var index = savedTasks.indexOf(taskName);
            if (index > -1) {
              savedTasks.splice(index, 1); 
              localStorage.setItem('savedTasks', JSON.stringify(savedTasks));
            }
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

            var savedTasks = localStorage.getItem('savedTasks');
            if (savedTasks) {
              savedTasks = JSON.parse(savedTasks);
            } else {
              savedTasks = [];
            }
        
            var index = savedTasks.indexOf(taskName);
            if (index > -1) {
              savedTasks.splice(index, 1);
              localStorage.setItem('savedTasks', JSON.stringify(savedTasks));
            }

            var savedCompletedTasks = localStorage.getItem('savedCompletedTasks');
            if (savedCompletedTasks) {
              savedCompletedTasks = JSON.parse(savedCompletedTasks);
            } else {
              savedCompletedTasks = [];
            }
            savedCompletedTasks.push(taskName);
            localStorage.setItem('savedCompletedTasks', JSON.stringify(savedCompletedTasks));
          });
      });
    }

    var savedCompletedTasks = localStorage.getItem('savedCompletedTasks');
    if (savedCompletedTasks) {
      savedCompletedTasks = JSON.parse(savedCompletedTasks);
      savedCompletedTasks.forEach(function(taskName) {
        var newTask = document.createElement('div');
        newTask.classList.add('TasksDone');
  
        var taskNameElement = document.createElement('h3');
        taskNameElement.classList.add('infodoneh3');
        taskNameElement.textContent = taskName;
  
        newTask.appendChild(taskNameElement);
        var tasksDoneSection = document.querySelector('.Done');
        tasksDoneSection.appendChild(newTask);
  
        var tasksDoneCounter = document.getElementById('tasksDoneCounter');
        tasksDoneCounter.textContent = parseInt(tasksDoneCounter.textContent) + 1;
      });
    }
  });
  