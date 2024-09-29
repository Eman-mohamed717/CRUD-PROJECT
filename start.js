var bookmarkName=document.getElementById("Bookmarkname");
var websiteURL=document.getElementById("websiteURL");
var action=document.forms;
var element=document.querySelector("box");
function validationsyntax(element){
    var regex = {
        bookmarkName:  /^[A-Za-z]{3,}/,
        websiteURL: /^(https?:\/\/)?([\w-]+(\.[\w-]+)*)(:\d+)?(\/[-\w%_.~+]*)*$/,
    }
    if(regex[element.id].test(element.value)){
        console.log("match");
    element.classList.add("is-valid");
    element.classList.remove("is-invalid");
    clearData();
    } 
    
    else{
        console.log("nomatch");
        element.classList.add("is-invalid");
        element.classList.remove("is-valid");
        action.addEventListner("submit",function(){
           element.classList.replace("d-none","d-block");
        });
        clearData();

}};


function clearData(){
    bookmarkName.value="";
    websiteURL.value="";
}





