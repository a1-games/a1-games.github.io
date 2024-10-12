
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
    let floatparent = SpawnFloatParent(rowparent, "middle");
    floatparent.onclick = () => {
        window.open("https://github.com/a1-games/PyGame-Engine");
    };

    
    // title
    let title = SpawnImage(`pygameengine`, `textlogo.png`, floatparent);
    title.className = "float-logo-rectangle shape-shadow-black";
    title.style.margin = "3em auto auto auto";
    
    // pygame x a1
    let pyxa1logo = SpawnImage(`pygameengine`, `pygameXa1.png`, floatparent);
    pyxa1logo.className = "shape-shadow-black";
    pyxa1logo.style = "position: absolute; top: 2em; height: 2.5em; left: 6em; ";
    


    rowparent.append(floatparent);

    
    function getSpaceX()
    {
        let space = document.createElement("div");
        space.style.width = "1em";
        return space;
    }
    function getSpaceY()
    {
        let space = document.createElement("div");
        space.style.backgroundColor = "#161616";
        space.style.height = "0.5em";
        return space;
    }
    SpawnImage(`pygameengine`, `2.png`, parent);

    //parent.append(getSpaceX());
    SpawnImage(`pygameengine`, `githubdesc.jpg`, parent);
    //parent.append(getSpaceX());
    SpawnImage(`pygameengine`, `3.png`, parent);
    //parent.append(getSpaceX());
    SpawnImage(`pygameengine`, `1.png`, parent);

    
    
    rowparent.append(parent);

    MainContainer.append(getSpaceY());
    MainContainer.append(rowparent);
    MainContainer.append(getSpaceY());
}

SpawnPygameEngine();   
    
    
    
    
    
    
    
    
