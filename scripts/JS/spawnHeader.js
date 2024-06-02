

function SpawnHeaderName(parent, text, extraclass)
{
    let name = document.createElement("div");
    name.innerText = text;
    name.className = `headername ${extraclass}`;
    parent.append(name);
    return name;
}
function SpawnSpace(parent)
{
    let space = document.createElement("div");
    space.style = "margin: 0; padding: 0; width: 3em;";
    parent.append(space);
}

function SpawnHeader()
{
    
    //let headerBuffer = document.createElement("div");
    //headerBuffer.className = "header-buffer";
    //MainContainer.prepend(headerBuffer);
    
    
    let headertab = document.createElement("div");
    headertab.className = "header-tab";
    MainContainer.prepend(headertab);
    
    SpawnSpace(headertab);
    
    let a1icon = document.createElement("img");
    a1icon.src = `files/IMG/headshot_transparent.png`;
    a1icon.classList.add("a1icon");
    a1icon.classList.add("showcase-img");
    headertab.append(a1icon);
    
    SpawnHeaderName(headertab, "asbjørn ø. j.");

    let middlespace = document.createElement("div");
    middlespace.style = "width: 0; margin: 0 auto;";
    headertab.append(middlespace);

    let contact = SpawnHeaderName(headertab, "contact");
    contact.onclick = () => {
        
    }

    let github = SpawnHeaderName(headertab, "github");
    github.onclick = () => {
        window.open("https://github.com/a1-games");
    }


    let linkedin = SpawnHeaderName(headertab, "linkedin");
    linkedin.onclick = () => {
        window.open("https://www.linkedin.com/in/a1creator/");
    }


    SpawnSpace(headertab);
    



}

SpawnHeader();















