

function SpawnCursorInvasion()
{
    // row parent
    let rowparent = document.createElement("div");
    rowparent.className = "multi-parent showcase-row-half  of-v-h";
    
    SpawnBlogpostImage(`cursorinvasion`, `background4.png`, rowparent).classList.add("curinv-background");


    // floating parent
    let floatparent = SpawnFloatParent(rowparent, "right");
    floatparent.style.zIndex = 2;
    floatparent.style.flexDirection = "column";
    rowparent.append(floatparent);

    
    // logo
    let logo = SpawnBlogpostImage(`cursorinvasion`, `gamelogo.png`, floatparent);
    logo.className = "float-logo-rectangle";
    //logo.style.margin = "auto auto 3em auto";
    logo.style.cursor = "pointer";
    logo.onclick = () => {
        window.open("https://a1games.fun/cursor_invasion");
    };


    // trees

    
    let tree2 = SpawnBlogpostImage(`cursorinvasion`, `tree.png`, rowparent);
    tree2.classList.add("curinv-tree");
    tree2.style = "left: 5em; bottom: 74px;";
    
    let tree3 = SpawnBlogpostImage(`cursorinvasion`, `tree.png`, rowparent);
    tree3.classList.add("curinv-tree");
    tree3.style = "left: 25em; bottom: 20px;";
        
    let tree1 = SpawnBlogpostImage(`cursorinvasion`, `tree.png`, rowparent);
    tree1.classList.add("curinv-tree");
    tree1.style = "left: 18em; top: 34px;";

    
    let spider = SpawnBlogpostImage(`cursorinvasion`, `spider.png`, rowparent, " ");
    spider.classList.add("curinv-enemy");
    spider.classList.add("spider");
    spider.style.left = 300 + "px";
    spider.style.top =  100 + "px";

    let zombie = SpawnBlogpostImage(`cursorinvasion`, `zombie.png`, rowparent, "hidden-mobile");
    zombie.classList.add("curinv-enemy");
    zombie.classList.add("zombie");
    zombie.style.left = 800 + "px";
    zombie.style.top =  200 + "px";

    let tics = 0;
    MainContainer.onmousemove = (e) => {
        tics++;
        if (tics <= 12) return;
        tics = 0;

        let rowbox = rowparent.getBoundingClientRect();
        let mousepos = { x:e.pageX - rowbox.x, y:e.pageY - (window.scrollY + rowbox.top) };
        mousepos.x = clamp(mousepos.x, 0, rowbox.width);
        mousepos.y = clamp(mousepos.y, 0, rowbox.height);

        spider.style.left = (mousepos.x - 20) + "px";
        spider.style.top =  (mousepos.y - 20) + "px";
        spider.style.rotate = `${getAngleTowardsMouse(spider, mousepos)}deg`;

        zombie.style.left = (mousepos.x - 20) + "px";
        zombie.style.top =  (mousepos.y - 20) + "px";
        zombie.style.rotate = `${getAngleTowardsMouse(zombie, mousepos)}deg`;
    }
    
    
    return rowparent;
}




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




