//  arrays.js

//activity 1 - map
const steps = ["one", "two", "three"];
function listTemplate(step) {
  return `<li>${step}</li>` //the html string made from step
}
const stepsHtml = steps.map(listTemplate) // use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML = stepsHtml.join(""); // set the innerHTML

//activity 2 - map
const grades = ["A", "B", "c"]
function convertToPoints(grade) {
    const cleanGrade = grade.toUpperCase();
    switch(cleanGrade) {
        case "A":
            return 4;
        case "B":
            return 3;
        case "C":
            return 2;
        default:
            return 0;
    }
}
const gpaPoints = grades.map(convertToPoints); // use map to convert list to points
console.log(gpaPoints);

//activity 3 - reduce 


//activity 4 - filter
const fruit = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
function testLength(item) {
    if(item.length < 6) {
        return true;
    }
    else return false

    // below also does the entirty of the if statement:
    // return item.length < 6 ? true : false;
}
const shortFruit = fruit.filter(testLength);

//activity 5 - indexOf #