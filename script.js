document.querySelector("#add").onclick=function(){
    if(document.querySelector("#input input").value.length==0){
        alert("please enter a task")
    }
    else{
        document.querySelector("#tasks").innerHTML+=
        `<div class="task">
           <span id="taskname">
             ${document.querySelector("#input input").value}
             </span>
             <button class="delete" title="delete">
             <i class="fa-solid fa-trash-can"></i>
             </button>
             </div>`;
             document.querySelector("#input input").value="";
             var valid_tasks=document.querySelectorAll(".delete");
             console.log(typeof valid_tasks);
             for(var i=0;i<valid_tasks.length;i++){
                valid_tasks[i].onclick=function(){
                    this.parentNode.remove();
                }
             }
    }
}
var input=document.getElementById("myInput");
input.addEventListener("keypress",function(e){
    if(e.key==="Enter"){
        e.preventDefault();
        document.getElementById("add").click();
    }
});