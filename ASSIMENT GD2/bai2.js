
//tao ung dung
var app = angular.module("myApp",[]);
// var data = new firebase("https://ngocph20534-default-rtdb.firebaseio.com/");
//Tao controller
app.controller("myCtrl",function($scope){
    //Khai báo mảng chứa tất cả sản phẩm
    $scope.dsSP =[
        {tenSP: 'Bút chì',
        dongia: 7000,
        soLuong: 4
        },
        {
            tenSP: 'Thước kẻ',
            dongia: 3000,
            soLuong:5,

        },
        {
            tenSP: 'Băng dính',
            dongia: 5000,
            soLuong: 7,
        }
    ];   
    $scope.them = function(){
        var sp = [];
        sp.tenSP = $scope.tenSP;
        sp.dongia = $scope.dongia;
        sp.soLuong = $scope.soLuong;
        $scope.dsSP.push(sp);
        
    }
    $scope.tinhTong =function(){
        var tong=0;
        for(var i = 0; i<$scope.dsSP.length;i++){
            var pt = $scope.dsSP[i] ;
            tong += Number((pt.dongia*pt.soLuong));
        }
        return tong;
    }
    
   });
