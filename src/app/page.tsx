'use client'

import { Suspense } from "react";

import About from "@/components/About/page";
import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import JoinCommunity from "@/components/JoinCommunity/JoinCommunity";
import Properties from "@/components/Properties/Properties";
import Services from "@/components/Services/Services";
import dynamic from "next/dynamic";


const LocationMap = dynamic(
  () => import('@/components/Location/Location'),
  {
    ssr: false, 
    loading: () => <div className="h-175 flex items-center justify-center text-green-900">Cargando mapa...</div>
  }
)

export default function Home() {
  return (
    <>
      <Suspense fallback={<div>Cargando...</div>}>
      <Header />
      </Suspense>
      <main>
        <Banner />
        <Suspense fallback={<div>Cargando...</div>}>
          <Properties />
        </Suspense>  
        <div className="max-w-6xl mx-auto" >
          <Services />

          <Suspense fallback={<div>Cargando...</div>}>
            <LocationMap />
          </Suspense>
          
          <About />
        </div>
        <JoinCommunity />
        <Footer />
      </main>
    </>

  )      
}
