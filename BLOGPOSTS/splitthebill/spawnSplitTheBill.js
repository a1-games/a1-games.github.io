

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

    // indieads
    let indadlogo = SpawnBlogpostImage(`splitthebill`, `stb_title.png`, floatparent);
    indadlogo.className = "float-logo-rectangle shape-shadow-black";
    indadlogo.style.margin = "auto auto auto auto";

    rowparent.append(floatparent);

    
    return rowparent;
}

//SpawnSplitTheBill();   
    
