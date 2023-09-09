function readURL(a) { if (a.files && a.files[0]) { var e = new FileReader; e.onload = function (e) { $(".image-upload-wrap").hide(), $(".file-upload-pdf").attr("src", e.target.result), $(".file-upload-content").show(), $(".image-title").html(a.files[0].name) }, e.readAsDataURL(a.files[0]) } else removeUpload() } function removeUpload() { $(".file-upload-input").replaceWith($(".file-upload-input").clone()), $(".file-upload-content").hide(), $(".image-upload-wrap").show() } $(".image-upload-wrap").bind("dragover", function () { $(".image-upload-wrap").addClass("image-dropping") }), $(".image-upload-wrap").bind("dragleave", function () { $(".image-upload-wrap").removeClass("image-dropping") });
// Drag Pdf End 






function showSuccessToast() {
    iziToast.success({ timeout: 5000, icon: 'fa-solid fa-check', position: 'bottomRight', title: 'OK', message: 'iziToast.sucess() with custom icon!' });
}


$(document).ready(function () {
    if (typeof Inputmask !== "undefined") {
        // Kodunuz buraya gelecek
        $(document).ready(function () {
          $("#price").inputmask('decimal', {
            'alias': 'numeric',
            'groupSeparator': ',',
            'autoGroup': true,
            'digits': 2,
            'radixPoint': ".",
            'digitsOptional': false,
            'placeholder': '0',
            'rightAlign': false,
          });
        });
      }
});


$instructionBankCol = $("#instructionBankCol");
$("#slctBank, #slctOperationType").change(function (e) {
    e.preventDefault();
    if ($("#slctBank").val() != "" && $("#slctOperationType").val() != "") {
        console.log($("#slctBank").val());
        console.log($("#slctOperationType").val());

        $instructionBankCol.show();

        setTimeout(function () {
            window.location.href = "#page1-div";
        }, 600);
    }
    else {
        $instructionBankCol.hide();

    }
});














