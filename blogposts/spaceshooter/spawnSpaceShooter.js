

// keep it in a function as to not keep variables in memory
function SpawnSpaceShooter()
{
    // row parent
    let rowparent = document.createElement("div");
    rowparent.className = "multi-parent showcase-row-threequarters stb-background";

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


    SpawnImage(`resumemaker`, `1.png`, scrollparent).classList.add("resmak-block");
    SpawnImage(`resumemaker`, `2.png`, scrollparent).classList.add("resmak-block");
    SpawnImage(`resumemaker`, `3.png`, scrollparent).classList.add("resmak-block");
    SpawnImage(`resumemaker`, `4.jpg`, scrollparent).classList.add("resmak-block");


    rowparent.append(scrollparent);
    MainContainer.append(rowparent);
}

SpawnSpaceShooter();   
    
