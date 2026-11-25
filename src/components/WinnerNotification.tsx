import { useState, useEffect } from "react";
import { Heart, Gift, Sparkles } from "lucide-react";

const femaleNames = [
  "Emma S.", "Olivia M.", "Sophia L.", "Isabella R.", "Mia K.",
  "Charlotte B.", "Amelia D.", "Harper W.", "Evelyn T.", "Abigail P.",
  "Emily H.", "Elizabeth N.", "Sofia G.", "Avery C.", "Ella J.",
  "Scarlett A.", "Grace F.", "Chloe V.", "Victoria Z.", "Riley Q.",
  "Aria M.", "Luna R.", "Zoey B.", "Penelope W.", "Layla S.",
  "Lily K.", "Eleanor T.", "Hannah D.", "Lillian P.", "Addison L.",
  "Aubrey H.", "Ellie N.", "Stella G.", "Natalie C.", "Zoe J.",
  "Leah A.", "Hazel F.", "Violet V.", "Aurora Z.", "Savannah Q.",
  "Brooklyn M.", "Bella R.", "Claire B.", "Skylar W.", "Lucy S."
];

const cities = [
  "Los Angeles, CA", "New York, NY", "Chicago, IL", "Houston, TX",
  "Phoenix, AZ", "San Diego, CA", "Dallas, TX", "Austin, TX",
  "Miami, FL", "Denver, CO", "Seattle, WA", "Boston, MA",
  "Atlanta, GA", "Portland, OR", "Las Vegas, NV", "Orlando, FL"
];

const timeAgo = [
  "just now", "1 min ago", "2 mins ago", "3 mins ago", "5 mins ago"
];

const WinnerNotification = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentWinner, setCurrentWinner] = useState({
    name: "",
    city: "",
    time: ""
  });
  const [confetti, setConfetti] = useState<Array<{ id: number; left: number; delay: number; size: number }>>([]);

  const generateWinner = () => {
    return {
      name: femaleNames[Math.floor(Math.random() * femaleNames.length)],
      city: cities[Math.floor(Math.random() * cities.length)],
      time: timeAgo[Math.floor(Math.random() * timeAgo.length)]
    };
  };

  const generateConfetti = () => {
    return Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.5,
      size: 8 + Math.random() * 8
    }));
  };

  useEffect(() => {
    // Initial delay before first notification
    const initialDelay = setTimeout(() => {
      showNotification();
    }, 3000);

    return () => clearTimeout(initialDelay);
  }, []);

  const showNotification = () => {
    setCurrentWinner(generateWinner());
    setConfetti(generateConfetti());
    setIsVisible(true);

    // Hide after 4 seconds
    setTimeout(() => {
      setIsVisible(false);
      
      // Show next notification after 4-5 seconds
      const nextDelay = 4000 + Math.random() * 1000;
      setTimeout(showNotification, nextDelay);
    }, 4000);
  };

  return (
    <>
      {/* Confetti overlay when notification is visible */}
      {isVisible && (
        <div className="fixed inset-0 pointer-events-none z-[60] overflow-hidden">
          {confetti.map((piece) => (
            <div
              key={piece.id}
              className="absolute animate-confetti-fall"
              style={{
                left: `${piece.left}%`,
                animationDelay: `${piece.delay}s`,
                top: "-20px"
              }}
            >
              <Heart 
                className="text-primary fill-primary opacity-80"
                style={{ width: piece.size, height: piece.size }}
              />
            </div>
          ))}
        </div>
      )}

      {/* Notification toast */}
      <div
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-[70] transition-all duration-500 ease-out ${
          isVisible 
            ? "translate-y-0 opacity-100" 
            : "-translate-y-full opacity-0"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-float border border-primary/20 px-4 py-3 flex items-center gap-3 min-w-[280px] max-w-[340px]">
          {/* Icon */}
          <div className="relative flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-gradient-target flex items-center justify-center">
              <Gift className="w-5 h-5 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
              <Sparkles className="w-2.5 h-2.5 text-white" />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-foreground flex items-center gap-1">
              <Heart className="w-3 h-3 text-primary fill-primary animate-heart-beat flex-shrink-0" />
              <span className="truncate">{currentWinner.name}</span>
            </p>
            <p className="text-xs text-muted-foreground">
              claimed their <span className="text-primary font-semibold">$750 Reward</span>
            </p>
            <p className="text-[10px] text-muted-foreground/70">
              {currentWinner.city} • {currentWinner.time}
            </p>
          </div>

          {/* Close indicator */}
          <div className="flex-shrink-0">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          </div>
        </div>
      </div>
    </>
  );
};

export default WinnerNotification;
