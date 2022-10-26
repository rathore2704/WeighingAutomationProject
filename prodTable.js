let ptBackBtn = document.getElementById('ptBackBtn');
ptBackBtn.addEventListener('click', ()=>{
   window.location.replace('bslc.html')
})

console.log("clock.js");
function updateClock() {
    let currentTime = new Date();
    let currentHour = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();

    currentMinutes = (currentMinutes < 10 ? "0" : " ") + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0" : " ") + currentSeconds;
    let timeOfDay = (currentHour < 12) ? "AM" : "PM";
    currentHour = (currentHour>12)? currentHour-12 : currentHour;
    currentHour = (currentHour==0)?  12 : currentHour;
    currentHour = (currentHour < 10 ? "0" : " ") + currentHour;
    let currentTimeStr = currentHour + ":" + currentMinutes + ":" + currentSeconds + "  " + timeOfDay
    document.getElementById("clock").innerHTML = currentTimeStr;

}

function updateDate() {
    let date = new Date();
    //console.log(date);
    let currentDay = date.getDate();
    currentDay = (currentDay<10 ? "0": "") + currentDay;
    let currentMonth =date.getMonth();
    currentMonth = (currentMonth == currentMonth) ? currentMonth+1 : "";
    currentMonth = (currentMonth<10 ? "0": "") + currentMonth;
    let currentYear = date.getFullYear();
    let currentDateStr = currentDay + "-" + currentMonth + "-" + currentYear;
    document.getElementById('date').innerHTML = currentDateStr;
}

//"updateClock(); setInterval('updateClock()', 1000)"

// AddRow fumction to add the weight entry and other parameters
let sName = [];
let ubin = [];
let tankWeight = [];
let time = [];

let n = 1;
let x = 0;

function AddRow(){
   let AddRow = document.getElementById("ptTable");
   let NewRow = AddRow.insertRow(n);
   //let newText = AddRow.in 

   tankWeight[x] = document.getElementById("weightScreen").value;
   time[x] = document.getElementById("clock").value;

   let cellWt = NewRow.insertCell(0);
   let cellTime = NewRow.insertCell(1);

   cellWt.innerHTML = tankWeight[x];
   cellTime.innerHTML = time[x];

   n++;
   x++;
}