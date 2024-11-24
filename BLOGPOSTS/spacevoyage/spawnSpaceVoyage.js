
// keep it in a function as to not keep variables in memory
function SpawnSpaceVoyage()
{

    // row parent
    let rowparent = document.createElement("div");
    rowparent.className = "multi-parent showcase-row-threequarters";
    
    // scrolling parent
    let parent = document.createElement("div");
    parent.className = "multi-parent sv-slider";
    
    

    // floating parent
    let floatparent = SpawnFloatParent(rowparent, "middle");
    floatparent.classList.add("sv-floatparent");
    floatparent.onclick = () => {
        window.open("https://store.steampowered.com/app/2101690/Space_Voyage_The_Puzzle_Game/");
    };

    // logo box
    let logobox = SpawnMultiRow(floatparent);
    logobox.classList.add("spacevoyage-logobox");


    // steam logo
    let steamlogo = SpawnImage(`spacevoyage`, `steamlogo.png`, logobox);
    steamlogo.className = "float-logo-square";
    
    // sv logo
    let svlogo = SpawnImage(`spacevoyage`, `sv_logo.png`, logobox);
    svlogo.className = "float-logo-rectangle shape-shadow-black";

    // comment
    SpawnCommentBox(
        "I created my first Steam release alongside\n" +
        "school while studying computer science.\n" +
        "\n" +
        "I programmed the whole game myself in Unity3D,\n" +
        "including UI and the save file system.\n" +
        "\n" +
        "The assets are all paid third party products\n" +
        "that I meticulously modified and put\n" +
        "together to look cohesive.\n"
        , floatparent);


    
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
    
    
function SpawnSpaceVoyageInfo()
{

    // row parent
    let rowparent = SpawnDiv(MainContainer, "multi-parent showcase-row-threequarters sv-display-row");
    
    // scrolling parent
    let imgParent = SpawnDiv(rowparent, "flex sv-banner");


    let img1 = SpawnElement(imgParent, "img", "sv-banner-portrait");
    img1.src = "FILES/IMG/old/spacevoyage/374x448_Thumbnail.png";
    
    let img2 = SpawnElement(imgParent, "img", "sv-banner-landscape");
    img2.src = "FILES/IMG/old/spacevoyage/460x215_Thumbnail.png";
    
    imgParent.append(img1);
    imgParent.append(img2);



    
    // scrolling parent
    let infoParent = SpawnDiv(rowparent, "sv-info-container");

    SpawnTextLine(infoParent, "a1games presents", "sv-presents");
    SpawnTextLine(infoParent, "Space Voyage", "sv-ethno");

    SpawnTextLine(infoParent, "Try the demo on Steam now!", "sv-small-title");

    SpawnTextLine(infoParent, "Old version on itch.io", "sv-small-title");
    
    
    MainContainer.append(rowparent);
}

SpawnSpaceVoyageInfo();   
    
    
    
    
    
