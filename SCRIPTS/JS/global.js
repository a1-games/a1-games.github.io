

const MainContainer = document.getElementById("main-container");



const clamp = (num, min, max) => Math.min(Math.max(num, min), max)



// NON-SPECIFIC
function SpawnElement(parent, elemType, classes = "")
{
    let elem = document.createElement(elemType);
    elem.className = `${classes}`;
    parent.append(elem);
    return elem;
}

function SpawnDiv(parent, classes = "")
{
    let div = document.createElement("div");
    div.className = `${classes}`;
    parent.append(div);
    return div;
}

function SpawnDivWithID(parent, id, classes = "")
{
    let div = document.createElement("div");
    div.id = `${id}`;
    div.className = `${classes}`;
    parent.append(div);
    return div;
}

function SpawnImage(parent, src, classes = "")
{
    let image = document.createElement("img");
    image.src = src;
    image.className = classes;
    parent.append(image);
    return image;
}


// PROJECT SPECIFIC
function InsertBlogpostStyling(blogpostName)
{
    InsertStyling("undefined", `./BLOGPOSTS/${blogpostName}/${blogpostName}.css`)
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

    linkElem_p.href = `./SCRIPTS/CSS/${filename}.css`;
    if (overwritepath != "")
        linkElem_p.href = overwritepath;

    linkElem_p.media = "print";
    document.head.append(linkElem_p);
}


function SpawnFloatParent(parent, leftrightmiddle, multicolum = false)
{
    let floatparent = document.createElement("div");
    floatparent.style.alignItems = "center";
    floatparent.className = `flex m-auto multi-parent float-parent-${leftrightmiddle}`;
    if (multicolum)
        floatparent.classList.add("fd-v");
    else
        floatparent.classList.add("fd-h");
    parent.append(floatparent);
    return floatparent;
}


function SpawnTextLine(parent, text, extraclasses = "")
{
    let textElem = document.createElement("div");
    textElem.innerText = text;
    textElem.className = `${extraclasses}`;
    parent.append(textElem);
    return textElem;
}



function SpawnCommentBox(text, parent, extraclasses = "")
{
    let box = document.createElement("div");
    box.innerText = text;
    box.className = "comment-box multi-row " + `${extraclasses}`;
    
    parent.append(box);
    return box;
}


function SpawnBlogpostImage(blogpostname, imgname, parent, extraclasses = "")
{
    let image = document.createElement("img");
    image.src = `BLOGPOSTS/${blogpostname}/img/${imgname}`;
    image.className = "showcase-img " + `${extraclasses}`;
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


function _AddClassesFromClassString(element, classString)
{
    let classArray = classString.split(" "); // Split string into an array of class names
    for (let i = 0; i < classArray.length; i++) {
        element.classList.add(classArray[i]); // Add each class to the element
    }
}













