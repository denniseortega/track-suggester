$(document).ready(function() {
  $("#survey").submit(function(event) {
    var answer1 = $("select#front").val();
    var answer3 = $("select#large").val();
    var answer4 = $("select#applications").val();
    var answer5 = $("select#fastpaced").val();

    if (answer1 === 'front-end') {
            $(".generate #language1").show();
    }

    if (answer1 === 'back-end' && answer3 === 'yes') {
            $(".generate #language2").show();
    }

    if (answer1 === 'back-end' && answer3 === 'no' && answer4 === 'yes') {
            $(".generate #language3").show();
    }

    if (answer1 === 'back-end' && answer3 === 'no' && answer4 === 'no' && answer5 === 'yes') {
            $(".generate #language4").show();
    }

    event.preventDefault();
  });
});
