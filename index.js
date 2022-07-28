window.onload = function () {
    render();
}
class CreateData {
    constructor(pid,aid,latitude,longitude,bssid,id,sign,frequence,channel,center,time,bandwidth) {
        this.pid = pid;
        this.aid = aid;
        this.latitude = latitude;
        this.longitude = longitude;
        this.bssid= bssid;
        this.id= id;
        this.sign= sign;
        this.frequence= frequence;
        this.channel= channel;
        this.center= center;
        this.time= time;
        this.bandwidth= bandwidth;

    }

}
let data1 = new CreateData("a","5","32.0232947698591","118.786010945244","d4:d5:1b:de:3d:00","McD_IOT2","-74","5765","153","5765","2022-04-09 19:14:37","5G");
let data2 = new CreateData("b","5","32.0232947698591","118.786010945244","d4:d5:1b:de:3d:00","McD_IOT2","-74","5765","153","5765","2022-04-09 19:14:37","5G");
let data3 = new CreateData("c","5","32.0232947698591","118.786010945244","d4:d5:1b:de:3d:00","McD_IOT2","-74","5765","153","5765","2022-04-09 19:14:37","5G");
let data4 = new CreateData("d","5","32.0232947698591","118.786010945244","d4:d5:1b:de:3d:00","McD_IOT2","-74","5765","153","5765","2022-04-09 19:14:37","5G");
let data5 = new CreateData("e","5","32.0232947698591","118.786010945244","d4:d5:1b:de:3d:00","McD_IOT2","-74","5765","153","5765","2022-04-09 19:14:37","5G");
let data6 = new CreateData("f","5","32.0232947698591","118.786010945244","d4:d5:1b:de:3d:00","McD_IOT2","-74","5765","153","5765","2022-04-09 19:14:37","5G");
let data7 = new CreateData("g","5","32.0232947698591","118.786010945244","d4:d5:1b:de:3d:00","McD_IOT2","-74","5765","153","5765","2022-04-09 19:14:37","5G");
let data8 = new CreateData("h","5","32.0232947698591","118.786010945244","d4:d5:1b:de:3d:00","McD_IOT2","-74","5765","153","5765","2022-04-09 19:14:37","5G");
let data9 = new CreateData("i","5","32.0232947698591","118.786010945244","d4:d5:1b:de:3d:00","McD_IOT2","-74","5765","153","5765","2022-04-09 19:14:37","5G");
let data10 = new CreateData("j","5","32.0232947698591","118.786010945244","d4:d5:1b:de:3d:00","McD_IOT2","-74","5765","153","5765","2022-04-09 19:14:37","5G");
let data11 = new CreateData("k","5","32.0232947698591","118.786010945244","d4:d5:1b:de:3d:00","McD_IOT2","-74","5765","153","5765","2022-04-09 19:14:37","5G");
let data12 = new CreateData("l","5","32.0232947698591","118.786010945244","d4:d5:1b:de:3d:00","McD_IOT2","-74","5765","153","5765","2022-04-09 19:14:37","5G");
let datas =[data1,data2,data3,data4,data5,data6,data7,data8,data9,data10,data11,data12]
//常用名词
let list = ["<input type='checkbox' id='check-box' οnclick='checkAll(this)'>",
    "序号","pid","aid","经度","纬度","bssid","网络名称","信号","频率","信道","中心频率","时间","带宽"];
let editInfo = document.getElementsByClassName("edit-info");
let currentPage = 1;

