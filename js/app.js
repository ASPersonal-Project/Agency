$(document).ready(function(){
    $('.preloader').fadeOut()

    $('.navBtn').click(function(){
          $('.nav').toggleClass('nav-show');
    })

    $('.video-switch-container').click(function(){
        const value =  $('.video-switch-btn').hasClass('btnSlide')
        // console.log(value);
        if(value){
            $('.video-switch-btn').removeClass('btnSlide')
            $('#video').get(0).play()

        }else{
            $('.video-switch-btn').addClass('btnSlide')
            $('#video').get(0).pause()
        }
    })

    $('#project-modal').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        // other options
        gallery: {
            enabled: true
         } // set to true to enable gallery
      });

}) 