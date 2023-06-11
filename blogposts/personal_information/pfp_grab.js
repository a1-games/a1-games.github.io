




async function getSrc()
{
    await fetch("https://api.linkedin.com/v2/people/(id:{person ID})", {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
      })
        .then((response) => {
            response.text()
        })
        .then((text) => {
            let fakeElement = document.createElement("div");
            fakeElement.innerHTML = text;
            imgs = fakeElement.getElementsByClassName("evi-image");
            for (let i = 0; i < imgs.length; i++) {
                
                if (imgs[i].id == "ember32")
                {
                    console.log("found ember32")
                    return
                }
            }
        });
}

getSrc()