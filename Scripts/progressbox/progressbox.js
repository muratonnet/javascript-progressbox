/*
*
*   Requirements :
*       jquery.js
*
*   DOM Elements : They are created automatically on first call. Don't need to add page
*       <div id="progressbox-overlay">
*       </div>
*       <div id="progressbox">
*           <div class="progressbox-progress"></div>
*       </div>
*
*/

// ProgressBox object
var ProgressBox = function () { };

// show method
ProgressBox.show = function (progress, windowLock) {
    // get progress box element
    var $progressBox = this.getInstance();

    // set progress
    $("." + ProgressBox.classes.progress, $progressBox).html(progress);

    // calculate left position of progress
    var left = ($(window).width() - $progressBox.width()) / 2;
    $progressBox.css('left', left);

    // show progressbox overlay
    if (windowLock) {
        $("#progressbox-overlay").css("display", "block");
    }

    // show progress box
    $progressBox.css("display", "block");
};

// hide method of ProgressBox 
ProgressBox.hide = function () {
    // get progress box object
    var $progressBox = this.getInstance();
    // hide overlay
    $("#progressbox-overlay").css("display", "none");
    // hide progress box
    $progressBox.css("display", "none");

};

// getInstance method of ProgressBox 
ProgressBox.getInstance = function () {
    // get progress box div
    var $progressBox = $("#progressbox");

    // if not found
    if ($progressBox.length == 0) {
        // add overlay
        $('body').append('<div id="progressbox-overlay">' +
                         '</div>');

        // add progress box
        $('body').append('<div id="progressbox">' +
                         '<div class="' + ProgressBox.classes.progress + '"></div>' +
                         '</div>');

        // get progress box element
        $progressBox = $("#progressbox");
    }

    // return progress box control
    return $progressBox;

};

ProgressBox.classes = {
    progress: "progressbox-progress"
};





