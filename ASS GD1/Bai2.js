
function hienThi() {
    var hinh = document.getElementById("hinh");
    var sp = document.getElementById("sanpham");
    var nameprice = document.getElementsByTagName("span");
    switch (sp.value) {
        case 'Mặt nạ':
            hinh.src = "images/4.jpg";
            nameprice[0].innerHTML = "Mặt nạ mật ong";
            nameprice[1].innerHTML = "500.000vnd";
            break;
        case 'Nước hoa hồng':
            hinh.src = "images/5.jpg";
            nameprice[0].innerHTML = "Nước hoa hồng ";
            nameprice[1].innerHTML = "1.500.00vnd";
            break;
        case "Trà nghệ tây":
            hinh.src = "images/6.jpg";
            nameprice[0].innerHTML = "Trà nghệ tây";
            nameprice[1].innerHTML = "500.000vnd";
            break;
           
    }
}