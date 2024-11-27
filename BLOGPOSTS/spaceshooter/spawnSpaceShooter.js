

// keep it in a function as to not keep variables in memory
function SpawnSpaceShooter()
{
    // row parent
    let rowparent = document.createElement("div");
    rowparent.className = "multi-parent showcase-row-half spaceshooter-background";

    // floating parent
    let floatparent = SpawnFloatParent(rowparent, "left")




    // title
    let title = SpawnBlogpostImage(`spaceshooter`, `title.png`, floatparent);
    title.className = "float-logo-rectangle shape-shadow-black";
    //title.style.margin = "auto auto 3em auto";
    title.style.cursor = "pointer";
    title.onclick = () => {
        window.open("https://a1-games.itch.io/space-shooter");
    };
    
    
    // download
    let dlgame = SpawnBlogpostImage(`spaceshooter`, `downloadIcon.png`, rowparent);
    dlgame.className = "shape-shadow-black ss-dl-button";
    dlgame.style.margin = "auto 20vw auto auto";
    dlgame.style.zIndex = 98;
    dlgame.style.cursor = "pointer";
    dlgame.onclick = () => {
        DownloadFile(`BLOGPOSTS/spaceshooter/Space Shooter Online.exe`, `Space Shooter Online.exe`);
    };
    




    // lasers
    let laserclip = document.createElement("div");
    laserclip.className = "laser-clip";
    rowparent.append(laserclip);

    let laserscroll = document.createElement("div");
    laserscroll.className = "laser-container";
    laserclip.append(laserscroll);

    SpawnBlogpostImage(`spaceshooter`, `spaceship3.png`, rowparent).classList.add("spaceship");

    SpawnBlogpostImage(`spaceshooter`, `laserbullet_1.png`, laserscroll).classList.add("laser-bullet");
    SpawnBlogpostImage(`spaceshooter`, `laserbullet_2.png`, laserscroll).classList.add("laser-bullet");
    SpawnBlogpostImage(`spaceshooter`, `laserbullet_3.png`, laserscroll).classList.add("laser-bullet");
    SpawnBlogpostImage(`spaceshooter`, `laserbullet_4.png`, laserscroll).classList.add("laser-bullet");
    SpawnBlogpostImage(`spaceshooter`, `laserbullet_5.png`, laserscroll).classList.add("laser-bullet");
    SpawnBlogpostImage(`spaceshooter`, `laserbullet_6.png`, laserscroll).classList.add("laser-bullet");
    SpawnBlogpostImage(`spaceshooter`, `laserbullet_7.png`, laserscroll).classList.add("laser-bullet");

    SpawnBlogpostImage(`spaceshooter`, `laserbullet_1.png`, laserscroll).classList.add("laser-bullet");
    SpawnBlogpostImage(`spaceshooter`, `laserbullet_2.png`, laserscroll).classList.add("laser-bullet");
    SpawnBlogpostImage(`spaceshooter`, `laserbullet_3.png`, laserscroll).classList.add("laser-bullet");
    SpawnBlogpostImage(`spaceshooter`, `laserbullet_4.png`, laserscroll).classList.add("laser-bullet");
    SpawnBlogpostImage(`spaceshooter`, `laserbullet_5.png`, laserscroll).classList.add("laser-bullet");
    SpawnBlogpostImage(`spaceshooter`, `laserbullet_6.png`, laserscroll).classList.add("laser-bullet");
    SpawnBlogpostImage(`spaceshooter`, `laserbullet_7.png`, laserscroll).classList.add("laser-bullet");




    return rowparent;
}

    
