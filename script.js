const img = document.querySelector("img");
const input = document.querySelector("input");
const button = document.querySelector("button");

// button.addEventListener("click", () => {
//   let value = input.value;
  
//   if(!value) {
//     alert("Please enter your search.")
//   }
//   else {
//     fetch(`https://api.giphy.com/v1/gifs/translate?api_key=enZmTDAKShhj7smXYDZHETmNrOxTJfcv&s=${value}&rating=g`)
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(response) {
//       img.src = response.data.images.original.url;
//     })
//     .catch(error => {
//       alert(error);
//     })
//   }
// });

async function getGif() {
  try {
    const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=enZmTDAKShhj7smXYDZHETmNrOxTJfcv&s=cats&rating=g`);
    const gifData = await response.json();
    img.src = gifData.data.images.original.url;
  } 
  catch(error) {
    console.error(error);
  }
}