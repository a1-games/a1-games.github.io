

// keep it in a function as to not keep variables in memory
function SpawnNecesse()
{
    // row parent
    let rowparent = document.createElement("div");
    rowparent.className = "multi-parent showcase-row-full necesse-showcase";
    
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
    let neclogo = SpawnBlogpostImage(`necesse`, `necesse_logo.png`, logobox);
    neclogo.className = "float-logo-rectangle shape-shadow-black";
    
    // comment
    SpawnCommentBox(
        "Fair Games\n" +
        "-\n" +
        "September 16 -> October 11, 2024\n" +
        "Gameplay Programmer (Internship)\n" +
        "-\n" +
        "July -> December, 2025\n" +
        "Gameplay Programmer\n" +
        "\n" +
        "Language: Java (Proprietary Game Engine)\n" +
        "\n" +
        "Implemented over 300 sounds\n" +
        "Added new mobs and items\n" +
        "Collaborated with great colleagues\n" +
        "Helped bring the game from early access to release\n"
        , logobox);


    
    SpawnBlogpostImage(`necesse`, `1.jpg`, parent);
    SpawnBlogpostImage(`necesse`, `2.jpg`, parent);
    SpawnBlogpostImage(`necesse`, `3.jpg`, parent);
    SpawnBlogpostImage(`necesse`, `4.jpg`, parent);
    SpawnBlogpostImage(`necesse`, `5.jpg`, parent);
    //SpawnBlogpostImage(`spacevoyage`, `3.png`, parent);
    //SpawnBlogpostImage(`spacevoyage`, `8.gif`, parent);
    //SpawnBlogpostImage(`spacevoyage`, `6.jpg`, parent);
    //SpawnBlogpostImage(`spacevoyage`, `7.jpg`, parent);
    //SpawnBlogpostImage(`spacevoyage`, `11.jpg`, parent);
    //SpawnBlogpostImage(`spacevoyage`, `9.jpg`, parent);

    // create the same row twice to make the infinite scroll work
    SpawnBlogpostImage(`necesse`, `1.jpg`, parent);
    SpawnBlogpostImage(`necesse`, `2.jpg`, parent);
    SpawnBlogpostImage(`necesse`, `3.jpg`, parent);
    SpawnBlogpostImage(`necesse`, `4.jpg`, parent);
    SpawnBlogpostImage(`necesse`, `5.jpg`, parent);
    //SpawnBlogpostImage(`spacevoyage`, `3.png`, parent);
    //SpawnBlogpostImage(`spacevoyage`, `8.gif`, parent);
    //SpawnBlogpostImage(`spacevoyage`, `6.jpg`, parent);
    //SpawnBlogpostImage(`spacevoyage`, `7.jpg`, parent);
    //SpawnBlogpostImage(`spacevoyage`, `11.jpg`, parent);
    //SpawnBlogpostImage(`spacevoyage`, `9.jpg`, parent);

    
    rowparent.append(parent);
    MainContainer.append(rowparent);
}

SpawnNecesse();   
    
