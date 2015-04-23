$(document).ready(function() {
  /*This function adds the information that is the text field as a list item. This event is triggered when the user is in the text field and press the Enter/Return key on their keyboard*/
  $('.collaspe-top-prioity-item').keydown(function(e) {
    if (e.which == 13) {
      $(this).next().prepend("<li>" + $(this).val() + "<div class='check_minus'><i class='fa fa-check'></i><i class='fa fa-minus'></i></div></li>");
      $(this).val('');
    }
  });
  $('.collaspe-prioity-item').keydown(function(e) {
    if (e.which == 13) {
      $(this).next().prepend("<li>" + $(this).val() + "<div class='check_minus'><i class='fa fa-check'></i><i class='fa fa-minus'></i></div></li>");
      $(this).val('');
    }
  });
  $('.collaspe-wants-item').keydown(function(e) {
    if (e.which == 13) {
      $(this).next().prepend("<li>" + $(this).val() + "<div class='check_minus'><i class='fa fa-check'></i><i class='fa fa-minus'></i></div></li>");
      $(this).val('');
    }
  });//<-- End of this interaction
  //Functionality to collapse the headers
  $(".top-prioity").find('.fa-minus-square-o').click(function(){
    $('.collaspe-top-prioity-item').slideToggle();
  });
  $(".prioity").find('.fa-minus-square-o').click(function(){
    $('.collaspe-prioity-item').slideToggle();
  });
  $(".wants").find('.fa-minus-square-o').click(function(){
    $('.collaspe-wants-item').slideToggle();
  });//<-- End of this interaction
  //Crosses through the text when the checkmark is checked
  $('.fa-check').on('click', function(){
    // $('.top-prioity-item-1').toggleClass('complete');
    $(this).parent().closest('li').css('textDecoration', 'line-through');
  });
  //Removes the text from the list when the minus button is clicked
});