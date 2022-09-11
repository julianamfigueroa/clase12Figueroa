let l_bd = []; 
let l_bdplay = [];
let arrplay = [];
let l_id; 
let l_index;
let l_divtemas;
let div_padre;
let l_nrocd;
let l_p;
let l_nro;
let l_titulo;
let xy; 
let div;
let btn_cont_img;
let btn_fav;
let btn_favs;
let btn_favn;
let btn_add; 
let btn_addsong; 
let addinput;
let l_ptj; 
let l_album;
let l_tema;

// CONTENEDOR DE LAS TAPAS DE DISCOS
let id_container = document.getElementById("contenedor_img");
let id_titulo = document.getElementById("album_titulo");
let id_listado = document.getElementById("listado");
let id_contitu = document.getElementById("contenedor_titulos"); 
let id_playlist = document.getElementById("playlists");
let l_divalbum = document.getElementById("album");
let l_divfloat = document.getElementById("float");

// OCULTO EL DIV DE DISCOS/TEMAS
l_divalbum.classList.add("div_hide");
// OCULTO FLOTANTE DE PLAYLISTS
l_divfloat.classList.add("div_hide");

// Hago un array con los divs para identificar en cual estoy parado
let arr_idcd = ["cd01", "cd02", "cd03", "cd04", "cd05", "cd06", "cd07", "cd08", "cd09", "cd10"];


// -------------------------------- ARMADO DEL ALBUM --------------------------------
// Muestro los temas del Album elegido
function fn_armaalbum(_album){
    l_nro = _album;
    l_bd = localStorage.getItem("albums");
    l_bd = JSON.parse(l_bd);
    // Titulo
    l_titulo = l_bd[l_nro].nombre;
    l_titulo.innerText = "Nombre del Album";
    id_titulo.innerText = l_titulo;
    id_listado.innerHTML = "";
    if (l_nro != 9){
        id_contitu.classList.remove("div_hide");
        for (let i = 0; i < l_bd[l_nro].temas.length; i++) {  
        // Por cada tema creo el div de la fila
        l_divtemas = document.createElement("div");
        l_divtemas.id = "contenedor_tema";
        l_divtemas.className = "style_tema";
        id_listado.append(l_divtemas); 
        //Nro tema
        xy = i + 1;
        div = document.createElement("div");
        div.innerText = xy; 
        div.className = "tema_nro";
        l_divtemas.append(div); 
        //Nombre
        xy = l_bd[l_nro].temas[i].nombre; 
        div = document.createElement("div");
        div.innerText = xy; 
        div.className = "tema_nombre";
        l_divtemas.append(div);  
        //Favorito
        xy = l_bd[l_nro].temas[i].favorito; 
        btn_fav = document.createElement("img");
        btn_fav.className = "tema_fav";
        xy == "S" ? btn_fav.src = "./img/ico/favon.png" : btn_fav.src = "./img/ico/favoff.png";
        // if (xy == "S"){
        //     btn_fav.src = "./img/ico/favon.png";}
        // else{
        //     btn_fav.src = "./img/ico/favoff.png";}
        btn_fav.value = `${xy}`;
        l_divtemas.append(btn_fav);
        //Puntaje
        xy = l_bd[l_nro].temas[i].puntaje; 
        for (let m = 0; m < xy; m++) {
            l_ptj = document.createElement("img");
            l_ptj.className = "estrella";
            l_ptj.src = "./img/ico/staron.png";
            l_ptj.value = m + 1;
            l_divtemas.append(l_ptj); 
        }
        for (let n = xy + 1; n <= (5); n++) {
            l_ptj = document.createElement("img");
            l_ptj.className = "estrella";
            l_ptj.src = "./img/ico/staroff.png";
            l_ptj.value = n;
            l_divtemas.append(l_ptj); 
        } 
        //Playlist
        btn_add = document.createElement("img");
        btn_add.className = "tema_add";
        btn_add.src = "./img/ico/masoff.png";
        l_divtemas.append(btn_add);
    }
    fn_botones();
    }else{
        div = document.createElement("div");
        div.innerHTML = `<p>Disponible el 21 de Octubre...</p>`
        id_listado.append(div);        
    }
}