function render() {
    //拿到form
    let oTable = document.getElementById("form");
    //清空表
    oTable.innerHTML = "";
    //生成头部
    let oTr = document.createElement("tr");
    //
    for (let i = 0;i<list.length;i++){
        let oTd = document.createElement("td");
        if (i==0 || i==1){
            oTd.style.width = "45px";
        }
        else {
            oTd.style.width = "175px";
        }
        oTd.style.textAlign = "center";
        oTd.innerHTML = list[i];
        oTr.appendChild(oTd);
    }
    //设置oTr样式并加入table中；
    oTr.style.height = "54px";
    oTr.style.fontSize = "bold";
    oTr.style.backgroundColor = "#dadee1";
    oTable.appendChild(oTr);
    //页码

    let pageInfo = document.querySelector(".numInfo");
    pageInfo.innerHTML = `共${datas.length}条信息，共${Math.ceil(datas.length/10)}页，目前为${currentPage}页`;
    //创建数据条目
    for (let i = (currentPage-1) * 10 ; i < datas.length && i<(currentPage*10);i++){
        //创建每一行
        let oBodyTr = document.createElement("tr");
        oBodyTr.style.textAlign = "center";
        oBodyTr.style.height = "35px";
        //颜色
        if (i % 2 == 0) {
            oBodyTr.style.backgroundColor = "#ffffff";
        } else {
            oBodyTr.style.backgroundColor = "#eef1f8";
        }
        //创建表格
        for (let j = 0; j < 20; j++) {
              oBodyTr.insertCell(j);
        }
        oBodyTr.childNodes[0].innerHTML = "<input type='checkbox' class='checkBoxes' name='boxSituation'/>";
        oBodyTr.childNodes[1].innerHTML = `${i+1}`;
        oBodyTr.childNodes[2].innerHTML = datas[i].pid;
        oBodyTr.childNodes[3].innerHTML = datas[i].aid;
        oBodyTr.childNodes[4].innerHTML = datas[i].latitude;
        oBodyTr.childNodes[5].innerHTML = datas[i].longitude;
        oBodyTr.childNodes[6].innerHTML = datas[i].bssid;
        oBodyTr.childNodes[7].innerHTML = datas[i].id;
        oBodyTr.childNodes[8].innerHTML = datas[i].sign;
        oBodyTr.childNodes[9].innerHTML = datas[i].frequence;
        oBodyTr.childNodes[10].innerHTML = datas[i].channel;
        oBodyTr.childNodes[11].innerHTML = datas[i].center;
        oBodyTr.childNodes[12].innerHTML = datas[i].time;
        oBodyTr.childNodes[13].innerHTML = datas[i].bandwidth;
       

        
        oTable.appendChild(oBodyTr);
    }

    function hidden() {
        document.querySelector(".hiddenPage").style.display = "none";
        document.querySelector(".edit").style.display = "none";
    }
}
function add() {
    //调用show方法
    show();
    changHeader(0);
    changeBtn(0);

}
//显示方法
function show() {
    document.querySelector(".hiddenPage").style.display = "block";
    document.querySelector(".edit").style.display = "block";
}
//隐藏方法
function hidden() {
    document.querySelector(".hiddenPage").style.display = "none";
    document.querySelector(".edit").style.display = "none";
}
//更改弹出框文字的方法
function changHeader(i) {
    let headTitle = document.querySelector(".head-title");
    if (i==0){
        let headTitle = document.querySelector(".head-title");
        headTitle.innerHTML = "新增数据信息";
    }
    else if (i==1){
        headTitle.innerHTML = "查看数据信息";
    }
    else if (i==2){
        headTitle.innerHTML = "修改数据信息";
    }
}
//更改底部按钮的方法
function changeBtn(i,index) {
    let leftBtn = document.querySelector(".edit-submit");
    if (i==0){
        leftBtn.innerHTML = "提交";
        leftBtn.onclick = submit;
    }
    else if (i==1){
        leftBtn.style.display = "none";
        leftBtn.disabled = true;
    }
    else if(i==2){
        leftBtn.style.display = "inline-block";
        leftBtn.disabled = false;
        leftBtn.innerHTML = "保存";
        leftBtn.onclick = function () {
            if (!confirm("确定保存吗？")){
                return;
            }
            else{
                //更换数据
                datas[index].id = editInfo[0].value;
                datas[index].name = editInfo[1].value;
                datas[index].college = editInfo[2].value;
                datas[index].major = editInfo[3].value ;
                datas[index].grade = editInfo[4].value;
                datas[index].clas = editInfo[5].value;
                datas[index].age = editInfo[6].value;
                //隐藏
                hidden();
                render();
            }

        }

    }
}

