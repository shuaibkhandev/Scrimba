// const names = ["alice", "bob", "charlie", "danielle"]
// // -->        ["Alice", "Bob", "Charlie", "Danielle"]
// // Your code 
// const toCap = names.map((name)=> {
// return name.charAt(0).toUpperCase() + name.slice(1)
//     });
//     console.log(toCap);
    

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
// -->          ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]

const pokemonReturn = pokemon.map((pokemon)=>{
    return `<p>${pokemon}</p>`
}) 

console.log(pokemonReturn);
