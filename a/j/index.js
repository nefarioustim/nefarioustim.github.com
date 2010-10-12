$(document).ready(function docReady(e){
    var acc = $("article>ul").accordion({
        handle: "h2",
        panel: "ul",
        speed: 400,
        easing: "easeInOutCirc"
    });
    
    acc.bind("panel-open", function(e){
        $(e.target)
            .closest("li")
            .find("h2 span")
            .html("&minus;");
    });
    
    acc.bind("panel-close", function(e){
        $(e.target)
            .closest("li")
            .find("h2 span")
            .html("+");
    });
});