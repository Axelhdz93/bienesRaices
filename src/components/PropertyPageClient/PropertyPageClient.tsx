// /src/components/PropertyPageClient/PropertyPageClient.tsx
'use client'

import Error404 from "@/components/Error404/Error404"
import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import { dataProperties } from "@/components/Properties/Properties.data"
import Property from "@/components/Property/Property"
import Transition from "@/components/Transition/Transition"

interface PropertyPageClientProps {
  pageId: string;
}

export default function PropertyPageClient({ pageId }: PropertyPageClientProps) {
  // Buscamos la propiedad usando el ID heredado del servidor
  const filteredPage = dataProperties.find(
    property => property.id === Number(pageId)
  )

  return (
    <Transition>
      <Header />
      
      {filteredPage ? (
        <Property house={filteredPage} />
      ) : (
        <Error404 />
      )}

      <Footer />
    </Transition>
  )
}
