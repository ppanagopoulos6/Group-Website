document.addEventListener("DOMContentLoaded",function(){
var path = window.location.pathname;
var homeLink = "../html/continents.html";

var btn = document.createElement("a");
btn.innerText = "<-- Continents"
btn.href = homeLink
btn.className = "global-continent-btn";
var style = document.createElement("style");
    style.innerHTML = `
        .global-continent-btn {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: #0d0d0eff;
            color: white;
            padding: 15px 25px;
            border-radius: 50px;
            text-decoration: none;
            font-family: sans-serif;
            font-weight: bold;
            box-shadow: 0 4px 10px rgba(0,0,0,0.3);
            z-index: 9999;
            transition: transform 0.3s, background 0.3s;
        }
        .global-continent-btn:hover {
            color: black;
            transform: scale(1.1);
            background-color: #e4e4e4ff;
        }
    `;
    document.head.appendChild(style);
    document.body.appendChild(btn);
});
