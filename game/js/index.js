/**
 * Created by miliang on 2017/12/5.
 */
/*==========================================��ȡ�ڵ�======================================================*/
/*��ʼ��ť*/
var btn=document.getElementById("btn");
var img=btn.getElementsByTagName("img")[0];
/*���ذ�ť*/
var back=document.getElementById("img");
var divImg=back.getElementsByTagName("img")[0];
/*��ͣ���뿪��Ϸ*/
var pause=document.getElementById("last");
var pauseY=pause.getElementsByTagName("img")[0];
var pauseN=pause.getElementsByTagName("img")[1];
/*��Ϸʱ��*/
var time=document.getElementById("myTime");
/*==========================================����ƶ�==============================================*/
//��ʼ��ť
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
//���ذ�ť
function mouseMove(){
    back.onmouseover=function(){
        divImg.src="../images/ui/backClick.gif";
        back.style.cursor="pointer";
    };
    back.onmouseout=function(){
        divImg.src="../images/ui/back.gif";
    }
}
//��ͣ���뿪��Ϸ
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
    /!*ÿ��һ������һ������*!/
    createE=setInterval(createEnemy, 500);//����
    /!*ÿ��һ�ٺ����ƶ�һ��*!/
    enemyM=setInterval(enemyMove, 100);
    /!*������ҿ����ƶ�*!/
    dragonM=setInterval(tranDragonMove,50);
    /!*�����ӵ��ķ���*!/
    bulletF=setInterval(bulletFly,100);
}*/
/*=========================================ȫ�ֱ���=============================================*/
var mainObj=document.getElementById("main");
var enemyArray=[];//�з�����
var myDragon;//��ҿ���
var bullet;//�ӵ�
var birth;//Ѫ��
var enemyBird;//���ˡ�����
var enemyGhost//���ˡ�����
var enemyPlane;//���ˡ����ɻ�
var enemyBoss;//���ˡ���boss
var bulletArray=[];//�ӵ�����

var nav;//������
var bom;

/*==========================����================================*/
//����ƶ��Ŀ���
var upBtnStatus=false;//���ϵİ�ť����
var downBtnStatus=false;//���µİ�ť����
var leftBtnStatus=false;//����İ�ť����
var rightBtnStatus=false;//���ҵİ�ť

/*=============================�ܷ�=========================*/
var totalMark=0;

//Ѫ���ƶ��Ŀ��أ�
/*var upStatus=false;//���ϵĿ���
var downStatus=false;//���µĿ���
var leftStatus=false;//����Ŀ���
var rightStatus=false;//���ҵĿ���*/
/*==========================��ʱ��===================================*/
var createE;  /*ÿ��һ������һ������*/
var enemyM;/*ÿ��һ�ٺ����ƶ�һ��*/
var dragonM;/*������ҿ����ƶ�*/
var bulletF; /*�����ӵ��ķ���*/

/*===============================================�����¼�=========================================*/
//��ʼ��ť
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
    nav=new Nav("../images/ui/exp0.png",10,100);//������
    bom=new Nav("../images/ui/boom.gif",10,300);//boom
    birth=new Birth("../images/ui/HPMAX.png",50,330,5);

    /*ÿ��һ������һ������*/
    createE=setInterval(createEnemy, 1000);//����
    /*ÿ��һ�ٺ����ƶ�һ��*/
    enemyM=setInterval(enemyMove, 100);
    /*������ҿ����ƶ�*/
    dragonM=setInterval(tranDragonMove,50);
    /*�����ӵ��ķ���*/
    bulletF=setInterval(bulletFly,100);
    setInterval(crashCheck,20);
    //setInterval(tranBirth,50);
    setTimeout(gameTime,1000);
}

//===============================================���ذ�ť===============================================
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
/*ѡ����ͣ���뿪��Ϸ*/
function myGame(){
    document.getElementById("last").style.display="none";
}
/*==========================================�˳���Ϸ===============================================*/
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
    mainObj.removeChild(birth.birthNode);//Ѫ��
 }
/*========================================������Ϸ==========================================*/
function myClose(){
    createE=setInterval(createEnemy, 1000)
    enemyM=setInterval(enemyMove, 100);
    dragonM=setInterval(tranDragonMove,50);
    bulletF=setInterval(bulletFly,100);
    setInterval(crashCheck,20);
}

    /*===========================��Ϸʱ��================================*/
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

