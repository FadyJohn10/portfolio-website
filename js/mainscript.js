/*global $, window, console*/

$(function () {

    //activate fullpage scroll  
    $('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true
	});

	//methods
	$.fn.fullpage.setAllowScrolling(false);


    //parallax movement
     $('#parallax').parallax({
        invertX: true,
        invertY: true,
        scalarX: 8,
        frictionY: 0.1
    });


    /////////////// typewriter effect
    function tapeWriter() {
      if (i < message.length) {
        
        $('.js-typewriter').append(message[i]);
        i++;
      } else {
        clearInterval(interval);
      }
    }
   
    var message = 'Web Developer | Graphic Designer';
    var i = 0; 
    var interval = setInterval(tapeWriter, 70);


    // particles js parameters
    particlesJS("particles-js", {
      "particles": {
        "number": {
          "value": 555,
          "density": {
            "enable": true,
            "value_area": 789.1476416322727
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.48927153781200905,
          "random": false,
          "anim": {
            "enable": true,
            "speed": 0.4,
            "opacity_min": 0,
            "sync": false
          }
        },
        "size": {
          "value": 2,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 2,
            "size_min": 0,
            "sync": false
          }
        },
        "line_linked": {
          "enable": false,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 1,
          "direction": "none",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "bubble"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 83.91608391608392,
            "size": 1,
            "duration": 3,
            "opacity": 1,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    });

});