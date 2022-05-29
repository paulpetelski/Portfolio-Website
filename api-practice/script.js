// https://api.nasa.gov/planetary/apod?api_key=###INSERTAPIKEYHERE###

let minDate = new Date(1995, 6, 16);
let maxDate = new Date();

// to create random date
function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

const element = document.getElementById("randomButton");
element.addEventListener("click", generateRandom);

// generates random date to pick picture from when button is pressed 
function generateRandom(){
    var date = randomDate(minDate, maxDate);
    var formattedDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();    // format yyyy-mm-dd
    console.log(formattedDate);

    var req = new XMLHttpRequest();
    const baseUrl = 'https://api.nasa.gov/planetary/apod?api_key=';
    const apiKey = 'pzMdGgu1CGXA8MhidU4gbtFO1cgE7cJRDGr8T6Ea&date=';


    req.open("GET", baseUrl + apiKey + formattedDate);
    req.send();
    

    req.addEventListener("load", function(){
	    if(req.status == 200 && req.readyState == 4){
  	    var response = JSON.parse(req.responseText);
        document.getElementById("title").textContent = response.title;
        document.getElementById("date").textContent = response.date;
        document.getElementById("pic").src = response.hdurl;
        document.getElementById("explanation").textContent = response.explanation;
    }
})

}
function nasarequest(){
    var req = new XMLHttpRequest();
    const baseUrl = 'https://api.nasa.gov/planetary/apod?api_key=';
    const apiKey = 'pzMdGgu1CGXA8MhidU4gbtFO1cgE7cJRDGr8T6Ea&date=';
    const dateForUrl = document.querySelector("#datepicker");
    dateForUrl.addEventListener('change' ,(e)=>{
        e.preventDefault();
        nasarequest();
    })
    let newDate = dateForUrl.value;
        

    req.open("GET", baseUrl + apiKey + newDate);
    req.send();
    

    req.addEventListener("load", function(){
	    if(req.status == 200 && req.readyState == 4){
  	    var response = JSON.parse(req.responseText);
        document.getElementById("title").textContent = response.title;
        document.getElementById("date").textContent = response.date;
        document.getElementById("pic").src = response.hdurl;
        document.getElementById("explanation").textContent = response.explanation;
    }
})
}

nasarequest();