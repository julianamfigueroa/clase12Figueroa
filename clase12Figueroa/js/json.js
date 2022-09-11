let arr_albums = [];
let new_cancion;
let l_albums = [];
let l_temas = [];

l_bd = localStorage.getItem("albums");
l_bd = JSON.parse(l_bd);

if (l_bd == null){
        class Album{
            constructor(id_album, nombre, temas){
                this.id_album = id_album;
                this.nombre = nombre;
                this.temas = temas;
            }
        }

        class Tema{
            constructor(id_cancion, nombre, puntaje, favorito){
                this.id_cancion = id_cancion;
                this.nombre = nombre;
                this.puntaje = puntaje;
                this.favorito = favorito;
            }
        }

        arr_albums = [[1, "Taylor Swift (Debut)", ["Tim McGraw", "Picture to Burn", "Teardrops on My Guitar","A Place in the World", "Cold as You", "The Outside", "Tied Together with a Smile", "Stay Beautiful",  "Should've Said No", "Mary's Song (Oh my my my)",  "Our Song", "I'm Only Me when I'm With You", "Invisible", "A Perfectly Good Heart"]], 
                    [2, "Fearless (Taylor's Version)", ["Fearless", "Fifteen", "Love Story","Hey Stephen", "White Horse", "You Belong With Me", "Breathe",  "Tell Me Why", "You're Not Sorry", "The Way I Loved You", "Forever & Always", "The Best Day", "Change", "Jump Then Fall", "Untouchable","The Other Side of The Door", "Today Was A Fairytale", "You All Over Me", "Mr. Perfectly Fine (From The Vault)", "We Were Happy (From The Vault)", "That's When (From The Vault)", "Don't You (From The Vault)", "Bye Bye Baby (From The Vault)"]],
                    [3, "Speak Now", ["Mine", "Sparks Fly", "Back To December", "Speak Now", "Dear John", "Mean", "The Story Of Us", "Never Grow Up", "Enchanted", "Better Than Revenge", "Innocent", "Haunted", "Last Kiss", "Long Live"]], 
                    [4, "Red (Taylor's Version)", ["State Of Grace", "Red", "Treacherous", "I Knew You Were Trouble", "All Too Well", "22", "I Almost Do", "We Are Never Ever Getting Back Together", "Stay Stay Stay", "The Last Time", "Holy Ground", "Sad Beautiful Tragic", "The Lucky One", "Everything Has Changed", "Starlight", "Begin Again", "The Moment I Knew", "Come Back...Be Here", "Girl At Home", "Ronan", "Better Man (From The Vault)", "Nothing New (From The Vault)", "Babe (From The Vault)", "Message In A Bottle (From The Vault)", "I Bet You Think About Me (From The Vault)", "Forever Winter (From The Vault)", "Run (From The Vault)", "The Very First Night (From The Vault)", "All Too Well (10 Minute Version) (From The Vault)"]], 
                    [5, "1989",["Welcome To New York","Blank Space","Style","Out Of The Woods","All You Had To do Was Stay","Shake It Off","I Wish You Would","Bad Blood","Wildest Dreams","How You Get the Girl","This Love","I Know Places","Clean","Wonderland","You Are in Love","New Romantics"]], 
                    [6, "Reputation", ["...Ready For It?","End Game (feat. Ed Sheeran & Future)","I Did Something Bad","Don’t Blame Me","Delicate","Look What You Made Me Do","So It Goes…","Gorgeous","Getaway Car","King Of My Heart","Dancing With Our Hands Tied","Dress","This Is Why We Can’t Have Nice Things","Call It What You Want","New Year’s Day"]], 
                    [7, "Lover", ["I Forgot That You Existed", "Cruel Summer", "Lover", "The Man", "The Archer", "I Think He Knows", "Miss Americana & The Heartbreak Prince", "Paper Rings", "Cornelia Street", "Death By A Thousand Cuts", "London Boy", "Soon You'll Get Better (feat. Dixie Chicks)", "False God", "You Need To Calm Down", "Afterglow", "ME! (feat. Brendon Urie)", "It's Nice To Have A Friend", "Daylight"]], 
                    [8, "Folklore", ["the 1", "cardigan", "the last great american dynasty", "exile", "my tears ricochet", "mirrorball", "seven", "august", "this is me trying", "illicit affairs", "invisible string", "mad woman", "epiphany", "betty", "peace", "hoax", "the lakes"]], 
                    [9, "Evermore", ["willow", "champagne problems", "gold rush", "'tis the damn season", "tolerate it", "no body, no crime (feat. HAIM)", "happiness", "dorothea", "coney island (feat. The National)", "ivy", "cowboy like me", "long story short", "marjorie", "closure", "evermore (feat. Bon Iver)"]],
                    [10, "Midnights", ["Proximamente"]]]; 

        for (let i = 0; i < arr_albums.length ; i++){
            l_temas = [];
            for (let x = 0; x < arr_albums[i][2].length ; x++){
                new_cancion = new Tema((x+1), (arr_albums[i][2][x]), 0, "N");
                l_temas.push(new_cancion);
            }
            let new_album = new Album((i+1), (arr_albums[i][1]), l_temas);
            l_albums.push(new_album);
        }

        let arr_json = JSON.stringify(l_albums);
        localStorage.setItem("albums", arr_json);

}
