import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import SignatureProduct from "./components/SignatureProduct";
import ShopByOccasion from "./components/ShopByOccasion";
import GiftBuilder from "./components/GiftBuilder";
import BestSellers from "./components/BestSellers";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <NavBar />

      <main className="relative isolate">                         
        <Hero />
        <Timeline />
        <SignatureProduct />
        <ShopByOccasion />
        <GiftBuilder />
        <BestSellers />
      </main>
    </div>
  );
}
