
/* Navigation & AJAX Loading */
var loadingHTML = '<img src="img/ajax-loader.gif" />';
var defaultPage = $('.default-page');
var hash = $(location).attr('hash').split('?')[0];
var content = $('main');
var toLoad = defaultPage;

if (hash) {
    toLoad = $('a[href=' + hash + ']');
}

$('#nav-links a').click(function(e) {
   LoadContent($(this), true)
   e.preventDefault();
});

LoadContent(toLoad, false);

function LoadContent ($element, fromLink) {
    content.html(loadingHTML);

    if ($element.length < 1) {
        $element = defaultPage;
    }

    var root = 'includes/';
    var originalHash = fromLink ? $element.attr('href') : $(location).attr('hash');
    var filename = $element.attr('href').replace('#', '').split('?')[0];
    var extension = '.txt';
    var path = root + filename + extension;

    content.load(path);

    window.location.hash = originalHash;
}
