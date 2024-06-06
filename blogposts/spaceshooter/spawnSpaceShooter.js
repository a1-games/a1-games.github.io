

// keep it in a function as to not keep variables in memory
function SpawnSpaceShooter()
{
    // row parent
    let rowparent = document.createElement("div");
    rowparent.className = "multi-parent showcase-row-half stb-background";

    // floating parent
    let floatparent = document.createElement("div");
    floatparent.className = "multi-parent float-parent-left ";
    floatparent.style.cursor = "default";


    // title
    let title = SpawnImage(`spaceshooter`, `title.png`, floatparent);
    title.className = "float-logo-rectangle shape-shadow-black";
    title.style.margin = "auto auto 1.5em auto";
    title.style.cursor = "pointer";
    title.onclick = () => {
        window.open("https://a1-games.itch.io/space-shooter");
    };
    // made in
    let madein = SpawnImage(`spaceshooter`, `madeinpge.png`, floatparent);
    madein.className = "madeinpge shape-shadow-black";
    madein.style.cursor = "pointer";
    madein.onclick = () => {
        window.open("https://github.com/a1-games/PyGame-Engine");
    };
    
    
    // download
    let dlgame = SpawnImage(`spaceshooter`, `downloadIcon.png`, floatparent);
    dlgame.className = "shape-shadow-black";
    dlgame.style.margin = "auto auto auto 8em";
    dlgame.style.cursor = "pointer";
    dlgame.onclick = () => {
        DownloadFile(`blogposts/spaceshooter/Space Shooter Online.exe`, `Space Shooter Online.exe`);
    };
    


    rowparent.append(floatparent);

    
    // scroll parent
    let scrollparent = document.createElement("div");
    scrollparent.style = "margin: 0px; position: absolute; top: 50%; transform: translateY(-50%); display: flex; flex-direction: row; align-items: center";
    rowparent.append(scrollparent);
    SpawnImage(`spaceshooter`, `background.png`, scrollparent).classList.add("space-background");



    // lasers
    let laserclip = document.createElement("div");
    laserclip.className = "laser-clip";
    rowparent.append(laserclip);

    let laserscroll = document.createElement("div");
    laserscroll.className = "laser-container";
    laserclip.append(laserscroll);

    SpawnImage(`spaceshooter`, `spaceship3.png`, rowparent).classList.add("spaceship");

    SpawnImage(`spaceshooter`, `laserbullet_1.png`, laserscroll).classList.add("laser-bullet");
    SpawnImage(`spaceshooter`, `laserbullet_2.png`, laserscroll).classList.add("laser-bullet");
    SpawnImage(`spaceshooter`, `laserbullet_3.png`, laserscroll).classList.add("laser-bullet");
    SpawnImage(`spaceshooter`, `laserbullet_4.png`, laserscroll).classList.add("laser-bullet");
    SpawnImage(`spaceshooter`, `laserbullet_5.png`, laserscroll).classList.add("laser-bullet");
    SpawnImage(`spaceshooter`, `laserbullet_6.png`, laserscroll).classList.add("laser-bullet");
    SpawnImage(`spaceshooter`, `laserbullet_7.png`, laserscroll).classList.add("laser-bullet");

    SpawnImage(`spaceshooter`, `laserbullet_1.png`, laserscroll).classList.add("laser-bullet");
    SpawnImage(`spaceshooter`, `laserbullet_2.png`, laserscroll).classList.add("laser-bullet");
    SpawnImage(`spaceshooter`, `laserbullet_3.png`, laserscroll).classList.add("laser-bullet");
    SpawnImage(`spaceshooter`, `laserbullet_4.png`, laserscroll).classList.add("laser-bullet");
    SpawnImage(`spaceshooter`, `laserbullet_5.png`, laserscroll).classList.add("laser-bullet");
    SpawnImage(`spaceshooter`, `laserbullet_6.png`, laserscroll).classList.add("laser-bullet");
    SpawnImage(`spaceshooter`, `laserbullet_7.png`, laserscroll).classList.add("laser-bullet");




    MainContainer.append(rowparent);
}

SpawnSpaceShooter();   
    
