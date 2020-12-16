function onPageLoad() {
    var xmlhttp = new XMLHttpRequest(); 
    var txt = "";
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myObj = JSON.parse(this.responseText);

            for (x in myObj) {
                txt += "<td>" + myObj[x].
            }
            
            document.getElementById("fraJson").innerHTML = txt;
        }
    }

    xmlhttp.open("GET", "/sensordata.json", true);
    xmlhttp.send();
}