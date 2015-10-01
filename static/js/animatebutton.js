/**
 * Created by liam on 8/16/15.
 */
/****
var animating = true;
$(document).ready(function(){
    animateDiv();
    animating = true;
    stopanimation();

});

function makeNewPosition(){

    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh,nw];

}

function stopanimation(){
    $("#stopbtn").click(function(){
        animating=false;
    });

}

function animateDiv(){
    if (animating == false){
        var btnpos = $("#stopbtn").offset();
        $('.a').animate({ top: btnpos.top, left: btnpos.left })

    }
    else{
        var newq = makeNewPosition();
        $('.a').animate({ top: newq[0], left: newq[1] }, function(){
            animateDiv();
        });

    }


}

****/
