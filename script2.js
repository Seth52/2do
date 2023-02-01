
let inbox = {title:'Inbox',tasks:[]};
//let p2 ={title:'Work',tasks:[]}

let masterList =[inbox];

class List {
    constructor(title, description, date, priority){

        this.title=title;
        this.description=description;
        this.date=date;
        this.priority=priority;
    }
};



function projectAdd(){
    
    
    
    openModal2();
    
    }
    
    // set default task list
    
    
    function projectModal(){
    // on click add object with generic name but give it a name /key
    // loop through this array of objects and set names on side / and modal
    //allow adding tasks to this object in the form of another object // display object tasks based on 
    // whcih project is clicked
    
    
        
    
    }





//modal

function projects(){
let project = document.getElementById('addProject');
createModal();

project.addEventListener('click', projectAdd);
}
projects();


function createModal(){
// what to append to
const main = document.getElementById('main');


    const modalShell = document.createElement('div');
    modalShell.className = 'modal2';
    modalShell.id='modal2';
    const modalContent = document.createElement('div');
    modalContent.className = 'modalContent';
    const modalClose = document.createElement('span');
    modalClose.className ='closeBtn';
    modalClose.id = 'close';
    modalClose.innerHTML = '&times';
    
    const modalForm = document.createElement('form');
    const inputLabel = document.createTextNode('Project: ');
    const input = document.createElement('input');
    input.setAttribute('type','text');
    input.id='projectNew';
   
    //const breakSpace = document.createElement('br');
    
    const modalSubmit = document.createElement('submit');
    modalSubmit.id = 'buttonCSS'
    const modalTask = document.createElement('input');
    modalTask.id = 'taskButton';
    modalTask.setAttribute('value', 'Add Project');
    modalTask.setAttribute('type','click');
    modalTask.style.width="100px";
    modalTask.style.height='50px';
    modalTask.style.marginTop='10px';
    modalTask.textContent = 'Add Project';
  


//add to site 
main.appendChild(modalShell);
modalShell.appendChild(modalContent);
modalContent.appendChild(modalClose);
modalContent.appendChild(modalForm);
modalForm.appendChild(inputLabel);
modalForm.appendChild(input);
//modalForm.appendChild(breakSpace);
modalForm.appendChild(modalSubmit);
modalSubmit.appendChild(modalTask);




//button press for array push
taskButton.addEventListener('click', function(e){
  const projectNew = document.getElementById('projectNew').value;
  //console.log(projectNew);
  storageUpdate()
  projectList();
  closeModal2();
})



// close modal
modalClose.addEventListener('click', closeModal2);
closeModal2();

}


function openModal2(){
  modal2.style.display = 'block';
}

function closeModal2(){
  modal2.style.display = 'none';
}

window.addEventListener('click', clickOutside);


