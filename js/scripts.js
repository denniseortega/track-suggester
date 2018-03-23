$(document).ready(function() {
  $("#survey").submit(function(event) {
    var answer1 = $("select#front").val();
    var answer3 = $("select#large").val();

    if (answer1 === 'front-end') {
            $(".generate #language1").show();
    }

    if (answer1 === 'back-end' && answer3 === 'yes') {
            $(".generate #language2").show();
    }

    event.preventDefault();
  });
});
