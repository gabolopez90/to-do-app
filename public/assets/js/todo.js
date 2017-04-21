/* global $ */
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

    });
    
    
});