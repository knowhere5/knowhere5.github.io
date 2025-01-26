import { useState, useRef, useEffect } from "react";
import { Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio("https://www.chosic.com/wp-content/uploads/2023/07/synthwave-background-music-for-videos-gaming-8-bit-chiptune.mp3");
    audioRef.current.loop = true;

    // Cleanup on unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={`fixed bottom-6 left-6 p-[2px] rounded-md ${isPlaying ? 'animate-border-flow' : 'bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500'}`}>
      <Button
        variant="ghost"
        size="icon"
        onClick={togglePlay}
        className="relative bg-background/20 backdrop-blur-sm hover:bg-background/40 transition-all duration-200"
        title={isPlaying ? "Pause Music" : "Play Music"}
      >
        {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
      </Button>
    </div>
  );
};

export default AudioPlayer;