/*globals FontFaceObserver*/
$(function() {
    var fbBackground = new FontFaceObserver("fb-background"),
        fbForeground = new FontFaceObserver("fb-foreground"),
        fbContent = new FontFaceObserver("fb-content"),

        fontTimeout = 5000;

    Promise.all([
        fbBackground.load(null, fontTimeout),
        fbForeground.load(null, fontTimeout),
        fbContent.load(null, fontTimeout)
    ]).then(function() {
        console.log("** fonts loaded");
        document.documentElement.className += " fonts-loaded";
    }, function() {
        console.log("** fonts NOT loaded");
        document.documentElement.className += " fonts-unavailable";
    });

    // ensure all icons have some content (&nbsp;)
    // NB: this references a pre-sized blank icon within the fb-content font,
    //     which ensures consistent positioning
    $('.fb').html('\u00a0');

    // content for icons which use fb-content as an additional layer
    $('.fb.fb-angry').html('\ue900');
});
