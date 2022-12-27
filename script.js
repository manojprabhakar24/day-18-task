var res = fetch("https://restcountries.com/v3.1/all");
res.then((data)=> data.json())
.then((data1)=> foo(data1));


function foo(data1) {
    for(var i=0; i<data1.length; i++){
        console.log(data1[i]);
        var div = document.createElement("div");
        div.innerHTML =`<div class="card-group">
        <div class = "card">
        <div><img src ="${data1[i].flags.svg}" alt="..."></div>
        <div class="card-body">
        <h5 class="card-title">${data1[i].name.common}</h5>
        <h6 class="Region">Region:${data1[i].region}</h6>
        <p class="card-text">Capital:${data1[i].Capital}</p>
        <p class="card-text">Latitude:${data1[i].latlng[0]}</p>
        <p class="card-text">Longitude:${data1[i].latlng[1]}</p>
        <p class="card-text">Country code:${data1[i].cca3}</p>
        <button type="submit">Click for Weather</button>
        </div>
        </div>
        </div>`
        document.body.append(div)
    }
}