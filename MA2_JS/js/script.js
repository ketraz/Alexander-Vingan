//question 1

var pets = [{
        type: "cat",
        age: 5.5,
    },
    {
        type: "dog",
        age: 3.8,
    },
    {
        type: "parrot",
        age: 4.0,
    },
];

for (var i = 0; i < pets.length; i++) {
    var age = pets[i].age;
    var type = pets[i].type;

    if (age <= 4) {
        console.log(type + ", " + " is older than 4");
    } else {
        console.log(type + ", " + "is Not older than 4");
    }
}

// Question 2


function checkType(text) {



    if (typeof(text) === "boolean") {
        console.log(text);
    } else {
        console.log("please pass a boolean value in")
    }
}


checkType(10 > 9);



// Question 3

var heading = document.querySelector("h2");
var button = document.querySelector("button");


function changeHeading() {
    heading.innerHTML = "updated subheading";
    heading.style.color = "blue";
}
button.onclick = changeHeading;