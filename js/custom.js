// Transitions
$(document).ready(function() {

  if (location.pathname === '/HSML_Redesign_2015/professionals/') {
    $("img").unveil(400, function() {
    });
  }

  // Trasitions
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

$('#topnavbar').affix({
    offset: {
        top: $('#banner').height()
    }   
});

//Dropdown Fade Animation
if( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  $('.dropdown').on('show.bs.dropdown', function(e) {   
    $(this).find('.dropdown-menu').first().stop(true, true).fadeToggle(200); 
  }); 

  // Add fadeToggle animation to dropdown 
  $('.dropdown').on('hide.bs.dropdown', function(e) { 
    $(this).find('.dropdown-menu').first().stop(true, true).fadeToggle(200); 
  });
}

if (location.pathname === '/HSML_Redesign_2015/') {
  // Background Image Change
  $('.welcome-div').vegas({
      delay: 5000,
      timer: false,
      slides: [
          { src: 'css/img/backgrounds/a.jpg' },
          { src: 'css/img/backgrounds/b.jpg' },
          { src: 'css/img/backgrounds/c.jpg' },
          { src: 'css/img/backgrounds/d.jpg' }
      ]
  });
}

// Destroy modal after it has been loaded
$('body').on('hidden.bs.modal', '.modal', function () {
    $(this).removeData('bs.modal');
});

$('#professionalModal').on('show.bs.modal', function (e) {
  jQuery("#navbar").addClass('navbar-modal-showing');
});

$('#professionalModal').on('hidden.bs.modal', function (e) {
  jQuery("#navbar").removeClass('navbar-modal-showing');
});

$('#disclaimerModal').on('show.bs.modal', function (e) {
  var invoker = $(e.relatedTarget);
  var link = invoker.attr("data-email");
  $('#accept_btn').attr("href", link);
});

//
// Practice Area Scroll To Methods
//
$(document).on('click', '#uspto-link', function(e) {
  $("#uspto").ScrollTo({
    offsetTop: 20
  });
});

$(document).on('click', '#searches-link', function(e) {
  $("#searches").ScrollTo({
    offsetTop: 20
  });
});

$(document).on('click', '#ip-port-link', function(e) {
  $("#ip-port").ScrollTo({
    offsetTop: 20
  });
});

$(document).on('click', '#ip-trans-link', function(e) {
  $("#ip-trans").ScrollTo({
    offsetTop: 20
  });
});

$(document).on('click', '#ip-worldwide-link', function(e) {
  $("#ip-worldwide").ScrollTo({
    offsetTop: 20
  });
});

//triggered when modal is about to be shown
$(document).on('click', '#accept_btn', function(e) {
	document.location.href = $('#accept_btn').attr("href");
});

$(document).on("click", "#printModal", function(event){
    $("#professionalModal-content").printElement({pageTitle:$("#professionalModal-content").find(".modal-title").text()});
});
