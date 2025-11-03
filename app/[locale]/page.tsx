import AboutUs from "@/components/layouts/about";
import AppFeatures from "@/components/layouts/appFeatures";
import Contact from "@/components/layouts/contact";
import Footer from "@/components/layouts/footer";
import Hero from "@/components/layouts/heroSection";
import Navbar from "@/components/layouts/navbar";

export default function Home() {


  return (
    <>
      {/* header -- */}
      <header>
        <Navbar />
        <Hero />
      </header>

      {/* Main */}
      <main className="container mx-auto">
        <AppFeatures />
        <AboutUs />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
