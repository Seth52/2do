



let work = {};


let taskList = {
task1:{title: "hi", description: "bye", date: "5/1/1", priority: "low"}, 
task2:{title: "nyi", description: "aaaae", date: "6/1/1", priority: "high"}

};





let masterList ={taskList, work};

class List {
    constructor(title, description, date, priority){

        this.title=title;
        this.description=description;
        this.date=date;
        this.priority=priority;
    }
};

function newTask(title,description,date,priority){
    const toDo = new List(title, description, date, priority);
    taskList.(toDo);  // need to get the length of the object? add it under that project with a number ?

};

function displayTask(){
  for(let task of taskList){
    const taskTitle = document.createElement('div');
    taskTitle.textContent = task.title;
    const taskDescription = document.createElement('div');
    taskDescription.textContent = task.description;
    const taskDate = document.createElement('div');
    taskDate.textContent = task.date;
    const taskPriority = document.createElement('div');
    taskPriority.textContent = task.priority;

    const mainHeader = document.getElementById('mainHeader');
    const taskDiv = document.createElement('div');
    taskDiv.id='taskDiv';
    mainHeader.appendChild(taskDiv);
    taskDiv.appendChild(taskTitle);
    taskDiv.appendChild(taskDescription);
    taskDiv.appendChild(taskDate);
    taskDiv.appendChild(taskPriority);

console.log(taskTitle.textContent + ' ' + taskDescription.textContent + ' ' +taskDate.textContent + ' ' + taskPriority.textContent)
  }
 
};displayTask();
// this maps taskList and pulls the title -- then checks if title = item -- removes form taskList if so
function removeToDo(item){
    const index = taskList.map(item =>item.title).indexOf(item);
    
    if (index > -1){
        taskList.splice(index, 1);
    }
};


