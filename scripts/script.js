document.body.style.backgroundColor = "Tomato";


let initialValue = document.getElementById('heading1').textContent;

console.log(initialValue);


//document.getElementById('heading1').textContent = "Heading";
heading1.textContent = "Roses are red";

let myHeading = document.getElementById('heading1');

myHeading.textContent = "Violets are blue";
myHeading.style.color = "#0000FF";


const myDiv = document.createElement("div");
//const textContent = document.createTextNode("Some content goes here");
//myDiv.appendChild(textContent);
myDiv.textContent = "New";
myDiv.innerHTML = "<p>Newer</p>"

const blockElement = document.getElementById("block");
blockElement.textContent = "lorem ipsum"
document.body.insertBefore(myDiv, blockElement);

//blockElement.style.cssText = "font-size: 2em; color: #AAFF22";
blockElement.setAttribute("style", "font-style: italic; color: #AAFF22;");

function toggleText(){
    heading1.classList.toggle('hidden');
    myDiv.classList.toggle('hidden');
}

//    visibility: hidden;

//toggleButton.addEventListener('click',toggleText);

function add(x,y){
    return x+y;
}


var add = () => {
    let total = x + y;
    return total;
}

let total = add(10,5);

console.log(total);

textInput.addEventListener('input', () => {
    console.log(textInput.value);
})

document.body.onload = toggleText();