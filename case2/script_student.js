var xmlhttp = new XMLHttpRequest();
var url = "https://opendata.cwb.gov.tw/fileapi/v1/opendataapi/F-D0047-041?Authorization=CWB-BC0EE326-DD52-43B7-9A7F-0604043C9A09&downloadType=WEB&format=JSON";

xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        myFunction(xmlhttp.responseText);
        console.log("success");
    }
}
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(response) {
    var arr = JSON.parse(response);
    console.log(arr);
    var i;
    var j;
    var time_1 = arr.cwbopendata.dataset.locations.location[0].weatherElement[0].time[0].dataTime.substr(5,8).replace("-","/") + "時";
    var time_2 = arr.cwbopendata.dataset.locations.location[0].weatherElement[0].time[1].dataTime.substr(5,8).replace("-","/") + "時";
    var time_3 = arr.cwbopendata.dataset.locations.location[0].weatherElement[0].time[2].dataTime.substr(5,8).replace("-","/") + "時";
    console.log(time_1,time_2, time_3);
                        
    //var weather_1 = arr.cwbopendata.dataset.locations.location[0].weatherElement[0].time[0].elementValue.value;
    
    var weather_value_1 = arr.cwbopendata.dataset.locations.location[0].weatherElement[0].time[0].elementValue.value;
    var weather_value_2 = arr.cwbopendata.dataset.locations.location[0].weatherElement[0].time[1].elementValue.value;
    var weather_value_3 = arr.cwbopendata.dataset.locations.location[0].weatherElement[0].time[2].elementValue.value;
    console.log(weather_value_1,weather_value_2,weather_value_3);
    var loc =arr.cwbopendata.dataset.locations.location[0].locationName;
    console.log(loc);

    var out = "<table><tr><th> 行政區 </th><th>&emsp;時間&emsp;</th><th>溫度</th>";
        
    for(i = 0; i < arr.cwbopendata.dataset.locations.location.length; i++) {
        for( j = 0; j <arr.cwbopendata.dataset.locations.location[i].weatherElement[0].time.length; j++){
            out += "<tr><td>" ;
            out +=  arr.cwbopendata.dataset.locations.location[i].locationName + "</td><td>";
            out +=  "&emsp;" + arr.cwbopendata.dataset.locations.location[i].weatherElement[0].time[j].dataTime.substr(5,8).replace("-","/").replace("T"," ") + "時" + "</td><td>" + //時間
                    "&emsp;" + arr.cwbopendata.dataset.locations.location[i].weatherElement[0].time[j].elementValue.value + "</td></tr>";
        }
    }
    out += "</table>";
    console.log(out);
    document.getElementById("data_grid").innerHTML = out;
}