$(document).ready(function() {
    var envelope = $("#envelope");
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    var btn_letter = $("#letter");

    envelope.click(function() {
        open();
    });
    btn_open.click(function() {
        open();
    });
    btn_reset.click(function() {
        close();
    });
    btn_letter.click(function() {
        downloadpdf();
    });

    function downloadpdf() {
        var link = document.createElement('a');
        link.href = 'letter.pdf';
        link.download = 'letter.pdf'; // You can change the name of the downloaded file here
        link.click();
    }

    function open() {
        envelope.addClass("open")
            .removeClass("close");
    }

    function close() {
        envelope.addClass("close")
            .removeClass("open");
    }

})
