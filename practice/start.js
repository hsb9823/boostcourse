function run() { 
    setTimeout ( function() {
        var msg = "hello";
        console.log(msg); 
        console.log("run....ing");
    }, 0);
    console.log("run function end");
}

console.log("start");
run();
console.log("end");