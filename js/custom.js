// Transitions
$(document).ready(function() {
  
  $(".animsition").animsition({
  
    inClass               :   'fade-in',
    outClass              :   'fade-out',
    inDuration            :    400,
    outDuration           :    100,
    linkElement           :   '.animsition-link',
    // e.g. linkElement   :   'a:not([target="_blank"]):not([href^=#])'
    loading               :    true,
    loadingParentElement  :   'main-body', //animsition wrapper element
    loadingClass          :   'animsition-loading',
    unSupportCss          : [ 'animation-duration',
                              '-webkit-animation-duration',
                              '-o-animation-duration'
                            ],
    //"unSupportCss" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    //The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    
    overlay               :   false,
    
    overlayClass          :   'animsition-overlay-slide',
    overlayParentElement  :   'body'
  });
});

// Destroy modal after it has been loaded
$('body').on('hidden.bs.modal', '.modal', function () {
    $(this).removeData('bs.modal');
});

$('#disclaimerModal').on('show.bs.modal', function (e) {
  var invoker = $(e.relatedTarget);
  var link = invoker.attr("data-email");
  $('#accept_btn').attr("href", link);
});

//triggered when modal is about to be shown
$(document).on('click', '#accept_btn', function(e) {
	document.location.href = $('#accept_btn').attr("href");
});

$(document).on("click", "#printModal", function(event){
    $("#professionalModal-content").printElement({pageTitle:$("#professionalModal-content").find(".modal-title").text()});
});

// Lazy Load
$(function() {
    $("img.lazy").lazyload();
});
