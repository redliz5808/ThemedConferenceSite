$(document).ready(() => {
    const checkbox = $(":input[name=theme]");
    const body = $("body");
    //let currentTheme = body.attr("data-theme");
    let currentTheme = localStorage.getItem("currentTheme");

    if (currentTheme == null) {
        localStorage.setItem("currentTheme", "standard");
        currentTheme = "standard";
    } else {
        localStorage.setItem("currentTheme", currentTheme);
        body.attr("data-theme", currentTheme);
    }

    //if (currentTheme == "contrast") {
    //    checkbox.prop("checked", true);
    //}

    checkbox.change(() => {
        var params = new URLSearchParams(window.location.search);
        var newPath;

        if (currentTheme == "standard") {
            params.set("theme", "contrast");
            localStorage.setItem("currentTheme", "contrast");
            //body.attr("data-theme", "contrast");
            currentTheme = "contrast";
            newPath = window.location.pathname + "?" + params;
        } else {
            params.delete("theme");
            localStorage.setItem("currentTheme", "standard");
            //body.attr("data-theme", "standard");
            currentTheme = "standard";
            newPath = window.location.pathname;
        }


        $.post(newPath);
        if (history.pushState) {
            history.pushState({}, document.title, newPath)
        }

        location.reload();
    })
});