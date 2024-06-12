

var musicaFundo = document.getElementById('musicaFundo');
var video1 = document.getElementById('videoFundo');

var playButton = document.getElementById('playButton');

var musica1 = document.getElementById('musica1');
var musica3 = document.getElementById('musica3');

playButton.addEventListener('click', function() {
    let playPauseButtons = document.getElementById('playPauseButtons');

    musicaFundo.play();

    playPauseButtons.classList.add('puff-out-center');

    sleep(2000);

    playPauseButtons.style.display = 'none';

});

musica1.addEventListener('click', function() {

    let videoContent = document.getElementById('video-content');

    videoContent.style.display = 'flex';

    video1.play();

    video1.requestFullscreen();
    

});

musica3.addEventListener('click', function() {

    let poemaContent = document.getElementById('poema-content');

    poemaContent.style.display = 'flex';            

});

window.addEventListener('click', function(e){
    
    let element = e.target;

    let poemaContent = document.getElementById('poema-content');

    let videoContent = document.getElementById('video-content');

    if(poemaContent.style.display == 'flex'){

        if(element == poemaContent){

            poemaContent.style.display = 'none';

        }

    }

    if(videoContent.style.display == 'flex'){

        if(element == videoContent){

            videoContent.style.display = 'none';

            video1.pause();

        }

    }

});

musicaFundo.volume = 0.5; // Define o volume da música // Define o volume da música

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
