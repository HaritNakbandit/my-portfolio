import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

const Icon = () => {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#2b4c8c",
          borderRadius: 8,
          color: "#ffffff",
          fontSize: 20,
          fontWeight: 700,
        }}
      >
        H
      </div>
    ),
    { ...size },
  );
};

export default Icon;
