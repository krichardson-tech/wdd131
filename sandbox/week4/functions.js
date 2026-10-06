console.log("Hello, world!");

double(2) //will work
double2(2) //wont work - cant use it before its declared

// function declaration (will hoist)
function double(num) {
    return num * 2;
}

// function expression 
const double2 = function(num) {
    return num * 2;
}

// arrow function
const double3 = (num) => num * 2;



//////////////
function modifyList(list, callback) {
    list.forEach(callback);
}

modifyList([1, 2, 3], num => num * 2);

