 const pokemon_number = document.getElementById("pknum");
 const pokemon_name = document.getElementById("pkname");
 const pokemon_img = document.getElementById("pkimg");

 const pokemon_form = document.getElementById("form");
 const pokemon_input = document.getElementById("input");

 const pokemon_prev = document.getElementById("bnt-prev");
 const pokemon_next = document.getElementById("bnt-next");

let searchPokemon=1;

const fetchpoken= async (pokemon)=> {
    const APIresponse = await fetch (`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    if (APIresponse.status ===200){
      const data = await APIresponse.json();
      return data;

    }
}