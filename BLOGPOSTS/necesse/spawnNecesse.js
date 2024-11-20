

// keep it in a function as to not keep variables in memory
function SpawnNecesse()
{
    // row parent
    let rowparent = document.createElement("div");
    rowparent.className = "multi-parent showcase-row-full";
    
    // scrolling parent
    let parent = document.createElement("div");
    parent.className = "multi-parent necesse-slider";
    
    

    // floating parent
    let floatparentleft = SpawnFloatParent(rowparent, "left", true);  
    floatparentleft.onclick = () => {
        window.open("https://necessegame.com/");
    };


    // logo box
    let logobox = SpawnMultiRow(floatparentleft);
    logobox.style.flexDirection = "column";
    //logobox.classList.add("spacevoyage-logobox");

    // necesse logo
    let neclogo = SpawnImage(`necesse`, `necesse_logo.png`, logobox);
    neclogo.className = "float-logo-rectangle shape-shadow-black";

    // internship line
    let intshipline = document.createElement("div");
    intshipline.innerText = "Internship"
    intshipline.className = "intshipline";
    logobox.append(intshipline);
    
    // comment
    SpawnCommentBox(
        "September 16 -> October 11, 2024\n" +
        "Internship at Fair Games as\n" +
        "Gameplay Programmer.\n" +
        "\n" +
        "Worked in a proprietary Game Engine,\n" +
        "programming in Java.\n" +
        "\n" +
        "Pictures include things I created:\n" +
        "• Witch & Evil Witch Castle\n" +
        "• Randomly Generated Cave Rivers With Bridges\n" +
        "• Necrotic Weapon Set\n" +
        "• Trenchcoat Goblin\n" +
        "• Randomly Generated Farm Houses\n"
        , logobox);


    
    SpawnImage(`necesse`, `1.jpg`, parent);
    SpawnImage(`necesse`, `2.jpg`, parent);
    SpawnImage(`necesse`, `3.jpg`, parent);
    SpawnImage(`necesse`, `4.jpg`, parent);
    SpawnImage(`necesse`, `5.jpg`, parent);
    //SpawnImage(`spacevoyage`, `3.png`, parent);
    //SpawnImage(`spacevoyage`, `8.gif`, parent);
    //SpawnImage(`spacevoyage`, `6.jpg`, parent);
    //SpawnImage(`spacevoyage`, `7.jpg`, parent);
    //SpawnImage(`spacevoyage`, `11.jpg`, parent);
    //SpawnImage(`spacevoyage`, `9.jpg`, parent);

    // create the same row twice to make the infinite scroll work
    SpawnImage(`necesse`, `1.jpg`, parent);
    SpawnImage(`necesse`, `2.jpg`, parent);
    SpawnImage(`necesse`, `3.jpg`, parent);
    SpawnImage(`necesse`, `4.jpg`, parent);
    SpawnImage(`necesse`, `5.jpg`, parent);
    //SpawnImage(`spacevoyage`, `3.png`, parent);
    //SpawnImage(`spacevoyage`, `8.gif`, parent);
    //SpawnImage(`spacevoyage`, `6.jpg`, parent);
    //SpawnImage(`spacevoyage`, `7.jpg`, parent);
    //SpawnImage(`spacevoyage`, `11.jpg`, parent);
    //SpawnImage(`spacevoyage`, `9.jpg`, parent);

    
    rowparent.append(parent);
    MainContainer.append(rowparent);
}

SpawnNecesse();   
    
