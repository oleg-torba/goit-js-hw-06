let counterValue = 0;
 

 const decrementValue = document.querySelector('[data-action=decrement]');
 const incrementValue = document.querySelector('[data-action=increment]');
 const value = document.querySelector("#value");

 const decrementClick = () => {
    counterValue -= 1;
    value.textContent = counterValue;
    
 }

 const incrementClick = () => {
    counterValue += 1;
    value.textContent = counterValue;}

decrementValue.addEventListener("click", decrementClick);
incrementValue.addEventListener("click", incrementClick);