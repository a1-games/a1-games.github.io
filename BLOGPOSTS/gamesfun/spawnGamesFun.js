
// manipulated gamelist with the most PG games
GAMELIST = [
    "hack_attack",
    "crab_island",
    "cursor_invasion",
    "pong_around",
    "fishing_for_humans",
    //"pissbarrel",
    "jumpingbacteria",
    //"dawnville",
    "crab_defense",
    "pong",
    //"pooprun",
    //"nut_button",
]

function SpawnRandomizedGames(parent)
{
    // [...] makes a copy instead of a reference
    // GAMELIST is loaded before this script
    list = [...GAMELIST];
    gamesCount = list.length;

    for (let i = 0; i < gamesCount; i++) {
        // get rnd index
        let rnd = Math.floor(Math.random() * list.length);
        AddGameImage(list[rnd], parent);
        list.splice(rnd, 1);
    }
    
}


function AddGameImage(gamename, parent)
{
    let image = document.createElement("img");
    image.src = `https://a1gamesfun.github.io/games/${gamename}/thumbnail.png`;
    image.classList.add("showcase-img");
    image.classList.add("gamesfun-game");
    parent.append(image);
    return image;
}





// keep it in a function as to not keep variables in memory
function SpawnGamesFun()
{
    // row parent
    let rowparent = SpawnDiv(MainContainer, "multi-parent fd-c");
    //rowparent.style.backgroundImage = `url('https://a1games.fun/files/img/mariobck.jpeg')`;
    //rowparent.style.backgroundPosition = `center`;

    let aligner = SpawnMultiRow(rowparent)
    aligner.classList.add("gamesfun-align");
    aligner.classList.add("clickable");
    aligner.onclick = () => {
        window.open("https://a1games.fun/");
    };

    let title = SpawnBlogpostImage(`gamesfun`, `textlogo.png`, aligner);
    title.className = "icon-shadow gamesfun-title";

    // scroll parent
    let scrollparent = document.createElement("div");
    scrollparent.className = "gamesfun-scroll multi-row";
    SpawnRandomizedGames(scrollparent);



    aligner.append(scrollparent);
    rowparent.append(aligner);
    
    return rowparent;
}

//SpawnGamesFun();   
    