/**
 * Created by miliang on 2017/12/5.
 */
/*==========================================获取节点======================================================*/
/*开始按钮*/
var btn=document.getElementById("btn");
var img=btn.getElementsByTagName("img")[0];
/*返回按钮*/
var back=document.getElementById("img");
var divImg=back.getElementsByTagName("img")[0];
/*暂停或离开游戏*/
var pause=document.getElementById("last");
var pauseY=pause.getElementsByTagName("img")[0];
var pauseN=pause.getElementsByTagName("img")[1];
/*游戏时间*/
var time=document.getElementById("myTime");
/*==========================================鼠标移动==============================================*/
//开始按钮
function myMouse(){
   /* var btn=document.getElementById("btn");
    var img=btn.getElementsByTagName("img")[0];*/
    btn.onmouseover=function(){
        img.src="../images/startOver.gif";
        btn.style.cursor="pointer";
    };
    btn.onmouseout=function(){
        img.src="../images/start.gif";
    }
}
//返回按钮
function mouseMove(){
    back.onmouseover=function(){
        divImg.src="../images/ui/backClick.gif";
        back.style.cursor="pointer";
    };
    back.onmouseout=function(){
        divImg.src="../images/ui/back.gif";
    }
}
//暂停或离开游戏
function pauseMove(){
    pauseY.onmouseover= function () {
        pauseY.src="../images/ui/tipYO.gif";
        pauseY.style.cursor="pointer";
    };
    pauseY.onmouseout= function () {
        pauseY.src="../images/ui/tipY.gif";
    }
}
function pauseMove1(){
    pauseN.onmouseover=function(){
        pauseN.src="../images/ui/tipNO.gif";
        pauseN.style.cursor="pointer";
    };
    pauseN.onmouseout=function(){
        pauseN.src="../images/ui/tipN.gif";
    }
}

/*function myCannel(){
    /!*每隔一秒生成一个敌人*!/
    createE=setInterval(createEnemy, 500);//敌人
    /!*每隔一百毫秒移动一次*!/
    enemyM=setInterval(enemyMove, 100);
    /!*设置玩家恐龙移动*!/
    dragonM=setInterval(tranDragonMove,50);
    /!*设置子弹的飞行*!/
    bulletF=setInterval(bulletFly,100);
}*/
/*=========================================全局变量=============================================*/
var mainObj=document.getElementById("main");
var enemyArray=[];//敌方数组
var myDragon;//玩家恐龙
var bullet;//子弹
var birth;//血量
var enemyBird;//敌人——鸟
var enemyGhost//敌人——鬼
var enemyPlane;//敌人——飞机
var enemyBoss;//敌人——boss
var bulletArray=[];//子弹数组

var nav;//经验条
var bom;

/*==========================开关================================*/
//玩家移动的开关
var upBtnStatus=false;//向上的按钮开关
var downBtnStatus=false;//向下的按钮开关
var leftBtnStatus=false;//向左的按钮开关
var rightBtnStatus=false;//向右的按钮

/*=============================总分=========================*/
var totalMark=0;

//血量移动的开关；
/*var upStatus=false;//向上的开关
var downStatus=false;//向下的开关
var leftStatus=false;//向左的开关
var rightStatus=false;//向右的开关*/
/*==========================定时器===================================*/
var createE;  /*每隔一秒生成一个敌人*/
var enemyM;/*每隔一百毫秒移动一次*/
var dragonM;/*设置玩家恐龙移动*/
var bulletF; /*设置子弹的飞行*/

