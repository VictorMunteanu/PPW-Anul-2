// EX. 7.6

for (var i = 0; i < 64; i++) {
  document.getElementById("chess").appendChild(document.createElement("div")).style.backgroundColor = parseInt((i / 8) + i) % 2 == 0 ? 'black' : 'white';
}
