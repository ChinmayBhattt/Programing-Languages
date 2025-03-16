let n = 5;

let i = 1;

while(i<=n) {

    let space = n - i;

    while(space) {
        process.stdout.write(" ");
        space = space - 1;
    }

    let j = 1;

    while(j<=i) {
        process.stdout.write("*" + " ");
        j++;
    }

    // let k = 1;

    // while(k<=i) {
    //     process.stdout.write("*");
    //     k++;
    // }
    process.stdout.write("\n"); 
    i++;
    
}