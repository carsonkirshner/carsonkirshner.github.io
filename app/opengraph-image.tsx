import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          padding: "80px",
          backgroundColor: "#faf8f5",
          color: "#211f1d",
        }}
      >
        <div
          style={{
            fontSize: 28,
            color: "#b5502f",
            fontFamily: "monospace",
            marginBottom: 24,
          }}
        >
          {site.role}
        </div>
        <div style={{ fontSize: 72, fontWeight: 600 }}>{site.name}</div>
        <div
          style={{
            fontSize: 32,
            color: "#756e66",
            marginTop: 32,
            maxWidth: 900,
          }}
        >
          {site.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
