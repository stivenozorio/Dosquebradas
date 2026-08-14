"use client";

import type { MouseEvent } from "react";
import type { Albergue } from "@/types/albergue";
import { construirUrlComoLlegar, detectarPlataformaMapas } from "@/lib/maps";

interface ComoLlegarButtonProps {
  albergue: Albergue;
  className?: string;
  variante?: "primario" | "secundario";
}

export default function ComoLlegarButton({
  albergue,
  className = "",
  variante = "primario",
}: ComoLlegarButtonProps) {
  const hrefPorDefecto = construirUrlComoLlegar(albergue, "otro");

  function manejarClick(evento: MouseEvent<HTMLAnchorElement>) {
    if (detectarPlataformaMapas() !== "ios") return;
    evento.preventDefault();
    window.open(
      construirUrlComoLlegar(albergue, "ios"),
      "_blank",
      "noopener,noreferrer"
    );
  }

  const estilos =
    variante === "primario"
      ? "bg-dq-green-700 text-white hover:bg-dq-green-800"
      : "border border-dq-green-700 text-dq-green-800 hover:bg-dq-green-50";

  return (
    <a
      href={hrefPorDefecto}
      onClick={manejarClick}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Cómo llegar a ${albergue.nombre}`}
      className={`inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-lg px-4 text-sm font-bold transition-colors ${estilos} ${className}`}
    >
      📍 Cómo llegar
    </a>
  );
}
