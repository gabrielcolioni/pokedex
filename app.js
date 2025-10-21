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
const renderPokemon = asyns(pokemon)=> {
    const data = await fetchpokemon(pokemon);
    if(data){
        pokemon_name.innerHTML=data.name;
        pokemon_number.innerHTML= data.id;
        pokemon_img.src= data['sprites']['version']['generation-v']['black']
    }

}

pokemon_form.addEventListener("submit", (event)=>{
    event.preventDefault();
    console.log("Enviando Formulario",pokemon_input.value);
    renderPokemon(pokemon_input.value.toLowercase());
    InputDeviceInfo.value ="";

})

pokemon_prev.addEventListener("click",()=>{
    if(searchPokemon > 1){
        searchPokemon -=1
        renderPokemon(searchPokemon)
    }

})

pokemon_next.addEventListener("click",()=>{
    searchPokemon +=1
     renderPokemon
})