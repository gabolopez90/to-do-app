/* global $ */
/* global location*/
$(document).ready(function(){
    $("form").on("submit", function(){
        var item = $("form input");
        var todo = {item: item.val()};
            $.ajax({
               type: "POST",
               url: "/todo",
               data: todo, 
               success: function(data){
                   //Recarga el html para que se cargue el contenido dinámico
                   location.reload(); 
               }
            });
            return false;
    });
    
    $("li").on("click",function(){
        var item = $(this).text().replace(/\s/g, "-");
        $.ajax({
            type: "DELETE",
            url:"/todo/"+item,
            success: function(data){
                location.reload();
            }
        });
    });
});