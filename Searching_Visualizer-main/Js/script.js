const generateArraybtn2 = document.getElementById("generate-array");
const elementToSearch = document.getElementById("valueForSearch");
const searchbtn2 = document.getElementById("search");
const linearSearchbtn2 = document.getElementById("linear-search");
const binarySearchbtn2 = document.getElementById("binary-search");
const arrowIcons = document.getElementsByClassName("box-item-icon");

// colors
const successColor = "#32E0C4";
const failureColor = "#FB3640";

let randomArray = [];
let randomSortedArray = [];
let searchType = "linear";

// generate random numbers first time
insertRandomArray();

// event listner for generating new array
generateArraybtn2.addEventListener("click", () => {
  insertRandomArray();
});

// event listner for searching an element in an array
searchbtn2.addEventListener("click", () => {
  let element = elementToSearch.value;
  if (element != "") {
    const searchValue = parseInt(element);
    if (searchType === "linear") {
      disable();
      linearSearch(randomArray, searchValue);
    }

    if (searchType === "binary") {
      disable();
      binarySearch(
        randomSortedArray,
        searchValue,
        0,
        randomSortedArray.length - 1
      );
    }
  }
});

// event listner for selecting type of search method(linear or binary)
// for linear search
linearSearchbtn2.addEventListener("click", () => {
  binarySearchbtn2.style.borderBottomColor = "#243441";
  linearSearchbtn2.style.borderBottom = "1px solid white";
  searchType = "linear";
});

// for binary search
binarySearchbtn2.addEventListener("click", () => {
  linearSearchbtn2.style.borderBottomColor = "#243441";
  binarySearchbtn2.style.borderBottom = "1px solid white";
  if (searchType != "binary") {
    searchType = "binary";
    insertRandomArray();
  }
});
