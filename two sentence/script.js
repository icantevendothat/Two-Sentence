let transitions = document.getElementsByClassName('transition');

window.addEventListener('scroll', function() {
    let scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;

    if (scrollPercentage >= 50) {
        for (let i = 0; i < transitions.length; i++) {
            transitions[i].style.backgroundImage = "url('images/alonefog.png')";
        }
    } else {
        for (let i = 0; i < transitions.length; i++) {
            transitions[i].style.backgroundImage = "url('images/carfog.jpeg')";
        }
    }
});
