var obj = {key:"hello", addition : [
    {name: "han sang beom"}, {age: 2}
]};
// console.log(obj.key);
// console.log(obj.key);
// console.log(obj.addition[0].name);

for(key in obj) {
    console.log(obj[key]);
}