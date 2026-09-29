/*
get the elements that we want to modify
figure out when the modification should occur
for each element:
    figure out which one it is 
    output that number

figure out where/how we will dispaly the message...get a reference
figure out what day it is
update the display



*/

function renderNumber(element, index) {
    const number = document.createElement("span");
    number.textContent = index + 1;
    element.prepend(number);
}


function addIndex() {
    const scriptureElements = document.querySelectorAll(".scripture");
    scriptureElements.forEach(renderNumber)
}

addIndex()
