/*
  Jquery Validation using jqBootstrapValidation
   example is taken from jqBootstrapValidation docs 
  */
$(function() {

    $("input,textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // something to have when submit produces an error ?
            // Not decided if I need it yet
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var Ussername = $("input#Ussername").val();
            var Siitekey = $("input#Siitekey").val();

            var Ussername = Ussername; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (Ussername.indexOf(' ') >= 0) {
                Ussername = name.split(' ').slice(0, -1).join(' ');
            }

        },
        filter: function() {
            return $(this).is(":visible");
        }
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});
