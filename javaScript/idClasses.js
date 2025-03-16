console.log("Chinmay");
// 1) document.getElementsByTagName("div")

// 2) e[4].matches("#redbox")
// 3) e[3].closest("#redbox")
// 4) e[3].closest(".container")
// 5) e[3].closest("html")
// 6) document.querySelector(".container").contains(e[2])
// 7) document.querySelector(".container").contains(document.querySelector("body"))
// 8) document.querySelector("body").contains(document.querySelector(".container"))



// let boxex = document.getElementsByClassName("box");
// console.log(boxex);

// boxex[0].style.backgroundColor = "red";
// boxex[1].style.backgroundColor = "blue";
// boxex[2].style.backgroundColor = "yellow";
// boxex[3].style.backgroundColor = "green";
// boxex[4].style.backgroundColor = "silver";

// document.getElementById("red-box").style.backgroundColor = "red";
// document.getElementById("blue-box").style.backgroundColor = "blue";
// document.querySelector(".box").style.backgroundColor = "green";
console.log(document.querySelectorAll(".box"));

document.querySelectorAll(".box").forEach(e => {
    // console.log(e);
    e.style.backgroundColor = "green";
    
});

