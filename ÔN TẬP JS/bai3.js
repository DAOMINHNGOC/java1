//Bài slideshow

var slideshow = document.querySelector("#slideshow");
var index = 0;
var imgArr = [];
document.body.onload = function(){
    for(var i = 0; i < 4; i++){
        imgArr[i] = new Image();
        imgArr[i].src = "images/slide" +(i+1)+ ".jpg";
    }
}
function pre(){
    index--;
    if(index<0) index =3;
    slideshow.src = imgArr[index].src;
}
function next(){
    index++;
    if(index>3) index =0;
    slideshow.src = imgArr[index].src;
}
var t;
function auto(){
    clearInterval(t);
    t = setInterval("next()",1000);
}
function stop(){
    clearInterval(t);
}

//bài validate

function validate(){
    var ht = document.frmdoimatkhau.txtten.value;
    var mkcu = document.frmdoimatkhau.psmkcu.value;
    var mkmoi = document.frmdoimatkhau.psmkmoi.value;
    var nlmkmoi = document.frmdoimatkhau.psnlmkmoi.value;
    var email = document.frmdoimatkhau.txtemail.value;
    var sdt = document.frmdoimatkhau.txtsdt.value;
    var ok = true;


    //Ho tên
    if(ht.length == 0){
        document.getElementById("loiten").innerHTML = "Cần điền họ tên";
        ok = false;
    }
    else document.getElementById("loiten").innerHTML = "";

    //mk cũ
    if(mkcu.length == 0){
        document.getElementById("loimkcu").innerHTML = "Cần điền mk cũ";
        ok = false;
    }
    else if(!mkcu.match("123@abc123")){
        document.getElementById("loimkcu").innerHTML = "mk cũ sai định dạng";
        ok = false;
    }
    else document.getElementById("loimkcu").innerHTML = "";

    //email
    var regEmail = /^\w+@\w+\.\w{2,4}$/;
    if(email.length == 0){
        document.getElementById("loiemail").innerHTML ="Cần điền email";
        ok = false;
    }
    else if(!email.match(regEmail)){
        document.getElementById("loiemail").innerHTML ="Cần điền đúng định dạng email";
        ok = false;
    }
    else document.getElementById("loiemail").innerHTML = "";

    //sdt
    var regSDT = /^0[0-9]{9}$/;
    // var regSDT = /^0+\d{9}$/;
    if(sdt.length == 0){
        document.getElementById("loisdt").innerHTML ="Cần điền sdt";
        ok = false;
    }
    else if(!sdt.match(regSDT)){
        document.getElementById("loisdt").innerHTML ="Cần điền đúng định dạng";
        ok = false;
    }
    else document.getElementById("loisdt").innerHTML = "";

    //mk mới
   
    if(mkmoi.length == 0){
        document.getElementById("loimkmoi").innerHTML = "Cần điền mk mới";
        ok = false;
    }
    else if(mkmoi.length > 0 && mkmoi.length < 3){
        document.getElementById("loimkmoi").innerHTML = "mật khẩu yếu";
        ok = false;
    }
    else if(mkmoi.length >=3 && mkmoi.length <8){
        document.getElementById("loimkmoi").innerHTML = "mật khẩu tb";
        ok = false;
    }
    else if(mkmoi.length >=8){
        document.getElementById("loimkmoi").innerHTML = "mật khẩu mạnh";
        ok = false;
    }
    
    else document.getElementById("loimkmoi").innerHTML = "";

    //nlmk mới
    if(nlmkmoi.length == 0){
        document.getElementById("loinlmkmoi").innerHTML = "Cần điền nlmk mới";
        ok = false;
    }
    else if(!nlmkmoi.match(mkmoi)){
        document.getElementById("loinlmkmoi").innerHTML = "Cần điền đúng định dạng nlmk mới";
        ok = false;
    }
    else document.getElementById("loinlmkmoi").innerHTML = "";

    if(ok){
        alert("Đổi mật khẩu thahf công");
        return true;
    }
    else return false;
}