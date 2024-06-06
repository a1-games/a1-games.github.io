
// keep it in a function as to not keep variables in memory
function SpawnPygameEngine()
{
    // row parent
    let rowparent = document.createElement("div");
    rowparent.className = "multi-parent showcase-row-threequarters";
    
    // scrolling parent
    let parent = document.createElement("div");
    parent.className = "multi-parent ";
    
    

    // floating parent
    let floatparent = document.createElement("div");
    floatparent.className = "multi-parent float-parent-left";
    floatparent.onclick = () => {
        window.open("https://github.com/a1-games/PyGame-Engine");
    };

    // github logo
    let githublogo = SpawnImage(`pygameengine`, `github.png`, floatparent);
    githublogo.className = "float-logo-square";
    
    // pygame x a1
    let pyxa1logo = SpawnImage(`pygameengine`, `pygameXa1.png`, floatparent);
    pyxa1logo.className = "float-logo-rectangle";
    pyxa1logo.style.margin = "auto auto auto 3em";

    


    rowparent.append(floatparent);

    
    SpawnImage(`pygameengine`, `2.png`, parent);
    SpawnImage(`pygameengine`, `githubdesc.jpg`, parent);
    SpawnImage(`pygameengine`, `3.png`, parent);
    SpawnImage(`pygameengine`, `1.png`, parent);

    
    
    rowparent.append(parent);
    MainContainer.append(rowparent);
}

SpawnPygameEngine();   
    
    
    
    
    
    
    
    
