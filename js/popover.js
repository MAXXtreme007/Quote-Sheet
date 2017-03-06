$(function() {
    $('[data-toggle="tooltip"]').tooltip()
})

$(function() {
    $('[data-toggle="popover"]').popover()
})

$(function() {
    // prevents jumping
    $("a.pop-me-over").on("click", function(e) {
        e.preventDefault();
        return true;
    });
    $(".pop-me-over").popover();
});
