import ContactSection from "@/components/contact-us/ContactUs";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Main from "@/components/main/Main";
import Products from "@/components/products/Products";

export default function Home() {
  return (
    <div>
      <Hero />
      <Main />
      <Products />
      <ContactSection />
      <Footer />
    </div>
  );
}
