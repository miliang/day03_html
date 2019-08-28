/**
 * Created by Administrator on 2017/12/16/016.
 */
//=======================部门管理===========================
//部门名称
var depName=["教学部","安保部","后勤部","财务部","行政部"] ;
//所有部门
var depArr=[dep1,dep2,dep3,dep4];
var dep1={
    depNo:"1",//部门编号
    depName:"教学部",//部门名称
    depNum:"15",//部门人数
    depMan:"王小明",//部门主管
    depRemarks:""//备注
};
var dep2={
    depNo:"2",
    depName:"安保部",
    depNum:"3",
    depMan:"王大锤",
    depRemarks:""
};
var dep3={
    depNo:"3",
    depName:"后勤部",
    depNum:"4",
    depMan:"赵小鹏",
    depRemarks:""
};
var dep4={
    depNo:"4",
    depName:"财务部",
    depNum:"2",
    depMan:"王小红",
    depRemarks:""
};
var dep5={
    depNo:"5",
    depName:"行政部",
    depNum:"5",
    depMan:"李大鑫",
    depRemarks:""
};

//========================职工管理=============================
//职工名字
var staffName=["李大鑫","李小夏","王小明","黄大军","张三","王大锤","赵小鹏","李思","王武"];
//职工编号
var staffNo=["201101","201102","201103","201104","201105","201106","201107","201108","201109"];
//职工所在部门
var staffDep=["行政部","教学部","安保部","后勤部","财务部"];
//所有职工
var staffArr=[staff1,staff2,staff3,staff4,staff5,staff6,staff7,staff8,staff9];
var staff1={
    staffNo:"201101",//职工编号
    staffDep:"行政部",//所在部门
    staffName:"李大鑫",//职工名字
    staffRole:"园长",//岗位角色
    staffId:"14801",//账号
    staffPsw:"14801",//密码
    staffTel:"12345678901",//电话
    staffEmail:"lidaxin@163.com",//密码
    staffClass:"",//所带班级
    staffState:"在职"//职工状态
};
var staff2={
    staffNo:"201102",
    staffDep:"行政部",
    staffName:"李小夏",
    staffRole:"行政部主任",
    staffId:"14802",
    staffPsw:"14802",
    staffTel:"12345678902",
    staffEmail:"lixiaoxia@163.com",
    staffClass:"01",
    staffState:"在职"
};
var staff3={
    staffNo:"201103",
    staffDep:"教学部",
    staffName:"王小明",
    staffRole:"教师",
    staffId:"14803",
    staffPsw:"14803",
    staffTel:"12345678903",
    staffEmail:"wangxiaoming@163.com",
    staffClass:"02",
    staffState:"在职"
};
var staff4={
    staffNo:"201104",
    staffDep:"教学部",
    staffName:"黄大军",
    staffRole:"班主任",
    staffId:"14804",
    staffPsw:"14804",
    staffTel:"12345678904",
    staffEmail:"huangdajun@163.com",
    staffClass:"03",
    staffState:"在职"
};
var staff5={
    staffNo:"201105",
    staffDep:"安保部",
    staffName:"王大锤",
    staffRole:"保安",
    staffId:"14805",
    staffPsw:"14805",
    staffTel:"12345678905",
    staffEmail:"wangdachui@163.com",
    staffClass:"",
    staffState:"在职"
};
var staff6={
    staffNo:"201106",
    staffDep:"教学部",
    staffName:"张三",
    staffRole:"教师",
    staffId:"14806",
    staffPsw:"14806",
    staffTel:"12345678906",
    staffEmail:"zhangsan@163.com",
    staffClass:"04",
    staffState:"休假"
};
var staff7={
    staffNo:"201107",
    staffDep:"后勤部",
    staffName:"赵小鹏",
    staffRole:"后勤部长",
    staffId:"14807",
    staffPsw:"14807",
    staffTel:"12345678907",
    staffEmail:"zhaoxiaopeng@163.com",
    staffClass:"",
    staffState:"在职"
};
var staff8={
    staffNo:"201108",
    staffDep:"后勤部",
    staffName:"李思",
    staffRole:"司机",
    staffId:"14808",
    staffPsw:"14808",
    staffTel:"12345678908",
    staffEmail:"lisi@163.com",
    staffClass:"",
    staffState:"在职"
};
var staff9={
    staffNo:"201109",
    staffDep:"财务部",
    staffName:"王武",
    staffRole:"财务部部长",
    staffId:"14809",
    staffPsw:"14809",
    staffTel:"12345678909",
    staffEmail:"wangwu@163.com",
    staffClass:"",
    staffState:"在职"
};

