import FloatingCard from "@/components/FloatingCard";
import FAQSection from "@/components/FAQSection";
import TrustpilotBadge from "@/components/TrustpilotBadge";
import WinnerNotification from "@/components/WinnerNotification";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-main flex flex-col items-center py-4 sm:py-12 px-2 sm:px-4 relative overflow-hidden">
      {/* Winner Notifications */}
      <WinnerNotification />
      {/* Background decorations - hidden on mobile for performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
        {/* Gradient orbs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-accent/10 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/10 rounded-full blur-2xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/30 rounded-full blur-2xl" />
      </div>

      {/* Main content */}
      <div className="w-full max-w-md relative z-10 mt-0 sm:mt-4">
        <FloatingCard />
      </div>

      {/* Trustpilot Badge */}
      <TrustpilotBadge />

      {/* FAQ Section */}
      <FAQSection />

      {/* Bottom branding */}
      <div className="text-center mt-8 mb-4">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="text-sm font-medium text-muted-foreground">
            🎯 Exclusive Target Rewards
          </span>
        </div>
        <p className="text-xs text-muted-foreground/60">
          © 2026 Target Promo • All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Index;
