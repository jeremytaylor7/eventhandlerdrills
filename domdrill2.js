

$('#thesubmit').attr('type','submit').on('click',function(x){
	alert('it works');
	event.preventDefault();

if ($('#number-choice').val() % 15 === 0) {
  
	$('.js-results').html('<p>FizzBuzz</p>');
}

else if ($('#number-choice').val() % 5 === 0) {
  $('.js-results').html('<p>Buzz</p>');

}

else if ($('#number-choice').val() % 3 === 0) {
  $('.js-results').html('<p>Fizz</p>');

}})