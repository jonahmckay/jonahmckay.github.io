"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/

$(document).ready(setup);

let $firstName;
function setup()
{
  $firstName = $(".firstName");
  $firstName.on("mouseover", function() {changeName("/Jo.*/")});
  $firstName.on("mouseleave", function() {changeName("Jonah")});
}

function changeName(name)
{
  $firstName.text(name)
}
