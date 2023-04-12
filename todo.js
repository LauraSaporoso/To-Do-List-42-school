let ftList = document.getElementById("ft_list");
let button = document.getElementById("new");
alertSubject();
function alertSubject() 
{
    alert('SUBJECT 42SCHOOL TO DO LIST: \n\nFor this exercise, we will have to create a mini local task management. The to do list will be represented by a div that will have as id attribute the value ’ft_list’.This bloc contains the list of "TO DO".\n \nEach TO DO is represented by a divcontained in the ’ft_list’ bloc. When a TO DO is created, it is placed at the top of thelist. Up to you to create the element and place it in the right spot (DOM manipulation).\n \nThere must be creation button named ’New’. When clicked, it’ll open a text window(checkout the prompt function) that will allow the user to fill in a new TO DO. Oncevalidated if not empty it must appear at the top of the list.\n \nTo remove a TO DO from the list, all you have to do is click on it. A configurationwindow must open and ask whether yes or no you want to remove that TO DO. If youconfirm, the TO DO must disappear permanently from the DOM, it can’t just be hidden.\n \nSmall additional implementation, your TO DO list will have to be saved as a cookie. If the list contains some TO DO when you close you browser, this same list must beloaded and displayed in ’ft_list’. If the cookie(s) do not exist, then the list will be blank.');
}

function newTodo() {
    let elementList;

    let nameTodo = prompt("Inserisci nome del to-do");
    if (nameTodo == null || nameTodo == "") {
        alert("INSERISCI UN NOME HO DETTOO");
        return;
    }


    document.cookie = nameTodo + "=" + nameTodo;

    cookieee();
}

function cookieee() {

    document.getElementById("ft_list").innerHTML = "";

    console.log(document.cookie);

    var cookieArr = document.cookie.split(';');


    for (i = cookieArr.length - 1; i >= 0; i--) {

        let nameTodo = cookieArr[i].split('=')[0];
        console.log(nameTodo);

        elementList = "Nuovo todo:" + nameTodo;
        let divList = document.createElement("div");
        divList.setAttribute("id", nameTodo);
        divList.className = "addTodoStyle";
        divList.innerHTML = elementList;
        divList.addEventListener("click", function confirmAction() {
            const response = confirm("are you sure sure sure?")
            if (response) {
                divList.remove();
                document.cookie = nameTodo + "=; expires= 1 Oct 1990 00:00:00";
            }
        });
        ftList.appendChild(divList);
    }
}