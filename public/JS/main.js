var morse = [];
var decoded = [];
var temp = '';
var decodeMorse = {
    oi:"a",
    iooo:"b",
    ioio: "c",
    ioo: "d",
    o: "e",
    ooio: "f",
    iio: "g",
    oooo: "h",
    oo: "i",
    oiii: "j",
    ioi: "k",
    oioo: "l",
    ii: "m",
    io: "n",
    iii: "o",
    oiio: "p",
    iioi: "cute",
    oio: "r",
    ooo: "s",
    i: "t",
    ooi: "u",
    oooi: "v",
    oii: "w",
    ioii: "y",
    iioo: "z"
    }

$('.textfield').keydown(function(e){
  if (e.keyCode === 73 || e.keyCode === 79) {
       morse.push(e.key);
   } else if (e.keyCode === 32) {
       temp = decodeMorse[morse.join('')];
       morse = [];
       decoded.push(temp);
       $('.section-heading').text(decoded.join(""));
   } else if (e.keyCode === 8) {
       morse = [];
       decoded = [];
       temp = '';
   } else if (e.keyCode === 13) {
       morse = [];
       temp = "";
       decoded.push(" ");
   }

});
