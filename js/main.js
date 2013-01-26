$(document).ready(function () {
    var tabReplace = '    ';
    $("#output").html(
        marked( $("#editor").val() )
    );

    $("pre code").each(function (i, e) {
        hljs.highlightBlock(e, tabReplace);
    });

    $("#editor").bind("keyup", function () {
        $("#output").html(
            marked( $("#editor").val() )
        );
        $("pre code").each(function (i, e) {
            hljs.highlightBlock(e, tabReplace);
        });
    });

    $("#editor").EnableTabs();
});
