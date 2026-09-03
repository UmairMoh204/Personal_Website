import ScanResults from "@/imports/ScanResults-2/index";

export default function ScanningScreen() {
  return (
    <div className="relative size-full overflow-hidden">
      {/* Blurred results layer — always full height */}
      <div className="absolute inset-0" style={{ filter: "blur(8px)", transform: "scale(1.02)" }}>
        <ScanResults />
      </div>

      {/* Scan-line mask: a div that shrinks from the top, revealing the sharp layer beneath */}
      <div
        className="absolute inset-0"
        style={{
          background: "rgba(40,40,43,0.45)",
          animation: "revealMask 4.4s linear forwards",
        }}
      />

      {/* Glowing scan line that rides the reveal boundary */}
      <div
        className="absolute left-0 right-0"
        style={{
          height: 3,
          background:
            "linear-gradient(90deg, transparent, rgba(4,170,109,0.7) 20%, #04aa6d 50%, rgba(4,170,109,0.7) 80%, transparent)",
          boxShadow: "0 0 18px 6px rgba(4,170,109,0.35)",
          animation: "scanLine 4.4s linear forwards",
          top: 0,
        }}
      />

      <style>{`
        @keyframes revealMask {
          0%   { clip-path: inset(0 0 0 0); }
          100% { clip-path: inset(100% 0 0 0); }
        }
        @keyframes scanLine {
          0%   { transform: translateY(0); }
          100% { transform: translateY(852px); }
        }
      `}</style>
    </div>
  );
}
