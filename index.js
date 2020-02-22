// zadatak
// Направити објекат покемон који садржи следеће информације: (Направите макар 4 различита покемона)

// Име
// Врста
// Способности (низ способности покемона)
// Карактеристике (објекат са информацијама : напад (број), одбрана (број), брзина (број))
// Даље, направити низ од ових објеката

// пикачу:
// име: пикачу
// врста: електрични
// способности: Статички електрицитет,...
// карактеристике: напад: 55, одбрана: 30, брзина: 90
// Направити функцију која прима низ горе направљених објеката и враћа један низ способности свих покемона

// [<...>,...]
// Сортирати покемоне по брзини, растуће.

// Направити функцију која прима низ покемона, пореди покемоне по јачини и враћа као победника оног 
// који има највећу јачину напада.

// За дати html направити скрипту која:

//     <div class="wrapper">
// 		<button id="prikaz">PRIKAZI POKEMONE</button>
// 		<button id="pobednik">PRIKAZI NAJJACEG POKEMONA</button>
// 	</div>
// *На клик на дугме прикажи покемоне приказује све покемоне из низа у формату :

//     <div>
//         <p>Opis pokemona</p>
//         <img src="slika odgovarajućeg pokemona">
//     </div>
// *На клик на дугме прикажи најјачег покемона приказује покемона који има најјачи напад 
// (користити већ написану функцију иѕ 4. задатка) по истом формату.

let pikachu = {
    name : 'Pikachu',
    type : 'electric' ,
    abilities : ['Lightning Rod ', 'Static'],
    characteristic: { attack : 55, defense : 40, speed : 90}
}

let dragonite = {
    name : 'Dragonite',
    type : 'dragonFlying' ,
    abilities : ['Inner Focus', 'Multiscale'],
    characteristic: { attack : 134, defense : 95, speed : 80}
}

let dewgong = {
    name : 'Dewgong',
    type : 'waterIce' ,
    abilities : ['Thick Fat', 'Hydration', 'Ice Body'],
    characteristic: { attack : 70, defense : 80, speed : 70}
}

let jigglypuff = {
    name : 'Jigglypuff',
    type : 'normalFairy' ,
    abilities : ['Cute Charm', 'Competitive', 'Friend Guard'],
    characteristic: { attack : 45, defense : 20, speed : 20}
}

let charizard = {
    name : 'Charizard',
    type : 'fireFlying' ,
    abilities : ['Blaze', 'Solar Power'],
    characteristic: { attack : 84, defense : 78, speed : 100}
}

let bulbasaur = {
    name : 'Bulbasaur',
    type :  'grassPoison' ,
    abilities : ['Overgrowe', 'Chlorophyll'],
    characteristic: { attack : 49, defense : 49, speed : 45}
}

// Направити функцију која прима низ горе направљених објеката и враћа један низ способности свих покемона

// let div = document.querySelector('.pokemoni');
let pokemoni = [pikachu, dragonite, dewgong, jigglypuff, charizard, bulbasaur]

// function pokemonAbilities(pokemon) {
//     return `${pokemon.name} abilities: ${pokemon.abilities}`;
//  }
//  for (let i = 0; i < pokemoni.length; i++) {
//     let p = document.createElement('p');
//     p.innerHTML = pokemonAbilities(pokemoni[i]);
//     div.appendChild(p);
// }
// console.log(pokemonAbilities(pikachu));

 function getAllPokemonAbilities(pokemoni){
     let result = [];
     for(let i = 0; i < pokemoni.length; i++){
        //  result.push(pokemoni[i].abilities) //pravi sest odvojenih nizova - dvodimenzionalni niz
         result = result.concat(pokemoni[i].abilities); // sve stavlja u jedan niz
     }
     return result;
 }
 console.log(getAllPokemonAbilities(pokemoni));

 // Сортирати покемоне по брзини, растуће.

     pokemoni.sort(function(p1, p2){
         return p1.characteristic.speed - p2.characteristic.speed
     });
     console.log(pokemoni);

// Направити функцију која прима низ покемона, пореди покемоне по јачини и враћа као победника оног 
// који има највећу јачину напада.

// let mostPowerfulPokemon = pokemoni[0];

// for(let i = 1; i < pokemoni.length; i++){
//     if(pokemoni[i].characteristic.attack > mostPowerfulPokemon.characteristic.attack){
//         mostPowerfulPokemon = pokemoni[i];
//     }
// }

const mostPowerfulPokemon = (arr) => {
    let maxPow = 0;
    for (let index = 0; index < arr.length; index++) {
        let element = arr[index].characteristic.attack;
        if (element > arr[maxPow].characteristic.attack) {
            maxPow = index;
        }

    }
    return arr[maxPow];

}
var winner = mostPowerfulPokemon(pokemoni);
console.log(`Pobenik je: ${winner.name}`);

// console.log(mostPowerfulPokemon);

const btn_prikaz = document.querySelector('#prikaz');
const btn_pobednik = document.querySelector('#pobednik');
const pokemon = document.querySelector('#pokemon');

function describePokemon(pokemon) {
    return `Ime: ${pokemon.name} <br>
        Vrsta: ${pokemon.type} <br>
        Sposobnosti: ${pokemon.abilities}<br>
        Karakteristike: napad: ${ pokemon.characteristic.attack}, odbrana: ${pokemon.characteristic.defense}, 
        brzina: ${pokemon.characteristic.speed}`;
}

btn_prikaz.addEventListener('click', ()=>{
    pokemon.innerHTML='';
    for (let i = 0; i < pokemoni.length; i++) {
        let div = document.createElement('div')
        div.className = 'pokemon';
        let p = document.createElement('p');
        p.innerHTML = describePokemon(pokemoni[i]);
        let img = document.createElement('img');
        img.src = `img/${pokemoni[i].name}.png`;
        div.appendChild(p);
        div.appendChild(img);
        pokemon.appendChild(div);
    }
});

btn_pobednik.addEventListener('click', ()=>{
        pokemoni.innerHTML='';
        let div = document.createElement('div');
        div.className = 'winpok';
        let p = document.createElement('p');
        p.innerHTML = describePokemon(winner);
        let img = document.createElement('img');
        img.src = `img/${winner.name}.png`;
        div.appendChild(p);
        div.appendChild(img);
        pokemon.appendChild(div);    

    }
);



