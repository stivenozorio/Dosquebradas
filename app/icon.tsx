import { ImageResponse } from "next/og";

export const size = { width: 48, height: 48 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 48,
          height: 48,
          display: "flex",
          borderRadius: 12,
          overflow: "hidden",
          border: "3px solid #1e4b8c",
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
