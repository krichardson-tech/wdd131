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


//activity 5 - index0f #