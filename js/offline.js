/*
 * This file is responsible for handling the offline capability.
 * It checks if there is an update and asks the user if it should
 * reload the content.
 * Also, as we know that we're offline, the status is shown as "Offline".
 */

(function () {
    // get the applicationCache if existant
    var appCache = window.applicationCache;
    if (appCache) {
        // when an update is ready, the following function is called. It
        // asks the user whether it should download the latest files (reload
        // the content).
        appCache.onupdateready = function () {
            if (confirm("The app has been updated. Do you want to download the latest files? \nOtherwise they will be updated at the next reload.")) {
                location.reload(true);
            }
        };

        // the following code displays the "Offline" element if there is an error
        // getting the app cache (= we're offline)
        var displayStatus = document.querySelector("#online-status");
        if (displayStatus) {
            // connect the error event to a function which displays the offline
            // notice. It's the same method as the "onclick" event, just the event
            // name is different.
            appCache.onerror = function() {
                displayStatus.className = "offline";
                displayStatus.title = "Offline";
            };
            
        }
    }
})();