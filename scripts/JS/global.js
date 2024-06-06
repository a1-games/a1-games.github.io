

const MainContainer = document.getElementById("main-container");






// FUNCTIONS

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















