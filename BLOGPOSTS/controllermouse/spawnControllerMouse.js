

function SpawnControllerMouse()
{
    let link = "https://assetstore.unity.com/packages/tools/input-management/mouse-simulation-with-controller-301035";

    // row parent
    let rowparent = SpawnDiv(MainContainer, "multi-parent showcase-row-nolimit dynamic-row-col jsproj-showcase ");
    
    // 
    let title = SpawnDiv(rowparent, "flex true-center jsproj-title");
    title.innerText = "C# Projects";


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


}
    
    
    
SpawnControllerMouse();