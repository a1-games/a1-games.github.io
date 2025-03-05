

function SpawnControllerMouse()
{
    let link = "https://assetstore.unity.com/packages/tools/input-management/mouse-simulation-with-controller-301035";

    // row parent
    let rowparent = SpawnDiv(MainContainer, "multi-parent showcase-row-nolimit dynamic-row-col conmou-row center-kids");
    

    //
    let thumbBox = SpawnDiv(rowparent, "conmou-thumb-box");

    let imgClick = SpawnElement(thumbBox, "a", "conmou-thumb-click");
    imgClick.target = "_blank";
    imgClick.href = link;
    let img = SpawnElement(imgClick, "img", "conmou-thumb");
    img.src = "https://assetstorev1-prd-cdn.unity3d.com/key-image/42affb66-43c0-451c-92a0-4aced5f1794e.jpg";
    
    let textBox = SpawnDiv(thumbBox, "conmou-text-box");

    let assetTitle = SpawnElement(textBox, "a", "conmou-title");
    assetTitle.innerText = "Mouse Simulation With Controller";
    assetTitle.target = "_blank";
    assetTitle.href = link;

    let price = SpawnDiv(textBox, "conmou-price");
    price.innerText = "Free";


    //
    let infoBox = SpawnDiv(rowparent, "conmou-info-box");

    let infoTitle = SpawnDiv(infoBox, "conmou-info-title");
    infoTitle.innerText = "Unity Asset Store";

    let subInfo = SpawnDiv(infoBox, "conmou-info-sub");
    subInfo.innerText = "Released a package that lets you control the mouse cursor with a controller by just dragging a prefab into a scene.";



}
    
    
    
SpawnControllerMouse();