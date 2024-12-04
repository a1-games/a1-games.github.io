function AppendNewIndieAd(AdResolution, parent, extraclassnames)
{
    let elem = document.createElement("div");
    elem.className = "indieads " + `${extraclassnames}`;
    spawnIndieAd_ImageOnly(elem, AdResolution);
    parent.append(elem);
    return elem;
}



function SpawnIndieAdsSculpture(parent)
{
    let container = SpawnDiv(parent, "multi-parent");
}






// keep it in a function as to not keep variables in memory
function SpawnIndieAds()
{
    // row parent
    let rowparent = SpawnDiv(MainContainer, "multi-parent indieads-showcase");

    
    // scroll parent
    let scrollparent = SpawnDiv(rowparent, "indieads-scrollparent clickable");
    scrollparent.onclick = () => {
        window.open("https://indieads.github.io/");
    };


    AppendNewIndieAd(AdResolutions.Portrait_600x900, scrollparent, "indiead-display indieads-display-600");
    AppendNewIndieAd(AdResolutions.Landscape_616x353, scrollparent, "indiead-display indieads-display-616");
    AppendNewIndieAd(AdResolutions.Landscape_460x215, scrollparent, "indiead-display indieads-display-460");
    AppendNewIndieAd(AdResolutions.Landscape_231x87, scrollparent, "indiead-display indieads-display-231");
    AppendNewIndieAd(AdResolutions.Banner_320x50, scrollparent, "indiead-display indieads-display-350");


    // logo box
    let logobox = SpawnMultiRow(scrollparent);
    logobox.classList.add("indieads-logobox");

    // indieads logo
    let ialogo = SpawnBlogpostImage(`indieads`, `handshake.png`, logobox);
    ialogo.className = "float-logo-square";

    let indieadTitle = SpawnDiv(logobox, "indieads-title shape-shadow-black");
    indieadTitle.innerText = "IndieAds";

    // comment
    let comment = SpawnCommentBox(
        "IndieAds is a proof of concept for " +
        "a collaborative advertisement API " +
        "meant to allow indie developers to " +
        "advertise completely free of cost.\n" +
        "\n" +
        "The payment for getting free advertisement " +
        "is using the API in your own product.\n" +
        "\n" +
        "\"You give some, you get some\"\n"
        , rowparent);
    comment.classList.add("indieads-comment");




    return rowparent;
    // this is old code but may be useful at some point
    let adSpawns = [
        function () { return AppendNewIndieAd(AdResolutions.Portrait_374x448, scrollparent, "indiead-medium"); },
        function () { return AppendNewIndieAd(AdResolutions.Landscape_616x353, scrollparent, "indiead-medium"); },
        function () { return AppendNewIndieAd(AdResolutions.Portrait_600x900, scrollparent, "indiead-medium"); },
        function () {
            let three = document.createElement("div");
            AppendNewIndieAd(AdResolutions.Landscape_231x87, three, "indiead-medium");
            AppendNewIndieAd(AdResolutions.Landscape_460x215, three, "indiead-medium");
            AppendNewIndieAd(AdResolutions.Banner_320x50, three, "indiead-medium");
            AppendNewIndieAd(AdResolutions.Landscape_616x353, three, "indiead-medium");
            scrollparent.append(three);
            return three;
        },
        function () {
            let five = document.createElement("div");
            AppendNewIndieAd(AdResolutions.Banner_320x50, five, "indiead-medium");
            AppendNewIndieAd(AdResolutions.Landscape_616x353, five, "indiead-medium");
            AppendNewIndieAd(AdResolutions.Banner_320x50, five, "indiead-medium");
            scrollparent.append(five);
            return five;
        },
        function () {
            let six = document.createElement("div");
            AppendNewIndieAd(AdResolutions.Landscape_231x87, six, "indiead-medium");
            AppendNewIndieAd(AdResolutions.Landscape_231x87, six, "indiead-medium");
            AppendNewIndieAd(AdResolutions.Landscape_231x87, six, "indiead-medium");
            scrollparent.append(six);
            return six;
        },
        function () {
            let nine = document.createElement("div");
            AppendNewIndieAd(AdResolutions.Landscape_616x353, nine, "indiead-medium");
            AppendNewIndieAd(AdResolutions.Landscape_460x215, nine, "indiead-medium");
            AppendNewIndieAd(AdResolutions.Landscape_231x87, nine, "indiead-medium");
            AppendNewIndieAd(AdResolutions.Banner_320x50, nine, "indiead-medium");
            scrollparent.append(nine);
            return nine;
        },
    ];

    // each ad plot is 10em wide
    let adPlotWidth = 10 * parseFloat(getComputedStyle(document.body).fontSize);
    let screenWidth = window.screen.width;

    let maxNeededAdPlots = screenWidth / adPlotWidth;

    
    for (let i = 0; i < maxNeededAdPlots; i++) {
        let rnd = Math.floor(Math.random() * (adSpawns.length));
        let adPlot = adSpawns[rnd]();
        adPlot.classList.add("ad-plot");
    }



    rowparent.append(scrollparent);

    return rowparent;
}

//SpawnIndieAds();   
    
