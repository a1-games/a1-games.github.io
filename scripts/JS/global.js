

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