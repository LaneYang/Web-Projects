//add strike and bg color when click.
//use on stead of click here because we will add some new list later.
//only applies to "li" inside the "ul".
$("ul").on("click","li",function () {
        // $(this).css("color","grey");
        //   $(this).css("text-decoration","line-through");
        $(this).toggleClass("completed");
    }
);
//click X to delete a "todo list".

$("ul").on("click","span",function (event) {
    //remove the parent tag of this tag.
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    //Prevents the event from bubbling up the DOM tree,
    //preventing any parent handlers from being notified of the event.
    event.stopPropagation();
});
//listen for user to press the key "enter".
//update a todo list.
