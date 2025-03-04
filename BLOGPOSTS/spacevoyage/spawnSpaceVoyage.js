
// keep it in a function as to not keep variables in memory
function SpawnSpaceVoyage()
{

    // row parent
    let rowparent = document.createElement("div");
    rowparent.className = "multi-parent showcase-row-threequarters";
    MainContainer.append(rowparent);
    
    // scrolling parent
    let parent = document.createElement("div");
    parent.className = "multi-parent sv-slider";
    rowparent.append(parent);
    
    

    // floating parent
    let floatparent = SpawnFloatParent(rowparent, "middle");
    floatparent.classList.add("sv-floatparent");
    floatparent.onclick = () => {
        window.open("https://store.steampowered.com/app/2101690/Space_Voyage_The_Puzzle_Game/");
    };

    // logo box
    //let logobox = SpawnMultiRow(floatparent);
    //logobox.classList.add("spacevoyage-logobox");


    // steam logo
    //let steamlogo = SpawnBlogpostImage(`spacevoyage`, `steamlogo.png`, logobox);
    //steamlogo.className = "float-logo-square";
    
    // sv logo
    //let svlogo = SpawnBlogpostImage(`spacevoyage`, `sv_logo.png`, logobox);
    //svlogo.className = "float-logo-rectangle shape-shadow-black";




    
    SpawnBlogpostImage(`spacevoyage`, `1.jpg`, parent);
    SpawnBlogpostImage(`spacevoyage`, `2.gif`, parent);
    SpawnBlogpostImage(`spacevoyage`, `3.png`, parent);
    SpawnBlogpostImage(`spacevoyage`, `8.gif`, parent);
    SpawnBlogpostImage(`spacevoyage`, `6.jpg`, parent);
    SpawnBlogpostImage(`spacevoyage`, `7.jpg`, parent);
    SpawnBlogpostImage(`spacevoyage`, `11.jpg`, parent);
    SpawnBlogpostImage(`spacevoyage`, `9.jpg`, parent);

    // create the same row twice to make the infinite scroll work
    SpawnBlogpostImage(`spacevoyage`, `1.jpg`, parent);
    SpawnBlogpostImage(`spacevoyage`, `2.gif`, parent);
    SpawnBlogpostImage(`spacevoyage`, `3.png`, parent);
    SpawnBlogpostImage(`spacevoyage`, `8.gif`, parent);
    SpawnBlogpostImage(`spacevoyage`, `6.jpg`, parent);
    SpawnBlogpostImage(`spacevoyage`, `7.jpg`, parent);
    SpawnBlogpostImage(`spacevoyage`, `11.jpg`, parent);
    SpawnBlogpostImage(`spacevoyage`, `9.jpg`, parent);

    
    // steam widget
    //let frame = document.createElement("iframe");
    //frame.src = "https://store.steampowered.com/widget/2101690/";
    //frame.className = "steam-widget-iframe ";//hidden-mobile";
    //frame.frameborder = 0;
    //rowparent.append(frame);
    SpawnSteamWidget(rowparent, 2101690);

    
}

    
    
function SpawnSpaceVoyageInfo()
{

    // row parent
    let rowparent = SpawnDiv(MainContainer, "multi-parent showcase-row-nolimit dynamic-row-col of-v center-kids");
    MainContainer.append(rowparent);
    
    // scrolling parent
    let imgParent = SpawnDiv(rowparent, "flex banner-img-container m-h-0");


    let img1 = SpawnElement(imgParent, "img", "sv-banner-portrait");
    img1.src = "FILES/IMG/old/spacevoyage/374x448_Thumbnail.png";
    
    let img2 = SpawnElement(imgParent, "img", "sv-banner-landscape");
    img2.src = "FILES/IMG/old/spacevoyage/460x215_Thumbnail.png";
    
    imgParent.append(img1);
    imgParent.append(img2);



    // v-space on mobile
    SpawnDiv(rowparent, "p-em-half hidden-pc");
    
    // info parent
    let infoParent = SpawnDiv(rowparent, "info-container c-f-d m-h-0");

    SpawnTextLine(infoParent, "a1games presents", "sv-presents");
    SpawnTextLine(infoParent, "Space Voyage", "sv-ethno");
    SpawnDiv(infoParent, "p-em-half");
    SpawnTextLine(infoParent, "Get it on steam or try it on itch.io", "sv-small-title");

    SpawnDiv(infoParent, "p-em-half");

    let iconsContainer = SpawnDiv(infoParent, "flex fd-h")
    // steam logo
    let steamlogo = SpawnImage(iconsContainer, `FILES/IMG/ICON/steam.png`, "clickable-logo-small");
    steamlogo.onclick = () => {
        window.open("https://store.steampowered.com/app/2101690/Space_Voyage_The_Puzzle_Game/");
    };
    // steam logo
    let itchlogo = SpawnImage(iconsContainer, `FILES/IMG/ICON/itch.png`, "clickable-logo-small");
    itchlogo.onclick = () => {
        window.open("https://a1creator.itch.io/spacevoyage");
    };


    

    // comment
    SpawnCommentBox(
        "I created my first Steam release in my\n" +
        "free time while studying computer science.\n" +
        "\n" +
        "I programmed the whole game in Unity3D,\n" +
        "including UI and the save file system.\n" +
        "\n" +
        "The assets are all paid third party products\n" +
        "that I meticulously modified and put\n" +
        "together to look cohesive.\n"
        , rowparent, "m-h-0 hidden-mobile sv-comment");
}

SpawnSpaceVoyageInfo();   
SpawnSpaceVoyage();   
    
    
    
    
    
