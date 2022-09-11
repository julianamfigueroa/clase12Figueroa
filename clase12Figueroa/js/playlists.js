let l_id; 
let arr_play = [];
let arr_temas = [];
let l_pl; 
let l_tema;
let l_index;

l_bd = localStorage.getItem("playlists");
l_bd = JSON.parse(l_bd);
let id_container = document.getElementById("contenedor_playlists");
let id_listado = document.getElementById("listado");

// fn_playlists();
fn_armalista();


// -------------------------------- FUNCIONES --------------------------------
// Lista de Playlists
function fn_armalista(){
    id_container.innerHTML = "";
    l_bd = localStorage.getItem("playlists");
    arr_play = JSON.parse(l_bd);
    if (arr_play != null){
        l_pl = document.createElement("h3");
        l_pl.innerHTML = "Tus Playlists"
        id_container.append(l_pl);
        for (let y of arr_play) {  
            l_pl = document.createElement("p");
            l_pl.innerText = y.nombre; 
            l_pl.className = "playlists_p";
            id_container.append(l_pl); 
    }}
    else{
        document.getElementById("contenedor_playlists").innerHTML = `<h2>Oops! Nada por aquí...</p>`;
    }

}

let elegida = document.querySelectorAll(".playlists_p");
for (let x of elegida){
    x.addEventListener("click",function(e){
        l_bd = localStorage.getItem("playlists");
        arr_temas = JSON.parse(l_bd);
        l_index = (arr_temas.findIndex(l_index => l_index.nombre === e.target.innerText));
        fn_armacanciones();
    })
}


// Lista de Temas
function fn_armacanciones(){
    id_listado.innerHTML = "";
    l_bd = localStorage.getItem("playlists");
    arr_temas = JSON.parse(l_bd);
    if (arr_temas[l_index].temas.length >0){
        l_pl = document.createElement("h4");
        l_pl.innerHTML = "Lista de Temas"
        id_listado.append(l_pl);
        for (let y of arr_temas[l_index].temas) {  
            l_tema = document.createElement("p");
            l_tema.innerText = y; 
            l_tema.className = "cancion";
            id_listado.append(l_tema); 
        }}
}

