let todoele=document.getElementById("taskinfo");
let tasklist=document.getElementById("tasklist");

document.getElementById("add").onclick=function()
{
  if(todoele.value.length==0){
    alert("Enter any list")
  }
  else{
    tasklist.innerHTML=tasklist.innerHTML+`
    <div class="task">
    <span id="work">${todoele.value}</span>
    <button class="del"><i class="fa-solid fa-trash"></i></button>
     </div>
    
    `

    let alltask=document.querySelectorAll(".del");

    for(i=0;i<alltask.length;i++)
    {
      alltask[i].onclick=function()
      {
        this.parentNode.remove();
      }
    }
    todoele.value=""
  }
}