
    i = 0;
   
    $(document).ready(() => {
    //all of JS code goes here

    $("h1").on("click", () => {
        $("body").toggleClass("background-change");
    });
    $(".nav-home").on("click", () => {
        $(".p-home").toggleClass("change-class");
    });
    $(".nav-history").on("click", () => {
        $(".p-history").toggleClass("change-class");
    });
    $(".nav-popularity").on("click", () => {
        $(".p-popularity").toggleClass("change-class");
    });
 
    $("html").keypress((a) => {
        $("body").append(String.fromCharCode(a.keyCode));
      });


});