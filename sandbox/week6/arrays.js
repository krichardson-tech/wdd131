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
        // case 'D':
        //     points = 1;
        //     break;
        // case 'F':
        //     points = 0;
        //     break;
        default:
            return 0; // alert('not a valid grade')
    }
}
const gpaGrades = grades.map(convertToPoints); // use map to convert list to points
console.log(gpaGrades);

//activity 3 - reduce 
const gpaPoints = grades.map(convertGradeToPoints);
const pointsTotal = gpaPoints.reduce(function (total, item) {
  return total + item;
});
const gpa = pointsTotal / gpaPoints.length;

    // // example 2
    // // this is the same thing as above, but with an arrow function
    // const pointsTotal = gpaPoints.reduce((total, item) => total + item);
    // const gpa = pointsTotal / gpaPoints.length;

    // // this could be further simplified as
    // const gpa = gpaPoints.reduce((total, item) => total + item) / gpaPoints.length;

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
// improved luckyNumber
const myArray = [12, 34, 21, 54];
const luckyNumber = 21;
let luckyIndex = myArray.indexOf(luckyNumber);