const elPokemon = document.querySelector(".movie__list");
const elResult = document.querySelector(".movie__result-num");

elResult.textContent = pokemons.length;


for (pokemon of pokemons) {
  //Create Element yani element yaratish yani teg taratish

  const newLi = document.createElement("li");
  const newImg = document.createElement("img");
  const newDiv = document.createElement("div");
  const newTitle = document.createElement("h4");
  const newText = document.createElement("p");
  const newWeight = document.createElement("p");
  const newHeight = document.createElement("p");

  //Set Attibute  tegga attribut qo'shish

  newLi.setAttribute("class", "card mb-3");
  newLi.style.width = "18rem";
  newImg.classList.add("card-img-top");
  newImg.setAttribute("src", pokemon.img);
  newDiv.classList.add("card-body");
  newTitle.classList.add("card-title");
  newText.classList.add("card-text");
  newWeight.classList.add("card-text");
  newHeight.classList.add("card-text");

  newTitle.textContent = pokemon.name;
  newText.textContent = pokemon.candy;
  newWeight.textContent = pokemon.weight;
  newHeight.textContent = pokemon.height;

  elPokemon.appendChild(newLi);
  newLi.appendChild(newImg);
  newLi.appendChild(newDiv);
  newDiv.appendChild(newTitle);
  newDiv.appendChild(newText);
  newDiv.appendChild(newWeight);
  newDiv.appendChild(newHeight);
}
