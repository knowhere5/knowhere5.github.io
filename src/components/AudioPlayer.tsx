import { useState } from "react";
import { Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import YouTube from "react-youtube";

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [player, setPlayer] = useState<any>(null);

  const videoId = "3Iilv1NlWNU"; // https://www.youtube.com/watch?v=3Iilv1NlWNU
  const togglePlay = () => {
    if (!player) return;

    if (isPlaying) {
      player.pauseVideo();
    } else {
      player.playVideo();
    }
    setIsPlaying(!isPlaying);
  };

  const onReady = (event: any) => {
    setPlayer(event.target);
    // Set video quality to the lowest
    event.target.setPlaybackQuality("small");
  };

  const onEnd = () => {
    setIsPlaying(false);
  };

  return (
    <div>
      {/* YouTube Player (hidden) */}
      <div style={{ display: "none" }}>
        <YouTube
          videoId={videoId}
          onReady={onReady}
          onEnd={onEnd}
          opts={{
            playerVars: {
              autoplay: 0, // Don't autoplay by default
              loop: 1, // Loop the video
              controls: 0, // Hide controls
              modestbranding: 1, // Hide YouTube logo
              quality: "small", // Force lowest quality
            },
          }}
        />
      </div>

      {/* Play/Pause Button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={togglePlay}
        className="fixed bottom-6 left-6 bg-background/20 backdrop-blur-sm hover:bg-background/40 transition-all duration-200"
        title={isPlaying ? "Pause Music" : "Play Music"}
      >
        {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
      </Button>
    </div>
  );
};

export default AudioPlayer;