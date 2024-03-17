
const shortinfContainer = document.getElementById("shortinf-container");


function insertShortInfo(infosarray, bckgrndImage)
{
    // information container
    let newContainer = document.createElement("div");
    newContainer.className = "inf-container";
    newContainer.style.backgroundColor = containerColor;

    let shadeCover = document.createElement("div");
    shadeCover.style.position = "absolute";
    if (bckgrndImage != null)
        shadeCover.style.backgroundImage = `url(CV/${bckgrndImage})`;
    shadeCover.style.top = "0";
    shadeCover.style.bottom = "0";
    shadeCover.style.right = "0";
    shadeCover.style.left = "0";
    shadeCover.style.zIndex = "-1";
    newContainer.append(shadeCover);

    for (let i = 0; i < infosarray.length; i++) {

        // icon
        let _icon = document.createElement("img");
        _icon.className = "short-inf-icon";
        _icon.src = `CV/icon_${infosarray[i].iconname}.png`;
        if (infosarray[i].invert)
            _icon.classList.add("invert-icon");

        // text
        let _text = document.createElement("div");
        _text.className = "inf-font short-inf";
        _text.innerText = infosarray[i].text;
        if (infosarray[i].link != null)
        {
            _text.onclick = () => { window.open(infosarray[i].link); };
            _text.style.cursor = "pointer";
        }

        // line div
        let _line = document.createElement("div");
        _line.className = "short-inf-line";
        _line.append(_icon);
        _line.append(_text);

        newContainer.append(_line);
    }
    
    shortinfContainer.append(newContainer);
}






