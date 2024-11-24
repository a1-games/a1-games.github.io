

const MainContainer = document.getElementById("main-container");






// FUNCTIONS

function SpawnDiv(parent, classes = "")
{
    let name = document.createElement("div");
    name.className = `${classes}`;
    parent.append(name);
    return name;
}
function SpawnElement(parent, elemType, classes = "")
{
    let name = document.createElement(elemType);
    name.className = `${classes}`;
    parent.append(name);
    return name;
}

function InsertBlogpostStyling(blogpostName)
{
    InsertStyling("root", `./BLOGPOSTS/${blogpostName}/${blogpostName}.css`)
}

function InsertStyling(filename, overwritepath = "")
{
    var linkElem = document.createElement("link");
    linkElem.rel = "stylesheet";

    linkElem.href = `./SCRIPTS/CSS/${filename}.css`;
    if (overwritepath != "")
        linkElem.href = overwritepath;

    linkElem.media = "screen";
    document.head.append(linkElem);

    var linkElem_p = document.createElement("link");
    linkElem_p.rel = "stylesheet";

    linkElem.href = `./SCRIPTS/CSS/${filename}.css`;
    if (overwritepath != "")
        linkElem.href = overwritepath;

    linkElem_p.media = "print";
    document.head.append(linkElem_p);
}


function SpawnFloatParent(parent, leftrightmiddle, multicolum = false)
{
    let floatparent = document.createElement("div");
    floatparent.style = "align-items: center;";
    if (multicolum)
        floatparent.style = "display: flex; flex-direction: column; position: auto; margin: auto; align-items: center;";
    floatparent.className = `multi-parent float-parent-${leftrightmiddle}`;
    parent.append(floatparent);
    return floatparent;
}


function SpawnTextLine(parent, text, extraclasses = "")
{
    let name = document.createElement("div");
    name.innerText = text;
    name.className = `${extraclasses}`;
    parent.append(name);
    return name;
}



function SpawnCommentBox(text, parent, bckgrndColor = "")
{
    let box = document.createElement("div");
    box.innerText = text;
    box.className = "comment-box multi-row ";
    if (bckgrndColor != "")
        box.style.backgroundColor = bckgrndColor;
    
    parent.append(box);
    return box;
}


function SpawnImage(blogpostname, imgname, parent)
{
    let image = document.createElement("img");
    image.src = `BLOGPOSTS/${blogpostname}/img/${imgname}`;
    image.classList.add("showcase-img");
    parent.append(image);
    return image;
}



function SpawnMultiRow(parent)
{
    let row = document.createElement("div");
    row.className = "multi-row";
    
    parent.append(row);
    return row;
}


function DownloadFile(filepath, filename)
{
    let a = document.createElement('a')
    a.href = filepath;
    a.download = filename;
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
}