//新增按钮提交方法
function submit() {
    if (correct()){
        //将表单里信息创建对象并添加到数组里
       let newData = new  CreateData(editInfo[0].value,editInfo[1].value,editInfo[2].value,editInfo[3].value,editInfo[4].value,editInfo[5].value,editInfo[6].value);
        datas.push(newData);
       alert("新增成功");
       //隐藏
        hidden();
        //重新创建表
        render();
    }else{
        alert('新增失败');
    }
    //清空
    clearEdit();

}
//表单验证方法
function correct() {
   //验证空
    for (let i = 0;i < editInfo.length;i++){
        if (editInfo[i].value == ""){
            alert(list[i+2] + "不能为空");
            return false;
        }
        
    }
    return true;
}
//清空表的方法
function clearEdit() {
    for (let i = 0; i < editInfo.length; i++) {
        editInfo[i].value = "";
    }
}
//取消按钮
function cancel() {
    hidden();
    clearEdit();
    for (let i = 0; i < editInfo.length; i++) {
        editInfo[i].disabled = false;
    }
}
//上一页
function prevPage() {
    if (currentPage <=1){
        alert("当前是第一页");
    }else{
        currentPage--;
        render();
    }
}
//下一页
function nextPage() {
    if(currentPage >= Math.ceil(datas.length/10)){
        alert("当前最后一页");
    }
    else {
        currentPage++;
        render();
    }
}
//插入数据的方法
function insertInfo(i) {

    editInfo[0].value = datas[i].id;
    editInfo[1].value = datas[i].name;
    editInfo[2].value = datas[i].college;
    editInfo[3].value = datas[i].major;
    editInfo[4].value = datas[i].grade;
    editInfo[5].value = datas[i].clas;
    editInfo[6].value = datas[i].age;
}
//查看方法
function watch(i) {
    show();
    changHeader(1);
    insertInfo(i);
    changeBtn(1);
    //修改属性
    for (let j = 0; j < editInfo.length; j++) {
        editInfo[j].disabled = true;
    }
}
//修改方法
function update(i) {
    show();
    changHeader(2);
    insertInfo(i);
    changeBtn(2,i);
}
//全选按钮
function checkAll(o) {
    let checkBoxs = document.querySelectorAll(".checkBoxes");
    for (let i = 0; i < checkBoxs.length; i++) {
        checkBoxs[i].checked = o.checked;
    }

}
//删除方法
function remove() {
    let checkAll = document.getElementById("check-box");
    let checkBoxs = document.querySelectorAll(".checkBoxes");
    console.log(checkBoxs)
    if (!isChecked()){
        confirm("所选不能为空！");
        return;
    }else{
        //删除当前页面
        if(checkAll.checked){
            let flag = confirm("真的要全部删掉吗？");
            if (!flag){
                return;
            }
            else{
                //删除
                datas.splice((currentPage-1)*10,10);
            }
            render();
            return;
        }

        //删除单个
        for (let i = 0; i < checkBoxs.length; i++) {
            if (checkBoxs[i].checked){
                let flag = confirm("真的要删掉吗？");
                if (!flag){
                    return;
                }
                else{
                    datas.splice((currentPage-1)*10+i,1);
                }
            }
        }
        render();
    }

}
//
function isChecked() {
    let checkBoxs = document.querySelectorAll(".checkBoxes");
    for (let i = 0; i < checkBoxs.length; i++){
        if (checkBoxs[i].checked){
            return true;
        }
    }
    return false;

}
