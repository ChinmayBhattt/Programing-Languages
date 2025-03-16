// https://developer.mozilla.org/en-US/docs/Web/Events
// all events here

let button = document.getElementById ("btn")

button.addEventListener("click",()=>{ // dblclick, mouseout
    // alert("I Was Click")
    document.querySelector(".box").innerHTML = "<b>Yay Your were click</b>"
})

button.addEventListener("contextmenu",()=>{ 
    alert("Dont Right Click please")
})

// button.addEventListener("keydown",(e)=>{ 
//     console.log(e)
// })

document.addEventListener("keydown",(e)=>{ 
    console.log(e.key,e.keyCode)
})
