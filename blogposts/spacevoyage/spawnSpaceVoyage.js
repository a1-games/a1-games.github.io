
// keep it in a function as to not keep variables in memory
function SpawnSpaceVoyage()
{
    // row parent
    let rowparent = document.createElement("div");
    rowparent.className = "multi-parent showcase-row-full";
    
    // scrolling parent
    let parent = document.createElement("div");
    parent.className = "multi-parent sv-slider";
    
    

    // floating parent
    let floatparent = document.createElement("div");
    floatparent.className = "multi-parent float-parent-middle";
    floatparent.onclick = () => {
        window.open("https://store.steampowered.com/app/2101690/Space_Voyage_The_Puzzle_Game/");
    };

    // steam logo
    let steamlogo = SpawnImage(`spacevoyage`, `steamlogo.png`, floatparent);
    steamlogo.className = "float-logo-square";
    
    // sv logo
    let svlogo = SpawnImage(`spacevoyage`, `sv_logo.png`, floatparent);
    svlogo.className = "float-logo-rectangle shape-shadow-black";


    rowparent.append(floatparent);

    
    SpawnImage(`spacevoyage`, `1.jpg`, parent);
    SpawnImage(`spacevoyage`, `2.gif`, parent);
    SpawnImage(`spacevoyage`, `3.png`, parent);
    SpawnImage(`spacevoyage`, `8.gif`, parent);
    SpawnImage(`spacevoyage`, `6.jpg`, parent);
    SpawnImage(`spacevoyage`, `7.jpg`, parent);
    SpawnImage(`spacevoyage`, `11.jpg`, parent);
    SpawnImage(`spacevoyage`, `9.jpg`, parent);

    // create the same row twice to make the infinite scroll work
    SpawnImage(`spacevoyage`, `1.jpg`, parent);
    SpawnImage(`spacevoyage`, `2.gif`, parent);
    SpawnImage(`spacevoyage`, `3.png`, parent);
    SpawnImage(`spacevoyage`, `8.gif`, parent);
    SpawnImage(`spacevoyage`, `6.jpg`, parent);
    SpawnImage(`spacevoyage`, `7.jpg`, parent);
    SpawnImage(`spacevoyage`, `11.jpg`, parent);
    SpawnImage(`spacevoyage`, `9.jpg`, parent);

    
    
    rowparent.append(parent);
    MainContainer.append(rowparent);
}

SpawnSpaceVoyage();   
    
    
    
    
    
    
    
    
