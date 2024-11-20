

// keep it in a function as to not keep variables in memory
function SpawnSpaceShooter()
{
    // row parent
    let rowparent = document.createElement("div");
    rowparent.className = "multi-parent showcase-row-half spaceshooter-background";

    // floating parent
    let floatparent = SpawnFloatParent(rowparent, "middle")


    
    // floating children
    let gameInfo_Parent = SpawnMultiRow(rowparent);
    gameInfo_Parent.classList.add("spaceshooter-gameinfo");
    //rowparent.append(gameInfo_Parent);

    let gameIcon_Parent = document.createElement("div");
    gameIcon_Parent.style.margin = "auto";
    gameInfo_Parent.append(gameIcon_Parent);


    // title
    let title = SpawnImage(`spaceshooter`, `title.png`, gameIcon_Parent);
    title.className = "float-logo-rectangle shape-shadow-black";
    //title.style.margin = "auto auto 3em auto";
    title.style.cursor = "pointer";
    title.onclick = () => {
        window.open("https://a1-games.itch.io/space-shooter");
    };
    // made in
    let madein = SpawnImage(`pygameengine`, `madeinpge.png`, gameIcon_Parent);
    madein.className = "madeinpge shape-shadow-black";
    madein.style.cursor = "pointer";
    madein.onclick = () => {
        window.open("https://github.com/a1-games/PyGame-Engine");
    };
    
    
    // download
    let dlgame = SpawnImage(`spaceshooter`, `downloadIcon.png`, gameInfo_Parent);
    dlgame.className = "shape-shadow-black ss-dl-button";
    dlgame.style.margin = "auto auto auto 8em";
    dlgame.style.zIndex = 98;
    dlgame.style.cursor = "pointer";
    dlgame.onclick = () => {
        DownloadFile(`blogposts/spaceshooter/Space Shooter Online.exe`, `Space Shooter Online.exe`);
    };
    



    
    // scroll parent
    let scrollparent = document.createElement("div");
    scrollparent.style = "margin: 0px; position: absolute; top: 50%; transform: translateY(-50%); display: flex; flex-direction: row; align-items: center";
    rowparent.append(scrollparent);
    //SpawnImage(`spaceshooter`, `background.png`, scrollparent).classList.add("space-background");



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
    
