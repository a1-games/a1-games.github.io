

// keep it in a function as to not keep variables in memory
function SpawnSplitTheBill()
{
    // row parent
    let rowparent = SpawnDiv(MainContainer, " multi-parent stb-background");

    // floating parent
    let floatparent = document.createElement("div");
    floatparent.className = "multi-parent float-parent-middle ";
    floatparent.onclick = () => {
        window.open("./BLOGPOSTS/splitthebill/splitthebill.html");
        window.history.pushState("example.com/foo");
    };

    // github logo
    //let githublogo = SpawnImage(`indieads`, `handshake.png`, floatparent);
    //githublogo.className = "float-logo-square";

    // indieads
    let indadlogo = SpawnBlogpostImage(`splitthebill`, `stb_title.png`, floatparent);
    indadlogo.className = "float-logo-rectangle shape-shadow-black";
    indadlogo.style.margin = "auto auto auto auto";

    

    rowparent.append(floatparent);

    
    // scroll parent
    let scrollparent = SpawnMultiRow(rowparent);
    scrollparent.classList.add("scroll-parent");
    scrollparent.classList.add("stb-scroll");


    SpawnBlogpostImage(`splitthebill`, `1.png`, scrollparent).classList.add("stb-block");
    //SpawnBlogpostImage(`splitthebill`, `2.png`, scrollparent).classList.add("stb-block");
    //SpawnBlogpostImage(`splitthebill`, `3.png`, scrollparent).classList.add("stb-block");


    rowparent.append(scrollparent);
    
    
    return rowparent;
}

//SpawnSplitTheBill();   
    
