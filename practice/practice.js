function ajax(data) {
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", function () {
        console.log(this.responseText);
    });

    oReq.open("GET", "./json.txt");
    oReq.send();
}

ajax();