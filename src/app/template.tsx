'use client'

import { motion } from "motion/react"
import { usePathname } from "next/navigation"

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <>
      {/* Esta es tu cortina animada que se ejecutará en cada página */}
        <motion.div
        key={`cortina1-${pathname}`}
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-50 bg-green-900"
        variants={transitionVariantsPage}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
      />

        <motion.div
        key={`cortina2-${pathname}`}
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-40 bg-green-800 opacity-50"
        variants={transitionVariantsPage}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
      />
      
      {/* Esto representa el contenido de tus páginas (no lo borres) */}
      {children}
    </>
  )
}

const transitionVariantsPage = {
  initial: {
    x: "100%",
    width: "100%",
  },
  animate: {
    x: "0%",
    width: "0%",
  }
}
