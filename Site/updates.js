var updates = [
    {message: "Welcome to the 3rd official release of Andyum! This website was copied and is now Mahir Unblocker."}
];
var updatespage = document.getElementById("updatespage");
for(let item of updates) {
    let a = document.createElement("updatespage");
    a.className = "updatespage";
    var title = document.createElement("message");
    title.textContent = item.message;
    a.appendChild(title);
    updatespage.appendChild(a);
}
