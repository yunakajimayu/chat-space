$(function(){
  function buildHTML(message) {
    var content = message.content ? `${ message.content }` : "";
    var img = message.image ? `<img src= ${ message.image }>` : "";
    var html = `<div class="message" data-id="${message.id}">
                  <div class="upper-message">
                    <div class="upper-message__current-user-name">
                      ${message.user_name}
                    </div>
                    <div class="upper-message__date">
                      ${message.date}
                    </div>
                  </div>
                  <p class="lower-message">
                    <div>
                      ${content}
                    </div>
                      ${img}
                  </p>
                </div>`
  return html;
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({  
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html);
      $('#message_content').val('');
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
    })
    .fail(function(data){
      alert('エラーが発生したためメッセージは送信できませんでした。');
    })
    .always(function(data){
    $('.form__submit').prop('disabled', false);
    })
  })
});






















  // function buildHTML(message){
  // if (message.image) {
  //   var html = `<p>
  //                   <strong>
  //                     <a href= "lower_message__image"></a>
  //                   </strong>
  //                 </p> 
  //                 `
  // } else {
  //   var html = `<p>
  //                    <strong>
  //                      <a href= "lower_message__content"></a>
  //                    </strong>
  //                  </p>
  //                  `
  //   }
  // return html
//   // }
//   $('#new_message').on('submit', function(e){
//   e.preventDefault();
//     var formData = new FormData(this);
//     var url = $(this).attr('action')
//     $.ajax({
//       url: url,
//       type: "POST",
//       data: formData,
//       dataType: 'json',
//       processData: false,
//       contentType: false
//     })
//     // .done(function(data){
//     //   var html = buildHTML(data);
//     //   $('.message').append(html);
//     //   $('.content').val('');
//     //   $('.form__submit').prop('disabled', false);
//     // })
//   })
// })

