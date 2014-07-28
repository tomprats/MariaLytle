$(document).ready(function() {
  var player;

  $(document).on("click", ".youtube-box", function(e) {
    e.preventDefault();

    var width = 500;
    var $this = $(this);
    player = new YT.Player("player", {
      width: width,
      height: $this.data("ratio") * width,
      videoId: $this.data("id")
    });
    $("#player").data("ratio", $this.data("ratio"));
    $(".youtube-modal").modal("show");

    return false;
  });

  if($("#youtube").css("margin-right") != "0px") {
    $(".youtube-box").tooltip();
  }

  $(".youtube-modal").on("shown.bs.modal", function (e) {
    if($("#youtube").css("margin-right") == "0px") {
      resizeYoutube($("#player"));
    }
  });

  $(".youtube-modal").on("hide.bs.modal", function (e) {
    player.destroy();
  });
});

function resizeYoutube(video) {
  // Resize all videos according to their own aspect ratio
  $(window).resize(function() {
    var newWidth = video.parent()[0].offsetWidth - 30; // Subtract Padding

    video
      .width(newWidth)
      .height(newWidth * video.data("ratio"));
  }).resize();
}
