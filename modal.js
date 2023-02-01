const modal = document.getElementById('simpleModal');
const modalBtn = document.getElementById('newTask');
const closeBtn =document.getElementById('close');

//listen for click
modalBtn.addEventListener('click', openModal);
function openModal(){
 
  modal.style.display = 'block';
  createForm();
  

}

closeBtn.addEventListener('click', closeModal);
function closeModal(){
  modal.style.display = 'none';
  const resetContent = document.getElementById('taskForm');
  resetContent.remove();
}

//window.addEventListener('click', clickOutside);

/*function clickOutside(e){
  if(modal.style.display='block'){
  if(e.target == modal){
  modal.style.display  = 'none';
  }
  const resetContent = document.getElementById('taskForm');
  resetContent.remove();
}
  // cant get click out side to work with reset form so have to click x for now
 
}*/










function createForm(){
    const form = document.createElement('form');
    form.id='taskForm';
  
   
    //1st form item - title name
    const listOne=document.createElement('ul');
    const labelTitle=document.createElement('label');
    labelTitle.setAttribute('for','title');
    let labelText =document.createTextNode('Title: ');
    labelTitle.appendChild(labelText);
    const inputTitle=document.createElement('input');
    inputTitle.id='title';
    inputTitle.setAttribute('type','text');

    const modal = document.getElementById('test');
    modal.appendChild(form);


    form.appendChild(listOne);
    listOne.appendChild(labelTitle); 
    listOne.appendChild(inputTitle);
    //2nd form item - description
    const listTwo=document.createElement('ul');
    const labelTitleTwo=document.createElement('label');
    labelTitleTwo.setAttribute('for','description');
    const titleTwoText=document.createTextNode('Description: ');
    const descriptionBox = document.createElement('textarea');
    descriptionBox.setAttribute('rows', '3');
    descriptionBox.setAttribute('columns','50');
    descriptionBox.setAttribute('form','inputBox')
    descriptionBox.id='description';
    form.appendChild(listTwo);
    listTwo.appendChild(labelTitleTwo);
    labelTitleTwo.appendChild(titleTwoText);
    labelTitleTwo.appendChild(descriptionBox);
    
    // 3rd item -- date
    const listThree = document.createElement('ul');
    const labelTitleThree = document.createElement('label');
    labelTitleThree.setAttribute('for','date');
    const titleThreeText = document.createTextNode('Due Date: ');
    const dateTask = document.createElement('input');
    dateTask.setAttribute('type' , 'date');
    dateTask.id='date';
    form.appendChild(listThree);
    listThree.appendChild(labelTitleThree);
    labelTitleThree.appendChild(titleThreeText);
    listThree.appendChild(dateTask);
    dateTask.valueAsDate = new Date();
    
    //4th item - priority
    const listFour = document.createElement('ul');
    const labelTitleFour = document.createElement('label');
    labelTitleFour.setAttribute('for','priority');
    const titleFourText = document.createTextNode('Priority: ');
    const priorityTask = document.createElement('select');
    priorityTask.id='priority';
    const optionHigh = document.createElement('option');
    optionHigh.text = 'High';
    const optionMed = document.createElement('option');
    optionMed.text = 'Medium';
    const optionLow = document.createElement('option');
    optionLow.text = 'Low';
    
    form.appendChild(listFour);
    listFour.appendChild(labelTitleFour);
    labelTitleFour.appendChild(titleFourText);
    listFour.appendChild(priorityTask);
    priorityTask.add(optionHigh);
      priorityTask.add(optionMed);
      priorityTask.add(optionLow);

      // 5th item project type ***
    const listFive = document.createElement('ul');
    const labelTitleFive = document.createElement('label');
    labelTitleFive.setAttribute('for','project');
    const titleFiveText = document.createTextNode('Project: ')
    const projectTask = document.createElement('select');
    projectTask.id='project';
    // create options from masterlist
   
   /*for( let project in masterList){
    const projectOption = document.createElement('option');
     projectOption.text = project;
      projectOption.id = project;
      projectTask.add(projectOption);
   }*/  // -- this masster list look up works with object
   
  masterList.forEach(project => {
  
     const projectOption = document.createElement('option');
     projectOption.text = project.title;
     projectOption.id = project;
      projectTask.add(projectOption);
      
    } );  //this master list look up works with array




    form.appendChild(listFive);
    listFive.appendChild(labelTitleFive);
    labelTitleFive.appendChild(titleFiveText);
    listFive.appendChild(projectTask);
    

    
    //submit button
    const breakSpace = document.createElement('br');
    form.appendChild(breakSpace);
    const buttonItem = document.createElement('ul');
    buttonItem.id = 'buttonCSS'
    form.appendChild(buttonItem);
    const buttonTask = document.createElement('input');
    buttonTask.id = 'taskButton';
    buttonTask.setAttribute('value', 'Submit Task');
    buttonTask.setAttribute('type','click');
    buttonTask.style.width="100px";
    buttonTask.style.height='50px';
    buttonTask.textContent = 'Submit Task';
    buttonItem.appendChild(buttonTask);
    
    //logic for button press to push info to array and close after clicking submit
   const buttonPress= document.getElementById('taskButton');
    buttonPress.addEventListener('click',function(e){
      const a = document.getElementById('title').value;
      const b = document.getElementById('description').value;
      const c = document.getElementById('date').value;
      const d = document.getElementById('priority').value;
      const f = document.getElementById('project').value;
    
      newTask(a,b,c,d,f);
      /*const ripple = new List(a, b, c, d);
      console.log('hi');
       taskList.push(ripple);*/
      closeModal();
      removeThis();
      //taskDelStart();
      storageUpdate()
      displayTask();    
   
  
    });
};


function removeThis(){
    let element = document.getElementById("mainHeader");
   
 //  if(element.children.length >0){
      for(i = (element.childNodes.length-1); i >0; i--){
       
        element.childNodes[i].remove();
        
      }
    //}
};

//add new task to an array 
function newTask(a,b,c,d,f){
  for(let i=0; i < (masterList.length); i++){
    console.log(f);
    console.log(masterList[i]);
  if(masterList[i].title == f){
    let toDo= new List(a,b,c,d);
    masterList[i].tasks.push(toDo);
   
  }}
}

