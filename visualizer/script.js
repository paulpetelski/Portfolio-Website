var heights = [];

function init() {
  // setup the boards
  // sorting visualizer
  let board = document.getElementById("board");
  board.className = "row";
  let row = document.createElement("div");
  drawBars();

  // square board
  let squareBoard = document.getElementById("squareBoard");
  drawSquareBoard();
}

/* Draw Square Board */
function drawSquareBoard() {
  for (let i = 0; i < 10; i++) {
    let squareRow = document.createElement("div");
    squareRow.className = "squareRow";
    for (let j = 0; j < 10; j++) {
      var square = document.createElement("div");
      square.className = "square";
      square.onclick = changeColor;
      square.style.height = "50px";
      square.style.width = "50px";
      square.style.backgroundColor = "red";
      squareRow.appendChild(square);
    }
    squareBoard.append(squareRow);
  }
}

findPath = async (i, j) => {
  console.log("button pressed");
  j = 3;
  this.x = i;
  this.y = j;
  this.startx = 0;
  this.starty = 0;
  this.endx = 9;
  this.endy = 9;

  // starting node changes to green color
  startingRow = document.getElementsByClassName("squareRow")[starty];
  startingRow.getElementsByClassName("square")[startx].style.backgroundColor =
    "green";

  // ending node changes to black color
  endingRow = document.getElementsByClassName("squareRow")[endy];
  endingRow.getElementsByClassName("square")[endx].style.backgroundColor =
    "black";

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      let row = document.getElementsByClassName("squareRow")[i];
      row.getElementsByClassName("square")[j].style.backgroundColor = "green";
      await wait(100);
    }
  }

  var q = [];
  console.log(q);
};

function changeColor(e) {
  //e.className = "blue";
  console.log(e.target.className);
  e.target.classList.add("blue");
  console.log("clicked");
}

/* Draw Bars */
function drawBars() {
  for (let i = 0; i < 50; i++) {
    heights[i] = Math.floor(Math.random() * 200) + 30;
  }

  console.log(heights);

  for (let i = 0; i < 50; i++) {
    var bar = document.createElement("div");
    bar.className = "bar";
    bar.style.height = heights[i] + "px";
    board.appendChild(bar);
  }
}

// bubble sort button
function buttonClick() {
  bubbleSort(heights);
}

function slide() {
  document.getElementById("speed").innerHTML =
    "Time Delay (ms): " + slider.value;
}
// create delay in miliseconds
// await wait(1000) <-- waits one second (use async function)
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

bubbleSort = async (arr) => {
  var slider = document.getElementById("slider");
  document.getElementById("speed").innerHTML =
    "Time Delay (ms): " + slider.value;
  slider.addEventListener("input", slide);
  // quick sort algo
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        //swap(arr, j, j + 1);
        swap(arr, j, j + 1);
        document.getElementsByClassName("bar")[j].style.height = arr[j] + "px";
        document.getElementsByClassName("bar")[j + 1].style.height =
          arr[j + 1] + "px";
        document.getElementsByClassName("bar")[j + 1].style.borderColor =
          "#ffadad";
        document.getElementsByClassName("bar")[j + 1].style.backgroundColor =
          "#ffadad";
        await wait(slider.value);
        document.getElementsByClassName("bar")[j + 1].style.borderColor =
          "black";
        document.getElementsByClassName("bar")[j + 1].style.backgroundColor =
          "#a0c4ff";
      }
    }
  }
  console.log(arr);
};

swap = (arr, x, y) => {
  let temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
};

// create the bars
init();
