$("#runScriptButton").on('click', (function () {

    $('.list-group').append(`<li class="list-group-item text-info">Status: running</li>`)
    var li = $('.list-group li:last-child');
    $.ajax({
        url: "/runScript.php",
        type: 'get',
        dataType: 'json',
        success: function (res) {
            console.log(res);
            li.removeClass('text-info');
            li.addClass(res.success ? 'text-success' : 'text-warning');
            li.text(`Status: ${res.message}`)
        },
        error: function (jqXHR, exception) {
            console.log(jqXHR);
            var msg = '';
            if (jqXHR.status === 0) {
                msg = 'Not connect.\n Verify Network.';
            } else if (jqXHR.status == 419) {
                msg = jqXHR.responseText;
            } else if (jqXHR.status == 404) {
                msg = 'Requested page not found. [404]';
            } else if (jqXHR.status == 500) {
                msg = 'Internal Server Error [500].';
            } else if (exception === 'parsererror') {
                msg = 'Requested JSON parse failed.';
            } else if (exception === 'timeout') {
                msg = 'Time out error.';
            } else if (exception === 'abort') {
                msg = 'Ajax request aborted.';
            } else {
                msg = 'Uncaught Error.\n' + jqXHR.responseText;
            }
            li.removeClass('text-info');
            li.addClass('text-danger');
            li.text(`Status: ${msg}`)
        },
    });
}));