let a = document.getElementById("home-score")
let b = document.getElementById("guest-score")

a.textContent = 0;
b.textContent = 0;

let hs = 0;
let gs = 0;

function add1h() {
    console.log('current home score is ' + a.textContent)
    console.log("adding 1 to home")
    
    hs += 1;
    a.textContent = hs;
    console.log('current home score is ' + a.textContent)
}

function add2h() {
    console.log('current home score is ' + a.textContent)
    console.log("adding 2 to home")
    
    hs += 2;
    a.textContent = hs;
    console.log('current home score is ' + a.textContent)
}

function add3h() {
    console.log('current home score is ' + a.textContent)
    console.log("adding 3 to home")
    
    hs += 3;
    a.textContent = hs;
    console.log('current home score is ' + a.textContent)
}

function add1g() {
    console.log('current guest score is ' + b.textContent)
    console.log("adding 1 to guest")
    
    gs += 1;
    b.textContent = gs;
    console.log('current guest score is ' + b.textContent)
}

function add2g() {
    console.log('current guest score is ' + b.textContent)
    console.log("adding 2 to guest")
    
    gs += 2;
    b.textContent = gs;
    console.log('current guest score is ' + b.textContent)
}

function add3g() {
    console.log('current guest score is ' + b.textContent)
    console.log("adding 3 to guest")
    
    gs += 3;
    b.textContent = gs;
    console.log('current guest score is ' + b.textContent)
}

function reset() {
    hs = 0;
    gs = 0;
    a.textContent = 0;
    console.log(a.textContent)
    b.textContent = 0;
    console.log(b.textContent)
}