import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Albergues Oficiales de Dosquebradas";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #186339 0%, #0f3d24 100%)",
          padding: 80,
        }}
      >
        <div
          style={{
            display: "flex",
            width: 96,
            height: 96,
            borderRadius: 24,
            overflow: "hidden",
            border: "6px solid #1e4b8c",
            marginBottom: 32,
          }}
        >
          <div style={{ display: "flex", flexWrap: "wrap", width: "100%", height: "100%" }}>
            <div style={{ width: "50%", height: "50%", background: "#d3d6d1" }} />
            <div style={{ width: "50%", height: "50%", background: "#1f7a48" }} />
            <div style={{ width: "50%", height: "50%", background: "#f5b400" }} />
            <div style={{ width: "50%", height: "50%", background: "#d3d6d1" }} />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 6,
            color: "#f5b400",
            fontWeight: 700,
            textTransform: "uppercase",
          }}
        >
          Dosquebradas, Risaralda
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 800,
            color: "white",
            marginTop: 12,
            textAlign: "center",
          }}
        >
          Albergues Oficiales
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#cdebd7",
            marginTop: 20,
            textAlign: "center",
            maxWidth: 900,
          }}
        >
          Ubicación, estado y cómo llegar a los puntos de albergue
        </div>
      </div>
    ),
    { ...size }
  );
}
