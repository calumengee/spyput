var detect = [];
const dict = {'sp': 'support level at $'};

$('.textfield').keydown(function(e){

  const key = e.key || e.which;
  const keyCode = e.keyCode || e.which;
  const trigger = {' ': " "};


  if (keyCode === 8) {
    if (detect.length === 0) {
      $('.section-heading').text("Nothin' yet to be forgotten...");
    } else {
      detect.splice(detect.length-1, 1);
      $('.section-heading').text(detect.join(''));
    }
  } else {
    detect.push(key);
    $('.section-heading').text(detect.join(''));
  }

  if (key === trigger[key]) {
    detect.splice(0, detect.length);
    detect.push(dict['sp']);
    $('.section-heading').text(detect.join(''));
  } else {

  }


});
