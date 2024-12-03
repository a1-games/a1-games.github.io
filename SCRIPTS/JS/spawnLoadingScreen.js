
function SpawnLoadingScreen()
{
    
    let loadingScreen = document.createElement("div");
    loadingScreen.className = "loading-screen";
    MainContainer.prepend(loadingScreen);

    SpawnImage(loadingScreen, "./FILES/IMG/ICON/loading.gif", "loading-icon")

    // Hide after 1.5 seconds
    setTimeout(() => {
        loadingScreen.classList.add("minimized");
    }, 1000);
}


SpawnLoadingScreen();