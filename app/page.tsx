import Hero from "@/components/Hero";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import AlberguesExplorer from "@/components/AlberguesExplorer";
import { albergues } from "@/data/albergues";

export default function Home() {
  return (
    <>
      <Hero />
      <DisclaimerBanner />
      <main id="contenido" className="mx-auto w-full max-w-5xl flex-1 px-4 py-8">
        <AlberguesExplorer albergues={albergues} />
      </main>
    </>
  );
}
