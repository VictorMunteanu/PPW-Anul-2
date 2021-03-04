// EX.3.8


const colors = ['red', 'green', 'blue'];

function checkColor() {
    const a = prompt('Enter a color: ');
    if (a == 'red') {
        alert(0);
    } else if (a == 'green') {
        alert(1);
    } else if (a == 'blue') {
        alert(2);
    } else {
        alert(-1);
    }
}
checkColor(colors);