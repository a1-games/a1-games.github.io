


function SpawnCursorInvasion()
{
    // row parent
    let rowparent = document.createElement("div");
    rowparent.className = "multi-parent showcase-row-threequarters";
    
    SpawnImage(`cursorinvasion`, `background4.png`, rowparent).classList.add("curinv-background");


    // floating parent
    let floatparent = document.createElement("div");
    floatparent.className = "multi-parent float-parent-right";
    floatparent.style = "z-index: 2; cursor: default;";
    rowparent.append(floatparent);

    
    // logo
    let logo = SpawnImage(`cursorinvasion`, `gamelogo.png`, floatparent);
    logo.className = "float-logo-rectangle";
    logo.style.margin = "auto auto 3em auto";
    logo.style.cursor = "pointer";
    logo.onclick = () => {
        window.open("https://a1games.fun/pygameplayer.html");
    };
    // made in
    let madein = SpawnImage(`pygameengine`, `madeinpge.png`, floatparent);
    madein.className = "madeinpge shape-shadow-black";
    madein.style.cursor = "pointer";
    madein.onclick = () => {
        window.open("https://github.com/a1-games/PyGame-Engine");
    };


    // trees

    let tree1 = SpawnImage(`cursorinvasion`, `tree.png`, rowparent);
    tree1.classList.add("curinv-tree");
    tree1.style = "left: 25vw; top: 74px;";

    let tree2 = SpawnImage(`cursorinvasion`, `tree.png`, rowparent);
    tree2.classList.add("curinv-tree");
    tree2.style = "left: 35vw; bottom: 74px;";

    let tree3 = SpawnImage(`cursorinvasion`, `tree.png`, rowparent);
    tree3.classList.add("curinv-tree");
    tree3.style = "left: 65vw; bottom: 180px;";
    
    
        
    
    let spider = SpawnImage(`cursorinvasion`, `spider.png`, rowparent);
    spider.classList.add("curinv-enemy");
    spider.classList.add("spider");
    spider.style.left = 300 + "px";
    spider.style.top =  100 + "px";

    let zombie = SpawnImage(`cursorinvasion`, `zombie.png`, rowparent);
    zombie.classList.add("curinv-enemy");
    zombie.classList.add("zombie");
    zombie.style.left = 800 + "px";
    zombie.style.top =  200 + "px";

    rowparent.onmousemove = (e) => {
        let rowbox = rowparent.getBoundingClientRect();
        let mousepos = { x:e.pageX, y:e.pageY - (window.scrollY + rowbox.top) };

        spider.style.left = (mousepos.x - 20) + "px";
        spider.style.top =  (mousepos.y - 20) + "px";
        spider.style.rotate = `${getAngleTowardsMouse(spider, mousepos)}deg`;

        zombie.style.left = (mousepos.x - 20) + "px";
        zombie.style.top =  (mousepos.y - 20) + "px";
        zombie.style.rotate = `${getAngleTowardsMouse(zombie, mousepos)}deg`;
    }
    
    
    MainContainer.append(rowparent);
}

SpawnCursorInvasion();



function getAngleTowardsMouse(elem, mousepos)
{

    var X = elem.offsetLeft + elem.offsetWidth/2;
    var Y = elem.offsetTop +  elem.offsetHeight/2;
    
    var dX = X - mousepos.x;
    var dY = Y - mousepos.y;

    var degree = Math.atan(- dX / dY) * 180 / Math.PI;
    
    if (dY < 0)
    {
        degree += 180   
    }

    if (degree == NaN)
        degree = 0;
    
    return degree;
}




