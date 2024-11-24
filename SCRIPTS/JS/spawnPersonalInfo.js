
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
    
    let keepSizeContainer = SpawnDiv(piContainer, "pi-keepsize");


    SpawnTextLine(keepSizeContainer, `${GetMyAge()} years old, He/Him`, "pi-text");
    SpawnTextLine(keepSizeContainer, `Aarhus Denmark`, "pi-text");
    SpawnTextLine(keepSizeContainer, `Coding, Game Development`, "pi-text");

    SpawnTextLine(keepSizeContainer, "", "pi-text").style.height = "0.2em";

    SpawnTextLine(keepSizeContainer, "Download my resume", "pi-text clickable-link").onclick = () => {
        DownloadFile(`FILES/CV/A_J_Resume.pdf`, `Asbjørn Johnsen - Resume.pdf`);
    };

    SpawnTextLine(keepSizeContainer, "", "pi-text").style.height = "0.2em";

    SpawnTextLine(keepSizeContainer, "C# · Java · Python · Javascript · HTML & CSS · SQL · JSON · Unity · Unity3D · MonoGame · PyGame · React.js · Node.js", "pi-text pi-text-small");
    
    SpawnTextLine(keepSizeContainer, "", "pi-text").style.height = "0.2em";


    return piContainer;
}








