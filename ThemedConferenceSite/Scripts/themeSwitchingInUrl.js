$(document).ready(() => {
    const checkbox = $(":input[name=theme]");
    const body = $("body");
    let currentTheme = body.attr("data-theme");

    if (currentTheme == null) {
        currentTheme = "standard";
    } else {
        body.attr("data-theme", currentTheme);
    }

    if (currentTheme == "contrast") {
        checkbox.prop("checked", true);
    }

    checkbox.change(() => {
        var params = new URLSearchParams(window.location.search);
        var newPath;

        if (currentTheme == "standard") {
            params.set("theme", "contrast");
            body.attr("data-theme", "contrast");
            currentTheme = "contrast";
            newPath = window.location.origin + "?" + params;
        } else {
            params.delete("theme");
            body.attr("data-theme", "standard");
            currentTheme = "standard";
            newPath = window.location.origin;
        }


        $.post(newPath);
        if (history.pushState) {
            history.pushState({}, document.title, newPath)
        }
    })
});