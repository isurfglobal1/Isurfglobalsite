import { Clock as ClockIcon } from "lucide-react";
import { useEffect, useState } from "react";

export function Clock() {
  const [time, setTime] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Update time every second
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
      setTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="flex items-center gap-1.5 text-sm px-2.5 py-1 rounded-lg transition-all duration-300 cursor-default hover:bg-accent/80 group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ClockIcon className="size-3.5 text-muted-foreground transition-all duration-300 group-hover:text-primary group-hover:rotate-12 group-hover:scale-110" />
      <span className="font-mono font-medium tabular-nums text-foreground/70 transition-all duration-300 group-hover:text-foreground">
        {time}
      </span>
      {/* Subtle pulse dot indicator */}
      <span className="size-1.5 rounded-full bg-primary/30 transition-all duration-300 group-hover:bg-primary group-hover:scale-125 animate-pulse" />
    </div>
  );
}
