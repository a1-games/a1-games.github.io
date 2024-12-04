
function SpawnJsProjectsInfo()
{
    

    // row parent
    let rowparent = SpawnDiv(MainContainer, "multi-parent showcase-row-nolimit dynamic-row-col jsproj-showcase ");
    
    // 
    let title = SpawnDiv(rowparent, "flex true-center jsproj-title");
    title.innerText = "Javascript Projects";

    
    let gridbox = SpawnDiv(rowparent, "jsproj-grid");
    
    let splitthebill = SpawnSplitTheBill();
    splitthebill.classList.add("jsproj-grid-item");
    gridbox.append(splitthebill);

    //let indieads = SpawnIndieAds();
    //indieads.classList.add("jsproj-grid-item");
    //gridbox.append(indieads);

    let resumemaker = SpawnResumeMaker();   
    resumemaker.classList.add("jsproj-grid-item");
    gridbox.append(resumemaker);

    let gamesfun = SpawnGamesFun();
    gamesfun.classList.add("jsproj-grid-item");
    gridbox.append(gamesfun);
}
    
    
    
SpawnJsProjectsInfo();