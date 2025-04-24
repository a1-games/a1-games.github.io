

function SpawnPackage(parent, packageLink, imgLink, title, price)
{
    let thumbBox = SpawnDiv(parent, "conmou-thumb-box no-select");

    let imgClick = SpawnElement(thumbBox, "a", "conmou-thumb-click");
    imgClick.target = "_blank";
    imgClick.href = packageLink;
    let img = SpawnElement(imgClick, "img", "conmou-thumb");
    img.src = imgLink
    
    let textBox = SpawnDiv(thumbBox, "conmou-text-box");

    let assetTitle = SpawnElement(textBox, "a", "conmou-title");
    assetTitle.innerText = title;
    assetTitle.target = "_blank";
    assetTitle.href = packageLink;

    let pricediv = SpawnDiv(textBox, "conmou-price");
    pricediv.innerText = price;

    return thumbBox;
}


function SpawnAssetStore()
{
    // row parent
    let rowparent = SpawnDiv(MainContainer, "multi-parent showcase-row-nolimit dynamic-row-col conmou-row center-kids");
    let pattern = SpawnDiv(rowparent, "conmou-pattern");

    let packagesParent = SpawnDiv(rowparent, "multi-parent showcase-row-nolimit center-kids flex conmou-packageparent ");

    let mousecontroller = SpawnPackage(packagesParent,
        "https://assetstore.unity.com/packages/tools/input-management/mouse-simulation-with-controller-301035",
        "https://assetstorev1-prd-cdn.unity3d.com/key-image/42affb66-43c0-451c-92a0-4aced5f1794e.jpg",
        "Mouse Simulation With Controller",
        "Free"
    );

    let uiPosition = SpawnPackage(packagesParent,
        "https://assetstore.unity.com/packages/tools/gui/ui-position-clamp-keep-recttransform-on-screen-315346",
        "https://assetstorev1-prd-cdn.unity3d.com/key-image/3001f35a-3acd-4a55-9ba8-47f565f46d37.jpg",
        "UI Position Clamp",
        "Free"
    );
    
    let screenshotPNG = SpawnPackage(packagesParent,
        "https://assetstore.unity.com/packages/tools/utilities/png-icon-snapper-easy-screenshots-without-background-315879",
        "https://assetstorev1-prd-cdn.unity3d.com/key-image/d929f982-7324-455f-a009-904d3f332c31.jpg",
        "PNG Icon Snapper",
        "$4.99"
    );
    
        
    let infoBox = SpawnDiv(rowparent, "showcase-row-nolimit conmou-info-box");

    let infoTitle = SpawnDiv(infoBox, "conmou-info-title");
    infoTitle.innerText = "Unity Asset Store";

    let subInfo = SpawnDiv(infoBox, "conmou-info-sub");
    subInfo.innerText = "Tools that make Unity development easier.";


}

    
    
    
SpawnAssetStore();