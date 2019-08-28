window.onload=function(){
    var button=document.getElementById("button");
    button.style.animation="myScale 1s linear"
}
var div2=document.getElementById("div2");
function myMouse(){
    var clickE=window.event||arguments[0];
    var kaiGuan=true;
    document.onmousemove=function(){
        var moveE=window.event||arguments[0];
        if(kaiGuan==true&&div2.style.width<="30px"&&div2.style.width<="1000px"){
            div2.style.width=(parseInt(moveE.clientX)+20)+"px";
            console.log("1111");
        }else if(kaiGuan==true&&div2.style.width>="30px"){
            div2.style.width=(parseInt(moveE.clientX)-20)+"px";
            console.log("33333");
            console.log(div2.style.width);
        }
    };
    document.onmouseup=function(){
        kaiGuan==false;
    }
}
function myMove(){
    var button=document.getElementById("button");
    var moveE=window.event||arguments[0];
    var kai;
    document.onmousedown= function () {
//                var movrE=window.event
        if(kai==true){
            console.log("ashdfj");
            div2.style.width=(moveE.clientX+20)+"px";
        }
    }



}


