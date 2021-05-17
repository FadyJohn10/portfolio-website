var animData = {
        container: document.getElementById('container'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://www.micelistudios.com/stella_dance.json'
    };
    var anim = bodymovin.loadAnimation(animData);

/*anim.setSpeed(1.4);*/