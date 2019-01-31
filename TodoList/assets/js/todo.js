//add strike and bg color when click.
$("li").click(function () {
        // $(this).css("color","grey");
        // $(this).css("text-decoration","line-through");
        $(this).toggleClass("completed");
    }
);
//click X to delete a "todo list".

$("span").click(function (event) {
    //remove the parent tag of this tag.
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    //Prevents the event from bubbling up the DOM tree,
    //preventing any parent handlers from being notified of the event.
    event.stopPropagation();
});
$("input[type='text']").keypress(function (event) {
    if(event.which===13){

    }


})
