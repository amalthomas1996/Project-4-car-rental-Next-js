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
        <div className="popular-cars-section">
          <h2>Most Popular Cars</h2>

          <div className="car-cards-container">
            <PopularCar
              carImage="/car-image-1.svg"
              carName="Mitsubishi Eclipse"
              description="Eclipse Cross is a fusion of sharp coupe looks and dynamic SUV mobility with signature Mitsubishi styling, technology, and driving confidence."
              people="6"
              transmission="Automatic"
              doors="5"
              ac="AC"
              price="AED 2700/ Monthly"
            />
            <PopularCar
              carImage="/car-image-2.svg"
              carName="Jac J7"
              description="S3 Plus has been rated Five-Star in C-NCAP including front impact, side impact, frontal side impact &
            Whipping test."
              people="6"
              transmission="Automatic"
              doors="5"
              ac="AC"
              price="AED 2700/ Monthly"
            />
            <PopularCar
              carImage="/car-image-1.svg"
              carName="Mitsubishi Eclipse"
              description="Eclipse Cross is a fusion of sharp coupe looks and dynamic SUV mobility with signature Mitsubishi styling, technology, and driving confidence."
              people="6"
              transmission="Automatic"
              doors="5"
              ac="AC"
              price="AED 2700/ Monthly"
            />
          </div>
        </div>
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
