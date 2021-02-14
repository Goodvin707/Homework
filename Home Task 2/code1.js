var term = {
    Canada: 10,
    Germany: 13,
    Spain: 22,
    Ukraine: -11,
    Litvania: 31
}

function getObject(term)
{
    var s = "<tr><td>Страна</td><td>Температура (°C)</td></tr>";
        for(key in term) {
          s += "<tr><td>" + key + ":" + "</td><td>" + term[key] + "</td></tr>";
        }
        document.getElementById("object").innerHTML = s;
}

function getAver(term){
    let tempSum = 0;
    let countrySum = 0;
    
    for (key in term){
        tempSum += term[key];
        countrySum += 1;
        aver = (tempSum / countrySum) + "°C";
    }
    document.getElementById("average").innerHTML = aver;
}

function getMax(term) {
    let max = 0;

    for(let i in term){
          if (term[i] > max){ 
              max = term[i] + "°C"; 
          } 
    }
    document.getElementById("max").innerHTML = max;
}