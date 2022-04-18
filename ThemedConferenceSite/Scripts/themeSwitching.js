$(document).ready(() => {
    const checkbox = $(":input[name=theme]");
    const body = $("body");
    let currentTheme = localStorage.getItem("currentTheme");

    if (currentTheme == null) {
        localStorage.setItem("currentTheme", "standard");
        currentTheme = "standard";
    } else {
        localStorage.setItem("currentTheme", currentTheme);
        body.attr("data-theme", currentTheme);
    }

    if (currentTheme == "contrast") {
        checkbox.prop("checked", true);
    }

    checkbox.change(() => {
        currentTheme = localStorage.getItem("currentTheme");

        if (currentTheme == "standard") {
            body.attr("data-theme", "contrast");
            localStorage.setItem("currentTheme", "contrast");
        } else {
            body.attr("data-theme", "standard");
            localStorage.setItem("currentTheme", "standard");
        }
    });
});