

// keep it in a function as to not keep variables in memory
function SpawnResumeMaker()
{
    // row parent
    let rowparent = document.createElement("div");
    rowparent.className = "multi-parent showcase-row-threequarters stb-background";

    // floating parent
    let floatparent = SpawnFloatParent(rowparent, "middle", false)
    floatparent.onclick = () => {
        window.open(`resumemaker`);
    };


    // comment
    SpawnCommentBox(
        "A small tool with the essentials\n" +
        "to make a nice resume.\n" +
        "\n" +
        "Fully customizable within a defined\n" +
        "page layout.\n" +
        "\n" +
        "Download by printing to .pdf\n"
        , floatparent);
    

    // indieads
    let indadlogo = SpawnImage(`resumemaker`, `resume_maker_title.png`, floatparent);
    indadlogo.className = "float-logo-rectangle shape-shadow-black";
    indadlogo.style.margin = "auto auto auto 2em";

    
    // scroll parent
    let scrollparent = document.createElement("div");
    scrollparent.style = "margin: 0px; position: absolute; top: 50%; transform: translateY(-50%); display: flex; flex-direction: row; align-items: center";


    SpawnImage(`resumemaker`, `1.png`, scrollparent).classList.add("resmak-block");
    SpawnImage(`resumemaker`, `2.png`, scrollparent).classList.add("resmak-block");
    SpawnImage(`resumemaker`, `3.png`, scrollparent).classList.add("resmak-block");
    SpawnImage(`resumemaker`, `4.jpg`, scrollparent).classList.add("resmak-block");


    rowparent.append(scrollparent);
    MainContainer.append(rowparent);
}

SpawnResumeMaker();   
    
