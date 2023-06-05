








var indieads = document.body.getElementsByClassName("indieads");


indieads.forEach(ad => {
    ad.classList.forEach(classname => {
        if (classname.includes("320x50"))
        {
            spawnIndieAd(ad, AdResolutions.Landscape_320x50);
        }
        if (classname.includes("231x87"))
        {
            spawnIndieAd(ad, AdResolutions.Landscape_231x87);
        }
        if (classname.includes("460x215"))
        {
            spawnIndieAd(ad, AdResolutions.Landscape_460x215);
        }
        if (classname.includes("616x353"))
        {
            spawnIndieAd(ad, AdResolutions.Landscape_616x353);
        }
        if (classname.includes("374x448"))
        {
            spawnIndieAd(ad, AdResolutions.Landscape_374x448);
        }
        if (classname.includes("600x900"))
        {
            spawnIndieAd(ad, AdResolutions.Landscape_600x900);
        }
    })
});





