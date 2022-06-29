function lineThroughList() {
  let argumentsItem1 = document.querySelector("li");
  argumentsItem1.style.textDecoration = "line-through";
}

lineThroughList();

//strikethrough?

//3.
/*
function setImage()
parameters
id: 'string'
url: 'string'



*/

function setImage(id, url) {
  let img = document.querySelector(`#${id}`);
  img.src = url;
  img.style.height = "200px";
}

//4.
setImage("image-1", "https://f4.bcbits.com/img/a0128261441_16.jpg");
setImage("image-2", "https://f4.bcbits.com/img/a1183078555_16.jpg");
setImage("image-3", "https://f4.bcbits.com/img/a3135664124_16.jpg");

//5.
function removeFirst() {
  let argumentsItem1 = document.querySelector("li");
  argumentsItem1.remove();
}
removeFirst();
//6.
removeFirst();
//7.
function fontSize(id, font) {
  let text = document.querySelector(id);
  text.style.fontSize = font;
}

fontSize("#heading", "100px");

//8.
fontSize("#thing-2", "100px");

//Part 2

//1.
function addChild(element) {
  let list = document.querySelector("#arguments");
  list.appendChild(element);
}

let newElement = document.createElement("li");
// let newImage = document.createElement('li');

// newImage

newElement.innerText = "woah, it's a list item";

addChild(newElement);

//2.

let newImage = document.createElement("img");

newImage.src = "https://f4.bcbits.com/img/a0128261441_16.jpg";

addChild(newImage);

//3.

function newHeight(idAndTag) {
  let listItem = document.querySelector(idAndTag);
  listItem.style.height = "30px";
}
//4.
newHeight("#arguments img");

//5.

function invisible(element) {
  element.className = "#invisible";
}

//6.

let picItem = document.querySelector("#arguments img");

invisible(picItem);

//Part 3

//1.

//textCreater(text)
//1
function textCreator(text) {
  let listItem = document.createElement("li");
  listItem.innerText = text;
  return listItem;
}

//2.

let testItem = textCreator("Hi Globe");

addChild(testItem)

//3.

function createHeader(hSize, text){

    let header= document.createElement(`h${hSize}`);
    header.innerText = text
    return header;
}

//4.
let headerTest = createHeader('2','some text');
addChild(headerTest)
//function takes in two parameters
//size of header

