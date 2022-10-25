const nav = ["home", "about", "gallery", "contact", "location"];

const links = ["index.html", "about.htlm", "gallery.html", "contact.html", "location.html"];

let navigaciatext = "<ul>";
for(let i=0; i<nav.length; i++){
    navigaciatext  += '<li><a href="'+ links[i] + '">' + nav[i] +"</a></li>";
    console.log(navigaciatext);
}

navigaciatext += "</ul>";


console.log(navigaciatext);

document.getElementById("navig").innerHTML = navigaciatext;