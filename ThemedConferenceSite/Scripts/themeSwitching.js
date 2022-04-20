$(document).ready(() => {
    const checkbox = $(":input[name=theme]");
    const body = $("body");
    //const fieldToUpdate = $("#currentTheme");
    let currentTheme = localStorage.getItem("currentTheme");

    if (currentTheme == null) {
        currentTheme = "standard";
        localStorage.setItem("currentTheme", currentTheme);
        body.attr("data-theme", currentTheme);
        //fieldToUpdate.text(currentTheme);
    } else {
        localStorage.setItem("currentTheme", currentTheme);
        body.attr("data-theme", currentTheme);
        //fieldToUpdate.text(currentTheme);
    }

    if (currentTheme == "contrast") {
        checkbox.prop("checked", true);
    }

    checkbox.change(() => {
        currentTheme = localStorage.getItem("currentTheme");

        if (currentTheme == "standard") {
            body.attr("data-theme", "contrast");
            localStorage.setItem("currentTheme", "contrast");
            //fieldToUpdate.text(currentTheme);
        } else {
            body.attr("data-theme", "standard");
            localStorage.setItem("currentTheme", "standard");
            //fieldToUpdate.text(currentTheme);
        }
    });
});