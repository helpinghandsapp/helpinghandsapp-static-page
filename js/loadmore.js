$(document).ready(function(){
    $(".previous-volunteers").slice(0, 3).show();
    $("#loadMore").on("click", function(e){
      e.preventDefault();
      $(".previous-volunteers:hidden").slice(0, 6).slideDown();
      if($(".previous-volunteers:hidden").length == 0) {
        $("#loadMore").css("display","none");
      }
    });
    
  })