/*===============================================单击事件=========================================*/
//开始按钮
function turn() {
    img.src = "../images/startClick.gif";
    document.getElementById("direction").style.display = "none";
    document.getElementsByClassName("space")[0].style.display = "none";
    document.getElementsByClassName("space")[1].style.display = "none";
    document.getElementById("boom").style.display = "none";
    document.getElementById("exp").style.display = "none";
    document.getElementById("time").style.display = "none";
    document.getElementById("btn").style.display = "none";
    mainObj.style.backgroundImage = "url('../images/bg.jpg')";
    mainObj.style.backgroundPosition = "center center";
    document.getElementById("img").style.visibility="visible";
    document.getElementById("myTime").style.visibility="visible";

    myDragon=new PlayerDragon("../images/dragon/small/stand.gif",20,350,5,20);
    nav=new Nav("../images/ui/exp0.png",10,100);//经验条
    bom=new Nav("../images/ui/boom.gif",10,300);//boom
    birth=new Birth("../images/ui/HPMAX.png",50,330,5);

    /*每隔一秒生成一个敌人*/
    createE=setInterval(createEnemy, 1000);//敌人
    /*每隔一百毫秒移动一次*/
    enemyM=setInterval(enemyMove, 100);
    /*设置玩家恐龙移动*/
    dragonM=setInterval(tranDragonMove,50);
    /*设置子弹的飞行*/
    bulletF=setInterval(bulletFly,100);
    setInterval(crashCheck,20);
    //setInterval(tranBirth,50);
    setTimeout(gameTime,1000);
}

//===============================================返回按钮===============================================
function display(){
 divImg.src="../images/ui/backClick.gif";
 pauseY.src="../images/ui/tipYC.gif";
 pauseN.sec="../images/ui/tipNC.gif";
 pause.style.display="block";
 //console.log(1111);
 pause.style.position="absolute";
 pause.style.marginTop="80px";
 pause.style.left="50%";
 pause.style.marginLeft="-108.5px";
    clearInterval(createE);
    clearInterval(enemyM);
    clearInterval(dragonM);
    clearInterval(bulletF);
 }
/*选择暂停或离开游戏*/
function myGame(){
    document.getElementById("last").style.display="none";
}
/*==========================================退出游戏===============================================*/
function myConfirm(){
 document.getElementById("direction").style.display = "block";
 document.getElementsByClassName("space")[0].style.display = "block";
 document.getElementsByClassName("space")[1].style.display = "block";
 document.getElementById("boom").style.display = "block";
 document.getElementById("exp").style.display = "block";
 document.getElementById("time").style.display = "block";
 document.getElementById("btn").style.display = "block";
 mainObj.style.backgroundImage = "url('../images/readyBg.jpg')";
 mainObj.style.backgroundPosition=" bottom center";
 document.getElementById("img").style.visibility="hidden";
 document.getElementById("myTime").style.visibility="hidden";
    clearInterval(createE);
    clearInterval(enemyM);
    clearInterval(dragonM);
    clearInterval(bulletF);
    for(var i=0;i<enemyArray.length;i++){
        mainObj.removeChild(enemyArray[i].enemyNode);
        delete[i];
    }
    mainObj.removeChild(nav.imgNode);
    mainObj.removeChild(bom.imgNode);
    mainObj.removeChild(myDragon.dragonNode);
    for(var i=0;i<bulletArray.length;i++){
        mainObj.removeChild(bullet.bulletNode);
        delete [i];
    }
    mainObj.removeChild(birth.birthNode);//血量
 }
/*========================================继续游戏==========================================*/
function myClose(){
    createE=setInterval(createEnemy, 1000)
    enemyM=setInterval(enemyMove, 100);
    dragonM=setInterval(tranDragonMove,50);
    bulletF=setInterval(bulletFly,100);
    setInterval(crashCheck,20);
}

    /*===========================游戏时间================================*/
    var min=time.getElementsByTagName("img")[0];
    //var mm=time.getElementsByTagName("img")[1];
    var seconds=time.getElementsByTagName("img")[2];
    var ss=time.getElementsByTagName("img")[3];
        var a=90;
function gameTime(){
        var m=parseInt(a/60);
        //var m1=parseInt(m/10);
        //var m2=parseInt(m%10);
        var s=parseInt(a%60);
        var s1=parseInt(s/10);
        var s2=parseInt(s%10);
        min.src="../images/num/"+m+".gif";
        seconds.src="../images/num/"+s1+".gif";
        ss.src="../images/num/"+s2+".gif";
        a--;
        if(a==0){
            alert("Game Over");
        }
}

