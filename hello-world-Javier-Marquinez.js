// Hello World JavaScript
// Very important don't forget to validate at https://jslint.com

/*jslint devel: true, browser: true */

(function () {

    "use strict";


    var new_column1 = "<p> Hey, this is the next page of your work. As we should sumbit everything in cyberduck, here we have an idea of what it could look like.</p>";
        new_column1 += "<img id=\"duck\" src=\"duck.jpg\">";
    var new_column2 = "<p> Hello world, congratulations, you have become a programmer </p>";
        new_column2 += "<img id=\"panel\" src=\"congrats.gif\">";
    var old_column1 = "";
    var old_column2 = "";


    function toggleJavi() {

        old_column1 = document.getElementById("hello-people-column1").innerHTML;

        document.getElementById("hello-people-column1").innerHTML = new_column1;

        old_column2 = document.getElementById("hello-people-column2").innerHTML;

        document.getElementById("hello-people-column2").innerHTML = new_column2;

        new_column1 = old_column1;
        new_column2 = old_column2;



    }

    document.body.addEventListener("click", toggleJavi);
}());
