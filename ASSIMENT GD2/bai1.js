function validateForm(){
    var ht = document.frmdangky.txtname.value;
    var emai = document.frmdangky.txtemail.value;
    var sdt = document.frmdangky.txtsdt.value;
    var ngh = document.frmdangky.slnganhhoc;
    var gt = document.frmdangky.rdradio;
    var ngays = document.frmdangky.dtngay.value;
    var ok = true;
    // Họ tên
    if(ht.length == 0){
        document.getElementById("loiname").innerHTML = "Cần nhập họ và tên";
        ok = false;
    }else document.getElementById("loiname").innerHTML = "";

    // email
    var regEmail =/^\w+@\w+\.\w{2,6}$/;
    var redeamil = /^\w+@\w+\.\w/;
    if(emai.length == 0){
        document.getElementById("loiemail").innerHTML = "cần nhập email";
        ok = false;
    }else if(!emai.match(regEmail)){
        document.getElementById("loiemail").innerHTML = "Email không đúng định dạng";
        ok = false;  
    }
     else document.getElementById("loiemail").innerHTML = "";
// số điện thoại
    var regSDT =/^0[0-9]{9}$/;
    if(sdt.length == 0){
        document.getElementById("loisdt").innerHTML ="Cần nhập số điện thoại";
        ok = false;
    }else if(!sdt.match(regSDT)){
            document.getElementById("loisdt").innerHTML ="số điện thoại không đúng định dạng";
        ok = false;
        }
     else document.getElementById("loisdt").innerHTML ="";

    // nghành học
    if(!ngh[1].selected && !ngh[2].selected && !ngh[3].selected && !ngh[4].selected){
        document.getElementById("loinganhhoc").innerHTML ="Cần chọn ngành học";
        ok = false;
    } else document.getElementById("loinganhhoc").innerHTML ="";
    if(!gt[0].checked && !gt[1].checked){
        document.getElementById("loigioitinh").innerHTML ="Cần chọn giới tính";
        ok = false;
    } else  document.getElementById("loigioitinh").innerHTML ="";
    // ngày sinh
    if(ngays ==""){
        document.getElementById("loingay").innerHTML = "Cần điền ngày/tháng/năm";
        ok = false;
    }else document.getElementById("loingay").innerHTML = "";
    // kết quả khi đã nhập đầy đủ thông tin
    if(ok){
        alert("Gửi thành công");
        return true;
    }
    else return false;
}