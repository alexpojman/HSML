
// Destory modal after it has been loaded
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