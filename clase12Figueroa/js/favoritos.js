let l_id; 
let arr_fav = [];
let l_divtemas; 
let xy; 
let div; 
let btn_fav; 
let ptje; 

l_bd = localStorage.getItem("albums");
l_bd = JSON.parse(l_bd);

fn_favoritos();
fn_armalista();


// Armado de array de favoritos
function fn_favoritos(){
    for (let x = 0; x < l_bd.length; x++){
        for (let i = 0; i < l_bd[x].temas.length; i++){ 
            if (l_bd[x].temas[i].favorito == "S"){
                Favorito = {album:x, nomalbum:l_bd[x].nombre, tema:i, nomtema:l_bd[x].temas[i].nombre, puntaje:l_bd[x].temas[i].puntaje}
                arr_fav.push(Favorito);
            }
        }
    }
}


// Armado de tabla
function fn_armalista(_album){
    document.getElementById("listado").innerHTML = "";
    if (arr_fav.length == 0){
        document.getElementById("favoritos").innerHTML = `<h2>Oops! Nada por aquí...</p>`;}
    else{
        for (let y of arr_fav) {  
            // Por cada tema creo el div de la fila
            l_divtemas = document.createElement("div");
            l_divtemas.id = "contenedor_tema";
            l_divtemas.className = "style_tema";
            document.getElementById("listado").append(l_divtemas); 
            //Nombre Tema
            xy = y.nomtema; 
            div = document.createElement("div");
            div.innerText = xy; 
            div.className = "tema_nombre";
            l_divtemas.append(div);
            //Nro tema
            xy = y.tema; 
            div = document.createElement("div");
            div.innerText = xy; 
            div.className = "tema_nro";
            l_divtemas.append(div);
            //Album
            xy = y.nomalbum; 
            div = document.createElement("div");
            div.innerText = xy; 
            div.className = "tema_album";
            l_divtemas.append(div);   
            //Nro Album
            xy = y.album; 
            div = document.createElement("div");
            div.innerText = xy; 
            div.className = "album-nro";
            l_divtemas.append(div);  
            //Favorito
            btn_fav = document.createElement("img");
            btn_fav.className = "tema_fav";
            btn_fav.src = "./img/ico/favon.png";
            btn_fav.value = "S";
            l_divtemas.append(btn_fav);
            //Puntaje
            xy = y.puntaje; 
            for (let z = 0; z < xy; z++) {
                ptje = document.createElement("img");
                ptje.className = "estrella";
                ptje.src = "./img/ico/staron.png";
                ptje.value = z + 1;
                l_divtemas.append(ptje); 
            }
            for (let i = xy + 1; i <= (5); i++) {
                ptje = document.createElement("img");
                ptje.className = "estrella";
                ptje.src = "./img/ico/staroff.png";
                ptje.value = i;
                l_divtemas.append(ptje); 
            }
            }
            fn_botones();
        }
}


// Funciones sobre los Botones
function fn_botones(){

    // Favorito o No Favorito
    ptje = document.querySelectorAll(".tema_fav");
    for (let x of ptje){
        x.addEventListener("click",function(e){
			l_bd = localStorage.getItem("albums");
			l_bd = JSON.parse(l_bd);	
            let div_padre = e.target.parentNode;
            let n1 = div_padre.querySelector(".tema_nro").textContent;
            let n2 = div_padre.querySelector(".album-nro").textContent;
            l_bd[n2].temas[(n1)].favorito = "N";
            l_bd = JSON.stringify(l_bd);
            localStorage.setItem("albums", l_bd);
            div_padre.remove();
		});
		x.addEventListener("mouseover",function(e){
			x.src = "./img/ico/favoff.png";})	
		x.addEventListener("mouseout",function(e){
			x.src = "./img/ico/favon.png";});
    }

    // Puntaje
    btn_fav = document.querySelectorAll(".estrella");
    for (let x of btn_fav){
        x.addEventListener("click",function(e){
			l_bd = localStorage.getItem("albums");
			l_bd = JSON.parse(l_bd);
            let div_padre = e.target.parentNode;
            let n1 = div_padre.querySelector(".tema_nro").textContent;
            let n2 = div_padre.querySelector(".album-nro").textContent;
            l_bd[n2].temas[(n1)].puntaje = e.target.value;
            l_bd = JSON.stringify(l_bd);
            localStorage.setItem("albums", l_bd);
		});
		x.addEventListener("mouseover",function(e){
            let div_padre = e.target.parentNode;
            let hnas_star =  div_padre.querySelectorAll(".estrella");
            for( let i = 0; i < e.target.value; i++){
                hnas_star[i].src = "./img/ico/staron.png";
            }
        })	
		x.addEventListener("mouseout",function(e){
            l_bd = localStorage.getItem("albums");
			l_bd = JSON.parse(l_bd);	
            let div_padre = e.target.parentNode;
            let n1 = div_padre.querySelector(".tema_nro").textContent;
            let n2 = div_padre.querySelector(".album-nro").textContent;
            xy = l_bd[n2].temas[(n1)].puntaje;
            let hnas_star =  div_padre.querySelectorAll(".estrella");
            for (let z = 0; z < xy; z++) {
                hnas_star[z].src = "./img/ico/staron.png";
            }
            for (let i = xy; i < (5); i++) {
                hnas_star[i].src = "./img/ico/staroff.png";
            }
        });
    }   
}

// Reordena lista
function fn_ordena1(x, y){
    if (x.nomtema < y.nomtema) {return -1;}
    if (x.nomtema > y.nomtema) {return 1;}
    return 0;
}
function fn_ordena2(x, y){
    if (x.nomalbum < y.nomalbum) {return 1;}
    if (x.nomalbum > y.nomalbum) {return -1;}
    return 0;
}

document.getElementById("titulo_nombre").addEventListener("click", function(){
    arr_fav = arr_fav.sort(fn_ordena1);
    fn_armalista();
});

document.getElementById("titulo_album").addEventListener("click", function(){
    arr_fav = arr_fav.sort(fn_ordena2);
    fn_armalista();
});