//======================================nav构造函数================================================
function Nav(imgsrc,x,y){
    this.imgNode=document.createElement("img");
    this.imgsrc=imgsrc;
    this.x=x;
    this.y=y;
    this.init=function(){
        this.imgNode.src=this.imgsrc;
        this.imgNode.style.position="absolute";
        this.imgNode.style.left=this.x+"px";
        this.imgNode.style.top=this.y+"px";
        mainObj.appendChild(this.imgNode);
    };
    this.init();
}

    /*==========================玩家的构造函数=================================*/
    /**
     *  @param{string} imgsrc 图片路径
     *  @param{number} x X轴的起始位置
     *  @param{number} y Y轴的起始位置
     *  @param{number} blood 血量
     *  @param{number} speed 速度*/
    function PlayerDragon(imgsrc, x, y, blood, speed) {
        this.dragonNode = document.createElement("img");
        this.imgsrc = imgsrc;
        this.x = x;
        this.y = y;
        this.blood = blood;
        this.speed = speed;
        //发射子弹
        this.shoot = function () {
            //创建子弹
            bullet=new Bullet("../images/dragon/small/att.gif",parseInt(this.dragonNode.style.left)+50,parseInt(this.dragonNode.style.top)+10,20,10,30,21);
            bulletArray.push(bullet);
        };
        this.topmove=function(){
            this.dragonNode.style.top=(parseInt(this.dragonNode.style.top)-this.speed)+"px";
            if(parseInt(this.dragonNode.style.top)<=0){
                this.dragonNode.style.top="0px";
            }
        };
        this.bottommove=function(){
            this.dragonNode.style.top=(parseInt(this.dragonNode.style.top)+this.speed)+"px";
            if(parseInt(this.dragonNode.style.top)>=646){
                this.dragonNode.style.top="646px";
            }
        };
        this.leftmove=function() {
            this.dragonNode.style.left = (parseInt(this.dragonNode.style.left) - this.speed) + "px";
            if (parseInt(this.dragonNode.style.left) <= 5) {
                this.dragonNode.style.left = "5px";
                console.log(this.dragonNode.style.left);
                //}
             }
        };
             this.rightmove = function () {
                  this.dragonNode.style.left = (parseInt(this.dragonNode.style.left) + this.speed) + "px";
                if (parseInt(this.dragonNode.style.left) >= 1290) {
                      this.dragonNode.style.left = "1290px";
                 }
            };

            /* 初始化函数*/
            this.init = function () {
                this.dragonNode.src = imgsrc;
                this.dragonNode.style.position = "absolute";
                this.dragonNode.style.left = this.x + "px";
                this.dragonNode.style.top = this.y + "px";
                mainObj.appendChild(this.dragonNode);
            };
            this.init();
    }
    /*玩家的移动绑定*/
    document.onkeydown=function(e){
        if(e.keyCode==38){//上
            upBtnStatus=true;
        }
        if(e.keyCode==40){//下
            downBtnStatus=true;
        }
        if(e.keyCode==37){//左
            console.log(1245);
            leftBtnStatus=true;

        }
        if(e.keyCode==39){//右
            console.log("right");
            rightBtnStatus=true;
        }
        if(e.keyCode==32){
            myDragon.shoot();
            //myDragon=new PlayerDragon("../images/dragon/small/magicmissile.gif",50,350,5,20);
        }
    };
    /*玩家移动解除*/
    document.onkeyup=function(){
        var e=window.event||arguments[0];
        if(e.keyCode==38){
            upBtnStatus=false;
        }
        if(e.keyCode==40){
            downBtnStatus=false;
        }
        if(e.keyCode==37){
            leftBtnStatus=false;

        }
        if(e.keyCode==39){
            rightBtnStatus=false;
        }
    };
    /*玩家移动*/
    function tranDragonMove(){
        if(upBtnStatus==true){
            myDragon.topmove();
        }
        if(downBtnStatus==true){
            myDragon.bottommove();
        }
        if(leftBtnStatus==true){
            myDragon.leftmove();
        }
        if(rightBtnStatus==true){
            //console.log("right");
            myDragon.rightmove();
        }
    }

