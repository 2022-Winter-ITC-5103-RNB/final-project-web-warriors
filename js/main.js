$(document).ready(function(){
    $('.subscribe-btn').click(function(){
      $('.modal-box').toggleClass("show-modal");
      $('.subscribe-btn').toggleClass("show-modal");
    });
    $('.fa-times').click(function(){
      $('.modal-box').toggleClass("show-modal");
      $('.subscribe-btn').toggleClass("show-modal");
    });
  });


  $(document).ready(function(){
    $('a[href="#search"]').on('click', function(event) {                    
      $('#search').addClass('open');
      $('#search > form > input[type="search"]').focus();
    });            
    $('#search, #search button.close').on('click keyup', function(event) {
      if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
        $(this).removeClass('open');
      }
    });            
  });
  