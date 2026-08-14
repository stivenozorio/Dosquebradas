import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Albergues Oficiales – Dosquebradas",
    short_name: "Albergues DQ",
    description:
      "Consulta los albergues oficiales disponibles en Dosquebradas, Risaralda, sus ubicaciones y cómo llegar.",
    start_url: "/",
    display: "standalone",
    background_color: "#fbfaf6",
    theme_color: "#186339",
    lang: "es-CO",
    icons: [
      {
        src: "/icon",
        sizes: "48x48",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
