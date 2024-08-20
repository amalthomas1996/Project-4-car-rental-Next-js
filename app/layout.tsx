import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Booking from "./components/Booking";
import SideButton from "./components/SideButton";
import Banner from "./components/Banner";
import PopularCar from "./components/PopularCars";
import Subscribe from "./components/Subscribe";
import Steps from "./components/Steps";
import Location from "./components/Location";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import PopularCarsSection from "./components/PopularCarsSection";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Car Rental",
  description: "Rent a car in just few clicks!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Booking />
        <SideButton />
        <Banner />
        <PopularCarsSection />
        <Subscribe />
        <Steps />
        <Location />
        <Faq />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
