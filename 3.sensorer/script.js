function onPageLoad() {
    var xmlhttp = new XMLHttpRequest(); 
    var txt = "";
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myObj = JSON.parse(this.responseText);
            txt += "<tr><th>bygning</th><th>lokale</th><th>temperatur</th><th>luftfugtighed</th><th>CO2</th><th>luftkvalitet</th><th>lysniveau</th><th>lysfarve</th><th>lydniveau</th></tr>"


            for (x in myObj) {
                console.log(this.responseText);
                txt += "<tr><td>" + myObj[x].bygning + "</td>";
                txt +="<td>" + myObj[x].lokale +"</td>";
                txt +="<td>" + myObj[x].temperatur +"</td>";
                txt +="<td>" + myObj[x].luftfugtighed +"</td>";
                txt +="<td>" + myObj[x].co2 +"</td>";
                txt +="<td>" + myObj[x].luftkvalitet +"</td>";
                txt +="<td>" + myObj[x].lysniveau +"</td>";
                txt +="<td>" + myObj[x].lysfarve +"</td>";
                txt +="<td>" + myObj[x].lydniveau +"</td>";
            }
            
            document.getElementById("table").innerHTML = txt;
        }
    }

    xmlhttp.open("GET", "/3.sensorer/sensordata.json", true);
    xmlhttp.send();
}