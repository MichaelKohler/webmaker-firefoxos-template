/*
 * The following code checks if the app is already installed on the device.
 * If it's not it displays a button which you can press to install the app.
 */
if (navigator.mozApps) {
    // check if the app is installed
    var checkIfInstalled = navigator.mozApps.getSelf();
    checkIfInstalled.onsuccess = function () {
        if (checkIfInstalled.result) {
            // the app is already installed so we don't need to display the
            // installation instructions.
            var installationInstructions = document.querySelector("#installation-instructions");
            if (installationInstructions) {
                installationInstructions.style.display = "none";
            }
        }
        else {
            // the app is not yet install, so we show the install instructions and the
            // install button. If the user clicks on it (once again, we use the "onclick" event
            // to connect the button with an action) the app gets installed. If the installation
            // is successful, the install instructions are hidden.
            var install = document.querySelector("#install"),
                manifestURL = location.href.substring(0, location.href.lastIndexOf("/")) + "/manifest.webapp";
            install.className = "show-install";
            // connect the click on the button with the installation
            install.onclick = function () {
                // install the app
                var installApp = navigator.mozApps.install(manifestURL);
                installApp.onsuccess = function(data) {
                    // if the installation was successful, we hide the install instructions
                    install.style.display = "none";
                };
                installApp.onerror = function() {
                    // there was an error while installing the app, we display a warning window
                    alert("Install failed\n\n:" + installApp.error.name);
                };
            };
        }
    };
}
else {
    console.log("Open Web Apps not supported");
}

/*
 * When clicking on the "reload" button at the bottom we want the content to be
 * reloaded. We do the same as in webapp.js and connect the "onclick" event to a function
 * which is executed as soon as the button is clicked.
 */
var reload = document.querySelector("#reload");
if (reload) {
    reload.onclick = function () {
        // reload the content
        location.reload(true);
    };
}