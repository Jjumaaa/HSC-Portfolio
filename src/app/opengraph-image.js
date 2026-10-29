import { ImageResponse } from "next/og";
import { person } from "@/data/portfolio";

export const alt = `${person.fullName}, ${person.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Social sharing card generated at build time (WhatsApp, LinkedIn, X, etc.).
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
          background: "#0b1f3a",
          color: "#f8f6f1",
        }}
      >
        <div style={{ display: "flex", width: 120, height: 6, marginBottom: 40 }}>
          <div style={{ flex: 1, background: "#0b0b0c" }} />
          <div style={{ flex: 1, background: "#9b1c1c" }} />
          <div style={{ flex: 1, background: "#1b5e3a" }} />
        </div>
        <div style={{ fontSize: 28, letterSpacing: 6, color: "#d9bd7a", textTransform: "uppercase" }}>
          Republic of Kenya · National Honour
        </div>
        <div style={{ fontSize: 96, fontWeight: 700, marginTop: 24 }}>{person.fullName}</div>
        <div style={{ fontSize: 40, marginTop: 16, color: "#d9bd7a" }}>{person.title}</div>
      </div>
    ),
    size
  );
}
