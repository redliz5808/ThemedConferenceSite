$(document).ready(() => {
    const checkbox = $(":input[name=theme]");
    const html = $("html");

    checkbox.change(() => {
        if (checkbox.is(":checked")) {
            console.log("contrast");
            html.attr("data-theme", "contrast");
        } else {
            console.log("standard");
            html.attr("data-theme", "standard");
        }
    })
});