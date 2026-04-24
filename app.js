"use strict";
$(document).ready(function () {
    document.getElementById("form").addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Qeydiyyat uğurludur!");
        console.log("Site ready");
    });
});