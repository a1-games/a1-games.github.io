
const shortinfContainer = document.getElementById("shortinf-container");





function insertShortInfo(infosarray)
{
    // information container
    let newContainer = document.createElement("div");
    newContainer.className = "inf-container";

    for (let i = 0; i < infosarray.length; i++) {

        // icon
        let _icon = document.createElement("img");
        _icon.className = "short-inf-icon";
        _icon.src = `CV/icon_${infosarray[i].iconname}.png`;

        // text
        let _text = document.createElement("div");
        _text.className = "inf-font short-inf";
        _text.innerText = infosarray[i].text;

        // line div
        let _line = document.createElement("div");
        _line.className = "short-inf-line";
        _line.append(_icon);
        _line.append(_text);

        newContainer.append(_line);
    }
    
    shortinfContainer.append(newContainer);
}






