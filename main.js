$(document).mousemove(function(e){
    var x = e.pageX;
    var y = e.pageY;
    $('.clip').css('clip-path', 'circle(100px at ' + x + 'px ' + y + 'px)');
});