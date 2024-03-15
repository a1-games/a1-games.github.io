
const infContainer = document.getElementById("inf-container");

var containerColor = "#FFFFFF";

function setContainerColor(color)
{
    containerColor = color;
}

function insertInformationTitle(title)
{
    // title
    let _title = document.createElement("div");
    _title.className = "inf-font inf-title-big ";
    _title.innerText = title;

    infContainer.append(_title);
}

function insertSeperationLine()
{
    let _line = document.createElement("div");
    _line.className = "seperation-line";
    infContainer.append(_line);
}

function insertInformation(datetime, location, title, text)
{
    // information container
    let newContainer = document.createElement("div");
    newContainer.className = "inf-container";
    newContainer.style.backgroundColor = containerColor;

    // timedate
    let _time = document.createElement("div");
    _time.className = "inf-font inf-datetime ";
    _time.innerText = datetime;

    // location
    let _location = document.createElement("div");
    _location.className = "inf-font inf-location ";
    _location.innerText = location;
    
    // title
    let _title = document.createElement("div");
    _title.className = "inf-font inf-title ";
    _title.innerText = title;

    // description text
    let _text = document.createElement("div");
    _text.className = "inf-font inf-text ";
    _text.innerText = text;

    
    newContainer.append(_time);
    newContainer.append(_location);
    newContainer.append(_title);
    newContainer.append(_text);
    
    infContainer.append(newContainer);
}





