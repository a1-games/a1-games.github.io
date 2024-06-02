function AppendNewIndieAd(AdResolution, parent, extraclassnames)
{
    let elem = document.createElement("div");
    elem.className = "indieads " + `${extraclassnames}`;
    spawnIndieAd_ImageOnly(elem, AdResolution);
    parent.append(elem);
}










// keep it in a function as to not keep variables in memory
function SpawnIndieAds()
{
    // row parent
    let rowparent = document.createElement("div");
    rowparent.className = "multi-parent showcase-row-threequarters indieads-background";

    // floating parent
    let floatparent = document.createElement("div");
    floatparent.className = "multi-parent float-parent-right";
    floatparent.onclick = () => {
        window.open("https://indieads.github.io/");
    };

    // indieads
    let indadlogo = SpawnImage(`indieads`, `indieadslogo.png`, floatparent);
    indadlogo.className = "float-logo-rectangle shape-shadow-black";
    indadlogo.style.margin = "auto 3em auto auto";

    // github logo
    let githublogo = SpawnImage(`indieads`, `handshake.png`, floatparent);
    githublogo.className = "float-logo-square";
    

    rowparent.append(floatparent);

    
    // scroll parent
    let scrollparent = document.createElement("div");
    scrollparent.style = "margin: 0px; position: absolute; top: 50%; transform: translateY(-50%); display: flex; flex-direction: row; align-items: center";



    let adSpawns = [
        function () { AppendNewIndieAd(AdResolutions.Portrait_374x448, scrollparent, "indiead-medium"); },
        function () { AppendNewIndieAd(AdResolutions.Landscape_616x253, scrollparent, "indiead-medium"); },
        function () { AppendNewIndieAd(AdResolutions.Portrait_600x900, scrollparent, "indiead-medium"); },
        function () {
            let three = document.createElement("div");
            AppendNewIndieAd(AdResolutions.Landscape_231x87, three, "indiead-medium");
            AppendNewIndieAd(AdResolutions.Landscape_460x215, three, "indiead-medium");
            AppendNewIndieAd(AdResolutions.Banner_320x50, three, "indiead-medium");
            AppendNewIndieAd(AdResolutions.Landscape_616x253, three, "indiead-medium");
            scrollparent.append(three);
        },
        function () {
            let five = document.createElement("div");
            AppendNewIndieAd(AdResolutions.Banner_320x50, five, "indiead-medium");
            AppendNewIndieAd(AdResolutions.Landscape_616x253, five, "indiead-medium");
            AppendNewIndieAd(AdResolutions.Banner_320x50, five, "indiead-medium");
            scrollparent.append(five);
        },
        function () {
            let six = document.createElement("div");
            AppendNewIndieAd(AdResolutions.Landscape_231x87, six, "indiead-medium");
            AppendNewIndieAd(AdResolutions.Landscape_231x87, six, "indiead-medium");
            AppendNewIndieAd(AdResolutions.Landscape_231x87, six, "indiead-medium");
            scrollparent.append(six);
        },
        function () {
            let nine = document.createElement("div");
            AppendNewIndieAd(AdResolutions.Landscape_616x253, nine, "indiead-medium");
            AppendNewIndieAd(AdResolutions.Landscape_460x215, nine, "indiead-medium");
            AppendNewIndieAd(AdResolutions.Landscape_231x87, nine, "indiead-medium");
            AppendNewIndieAd(AdResolutions.Banner_320x50, nine, "indiead-medium");
            scrollparent.append(nine);
        },
    ];

    // each ad plot is 10em wide
    let adPlotWidth = 10 * parseFloat(getComputedStyle(document.body).fontSize);
    let screenWidth = window.screen.width;

    let maxNeededAdPlots = screenWidth / adPlotWidth;

    
    for (let i = 0; i < maxNeededAdPlots; i++) {
        let rnd = Math.floor(Math.random() * (adSpawns.length));
        adSpawns[rnd]();
    }



    rowparent.append(scrollparent);
    MainContainer.append(rowparent);
}

SpawnIndieAds();   
    
