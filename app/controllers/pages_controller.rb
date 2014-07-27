class PagesController < ApplicationController
  def index
    channels_response = google.execute!(
      api_method: youtube.channels.list,
      parameters: {
        id: ENV["YOUTUBE_CHANNEL"],
        part: "contentDetails"
      }
    )

    @videos = []
    channels_response.data.items.each do |channel|
      # Get Playlist IDs
      playlist_id = channel["contentDetails"]["relatedPlaylists"]["uploads"]
      playlist = google.execute!(
        api_method: youtube.playlist_items.list,
        parameters: {
          playlistId: playlist_id,
          part: "snippet",
          maxResults: 50
        }
      )

      @videos << playlist.data.items.collect do |video|
        width = video["snippet"]["thumbnails"]["medium"]["width"]
        height = video["snippet"]["thumbnails"]["medium"]["height"]
        {
          id: video["snippet"]["resourceId"]["videoId"],
          title: video["snippet"]["title"],
          description: video["snippet"]["description"],
          thumbnail: video["snippet"]["thumbnails"]["medium"]["url"],
          ratio: height.to_f / width
        }
      end
    end

    @videos = @videos.flatten

    @posts = facebook.get_connections("marialytlemusic", "posts")
  end
end
