let movie="English";
switch(movie){
    case "Myanmar":
        console.log("Hello, Myanmar movie fan!");
        break;
    case "Korean":
        console.log("Hello, Korean drama fan!");
        break;
    case "English":
        console.log("Hello, English movie fan!");
        break;
    case "Chinese":
        console.log("Hello, Chinese movie fan!");
        break;
    case "France":
        console.log("Hello, France movie fan!");
    default:
        console.log("Hello,movie fan!");
        break;
}


let year = prompt('In which year was ECMAScript-2015 specification published?', '')
if (year < 2015) {
    alert( 'Too early...' );
    } else if (year > 2015) {
    alert( 'Too late' );
    } else {
    alert( 'Exactly!' );
    }

let price=prompt("How much this notebook?")
if (price < 1000){
    console.log("Not expensive");
}
else if(price > 3000){
    console.log("Too expensive");
}
else if(price > 1000 && price < 3000){
    console.log("A little bit expensive");
}
else{
    console.log("How much is it?");
}