var morse = [];
var decoded = [];
var temp = '';
var decodeMorse = {oi:"a", iooo:"b",ioio: "c",ioo: "d",o: "e",ooio: "f",iio: "g",oooo: "h",oo: "i",oiii: "j",ioi: "k",oioo: "l",ii: "m",io: "n",iii: "o",oiio: "p",iioi: "q",oio: "r",ooo: "s",i: "t",ooi: "u",oooi: "v",oii: "w",iooi:"x",ioii: "y",iioo: "z",oioioi: ".",iiooii: ",",ooiioo: "?",iooio: "/",oiioio: "@",oiiii: "1",ooiii: "2",oooii: "3",ooooi: "4",ooooo: "5",ioooo: "6",iiooo: "7",iiioo: "8",iiiio: "9",iiiii: "0"}

var dit = new Audio('../Sounds/DIT.mp3');
var dah = new Audio('../Sounds/DAH.mp3');

$('.textfield').keydown(function(e){
  if (e.keyCode === 73 || e.keyCode === 79) {
       morse.push(e.key);
       if (e.keyCode === 73) {
         dah.play();
       } else if (e.keyCode === 79) {
         dit.play();
       }
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
       decoded.push("|");
   } else {
     $('.section-heading').text('delete that and try "ooo iii ooo" !');
   }

});


//setTimeout(function(){alert('Only detects TYPED codes (it means no pasting in)... Hitting backspace will reset everything!');}, 2500);
