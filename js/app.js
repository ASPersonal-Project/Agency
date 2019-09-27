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
      $('.accordion-btn').click(function(){
        $('.accordion-btn').not(this).removeClass('rotate')
        $('.accordion-btn').not(this).parent().next().slideUp()
        

        $(this).toggleClass('rotate')
        $(this).parent().next().slideToggle()
      });

      (function(){
          let data = [
              {
                  id:0,
                  name:'john doe',
                  job:'developer',
                  text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, laudantium quia! Porro minus quo accusantium laboriosam eveniet repellat ipsa facere autem ipsum eos modi, nesciunt quaerat ut excepturi alias nobis.',
                  favorites:['eat','drink','sleep'],
                  img:'images/per1.jpg'
              },
              {
                id:1,
                name:'silva sho',
                job:'writter',
                text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, laudantium quia! Porro minus quo accusantium laboriosam eveniet repellat ipsa facere autem ipsum eos modi, nesciunt quaerat ut excepturi alias nobis.',
                favorites:['run','swim','jump'],
                img:'images/per2.jpg'
            },
            {
                id:2,
                name:'rubi wosn',
                job:'reporter',
                text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, laudantium quia! Porro minus quo accusantium laboriosam eveniet repellat ipsa facere autem ipsum eos modi, nesciunt quaerat ut excepturi alias nobis.',
                favorites:['drink','run','sleep'],
                img:'images/per3.jpg'
            },
            {
                id:3,
                name:'chanu rib',
                job:'engineer',
                text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, laudantium quia! Porro minus quo accusantium laboriosam eveniet repellat ipsa facere autem ipsum eos modi, nesciunt quaerat ut excepturi alias nobis.',
                favorites:['walk','drink','sleep'],
                img:'images/per4.jpg'
            }
          ]
        $('.team-img-item').click(function(){
            $('.team-img-item').not(this).removeClass('active')
            $(this).addClass('active')
            // console.log("hai");
            let id = $(this).attr('data-id')
            console.log(id);
            $('.team-info-name').text(data[id].name)
            $('.team-info-job').text(data[id].job)
            $('.team-info-text').text(data[id].text)
            $('.team-info-single-favo-eat').each(function(index){
                $(this).text(data[id].favorites[index])
            
            })
            $('.team-info-img').attr('src',data[id].img)
        })





      })();


})  