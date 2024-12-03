
function SpawnJsProjectsInfo()
{
    

    // row parent
    let rowparent = SpawnDiv(MainContainer, "multi-parent showcase-row-nolimit dynamic-row-col jsproj-showcase ");
    
    // 
    let title = SpawnDiv(rowparent, "flex true-center jsproj-title");
    title.innerText = "Javascript Projects";

    
    let gridbox = SpawnDiv(rowparent, "jsproj-grid");
    
    let splitthebill = SpawnSplitTheBill();
    gridbox.append(splitthebill);

    let indieads = SpawnIndieAds();
    gridbox.append(indieads);

    let resumemaker = SpawnResumeMaker();   
    gridbox.append(resumemaker);

    let gamesfun = SpawnGamesFun();
    gridbox.append(gamesfun);
}
    
    
    
SpawnJsProjectsInfo();