/*
http://codereview.stackexchange.com/a/57980/11525
http://jsfiddle.net/zjd8x/2/

.img-contnr {
    display:inline-block;
    position:relative;
    width:200px;
}

<img src="http://hudspecialisten.se/wp/wp-content/uploads/2013/02/fr%C3%A5geteckaen.png" class="img-contnr-1 img-contnr" style="max-width:100%;" alt="homepage pic 1" />
<img src="http://hudspecialisten.se/wp/wp-content/uploads/2013/02/fr%C3%A5geteckaen.png" class="img-contnr-2 img-contnr" style="max-width:100%;" alt="homepage pic 2" />
<img src="http://hudspecialisten.se/wp/wp-content/uploads/2013/02/fr%C3%A5geteckaen.png" class="img-contnr-3 img-contnr" style="max-width:100%;" alt="homepage pic 3" />
<img src="http://hudspecialisten.se/wp/wp-content/uploads/2013/02/fr%C3%A5geteckaen.png" class="img-contnr-4 img-contnr" style="max-width:100%;" alt="homepage pic 4" />
<img src="http://hudspecialisten.se/wp/wp-content/uploads/2013/02/fr%C3%A5geteckaen.png" class="img-contnr-5 img-contnr" style="max-width:100%;" alt="homepage pic 5" />
*/

function shuffleArray(array) {
    var copy = [],
        n = array.length,
        i;
    while (n) {
        i = Math.floor(Math.random() * n--);
        copy.push(array.splice(i, 1)[0]);
    }
    return copy;
}





$(function () {

    var FADE_INTERVAL = 8000,
        FADE_DURATION = 350;

    var images = $(".img-contnr"),
        imageIndex = 0,
        urlIndex = 0,
        imageUrls = shuffleArray([
            "http://lab1663.net/images/pam_holy_shitsnacks.png",
            "http://i.ytimg.com/vi/Ftb09o6O7sw/0.jpg",
            "http://doyoulikelikeme.files.wordpress.com/2012/03/cheryl-archer.png",
            "http://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2013/7/10/1373464392141/archer-008.jpg",
            "http://aravan.files.wordpress.com/2012/04/malorygun.jpg",
            "http://dramachan.net/rp/src/1401166946857.jpg"]);

    function swapImage() {
        // fade out the current image
        images.eq(imageIndex).fadeOut(FADE_DURATION, function () {
            // set next image index
            imageIndex = (imageIndex + 1) % images.length;

            // swap the img src
            this.src = imageUrls[urlIndex];

            // get next url index
            urlIndex = (urlIndex + 1) % imageUrls.length;

            // if we've gone through all the urls, re-shuffle
            if (urlIndex === 0) {
                imageUrls = shuffleArray(imageUrls);
            }

            // fade back in, and set up the next swap
            $(this).fadeIn(FADE_DURATION, delayedSwap);
        });
    }

    function delayedSwap() {
        setTimeout(swapImage, FADE_INTERVAL);
    };

    // call delayedSwap to trigger the first swap
    delayedSwap();
});