function clickOutside(e){
    if(e.target == modal2){
    modal2.style.display  = 'none';
    }
  }


  function displayTask(){
   
    let mainHeader = document.getElementById('mainHeader');
   // console.log(mainHeader.textContent);
    for(let task of masterList){
      //console.log(task.title);
      if(task.title == mainHeader.firstChild.textContent){
      for(let tasks of task.tasks){

        const taskTitle = document.createElement('div');
        taskTitle.id ='taskTitle';
        const taskDescription = document.createElement('div');
        taskDescription.id = 'taskDescription';
        const taskDate = document.createElement('div');
        const taskPriority = document.createElement('div');
        const taskDiv = document.createElement('div');
        const taskEdit = document.createElement('div');
        const taskDeleteButton = document.createElement('IMG');
       
      //console.log(task.tasks);
           taskTitle.textContent = tasks.title;
           taskDescription.textContent = tasks.description;
           taskDate.textContent = tasks.date;
           taskPriority.textContent = tasks.priority;
           taskEdit.textContent ='Edit';
          taskEdit.id='taskEdit';
           //edit
         
           taskEdit.addEventListener('click',(e)=>{
          if(taskTitle.isContentEditable == false){
    
            taskTitle.contentEditable = true;
            taskDescription.contentEditable = true;}
            else {
              for(let j =0; j < masterList.length; j++){
                if(masterList[j].title === mainHeader.firstChild.textContent)
             
              for(let i = 0; i<mainHeader.childElementCount; i++){
                
                masterList[j].tasks[i].title = mainHeader.children[i].children[0].textContent;
                masterList[j].tasks[i].description= mainHeader.children[i].children[1].textContent;
              }}
              
              taskTitle.contentEditable = false; taskDescription.contentEditable = false;}
        
           
                   
              })

           //trash /del 
        taskDeleteButton.setAttribute('src','trashcan.png')
        taskDeleteButton.setAttribute('width','25px');
        taskDeleteButton.setAttribute('height','25px');
        taskDeleteButton.id='trash';
          taskDiv.id='taskDiv';
          taskDeleteButton.addEventListener('click', (e) => {
            if (e.target.id === 'trash') {
      
              let taskInfo = e.target.parentNode.childNodes[0].textContent;
              console.log(e.target);
              taskDelete(taskInfo);}});

      mainHeader.appendChild(taskDiv);
      taskDiv.appendChild(taskTitle);
      taskDiv.appendChild(taskDescription);
      taskDiv.appendChild(taskDate);
      taskDiv.appendChild(taskPriority);
      taskDiv.appendChild(taskEdit);
      taskDiv.appendChild(taskDeleteButton);
      
    }
   

    }
  }

  };



  // function to add a project into master list with 
  // title as text input
  function projectList(){
    let projectAddition ={title:projectNew.value,tasks:[]};
    masterList.push(projectAddition);
    projectSideBar();
  }

  //add projects to side bar
  function projectSideBar(){
    let inbox = document.getElementById('projectList');
    
    //clears the project list so they can be added from array
    while (inbox.firstChild) {
      inbox.removeChild(inbox.firstChild);
    }
    //goes through array and lists them on sidebar
    for(let i  = 0; i<masterList.length;i++){
      const projectHead = document.createElement('div');
      projectHead.id = 'projectDiv'
      projectHead.textContent=masterList[i].title;
      inbox.appendChild(projectHead);
//add del button to project / cant delete first one
      if(i > 0){
        const projectDeleteButton = document.createElement('IMG');
        projectDeleteButton.setAttribute('src','tca.png')
        projectDeleteButton.setAttribute('width','25px');
        projectDeleteButton.setAttribute('height','25px');
        projectDeleteButton.id='projectRemove';
       projectHead.append(projectDeleteButton);
        projectDeleteButton.addEventListener('click', (e) =>{
          let choice = confirm('Are you sure you want to Delete this Project?');
          if (choice) {
            projectDelete(e);
          }

        } )

      }
    }

  };
  


  // script for side bar event listener + mainheader text update
  function sideBarClick(){
    let projectList = document.getElementById('projectList');
    let mainHeader = document.getElementById('mainHeader');
    projectList.addEventListener('click', function(e){
      if(e.target.id != 'projectRemove' ){
      let projectText = e.target.textContent;
      mainHeader.textContent = projectText;
      storageUpdate()
      displayTask();
      }

    });
  

  };
  sideBarClick();



/*function taskDelStart(){
  let mainHeader = document.getElementById('mainHeader');
  mainHeader.addEventListener('click', (e) => {
      if (e.target.id === 'trash') {

        let taskInfo = e.target.parentNode.childNodes[0].textContent;
        console.log(e.target);
        taskDelete(taskInfo);


      }
    })

}*/


  //function to delete a task  - task info needs to be supplied by event listener
  function taskDelete(taskInfo){
 
    let mainHeader=document.getElementById('mainHeader');
    //project group is used to match the correct group when deleting the tasks
    let projectGroup = mainHeader.firstChild.textContent;
 //matches the element from it's position in master list with the info sent through function to test if correct task
   let taskTitleMatch = (element) => element.title === taskInfo;
      for(let i = 0; i<masterList.length; i++){
      if(projectGroup === masterList[i].title){
        let taskIndex = masterList[i].tasks.findIndex(taskTitleMatch);
      if(taskIndex >= 0){
        masterList[i].tasks.splice(taskIndex,1);
        //remove current info on dom and display the next info
        removeThis();
        storageUpdate()
        displayTask();
      }
       
      }
    }
    

  }
  /*titleMatch = (element) => element.title == 'test'
function titleMatch(element)
masterList[0].tasks.findIndex(titleMatch)
0
masterList[0].tasks.splice(0,1) */
function projectDelete(e){
  if(e.target.id === 'projectRemove'){
    let mainHeader=document.getElementById('mainHeader');
  //  let projectTitleMatch = (element) => element.title === e.target.parentNode.textContent;
    for(let i = 0; i<masterList.length; i++){
      if(masterList[i].title === e.target.parentNode.textContent){
        //let projectIndex = masterList[i].title.findIndex(projectTitleMatch);
    //    if(projectIndex >=0){
      if(mainHeader.firstChild.textContent == masterList[i].title){
        mainHeader.textContent = masterList[0].title;
      }
          masterList.splice(i, 1);
         
          storageUpdate()
          projectSideBar();
        
      //  }
      }
    }

    /*
  let taskTitleMatch = (element) => element.title === e.target.parentNode.textContent;
  for(let i = 0; i<masterList.length; i++){
  if(projectGroup === masterList[i].title){
    let taskIndex = masterList[i].tasks.findIndex(taskTitleMatch);
  if(taskIndex >= 0){
    masterList[i].tasks.splice(taskIndex,1);

}
  }}*/ 
}}


// local storage
function siteStorate(){
if(!localStorage.getItem(masterList)){
  masterList = JSON.parse(localStorage.getItem('masterList'));
  displayTask();
  projectSideBar();
}
else{
  setSite();
}};


  function storageUpdate(){
    localStorage.setItem('masterList',JSON.stringify(masterList));
  }