




var Regex = /^[a-zA-Z]/;

var taskNameInp = document.getElementById("taskNameInp");


function validatetaskName()
{
    if(  Regex.test(taskNameInp.value) == false)
    {
      taskNameInp.classList.add("is-invalid");
      taskNameInp.classList.remove("is-valid");

      return false;
    }
    else
    {
      taskNameInp.classList.add("is-valid");
      taskNameInp.classList.remove("is-invalid");

      return true;

    } 
}
taskNameInp.addEventListener("keyup" , validatetaskName)


var taskBalanceInp = document.getElementById("taskBalanceInp");


var tasksList ;
if(localStorage.getItem("myTasks") == null )
{
    tasksList = [];
}
else
{
    tasksList = JSON.parse( localStorage.getItem("myTasks") );
    displayTasks();
}
function addTask() {


if(validatetaskName() == true)
{
    var task =
    {
        name: taskNameInp.value,
        balance: taskBalanceInp.value,
       
    }
    tasksList.push(task);
    localStorage.setItem("myTasks" , JSON.stringify( tasksList ) );
    displayTasks();
    clearForm();

}


   

}

function displayTasks() {
    var cont = ``;

    for (var i = 0; i < tasksList.length; i++) {
        cont += `<tr>
            <td>` + tasksList[i].name + `</td>
            <td>`+i+`</td>

            <td>`+ tasksList[i].balance + `</td>
            <td><button class="btn btn-warning">update</button></td>
            <td><button onclick="deleteTask(`+i+`)" class="btn btn-danger">delete</button></td>
            </tr>`;
    }

    document.getElementById("tableBody").innerHTML = cont;
}

function clearForm() {
    taskNameInp.value = "";
    taskBalanceInp.value = "";
   
}





function deleteTask(index)
{
    tasksList.splice(index , 1);
    localStorage.setItem("myTasks" , JSON.stringify( tasksList ) );
    displayTasks();
}



