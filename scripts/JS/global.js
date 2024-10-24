

const MainContainer = document.getElementById("main-container");






// FUNCTIONS


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



function SpawnCommentBox(text, parent, bckgrndColor = "")
{
    let box = document.createElement("div");
    box.innerText = text;
    box.className = "comment-box";
    box.style = "display: flex; flex-direction: row; position: relative;";
    if (bckgrndColor != "")
        box.style.backgroundColor = bckgrndColor;
    
    parent.append(box);
    return box;
}


function SpawnImage(blogpostname, imgname, parent)
{
    let image = document.createElement("img");
    image.src = `blogposts/${blogpostname}/img/${imgname}`;
    image.classList.add("showcase-img");
    parent.append(image);
    return image;
}



function SpawnMultiRow(parent)
{
    let row = document.createElement("div");
    row.style = "display: flex; flex-direction: row; position: relative;";
    
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