//=======================血量的构造方法===============================
function Birth(imgsrc,x,y,speed){
    this.birthNode=document.createElement("img");
    this.imgsrc=imgsrc;
    this.x=x;
    this.y=y;
    this.speed=speed;
    this.subtruct=function(){
        //if(myDragon.dragonNode.style.)
    };
    this.topmove=function(){
        this.birthNode.style.top=(parseInt(this.dragonNode.style.top)+this.speed)+"px";
        console.log(this.birthNode.style.top);
        if(parseInt(this.birthNode.style.top)<=0){
            this.birthNode.style.top="0px";
        }
    };
    //this.bottommove=function(){
    //    this.birthNode.style.top=parseInt(this.dragonNode.style.top)+"px";
    //    if(parseInt(this.birthNode.style.top)>=646){
    //        this.birthNode.style.top="646px";
    //    }
    //};
    //this.leftmove=function() {
    //    this.birthNode.style.left =parseInt(this.dragonNode.style.left) + "px";
    //    if (parseInt(this.birthNode.style.left) <= 20) {
    //        this.birthNode.style.left = "20px";
    //        console.log(this.birthNode.style.left);
    //        //}
    //    }
    //};
    //this.rightmove = function () {
    //    this.birthNode.style.left =parseInt(this.dragonNode.style.left) + "px";
    //    if (parseInt(this.birthNode.style.left) >= 1312) {
    //        this.birthNode.style.left = "1312px";
    //    }
    //};
    /*初始化*/
    this.init=function(){
        this.birthNode.src=this.imgsrc;
        this.birthNode.style.position="absolute";
        this.birthNode.style.left=this.x+"px";
        this.birthNode.style.top=this.y+"px";
        mainObj.appendChild(this.birthNode);
    };
    this.init();
    /*血量的移动绑定*/
    document.onkeydown=function(e){
        if(e.keyCode==38){//上
            upBtnStatus=true;
            console.log(1245);
        }
        if(e.keyCode==40){//下
            downBtnStatus=true;
        }
        if(e.keyCode==37){//左
            //console.log(1245);
            leftBtnStatus=true;

        }
        if(e.keyCode==39){//右
            //console.log("right");
            rightBtnStatus=true;
        }
        if(e.keyCode==32){
            myDragon.shoot();
            //myDragon=new PlayerDragon("../images/dragon/small/magicmissile.gif",50,350,5,20);
        }
    };
    /*血量移动解除*/
    document.onkeyup=function(){
        var e=window.event||arguments[0];
        if(e.keyCode==38){
            upBtnStatus=false;
        }
        if(e.keyCode==40){
            downBtnStatus=false;
        }
        if(e.keyCode==37){
            leftBtnStatus=false;

        }
        if(e.keyCode==39){
            rightBtnStatus=false;
        }
    };
    /*血量移动*/
    function tranBirth(){
        if(upBtnStatus==true){
            birth.topmove();
        }
        if(downBtnStatus==true){
            birth.bottommove();
        }
        if(leftBtnStatus==true){
            birth.leftmove();
        }
        if(rightBtnStatus==true){
            //console.log("right");
            birth.rightmove();
        }
    }
}

    //=====================================敌人==================================================
    /*创建敌人的构建函数*/
    function EnemyAnimal(imgsrc, x, y, blood, speed,width,height,mark) {
        this.enemyNode = document.createElement("img");//敌人节点
        this.imgsrc = imgsrc;
        this.x = x;
        this.y = y;
        this.blood = blood;
        this.speed = speed;
        this.width=width;
        this.height=height;
        this.mark=mark;//分数
        this.explosuonTime=15;//设置死亡时间
        this.isDead=false;//是否死亡
        this.move = function () {
            this.enemyNode.style.left = (parseInt(this.enemyNode.style.left) - this.speed) + "px";
        };
        this.init = function () {
            this.enemyNode.src = this.imgsrc;
            this.enemyNode.style.position = "absolute";
            this.enemyNode.style.left = this.x + "px";
            this.enemyNode.style.top = this.y + "px";
            mainObj.appendChild(this.enemyNode);
        };
        this.init();
    }

    /*创建敌人*/
    function createEnemy() {
        var myNo=Math.random()*100;//判断出现的敌人
        console.log(myNo);
        if(myNo<30&&myNo>0){
            /*创建敌人-----鸟*/
            enemyBird = new EnemyAnimal("../images/enemy/bird/move.gif", Math.random() * 1366, Math.random() * 500, 1, Math.random() * 10 + 1,58,54,5);
            enemyArray.push(enemyBird);
            //enemyBirdArray.push(enemyBird);
            //console.log(enemyBirdArray.length);
        }else if(myNo<60&&myNo>30){
            console.log(myNo);
            /*创建敌人-----鬼*/
            enemyGhost= new EnemyAnimal("../images/enemy/ghost/move.gif", Math.random() * 1366, Math.random() * 500, 1, Math.random() * 18 + 1,107,92,10);
                                                        //  图片的路径                   X轴              Y轴   血量         速度
            enemyArray.push(enemyGhost);
            //enemyGhostArray.push(enemyGhost);
            //console.log(enemyGhostArray.length);
        }else if(myNo<90&&myNo>60){
            /*创建敌人-----飞机*/
            enemyPlane = new EnemyAnimal("../images/enemy/plane/move.gif", Math.random() * 1366, Math.random() * 500, 1, Math.random() * 20 + 1,59,41,15);
            enemyArray.push(enemyPlane);
            //enemyPlaneArray.push(enemyPlane);
            //console.log(enemyArray.length);
        }
        else if(myNo>=97){
            /*创建敌人-----boss*/
            enemyBoss = new EnemyAnimal("../images/enemy/boss/move.gif", Math.random() * 1366, Math.random() * 500, 1, Math.random() * 5 + 1,183,163,100);
                                                 //  图片的路径                   X轴              Y轴      血量         速度
            enemyArray.push(enemyBoss);
            //enemyBossArray.push(enemyBoss);
        }
    }

        /*敌人移动*/
        function enemyMove() {
            /*for (var i = 0; i < enemyBirdArray.length; i++) {
             //console.log(enemyBirdArray.length);
             enemyBirdArray[i].move();
             if (parseInt(enemyBirdArray[i].enemyNode.style.left) >= 1308) {
             mainObj.removeChild(enemyBirdArray[i].enemyNode);
             enemyBirdArray.splice(i, 1);
             }
             }
             for (var u = 0; u < enemyGhostArray.length; u++) {
             //console.log(enemyGhostArray.length);
             enemyGhostArray[u].move();
             if (parseInt(enemyGhostArray[u].enemyNode.style.left) >= 1259) {
             mainObj.removeChild(enemyGhostArray[u].enemyNode);
             enemyGhostArray.splice(u, 1);
             }
             }
             for (var a = 0; a < enemyPlaneArray.length; a++) {
             //console.log(enemyPlaneArray.length);
             enemyPlaneArray[a].move();
             if (parseInt(enemyPlaneArray[a].enemyNode.style.left) >= 1307) {
             mainObj.removeChild(enemyPlaneArray[a].enemyNode);
             enemyPlaneArray.splice(a, 1);
             }
             } for (var r = 0; r < enemyBossArray.length; r++) {
             //console.log(enemyBossArray.length);
             enemyBossArray[r].move();
             if (parseInt(enemyBossArray[r].enemyNode.style.left) >= 1183) {
             mainObj.removeChild(enemyBossArray[r].enemyNode);
             enemyBossArray.splice(r, 1);
             }
             }*/
            for(var i=0;i<enemyArray.length;i++){
                if(enemyArray[i].isDead==false){
                    enemyArray[i].move();
                    //移出超出界限的敌人
                    if(parseInt(enemyArray[i].enemyNode.style.left)<=0){
                        mainObj.removeChild(enemyArray[i].enemyNode);
                        enemyArray.splice(i,1);
                        console.log(enemyArray.length);
                    }
                }else{
                    enemyArray[i].explosuonTime--;
                    if(enemyArray[i].explosuonTime<=0){
                        mainObj.removeChild(enemyArray[i].enemyNode);
                        enemyArray.splice(i,1);
                    }
                }

            }
        }
