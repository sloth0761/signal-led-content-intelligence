import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { GalleryBanner } from "@/components/landing/gallery-banner";
import { NoiseSection } from "@/components/landing/noise-section";
import { PainPoints } from "@/components/landing/pain-points";
import { SignalSection } from "@/components/landing/signal-section";
import { ScoreSection } from "@/components/landing/score-section";
import { Waitlist } from "@/components/landing/waitlist";
import { Footer } from "@/components/landing/footer";

export const metadata = {
  title: "The Arth — Signal-Led Content Intelligence for Founders",
  description: "The Arth turns founder content into pipeline. Detect ICP signals, map engagement to revenue, and create content the right buyers can't ignore.",
  openGraph: {
    title: "The Arth — Signal-Led Content Intelligence",
    description: "Stop guessing what to post. Start creating from buyer signals. Early access to founder positioning intelligence.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <GalleryBanner />
      <NoiseSection />
      <PainPoints />
      <SignalSection />
      <ScoreSection />
      <Waitlist />
      <Footer />
    </div>
  );
}