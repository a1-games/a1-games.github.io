

// keep it in a function as to not keep variables in memory
function SpawnResumeMaker()
{
    // row parent
    let rowparent = SpawnDiv(MainContainer, "multi-parent ");

    // floating parent
    let floatparent = SpawnFloatParent(rowparent, "middle", true)
    floatparent.onclick = () => {
        window.open(`BLOGPOSTS/resumemaker/web-resume-generator/index.html`);
    };


    // comment
    SpawnCommentBox(
        "A small tool with the essentials\n" +
        "to make a nice resume.\n" +
        "\n" +
        "Fully customizable within a defined\n" +
        "page layout.\n" +
        "\n" +
        "Download by printing to .pdf\n"
        , floatparent);
    

    // indieads
    let indadlogo = SpawnBlogpostImage(`resumemaker`, `resume_maker_title.png`, floatparent);
    indadlogo.className = "float-logo-rectangle shape-shadow-black";

    
    // scroll parent
    let scrollparent = SpawnMultiRow(rowparent);
    scrollparent.classList.add("scroll-parent");
    scrollparent.classList.add("resmak-scroll");


    SpawnBlogpostImage(`resumemaker`, `1.png`, scrollparent).classList.add("resmak-block");
    //SpawnBlogpostImage(`resumemaker`, `2.png`, scrollparent).classList.add("resmak-block");
    //SpawnBlogpostImage(`resumemaker`, `3.png`, scrollparent).classList.add("resmak-block");
    //SpawnBlogpostImage(`resumemaker`, `4.jpg`, scrollparent).classList.add("resmak-block");


    return rowparent;
}

//SpawnResumeMaker();   
    
