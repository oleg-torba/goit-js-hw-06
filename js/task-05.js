const nameInput = document.querySelector("#name-input"); 
const nameOutput = document.querySelector("#name-output"); 
const onIputname = (event) => {
     if(nameInput.length === 0){ 
         nameOutput === "Anonymous" } 
         else { 
             nameOutput === nameInput }
             nameInput.addEventListener("input", event)
               };
                console.log(onIputname);