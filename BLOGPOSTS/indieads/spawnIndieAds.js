function AppendNewIndieAd(AdResolution, parent, extraclassnames)
{
    let elem = document.createElement("div");
    elem.className = "indieads " + `${extraclassnames}`;
    spawnIndieAd_ImageOnly(elem, AdResolution);
    parent.append(elem);
    return elem;
}










// keep it in a function as to not keep variables in memory
function SpawnIndieAds()
{
    // row parent
    let rowparent = document.createElement("div");
    rowparent.className = "multi-parent showcase-row-threequarters";

    let background = document.createElement("div");
    background.style = "position: absolute; width: 100%; height: 100%; margin: 0; padding: 0;"
    background.className = " indieads-background";
    rowparent.append(background);

    
    // floating parent
    let floatparent = SpawnFloatParent(rowparent, "right");
    floatparent.classList.add("indieads-floater");
    floatparent.onclick = () => {
        window.open("https://indieads.github.io/");
    };


    // logo box
    let logobox = SpawnMultiRow(floatparent);
    logobox.classList.add("indieads-logobox");

    // indieads logo
    let ialogo = SpawnBlogpostImage(`indieads`, `handshake.png`, logobox);
    ialogo.className = "float-logo-square";

    // indieads title
    let indadlogo = SpawnBlogpostImage(`indieads`, `indieadslogo.png`, logobox);
    indadlogo.className = "float-logo-rectangle shape-shadow-black indieads-title";
    indadlogo.style.margin = "auto";

    
    // comment
    SpawnCommentBox(
        "A collaborative advertisement API\n" +
        "meant to allow indie developers to\n" +
        "advertise completely free of cost.\n" +
        "\n" +
        "The payment for getting free advertisement\n" +
        "is using the API in your own product.\n" +
        "\n" +
        "\"You give some, you get some\"\n"
        , floatparent);
    



    
    // scroll parent
    let scrollparent = document.createElement("div");
    scrollparent.className = "multi-row indieads-scrollparent";


    let adSpawns = [
        function () { return AppendNewIndieAd(AdResolutions.Portrait_374x448, scrollparent, "indiead-medium"); },
        function () { return AppendNewIndieAd(AdResolutions.Landscape_616x253, scrollparent, "indiead-medium"); },
        function () { return AppendNewIndieAd(AdResolutions.Portrait_600x900, scrollparent, "indiead-medium"); },
        function () {
            let three = document.createElement("div");
            AppendNewIndieAd(AdResolutions.Landscape_231x87, three, "indiead-medium");
            AppendNewIndieAd(AdResolutions.Landscape_460x215, three, "indiead-medium");
            AppendNewIndieAd(AdResolutions.Banner_320x50, three, "indiead-medium");
            AppendNewIndieAd(AdResolutions.Landscape_616x253, three, "indiead-medium");
            scrollparent.append(three);
            return three;
        },
        function () {
            let five = document.createElement("div");
            AppendNewIndieAd(AdResolutions.Banner_320x50, five, "indiead-medium");
            AppendNewIndieAd(AdResolutions.Landscape_616x253, five, "indiead-medium");
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
            AppendNewIndieAd(AdResolutions.Landscape_616x253, nine, "indiead-medium");
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
    MainContainer.append(rowparent);


}

SpawnIndieAds();   
    
