import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Payment } from "@/components/payment";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { ScrollToTopButton } from "@/components/scroll-to-top-button";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Payment />
      <Contact />
      <Footer />
      <ScrollToTopButton />
    </main>
  );
}
