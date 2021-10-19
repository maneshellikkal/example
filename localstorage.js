const input=document.querySelector("input");
const loginButton=document.querySelector("#login");
const logoutButton=document.querySelector("#logout");
const h1=document.querySelector("h1")
loginButton.onclick=()=>{ 
    if(input.value) {
        localStorage.setItem("token",input.value);
        h1.innerHTML="welcome user"
    }

};
logoutButton.onclick=()=>{
    localStorage.clear();
    location.reload();
};