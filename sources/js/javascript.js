$(function(){
    $lis = $("nav>ul>li");
    
    $lis.click(function(){
        $lis.attr("data-selected","false");
        $that=$(this);
        $that.attr("data-selected","true");

        
        $.ajax({
            url: $that.attr("data-restRequest")
        }).done(function(data){
            $("#restBody").html(data+"<br/>");
        });        
    });
    
    $lis.first().trigger("click");

});
