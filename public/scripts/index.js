$(function() {
  $('.comment').click(function(e) {
    var target = $(this)
    var toId = target.data('tid')
    var commentId = target.data('cid')

    if ($('#toId').length > 0) {
      $('#toId').val(toId)
    }
    else {
      $('<input>').attr({
        type: 'hidden',
        id: 'toId',
        name: 'comment[tid]',
        value: toId
      }).appendTo('#commentForm')
    }

    if ($('#commentId').length > 0) {
      $('#commentId').val(commentId)
    }
    else {
      $('<input>').attr({
        type: 'hidden',
        id: 'commentId',
        name: 'comment[cid]',
        value: commentId
      }).appendTo('#commentForm')
    }
  })
})

$(function() {
  $(window).resize(function(){
    var $width = $('.movie-list-wrap').width();
    var $height = $width * 1.5;
    $('.movie-list').height($height);
  })
  var $width = $('.movie-list-wrap').width();
  var $height = $width * 1.5;
  $('.movie-list').height($height);

})