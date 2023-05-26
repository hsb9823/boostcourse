var a = [0,1,2,3,4,5,6,7,8,9,10];
var changedArray = [...a, 2,3];

var fun = function (v, i, o) {
    console.log(v);
};

// changedArray.forEach(fun);

// var mapped = changedArray.map(function (v){
//     return v * 2;
// //changedArray의 원소를 돌면서, 값을 변경시킨 후에 새로운 배열로 만들어서 반환한다
// });
// console.log(mapped, changedArray);


var newArr = ["apple", "orange"].map(function(value, index){
    return (index + 1) + "번째 과일은 " + value + "입니다.";

});

console.log(newArr);