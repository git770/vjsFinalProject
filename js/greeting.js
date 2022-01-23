const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const nickMention = document.querySelector("#nickMention");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function loginSubmitFnc (event) { 
    event.preventDefault();
    nickMention.classList.add(HIDDEN_CLASSNAME);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username= loginInput.value;
    localStorage.setItem(USERNAME_KEY, username); 
    paintGreetings(username);
}

function paintGreetings(userName){
    greeting.classList.remove(HIDDEN_CLASSNAME); 
    greeting.innerText = `Hello ${userName}`;
}


const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName === null ){
    nickMention.classList.remove(HIDDEN_CLASSNAME);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", loginSubmitFnc);
}else{
   paintGreetings(savedUserName);
}    



