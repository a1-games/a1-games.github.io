
function GetMyAge()
{
    var dob = new Date("11/16/2000");  
    var month_diff = Date.now() - dob.getTime();  
    var age_dt = new Date(month_diff);
    var year = age_dt.getUTCFullYear();  
    //  -1970 bc date() starts in 1970
    var age = Math.abs(year - 1970);  
    return age;
}



function SpawnTextLine(parent, text, extraclass)
{
    let name = document.createElement("div");
    name.innerText = text;
    name.className = `pi-text ${extraclass}`;
    parent.append(name);
    return name;
}

const piContainer = document.createElement("div");

function ShowHidePersonalInfo()
{
    if (piContainer.className.includes("pi-folded"))
    {
        piContainer.className = "pi-container";
    }
    else
    {
        piContainer.className = "pi-container pi-folded";
    }
}

function SpawnPersonalInfo(parent)
{
    
    piContainer.className = "pi-container pi-folded";
    parent.append(piContainer);
    


    SpawnTextLine(piContainer, `${GetMyAge()} years old, He/Him`);
    SpawnTextLine(piContainer, `Aarhus Denmark`);
    SpawnTextLine(piContainer, `Coding, Game Development`);

    SpawnTextLine(piContainer, "", "").style.height = "0.2em";

    SpawnTextLine(piContainer, "Download my resume", "clickable-link").onclick = () => {
        DownloadFile(`files/CV/A_J_Resume.pdf`, `Asbjørn Johnsen - Resume.pdf`);
    };

    SpawnTextLine(piContainer, "", "").style.height = "0.2em";

    SpawnTextLine(piContainer, "C# · Python · Javascript · HTML & CSS · SQL · JSON · Unity · Unity3D · MonoGame · PyGame · React.js · Node.js", "pi-text-small");
    SpawnTextLine(piContainer, "", "pi-text-small");


    return piContainer;
}








