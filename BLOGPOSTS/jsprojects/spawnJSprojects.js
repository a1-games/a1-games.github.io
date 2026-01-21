
function SpawnJsProjectsInfo()
{
    

    // row parent
    let rowparent = SpawnDiv(MainContainer, "multi-parent showcase-row-nolimit dynamic-row-col jsproj-showcase ");
    
    // 
    let title = SpawnDiv(rowparent, "flex true-center jsproj-title");
    title.innerText = "Javascript Projects";

    
    let gridbox = SpawnDiv(rowparent, "jsproj-grid");
    
    let indieads = SpawnIndieAds();
    indieads.classList.add("jsproj-grid-item");
    gridbox.append(indieads);

    let splitthebill = SpawnSplitTheBill();
    splitthebill.classList.add("jsproj-grid-item");
    gridbox.append(splitthebill);
    
    /*let gamesfun = SpawnGamesFun();
    gamesfun.classList.add("jsproj-grid-item");
    gridbox.append(gamesfun);*/


    let resumemaker = SpawnResumeMaker();   
    resumemaker.classList.add("jsproj-grid-item");
    gridbox.append(resumemaker);

}
    
    
    
SpawnJsProjectsInfo();