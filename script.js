const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");
const list = document.querySelector("ul");
const button = document.querySelector("button");

const fruit = [
  "Apple",
  "Apricot",
  "Avocado 🥑",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Currant",
  "Cherry",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];

const toLowerCasefruit = [
  "apple",
  "apricot",
  "avocado 🥑",
  "banana",
  "bilberry",
  "blackberry",
  "blackcurrant",
  "blueberry",
  "boysenberry",
  "currant",
  "cherry",
  "coconut",
  "cranberry",
  "cucumber",
  "custard apple",
  "damson",
  "date",
  "dragonfruit",
  "durian",
  "elderberry",
  "feijoa",
  "fig",
  "gooseberry",
  "grape",
  "raisin",
  "grapefruit",
  "guava",
  "honeyberry",
  "huckleberry",
  "jabuticaba",
  "jackfruit",
  "jambul",
  "juniper berry",
  "kiwifruit",
  "kumquat",
  "lemon",
  "lime",
  "loquat",
  "longan",
  "lychee",
  "mango",
  "mangosteen",
  "marionberry",
  "melon",
  "cantaloupe",
  "honeydew",
  "watermelon",
  "miracle fruit",
  "mulberry",
  "nectarine",
  "nance",
  "olive",
  "orange",
  "clementine",
  "mandarine",
  "tangerine",
  "papaya",
  "passionfruit",
  "peach",
  "pear",
  "persimmon",
  "plantain",
  "plum",
  "pineapple",
  "pomegranate",
  "pomelo",
  "quince",
  "raspberry",
  "salmonberry",
  "rambutan",
  "redcurrant",
  "salak",
  "satsuma",
  "soursop",
  "star fruit",
  "strawberry",
  "tamarillo",
  "tamarind",
  "yuzu",
];

function search(str) {
  let results = [];
  if (!results.length) {
    results = toLowerCasefruit.filter((val) => {
      return val.includes(str);
    });
  }
  return showSuggestions(results, str), results;
}

function searchHandler(e) {
  let searchStr = e.target.value.toLowerCase();
  return search(searchStr);
}

function showSuggestions(results, inputVal) {
  const suggestions = document.querySelector(".suggestions ul"); // Get the ul element
  suggestions.innerHTML = "";

  if (inputVal.trim() === "") {
    return;
  }

  results.forEach((val) => {
    let freaked = val.charAt(0).toUpperCase() + val.slice(1);
    const node = document.createElement("li");
    const fruitSuggestion = document.createTextNode(freaked);
    node.appendChild(fruitSuggestion);
    suggestions.appendChild(node);
  });
}

function useSuggestion(e) {
  // TODO
  // grabs event basically the complete spelling of the fruit. Pushes it to the input
  const suggestion = e.target.innerText;
  console.log(suggestion);
  const input = document.querySelector("input");
  input.value = suggestion;
  search(suggestion);
}

function clearSuggestions() {
  input.value = "";
  suggestions.innerHTML = "";
}

input.addEventListener("keyup", searchHandler);
suggestions.addEventListener("click", useSuggestion);
button.addEventListener("click", clearSuggestions);
