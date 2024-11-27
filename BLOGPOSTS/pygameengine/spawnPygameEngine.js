
    
    
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
    let rowparent = SpawnDiv(MainContainer, "multi-parent showcase-row-nolimit sv-display-row");
    
    // scrolling parent
    let imgParent = SpawnDiv(rowparent, "flex banner-img-container");


    let img1 = SpawnElement(imgParent, "img", "pygame-banner");
    img1.src = "BLOGPOSTS/pygameengine/img/githubdesc.jpg";
    
    
    imgParent.append(img1);



    SpawnDiv(rowparent, "p-em-half hidden-pc");
    
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

    
    MainContainer.append(rowparent);
}
    
    
    
SpawnPygameEngineInfo();
    
    
    
