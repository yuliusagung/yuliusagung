// GENERATOR
function generate() {
  const rawNumber = $("#number").val().toString();
  let number;
  if (rawNumber.substr(0, 2) == "62") {
    number = rawNumber;
  } else if (rawNumber.substr(0, 1) == "0") {
    number = rawNumber.replace("0", "62");
  } else if (rawNumber.substr(0, 2) != "62" && rawNumber.substr(0, 2) != "0") {
    number = 62 + rawNumber;
  }
  var link =
    "https://api.whatsapp.com/send?phone=" +
    number +
    "&text=" +
    encodeURIComponent($("#message").val());
  $("#result").val(link);
  $("#result").show().focus();
  $("#copy").show();
}

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).val()).select();
  document.execCommand("copy");
  $temp.remove();
  setTimeout(function () {
    alert("Link Berhasil Tersalin!");
  });
}

$(document).ready(function () {
  $("#result").hide();
  $("#copy").hide();
  $("#generate").click(generate);
  //$("#btn-copy").click(generate);
});

function mulai() {
  $("#result").hide();
  $("#generate").click(generate);
}
