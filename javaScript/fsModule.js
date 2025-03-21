const fs = require("fs");

// console.log(fs);

console.log("starting...");
// fs.writeFileSync("fsFile.txt", "This is a fs file");

fs.writeFile("fsFile2.txt", "This is a also another file", ()=>{
    console.log("Done");
    
})
console.log("Ending!!");