//======================================nav���캯��================================================
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

    /*==========================��ҵĹ��캯��=================================*/
    /**
     *  @param{string} imgsrc ͼƬ·��
     *  @param{number} x X�����ʼλ��
     *  @param{number} y Y�����ʼλ��
     *  @param{number} blood Ѫ��
     *  @param{number} speed �ٶ�*/
    function PlayerDragon(imgsrc, x, y, blood, speed) {
        this.dragonNode = document.createElement("img");
        this.imgsrc = imgsrc;
        this.x = x;
        this.y = y;
        this.blood = blood;
        this.speed = speed;
        //�����ӵ�
        this.shoot = function () {
            //�����ӵ�
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

            /* ��ʼ������*/
            this.init = function () {
                this.dragonNode.src = imgsrc;
                this.dragonNode.style.position = "absolute";
                this.dragonNode.style.left = this.x + "px";
                this.dragonNode.style.top = this.y + "px";
                mainObj.appendChild(this.dragonNode);
            };
            this.init();
    }
    /*��ҵ��ƶ���*/
    document.onkeydown=function(e){
        if(e.keyCode==38){//��
            upBtnStatus=true;
        }
        if(e.keyCode==40){//��
            downBtnStatus=true;
        }
        if(e.keyCode==37){//��
            console.log(1245);
            leftBtnStatus=true;

        }
        if(e.keyCode==39){//��
            console.log("right");
            rightBtnStatus=true;
        }
        if(e.keyCode==32){
            myDragon.shoot();
            //myDragon=new PlayerDragon("../images/dragon/small/magicmissile.gif",50,350,5,20);
        }
    };
    /*����ƶ����*/
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
    /*����ƶ�*/
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

//=======================Ѫ���Ĺ��췽��===============================
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
    /*��ʼ��*/
    this.init=function(){
        this.birthNode.src=this.imgsrc;
        this.birthNode.style.position="absolute";
        this.birthNode.style.left=this.x+"px";
        this.birthNode.style.top=this.y+"px";
        mainObj.appendChild(this.birthNode);
    };
    this.init();
    /*Ѫ�����ƶ���*/
    document.onkeydown=function(e){
        if(e.keyCode==38){//��
            upBtnStatus=true;
            console.log(1245);
        }
        if(e.keyCode==40){//��
            downBtnStatus=true;
        }
        if(e.keyCode==37){//��
            //console.log(1245);
            leftBtnStatus=true;

        }
        if(e.keyCode==39){//��
            //console.log("right");
            rightBtnStatus=true;
        }
        if(e.keyCode==32){
            myDragon.shoot();
            //myDragon=new PlayerDragon("../images/dragon/small/magicmissile.gif",50,350,5,20);
        }
    };
    /*Ѫ���ƶ����*/
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
    /*Ѫ���ƶ�*/
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

    //=====================================����==================================================
    /*�������˵Ĺ�������*/
    function EnemyAnimal(imgsrc, x, y, blood, speed,width,height,mark) {
        this.enemyNode = document.createElement("img");//���˽ڵ�
        this.imgsrc = imgsrc;
        this.x = x;
        this.y = y;
        this.blood = blood;
        this.speed = speed;
        this.width=width;
        this.height=height;
        this.mark=mark;//����
        this.explosuonTime=15;//��������ʱ��
        this.isDead=false;//�Ƿ�����
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

    /*��������*/
    function createEnemy() {
        var myNo=Math.random()*100;//�жϳ��ֵĵ���
        console.log(myNo);
        if(myNo<30&&myNo>0){
            /*��������-----��*/
            enemyBird = new EnemyAnimal("../images/enemy/bird/move.gif", Math.random() * 1366, Math.random() * 500, 1, Math.random() * 10 + 1,58,54,5);
            enemyArray.push(enemyBird);
            //enemyBirdArray.push(enemyBird);
            //console.log(enemyBirdArray.length);
        }else if(myNo<60&&myNo>30){
            console.log(myNo);
            /*��������-----��*/
            enemyGhost= new EnemyAnimal("../images/enemy/ghost/move.gif", Math.random() * 1366, Math.random() * 500, 1, Math.random() * 18 + 1,107,92,10);
                                                        //  ͼƬ��·��                   X��              Y��   Ѫ��         �ٶ�
            enemyArray.push(enemyGhost);
            //enemyGhostArray.push(enemyGhost);
            //console.log(enemyGhostArray.length);
        }else if(myNo<90&&myNo>60){
            /*��������-----�ɻ�*/
            enemyPlane = new EnemyAnimal("../images/enemy/plane/move.gif", Math.random() * 1366, Math.random() * 500, 1, Math.random() * 20 + 1,59,41,15);
            enemyArray.push(enemyPlane);
            //enemyPlaneArray.push(enemyPlane);
            //console.log(enemyArray.length);
        }
        else if(myNo>=97){
            /*��������-----boss*/
            enemyBoss = new EnemyAnimal("../images/enemy/boss/move.gif", Math.random() * 1366, Math.random() * 500, 1, Math.random() * 5 + 1,183,163,100);
                                                 //  ͼƬ��·��                   X��              Y��      Ѫ��         �ٶ�
            enemyArray.push(enemyBoss);
            //enemyBossArray.push(enemyBoss);
        }
    }

        /*�����ƶ�*/
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
                    //�Ƴ��������޵ĵ���
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
//===================================�ӵ�ģ��============================================
        /*
         * ���ԣ�
         *   1.ͼƬ�ڵ�
         *   2.ͼƬ·��
         *   3.x,y
         *   4.������
         *   5.�ٶ�
         * ��Ϊ��
         *   1���ƶ�
         *   2.��ʼ��
         *   3.��ײ*/
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
    /*�ӵ��ƶ��ĺ���*/
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

/*�ӵ��ڷɻ�����ײ*/
    function crashCheck(){//������
        for(var i=0;i<enemyArray.length;i++) {//��������
            for (var u = 0; u < bulletArray.length; u++) {//�����ӵ�
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