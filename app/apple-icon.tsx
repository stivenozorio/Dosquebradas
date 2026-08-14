import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          display: "flex",
          background: "#fbfaf6",
          borderRadius: 40,
          overflow: "hidden",
          border: "10px solid #1e4b8c",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <div style={{ width: "50%", height: "50%", background: "#d3d6d1" }} />
          <div style={{ width: "50%", height: "50%", background: "#1f7a48" }} />
          <div style={{ width: "50%", height: "50%", background: "#f5b400" }} />
          <div style={{ width: "50%", height: "50%", background: "#d3d6d1" }} />
        </div>
      </div>
    ),
    { ...size }
  );
}
