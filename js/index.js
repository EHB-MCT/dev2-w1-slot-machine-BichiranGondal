import {
    slotMachine
} from "./slotMachine.js";

function init() {
    console.log("Init");
   // TODO: log the document using console.log to test if you can get access to it
   console.log(document);

    // TODO: log the submit button. If that works, store that button in a variable
   console.log(document.getElementById('button'));
   const button = document.getElementById('button');

   // TODO: attach an event listener to that button and show a log "button clicked"
   button.addEventListener('click', function () {
      console.log('click ok (:');

   // TODO: if the submit button is clicked, the lever is pulled (= call that function)
      pullLever();

   })
    
}


function pullLever() {
    // TODO: reset the machine (you may skip this step for now, and focus on getting the machine to work first)
   // TODO: spin the slot machine
   slotMachine.spin();
   // TODO: show slots and win status
   showSlots();
}

function showSlots() {
   // TODO: show the slot symbols in HTML
   let slots = '';
   for (index = 0; index < slotMachine.slots.length; index++) {
      slots += '<span class="'+ slotMachine.slots[index]+'">'+ slotMachine.slots[index]+'</span>'
   }
}

function showGameResult() {
    // TODO: show a win or lose message in HTML
}

init();