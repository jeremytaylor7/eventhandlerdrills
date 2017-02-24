function changeImg() {
$('.thumbnail').click(function() {
  var thumbnailSrc = $(event.currentTarget).find('img').attr('src');
$('.hero').children('img').attr('src', thumbnailSrc);
});
}



$(function() {
  changeImg();
});
                      