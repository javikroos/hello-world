// Hello World JavaScript
// Very important don't forget to validate at https://jslint.com

/*jslint devel: true, browser: true */

(function () {

    "use strict";


    var new_column1 = "<p> Hey, this is the next page of your work</p>";
    var new_column2 = "<p> Hello world, congratulations, you have become a programmer </p>";
        new_column2 += "<img id=\"panel\" src=\"congrats.gif\">";
    var old_column1 = "";
    var old_column2 = "";


    console.log("-- hello_world_Javier_Marquinez.js starting --");
    console.log("new_column1: " + new_column1);
    console.log("old_column1: " + old_column1);
    console.log("new_column2: " + new_column2);
    console.log("old_column2: " + old_column2);
    console.log("-----------------------------\n\n\n\n");

    document.body.addEventListener("click", function () {

        old_column1 = document.getElementById("hello-people-column1").innerHTML;

        document.getElementById("hello-people-column1").innerHTML = new_column1;

        old_column2 = document.getElementById("hello-people-column2").innerHTML;

        document.getElementById("hello-people-column2").innerHTML = new_column2;

        console.log("-- updated by click --");
        console.log("new_column1: " + new_column1);
        console.log("old_column1: " + old_column1);
        console.log("new_column2: " + new_column2);
        console.log("old_column2: " + old_column2);
        console.log("----------------------\n\n\n\n");

        new_column1 = old_column1;
        new_column2 = old_column2;

        console.log("-- updated by \"toggle\" --");
        console.log("new_column1: " + new_column1);
        console.log("old_column1: " + old_column1);
        console.log("*** NOTE: new_column1 == old_column1 now! ***");
        console.log("new_column2: " + new_column2);
        console.log("old_column2: " + old_column2);
        console.log("*** NOTE: new_column2 == old_column2 now! ***");
        console.log("-------------------------\n\n\n");

    });
}());
