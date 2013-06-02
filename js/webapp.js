(function () {
    var someButton = document.querySelector("#some_button");
    if (someButton) {
        someButton.onclick = function () {
            console.log("Button has been pressed!");
        }
    }
})(); 