// Funciones Over y Out Album (Color / ByN)
function fn_overalbum(){
    document.getElementById(l_album).style.backgroundImage = `url('./img/albums/ts${l_nrocd}.jpg')`;
    document.getElementById(l_album).style.transitionDuration = "0.3s";
    l_p  = document.getElementById(`p${l_nrocd}`);
    l_p.style.color = "#f7f6f8"; 
}
function fn_outalbum(){
    document.getElementById(l_album).style.backgroundImage = `url('./img/albums/ts${l_nrocd}b.jpg')`;
    document.getElementById(l_album).style.transitionDuration = "0.3s";
    l_p.style.color = "#d6d2e2";
}



// FUNCIONES PLAYLISTS
// Armado de las Playlists actuales
function fn_armaplay(){
    document.getElementById("playlist_close").addEventListener("click", function(){
        l_divfloat.classList.add("div_hide");
    });
    id_playlist.innerHTML = "";
    id_playlist.innerHTML = `<p class="playlist" id ="newplay">Crear Nueva Playlist</p>`;
    l_bdplay = localStorage.getItem("playlists");
    l_bdplay = JSON.parse(l_bdplay);
    if (l_bdplay != null){
        for (let i = 0; i < l_bdplay.length; i++){
            xy = document.createElement("p");
            xy.className ="addsong";
            xy.innerText = l_bdplay[i].nombre;
            id_playlist.append(xy);}
    }
    fn_addsong();
}
// Agregado de la nueva Playlist al json
function fn_addplay(){
        newplay = document.getElementById("newplay");
        adddiv = id_playlist;
        newplay.addEventListener("click", function(){
            newplay = document.createElement("input");
            newplay.className = "playlist";
            newplay.id = "playinput";
            adddiv.append(newplay);
            addinput = document.getElementById("playinput");
            addinput.addEventListener("change", function(){
                Playlist = {nombre:addinput.value, temas:[]};
                l_bdplay = localStorage.getItem("playlists");
                l_bdplay = JSON.parse(l_bdplay);
                if (l_bdplay != null){arrplay = l_bdplay; }
                    let a = (arrplay.findIndex(a => a.nombre === addinput.value));
                    if ( a  == -1){
                        arrplay.push(Playlist); 
                        l_bdplay = JSON.stringify(arrplay);
                        localStorage.setItem("playlists", l_bdplay);
                        fn_armaplay();}
                    else{ alert("Playlist Existente"); }
                

            });
        });
}
// Agregado de la Canción a la Playlist
function fn_addsong(){
    btn_addsong = document.querySelectorAll(".addsong");
    for (let x of btn_addsong){
        x.addEventListener("click", function(e){
            l_bdplay = localStorage.getItem("playlists");
            l_bdplay = JSON.parse(l_bdplay);
            let s = l_bdplay.findIndex(s => s.nombre === e.target.innerText);
            let a = (l_bdplay[s].temas.findIndex(a => a === l_tema));
                if ( a  == -1){
                    l_bdplay[s].temas.push(l_tema);
                    l_bdplay = JSON.stringify(l_bdplay);
                    localStorage.setItem("playlists", l_bdplay);}
                else{ alert("Ya se encuentra en la Playlist"); }
        });
    }
}



// -------------------------------- EVENTOS --------------------------------
// SI ELIGE UN DISCO, SE MUESTRA EL CLICEKADO Y LO ARMO
id_container.addEventListener("mousedown", function(e){
    l_divalbum.classList.add("div_hide");  
    l_divfloat.classList.add("div_hide");
    // Si clickeó en un disco, habilito el div
    if (e.target.className == "cont_img"){
        l_divalbum.classList.remove("div_hide"); 
    };
    // Lo relleno con los datos del disco
    l_id = e.target.id; 
    if ( (arr_idcd.includes)(l_id) ){
        l_index = arr_idcd.indexOf(l_id);
        l_album = arr_idcd[l_index];
        document.getElementById(l_album).addEventListener("click", fn_armaalbum(l_index));
        if (l_index == 9){
            id_contitu.classList.add("div_hide");
        }
    };
})

// MOUSEOVER SOBRE LAS IMG (Color / ByN) - Llamado a las fn
btn_cont_img = document.querySelectorAll(".cont_img");
for (let x of btn_cont_img){
    x.addEventListener("mouseover", function(e){
    // Si se paró con el mouse sobre un disco, muestro la imagen que corresponde
    l_nrocd = "";
    l_cd = e.target.id; 
    l_nrocd = arr_idcd.indexOf(l_cd);
    l_album = arr_idcd[l_nrocd];
    l_nrocd = l_nrocd + 1; 
    document.getElementById(l_album).addEventListener("mouseover", fn_overalbum());
    //
    x.addEventListener("mouseout", function(e){
        l_nrocd = "";
        l_cd = e.target.id; 
        l_nrocd = arr_idcd.indexOf(l_cd);
        l_album = arr_idcd[l_nrocd];
        l_nrocd = l_nrocd + 1; 
        if (l_album != null){ document.getElementById(l_album).addEventListener("mouseout", fn_outalbum());}
    })
})
}