//===================================子弹模板============================================
        /*
         * 属性：
         *   1.图片节点
         *   2.图片路径
         *   3.x,y
         *   4.攻击力
         *   5.速度
         * 行为：
         *   1：移动
         *   2.初始化
         *   3.碰撞*/
    function Bullet(imgsrc,x,y,attach,speed,width,height){
        this.bulletNode=document.createElement("img");
        this.imgsrc=imgsrc;
        this.x=x;
        this.y=y;
        this.attach=attach;
        this.speed=speed;
        this.width=width;
        this.height=height;
        this.isDead=false;

        this.move= function () {
            this.bulletNode.style.left=parseInt(this.bulletNode.style.left)+this.speed+"px";
        };
        this.init=function(){
            this.bulletNode.src=this.imgsrc;
            this.bulletNode.style.position="absolute";
            this.bulletNode.style.top=this.y+"px";
            this.bulletNode.style.left=this.x+"px";
            mainObj.appendChild(this.bulletNode);
        };
        this.init();
}
    /*子弹移动的函数*/
    function bulletFly(){
        for(var i=0;i<bulletArray.length;i++){
            if(bulletArray[i].isDead==false){
                bulletArray[i].move();
                if(parseInt(bulletArray[i].bulletNode.style.left)>1366){
                    mainObj.removeChild(bulletArray[i].bulletNode);
                    bulletArray.splice(i,1);
                }
            }else{
                mainObj.removeChild(bulletArray[i].bulletNode);
                bulletArray.splice(i,1);
                totalMark=parseInt(totalMark+enemyArray[i].mark);
                console.log(totalMark);
            }
        }
        //console.log(1111);
    }

