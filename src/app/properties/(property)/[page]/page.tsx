'use client'

import Error404 from "@/components/Error404/Error404"
import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import { dataProperties } from "@/components/Properties/Properties.data"
import Property from "@/components/Property/Property"
import Transition from "@/components/Transition/Transition"
import { useParams } from "next/navigation"



const Page = () => {
  const router = useParams()
  const propertyId = router.page
  const filteredPage = dataProperties.find(
    property => property.id === Number(propertyId)
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

export default Page
