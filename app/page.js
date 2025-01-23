import ContactSection from "@/components/contact-us/ContactUs";
import Footer from "@/components/footer/Footer";
import Header from "@/components/hero/Header";
import Hero from "@/components/hero/Hero";
import Main from "@/components/main/Main";
import Products from "@/components/products/Products";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Main />
      <Products />
      <ContactSection />
      <Footer />
    </>
  );
}
