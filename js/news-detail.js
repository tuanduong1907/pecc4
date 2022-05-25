$(".linkMainProjectPanel").on("click", function(){
    // show sub panel
    let subProjectPanel = $(this).parent().children(".wrapperSubProjectPanel");
    subProjectPanel.stop().slideToggle();
    // end show sub panel

    // click effect item
    $(this).stop().toggleClass("active");
    // end click effect item 
})