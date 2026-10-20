// /src/app/properties/(property)/[page]/page.tsx
// Server Component (Sin 'use client' aquí arriba)

import { connection } from 'next/server'; // <--- Importamos la utilidad moderna de Next.js
import PropertyPageClient from "@/components/PropertyPageClient/PropertyPageClient";

// 1. Quitamos 'dynamic' y dejamos únicamente la regla de navegación instantánea
export const instant = false; 

interface PageProps {
  params: {
    page: string;
  };
}

export default async function Page({ params }: PageProps) {
  // 2. Le indicamos a cacheComponents que esta ruta se ejecuta por solicitud del usuario
  await connection(); 
  
  const resolvedParams = await params;
  
  return (
    <PropertyPageClient pageId={resolvedParams.page} />
  );
}
