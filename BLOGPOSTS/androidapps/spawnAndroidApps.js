
// keep it in a function as to not keep variables in memory
function SpawnAndroidApps()
{
    // row parent
    let rowparent = SpawnDiv(MainContainer, "multi-parent showcase-row-nolimit flex fd-v");
    
    SpawnAndroidAppsInfo(rowparent);   
    

    let parent = document.createElement("div");
    parent.className = "multi-parent fw flex center-items android-apps-container";
    
    BuildAppVisual(parent, "crabzoo", "Crab Zoo", "Incremental Clicker",
        "I gave myself one week to create an android game " +
        "from zero to release.\n\nThis project taught me alot " +
        "about saving many different objects at once locally, " +
        "and calculating offline progression when the player " +
        "returns to the game. "
    );
    
    BuildAppVisual(parent, "crabdefence", "Crab Defence", "Tower Defence",
        "I gave myself one day to create an android game " +
        "from zero to release.\n\n" +
        "It ended up taking three days, but for a game made " +
        "in such a short time, the final product is " +
        "pretty fun to play! "
    );

    BuildAppVisual(parent, "jumpingbacteria", "Jumping Bacteria", "Arcade",
        "The very first app and game I released.\n\n" +
        "Play as a green blob tring to survive without " +
        "touching any red blobs.\n\n" +
        "This game is how I learned the basis of game physics, " +
        "scenes, UI, input & sound in Unity " +
        ""
    );
    
    BuildAppVisual(parent, "nutbutton", "Nut Button", "10K+ Installs",
        "The dumbest thing I've ever released.\n\n" +
        "I spent thirty minutes making a button that " + 
        "says \"Nut.\", and released it on Google " +
        "Play Store with no advertisement at all. " +
        "Within a month, It had thousands of installs " + 
        "and many hilarious overly positive reviews."
    );

    BuildAppVisual(parent, "mizkif", "Mizkif Soundboard", "Enjoyed by a few mizkif fans",
        "A very simple soundboard app with " +
        "sound clips from a popular Twitch streamer.\n\n" +
        "I made the app as an attempt to gain publicity " +
        "by being featured on Mizkif's stream, but it " +
        "didn't pay off and the app is pretty idle. " +
        ""
    );



    rowparent.append(parent);
}

    
    
function BuildAppVisual(parent, appname, apptitle, undertitle, description, hideOnSpawn = true)
{
    let containingBox = document.createElement("div");
    containingBox.className = "android-app-box no-select c-f-d"

    // absolute image
    let icon = document.createElement("img");
    icon.className = "android-app-icon";
    icon.src = `./BLOGPOSTS/androidapps/img/${appname}.jpg`;
    containingBox.append(icon);

    // title box
    let titleBox = document.createElement("div");
    titleBox.className = "android-app-titlebox";
    containingBox.append(titleBox);
    // absolute app title
    let title = document.createElement("div");
    title.className = "android-app-title";
    title.innerText = apptitle;
    titleBox.append(title);
    // absolute app secondary title
    let title_under = document.createElement("div");
    title_under.className = "android-app-title android-app-title-under";
    title_under.innerText = undertitle;
    titleBox.append(title_under);
    
    
    // relative fake image
    let icon_f = document.createElement("div");
    icon_f.className = "android-app-icon-fake";
    containingBox.append(icon_f);

    // description box
    let descBox = document.createElement("div");
    descBox.className = `android-app-descbox ${hideOnSpawn ? "minimized-h" : ""}` ;
    containingBox.append(descBox);
    // description box
    let textBox = document.createElement("div");
    textBox.className = "android-app-textbox";
    descBox.append(textBox);
    // description
    let desc = document.createElement("div");
    desc.className = "android-app-desc";
    desc.innerText = description;
    textBox.append(desc);
    containingBox.onmouseleave  = () => {
        descBox.classList.add("minimized-h");
    }
    containingBox.onmouseenter  = () => {
        descBox.classList.remove("minimized-h");
    }
    containingBox.onclick = () => {
        //window.open("https://play.google.com/store/apps/dev?id=6416564246254503009");
    }

    parent.append(containingBox);
    return containingBox;
}
    
    
    
function SpawnGooglePlayLogo(parent)
{
    let flexcontainer = SpawnDiv(parent, "flex fd-r");
    let gp_arrow = document.createElement("img");
    gp_arrow.src = "./BLOGPOSTS/androidapps/img/gp-arrow.png";
    gp_arrow.className = "clickable-logo-small";
    flexcontainer.append(gp_arrow);
    let gp_text_g = document.createElement("div");
    gp_text_g.innerText = "Google";
    gp_text_g.className = "gp-text gpt-g";
    flexcontainer.append(gp_text_g);
    let gp_text_p = document.createElement("div");
    gp_text_p.innerText = "Play";
    gp_text_p.className = "gp-text gpt-p";
    flexcontainer.append(gp_text_p);
    flexcontainer.onclick = () => {
        window.open("https://play.google.com/store/apps/dev?id=6416564246254503009");
    }
    return flexcontainer;
}
    
function SpawnAndroidAppsInfo(parentContainer)
{
    
    let flexrow = SpawnDiv(parentContainer, "flex m-auto center-items android-info-container gp-container");
    

    // icon
    let img1 = SpawnElement(flexrow, "img", "clickable-logo-medium");
    img1.src = "FILES/IMG/ICON/a1.png";


    // scrolling parent
    let infoParent = SpawnDiv(flexrow, "info-container c-f-d no-sedect m-0");
    
    let gp_logo = SpawnGooglePlayLogo(infoParent);

    SpawnDiv(infoParent, "p-em-quarter hidden-mobile");
    SpawnTextLine(infoParent, "Published Android Developer", "sv-presents");

    SpawnTextLine(infoParent, "Hover an app icon to read more", "sv-small-title hidden-mobile");


    
}

SpawnAndroidApps();   
    
    
    
    
