

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
    let floatparent = document.createElement("div");
    floatparent.className = "multi-parent float-parent-middle ";
    floatparent.onclick = () => {
        window.open(`resumemaker`);
    };

    // github logo
    //let githublogo = SpawnImage(`indieads`, `handshake.png`, floatparent);
    //githublogo.className = "float-logo-square";

    // indieads
    let indadlogo = SpawnImage(`resumemaker`, `resume_maker_title.png`, floatparent);
    indadlogo.className = "float-logo-rectangle shape-shadow-black";
    indadlogo.style.margin = "auto auto auto auto";

    

    rowparent.append(floatparent);

    
    // scroll parent
    let scrollparent = document.createElement("div");
    scrollparent.style = "margin: 0px; position: absolute; top: 50%; transform: translateY(-50%); display: flex; flex-direction: row; align-items: center";



    
    SpawnImage(`necesse`, `1.jpg`, parent);
    SpawnImage(`necesse`, `2.jpg`, parent);
    SpawnImage(`necesse`, `1.jpg`, parent);
    SpawnImage(`necesse`, `2.jpg`, parent);
    //SpawnImage(`spacevoyage`, `3.png`, parent);
    //SpawnImage(`spacevoyage`, `8.gif`, parent);
    //SpawnImage(`spacevoyage`, `6.jpg`, parent);
    //SpawnImage(`spacevoyage`, `7.jpg`, parent);
    //SpawnImage(`spacevoyage`, `11.jpg`, parent);
    //SpawnImage(`spacevoyage`, `9.jpg`, parent);

    // create the same row twice to make the infinite scroll work
    SpawnImage(`necesse`, `1.jpg`, parent);
    SpawnImage(`necesse`, `2.jpg`, parent);
    SpawnImage(`necesse`, `1.jpg`, parent);
    SpawnImage(`necesse`, `2.jpg`, parent);
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
    
