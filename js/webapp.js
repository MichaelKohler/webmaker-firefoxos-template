/*
 * In this file you can add everything that your web app handles. As example we
 * link the click event from the button from index.html to a function. This function
 * prints "Button has been pressed" on the console. Of course, it could be whatever you'd
 * like to do.
 *
 * The code between
 *
 * (function () {
 *
 * and
 *
 * })();
 *
 * is called when the app starts or the content is reloaded. If you need to do something
 * as soon as the app starts you should do it here.
 */
(function () {
    // get the button element
    var someButton = document.querySelector("#some_button");
    // check if the element exists (in this example it should always be the case
    if (someButton) {
        // connect the "onclick" event to a function which is called when the button
        // is pressed
        someButton.onclick = function () {
            // the following code is executed after the button has been pressed
            console.log("Button has been pressed!");
        }
    }

    // you could add more code below (maybe copy the button and create another one?
    // Attention: you would have to create a second button in the index.html too! Also, the variable
    // name should be something else than "someButton" since you might not want to overwrite this.
})();