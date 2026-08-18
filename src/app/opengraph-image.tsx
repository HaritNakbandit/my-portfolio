import { ImageResponse } from "next/og";
import { SITE_JOB_TITLE, SITE_NAME } from "@/config/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const OpengraphImage = () => {
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
          backgroundColor: "#0a0a0a",
          backgroundImage:
            "radial-gradient(circle at 78% 30%, rgba(43,76,140,0.55), transparent 55%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 64,
            height: 64,
            borderRadius: 16,
            backgroundColor: "#2b4c8c",
            color: "#ffffff",
            fontSize: 32,
            fontWeight: 700,
            marginBottom: 40,
          }}
        >
          H
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 700,
            color: "#fafafa",
            letterSpacing: "-0.02em",
          }}
        >
          {SITE_NAME}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 36,
            fontWeight: 500,
            color: "#7fa0d8",
            marginTop: 12,
          }}
        >
          {SITE_JOB_TITLE}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 24,
            color: "#9ca3af",
            marginTop: 28,
            maxWidth: 780,
          }}
        >
          React · React Native · Vue.js · Laravel — 5+ years building web and mobile apps
        </div>
      </div>
    ),
    { ...size },
  );
};

export default OpengraphImage;
