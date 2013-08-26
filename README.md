javascript-progressbox
======================

When developing a web page, time to time we needs a ProgressBox to show information to user about long progress. 
For example when making ordered ajax calls, we want to show information about process. 
I have developed my ProgressBox function with java script and jQuery. 
http://murataras.blogspot.com/2013/08/progressbox-with-javascript.html


Samples usage:

function showProgress() {
    // show progress bar
    ProgressBox.show(&quot;Progress for 3 seconds.&quot;);
    doSomething();
}

function doSomething() {
    // hide after 3 seconds
    setTimeout(function () { ProgressBox.hide(); }, 3000);
}
