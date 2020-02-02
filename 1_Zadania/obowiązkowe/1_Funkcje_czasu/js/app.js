//zadanie 1
function countHello(number){
    var counter = 1;
    setTimeout(function() {
        console.log('Hello');
        counter++;
        if(counter > number){
            clearInterval(interval);
        }
    },500);
}