// -------------- Eventos en los botones -------------- 
function fn_botones(){

    // Favorito o No Favorito
    btn_fav = document.querySelectorAll(".tema_fav");
    for (let x of btn_fav){
        x.addEventListener("click",function(e){
			l_bd = localStorage.getItem("albums");
			l_bd = JSON.parse(l_bd);
			if (e.target.value == "N"){
				div_padre = e.target.parentNode;
				nro_fav = div_padre.querySelector(".tema_nro").textContent;
				x.value = "S";
				x.src = "./img/ico/favon.png";
				l_bd[l_nro].temas[(nro_fav - 1)].favorito = "S";
				l_bd = JSON.stringify(l_bd);
				localStorage.setItem("albums", l_bd);}
			else{
				div_padre = e.target.parentNode;
				nro_fav = div_padre.querySelector(".tema_nro").textContent;
				x.value = "N";
				x.src = "./img/ico/favoff.png";
				l_bd[l_nro].temas[(nro_fav - 1)].favorito = "N";
				l_bd = JSON.stringify(l_bd);
				localStorage.setItem("albums", l_bd);}
		});
		x.addEventListener("mouseover",function(e){
			x.src = "./img/ico/favon.png";;
        });		
		x.addEventListener("mouseout",function(e){
			e.target.value == "N" ? x.src = "./img/ico/favoff.png" : x.src = "./img/ico/favon.png";
            // if (e.target.value == "N"){
			// 	x.src = "./img/ico/favoff.png";}				
			// else{
			// 	x.src = "./img/ico/favon.png";}
        });
    }

    // Puntaje
    btn_fav = document.querySelectorAll(".estrella");
    for (let x of btn_fav){
        x.addEventListener("click",function(e){
            l_bd = localStorage.getItem("albums");
            l_bd = JSON.parse(l_bd);	
            div_padre = e.target.parentNode;
            nro_fav = div_padre.querySelector(".tema_nro").textContent;
            l_bd[l_nro].temas[(nro_fav - 1)].puntaje = e.target.value;
            l_bd = JSON.stringify(l_bd);
            localStorage.setItem("albums", l_bd);
        });
        x.addEventListener("mouseover",function(e){
            div_padre = e.target.parentNode;
            let hnas_star =  div_padre.querySelectorAll(".estrella");
            for( let i = 0; i < e.target.value; i++){
                hnas_star[i].src = "./img/ico/staron.png";
            }
        })	
        x.addEventListener("mouseout",function(e){
            l_bd = localStorage.getItem("albums");
            l_bd = JSON.parse(l_bd);	
            div_padre = e.target.parentNode;
            nro_fav = div_padre.querySelector(".tema_nro").textContent;
            xy = l_bd[l_nro].temas[(nro_fav - 1)].puntaje;
            let hnas_star =  div_padre.querySelectorAll(".estrella");
            for (let z = 0; z < xy; z++) {
                hnas_star[z].src = "./img/ico/staron.png";}
            for (let i = xy; i < (5); i++) {
                hnas_star[i].src = "./img/ico/staroff.png";}
            });
    }

    // Playlist
    btn_add = document.querySelectorAll(".tema_add");
    for (let x of btn_add){
        x.addEventListener("click",function(e){
			l_bd = localStorage.getItem("albums");
			l_bd = JSON.parse(l_bd);
            l_divfloat.classList.remove("div_hide");
            div_padre = e.target.parentNode;
            l_tema = div_padre.querySelector(".tema_nombre").innerText;
            fn_armaplay();
            fn_addplay();
		});
		x.addEventListener("mouseover",function(e){
			x.src = "./img/ico/mason.png";
        });		
		x.addEventListener("mouseout",function(e){
			x.src = "./img/ico/masoff.png";
        });
    }
}




// Link a Playlists y Favoritos
document.getElementById("aplay").addEventListener("click", function(){
    window.location.assign("playlists.html");
});
document.getElementById("afav").addEventListener("click", function(){
    window.location.assign("favoritos.html");
});