//========================班级管理===========================
var classId=["01","02","03","04"];//班级编号
var classJD=["小班","中班","大班"];//班级阶段
var classXm=["黄大军","张大三","赵四","王小明"];//班主任
//所有班级
var classArr=[class1,class2,class3,class4];
var class1={
    classID:"01",//编号
    classroom:"2教",//教室
    classRs:"20",//人数
    classXm:"黄大军",//班主任
    classJD:"小班",//当前阶段
    classQQ:"123456",//QQ群
    classZt:"在读",//班级状态
    classNan:"12",//男
    classWo:"8",//女
    classBz:""//备注
};
var class2={
    classID:"02",//编号
    classroom:"4教",//教室
    classRs:"18",//人数
    classXm:"张大三",//班主任
    classJD:"中班",//当前阶段
    classQQ:"147258",//QQ群
    classZt:"在读",//班级状态
    classNan:"10",//男
    classWo:"8",//女
    classBz:""//备注
};
var class3={
    classID:"03",//编号
    classroom:"5教",//教室
    classRs:"21",//人数
    classXm:"王小明",//班主任
    classJD:"中班",//当前阶段
    classQQ:"147789",//QQ群
    classZt:"在读",//班级状态
    classNan:"10",//男
    classWo:"9",//女
    classBz:""//备注
};
var class4={
    classID:"04",//编号
    classroom:"3教",//教室
    classRs:"15",//人数
    classXm:"赵四",//班主任
    classJD:"大班",//当前阶段
    classQQ:"456321",//QQ群
    classZt:"在读",//班级状态
    classNan:"7",//男
    classWo:"8",//女
    classBz:""//备注
};

//=======================学生管理=============================
//学生姓名
var stuName=["李鑫鑫","刘超超","赵鹏鹏","陈小杰","米小良","廖小航","黄二君","曾小贤"];
//学生班级
var stuClass=["01","02","03","04"];
//学生编号
var stuID=["66601","66602","66603","66604","66605","66606","66607","66608"];
//所有学生
var studentArr=[stu1,stu2,stu3,stu4,stu5,stu6,stu7,stu8];
var stu1={
    stuName:"李鑫鑫",//姓名
    stuSex:"男",//性别
    stuAge:3,//年龄
    stuID:66601,//学生编号
    stuClass:"01",//所在班级
    stuGraduateTime:"2017",//入学时间
    stuParent:"李大大",//学生父母
    stuContactTel:14778996332,//联系方式
    stuEmail:"2016001@qq.com",//qq
    stuStatus:"上学",//学生状态
    stuMark:"无"//备注
};
var stu2={
    stuName:"刘超超",
    stuSex:"男",
    stuAge:4,
    stuID:66602,
    stuClass:"02",
    stuGraduateTime:"2016",
    stuParent:"刘大大",
    stuContactTel:14778996378,
    stuEmail:"2016002@qq.com",
    stuStatus:"上学",
    stuMark:"无"
};
var stu3={
    stuName:"赵鹏鹏",
    stuSex:"男",
    stuAge:4,
    stuID:66603,
    stuClass:"02",
    stuGraduateTime:"2016",
    stuParent:"赵大大",
    stuContactTel:14778496332,
    stuEmail:"2016003@qq.com",
    stuStatus:"请假",
    stuMark:"无"
};
var stu4={
    stuName:"陈小杰",
    stuSex:"男",
    stuAge:5,
    stuID:66604,
    stuClass:"04",
    stuGraduateTime:"2015",
    stuParent:"陈大大",
    stuContactTel:18378996332,
    stuEmail:"2016004@qq.com",
    stuStatus:"上学",
    stuMark:"无"
};
var stu5={
    stuName:"米小良",
    stuSex:"女",
    stuAge:4,
    stuID:66605,
    stuClass:"03",
    stuGraduateTime:"2016",
    stuParent:"米大大",
    stuContactTel:15978996332,
    stuEmail:"2016005@qq.com",
    stuStatus:"上学",
    stuMark:"小可爱"
};
var stu6={
    stuName:"廖小航",
    stuSex:"男",
    stuAge:4,
    stuID:66606,
    stuClass:"03",
    stuGraduateTime:"2016",
    stuParent:"廖总",
    stuContactTel:18178996332,
    stuEmail:"2016006@qq.com",
    stuStatus:"上学",
    stuMark:"长得帅又有钱"
};
var stu7={
    stuName:"黄二君",
    stuSex:"女",
    stuAge:5,
    stuID:66607,
    stuClass:"04",
    stuGraduateTime:"2015",
    stuParent:"黄大大",
    stuContactTel:13578996332,
    stuEmail:"2016007@qq.com",
    stuStatus:"上学",
    stuMark:"无"
};
var stu8={
    stuName:"曾小贤",
    stuSex:"女",
    stuAge:3,
    stuID:66608,
    stuClass:"01",
    stuGraduateTime:"2017",
    stuParent:"曾大大",
    stuContactTel:18078996398,
    stuEmail:"2016008@qq.com",
    stuStatus:"上学",
    stuMark:"无"
};

//========================角色（权限）管理============================
//所有角色
var roleArr=[role1,role2,role3,role4];
var role1={
    roleNum:"1",
    roleName:"园长",
    roleWork:"职工管理",
    roleRemark:"无"
};
var role2={
    roleNum:"2",
    roleName:"老师",
    roleWork:"学生管理",
    roleRemark:"无"
};
var role3={
    roleNum:"3",
    roleName:"管理员",
    roleWork:"系统管理",
    roleRemark:"无"
};
var role4={
    roleNum:"4",
    roleName:"游客",
    roleWork:"只有访问权限",
    roleRemark:"无"
};
