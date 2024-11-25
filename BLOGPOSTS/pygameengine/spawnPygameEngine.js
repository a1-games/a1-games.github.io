
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
    let floatparent = SpawnFloatParent(rowparent, "middle", true);  
    floatparent.onclick = () => {
        window.open("https://github.com/a1-games/PyGame-Engine");
    };

    // logo box
    let logobox = SpawnMultiRow(floatparent);
    logobox.classList.add("pygameengine-floatparent");

    // pygame x a1
    let pyxa1logo = SpawnBlogpostImage(`pygameengine`, `pygameXa1.png`, logobox);
    pyxa1logo.className = "pygamexa1 shape-shadow-black";

    // title
    let title = SpawnBlogpostImage(`pygameengine`, `textlogo.png`, logobox);
    title.className = "float-logo-rectangle shape-shadow-black pygame-title";
    
    // comment
    SpawnCommentBox(
        "PyGame Engine ( Not A Real Engine )\n" +
        "\n" +
        "A starting project for pygame which includes\n" +
        "• GameObjects\n" +
        "• Scene Management with layers\n" +
        "• Independent scene transitions\n" +
        "• Time + deltaTime\n" +
        "• Lerp\n" +
        "• FPS-Counter\n" +
        "• Simplified game information file\n" +
        "• Easy sprite & text creation\n" +
        "and more"
        , logobox);

    


    
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
    SpawnBlogpostImage(`pygameengine`, `2.png`, parent);

    //parent.append(getSpaceX());
    SpawnBlogpostImage(`pygameengine`, `githubdesc.jpg`, parent);
    //parent.append(getSpaceX());
    SpawnBlogpostImage(`pygameengine`, `3.png`, parent);
    //parent.append(getSpaceX());
    SpawnBlogpostImage(`pygameengine`, `1.png`, parent);

    
    
    rowparent.append(parent);

    MainContainer.append(getSpaceY());
    MainContainer.append(rowparent);
    MainContainer.append(getSpaceY());
}

SpawnPygameEngine();   
    
    
    
    
    
    
    
    
