const img = document.querySelector("img");
const input = document.querySelector("input");
const button = document.querySelector("button");

async function getGif(value) {
  try {
    const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=enZmTDAKShhj7smXYDZHETmNrOxTJfcv&s=${value}&rating=g`);
    const gifData = await response.json();
    img.src = gifData.data.images.original.url;
  } 
  catch(error) {
    console.error(error);
  }
}

button.addEventListener("click", () => {
  let value = input.value;
  getGif(value);
});