
function SpawnPygameEngineInfo()
{
    // put this somewhere it makes sense
    /*SpawnCommentBox(
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
        , logobox);*/

    // row parent
    let rowparent = SpawnDiv(MainContainer, "multi-parent showcase-row-nolimit dynamic-row-col ");
    
    // scrolling parent
    let imgParent = SpawnDiv(rowparent, "flex banner-img-container");


    let img1 = SpawnElement(imgParent, "img", "pygame-banner hidden-mobile");
    img1.src = "BLOGPOSTS/pygameengine/img/githubdesc.jpg";
    
    
    imgParent.append(img1);



    
    // scrolling parent
    let infoParent = SpawnDiv(rowparent, "info-container c-f-d");


    // pygame x a1
    let pyxa1logo = SpawnBlogpostImage(`pygameengine`, `pygameXa1.png`, infoParent);
    pyxa1logo.className = "pygamexa1 ";

    // title
    let title = SpawnBlogpostImage(`pygameengine`, `textlogo.png`, infoParent);
    title.className = "float-logo-rectangle pygame-title";

    SpawnTextLine(infoParent, "Game engine framework for making games in python", "sv-small-title");

    SpawnDiv(infoParent, "p-em-half");

    let iconsContainer = SpawnDiv(infoParent, "flex fd-h")
    // github logo
    let githublogo = SpawnImage(iconsContainer, `FILES/IMG/ICON/github.png`, "clickable-logo-small");
    githublogo.onclick = () => {
        window.open("https://github.com/a1-games/PyGame-Engine");
    };

    
}
    
    
    
SpawnPygameEngineInfo();
    
    
function SpawnPyGameShowcases()
{
    let rowparent = SpawnDiv(MainContainer, "multi-parent showcase-row-nolimit pge-showcase");
    let displayParent = SpawnDiv(rowparent, "pge-display flex fd-c m-a");
    
    let cursorinvation = SpawnCursorInvasion();
    displayParent.append(cursorinvation);
    
    // fake space to account for the pictures missing block
    SpawnDiv(displayParent, "p-em-one");
    // made in pygame
    let madein = SpawnBlogpostImage(`pygameengine`, `madeinpge.png`, displayParent);
    madein.className = "madeinpge icon-shadow";
    madein.style.cursor = "pointer";
    madein.onclick = () => {
        window.open("https://github.com/a1-games/PyGame-Engine");
    };


    let spaceshooter = SpawnSpaceShooter();   
    displayParent.append(spaceshooter);





}

SpawnPyGameShowcases();