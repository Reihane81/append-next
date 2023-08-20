//components
import Banner from './components/banner/banner';
import Clients from "./components/clients/clients";
import About from "./components/about/about";
import Stats from "./components/stats/stats";
import Services from "./components/services/services";
import Features from "./components/features/features";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
        <Banner />
        <Clients />
        <About />
        <Stats />
        <Services />
        <Features />
    </main>
  )
}
