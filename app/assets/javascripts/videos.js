$(document).ready(function() {
  var player;

  $(document).on("click", ".youtube-box", function(e) {
    e.preventDefault();

    $(".youtube-modal").modal("show");
    player = new YT.Player("player", {
      width: "500",
      height: $(this).data("ratio")*500,
      videoId: $(this).data("id")
    });

    return false;
  });

  $(".youtube-modal").on("hide.bs.modal", function (e) {
    player.destroy();
  });

  $(".youtube-box").tooltip();
});

function sizeYoutube(video) {
  video.data("aspectRatio", video[0].height / video[0].width);

  // Resize all videos according to their own aspect ratio
  $(window).resize(function() {
    var newWidth = video.parent()[0].offsetWidth;

    video
      .width(newWidth)
      .height(newWidth * video.data("aspectRatio"));
  }).resize();
}
function old(video) {
  var $allVideos = $(".youtube");

  $allVideos.each(function() {
    sizeYoutube($(this));
  });
}
