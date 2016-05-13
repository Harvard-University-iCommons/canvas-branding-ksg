function ksgHideGrades() {
    $('.Button.button-sidebar-wide:contains(View Grades)').hide();
}
$(document).ready(function() {
    ksgHideGrades();
});
$(document).ajaxComplete(function() {
    ksgHideGrades();
});
