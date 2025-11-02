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
      <header className="container mx-auto w-full">
        <Navbar />
        <Hero />
      </header>

      {/* Main */}
      <main>
        <AppFeatures />
        <AboutUs />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
