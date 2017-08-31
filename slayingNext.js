var N = 100;
var a = Array.from(new Array(N), (val, index) => index + 1);

var lastManHit = true;

while (a.length > 1) {
  slayer(a);
}

function slayer(a) {
  i = 0;
  if (!lastManHit) {
    a.splice(0, 1);
  }
  var kill = false;
  while (i < a.length) {
    if (!kill) {
      i++;
      kill = true;
      lastManHit = i === a.length ? false : true;
    } else {
      kill = false;
      a.splice(i, 1);
    }
  }
  print();
}

function print() {
  var string = '';
  a.forEach(function(element) {
    string += element + ' ';
  });
  console.log(string);
}
