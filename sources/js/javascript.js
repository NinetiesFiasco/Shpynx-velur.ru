$(function(){
    var pathArray = window.location.pathname.split('/');

    if (2<=pathArray.length){
        $("a[href='"+pathArray[1]+"']").attr("data-selected","true");
    }
});
