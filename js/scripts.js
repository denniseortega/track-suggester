$(document).ready(function() {
  $("#lastform").submit(function(event) {
    $(".generate-language #language1").show();

    event.preventDefault();
  });
});