/*子弹于飞机的碰撞*/
    function crashCheck(){//有问题
        for(var i=0;i<enemyArray.length;i++) {//遍历敌人
            for (var u = 0; u < bulletArray.length; u++) {//遍历子弹
                var btLeft = parseInt(bulletArray[u].bulletNode.style.left);
                var btTop = parseInt(bulletArray[u].bulletNode.style.top);
                //console.log(bulletArray[u].width);
                //console.log(bulletArray[u].height);
                var enLeft = parseInt(enemyArray[i].enemyNode.style.left);
                var enTop = parseInt(enemyArray[i].enemyNode.style.top);
                //console.log(enemyArray[i].width);
                //console.log(enemyArray[i].height);
                if (btLeft + parseInt(bulletArray[u].width) >= enLeft && btTop + parseInt(bulletArray[u].height) >= enTop && btLeft <= enLeft + parseInt(enemyArray[i].width) && btTop <= enTop + parseInt(enemyArray[i].height)) {
                    if (enemyArray[i].width == enemyBird.width) {
                        enemyArray[i].enemyNode.src = "../images/enemy/bird/hit.gif";
                        if (enemyArray[i].explosuonTime == 2) {
                            enemyArray[i].enemyNode.src = "../images/enemy/bird/die.gif"
                        }
                        enemyArray[i].isDead = true;
                        bulletArray[u].isDead = true;
                    } else if (enemyArray[i].width == enemyGhost.width) {
                        enemyArray[i].enemyNode.src = "../images/enemy/ghost/hit.gif";
                        if (enemyArray[i].explosuonTime == 2) {
                            console.log(enemyArray[i].explosuonTime);
                            enemyArray[i].enemyNode.src = "../images/enemy/ghost/die.gif";
                        }
                        enemyArray[i].isDead = true;
                        bulletArray[u].isDead = true;
                    } else if (enemyArray[i].width == enemyPlane.width) {
                        enemyArray[i].enemyNode.src = "../images/enemy/plane/hit.gif";
                        enemyArray[i].isDead = true;
                        bulletArray[u].isDead = true;
                    } else if (enemyArray[i].width == enemyBoss.width) {
                        enemyArray[i].enemyNode.src = "../images/enemy/boss/hit.gif";
                        enemyArray[i].isDead = true;
                        bulletArray[u].isDead = true;
                    }
                }
            }
        }
    }