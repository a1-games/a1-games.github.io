





function loadAdGallery()
{

    var indieads = document.body.getElementsByClassName("indieads");
    
    for (let i = 0; i < indieads.length; i++) {
        
        classnames = indieads[i].classList;
        ad = indieads[i];
        
        if (classnames.contains("320x50"))
        {
            spawnIndieAd_ImageOnly(ad, AdResolutions.Banner_320x50);
        }
        if (classnames.contains("231x87"))
        {
            spawnIndieAd_ImageOnly(ad, AdResolutions.Landscape_231x87);
        }
        if (classnames.contains("460x215"))
        {
            spawnIndieAd_ImageOnly(ad, AdResolutions.Landscape_460x215);
        }
        if (classnames.contains("616x253"))
        {
            spawnIndieAd_ImageOnly(ad, AdResolutions.Landscape_616x253);
        }
        if (classnames.contains("374x448"))
        {
            spawnIndieAd_ImageOnly(ad, AdResolutions.Portrait_374x448);
        }
        if (classnames.contains("600x900"))
        {
            spawnIndieAd_ImageOnly(ad, AdResolutions.Portrait_600x900);
        }
        
        //console.log(ad)
    }
}


loadAdGallery();


