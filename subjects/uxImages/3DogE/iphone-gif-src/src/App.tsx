import { useState, useEffect, useRef, useCallback } from "react";
import ScanFor from "@/imports/ScanFor/index";
import SelectedScanFor from "@/imports/SelectedScanFor/index";
import TakePhoto from "@/imports/PoopInvestigation-6/index";
import ScanResults from "@/imports/ScanResults-2/index";
import ScanningScreen from "@/ScanningScreen";

const STEPS: { component: React.ReactNode; duration: number }[] = [
  { component: <TakePhoto />, duration: 2200 },
  { component: <ScanFor />, duration: 2000 },
  { component: <SelectedScanFor />, duration: 2200 },
  { component: <ScanningScreen />, duration: 4800 },
  { component: <ScanResults />, duration: 3600 },
];

const TOTAL = STEPS.length;

const NAV_GROUPS = [
  { label: "Camera", icon: "📷", steps: [0] },
  { label: "Scan For", icon: "🔍", steps: [1] },
  { label: "Selected", icon: "✅", steps: [2] },
  { label: "Scanning", icon: "⏳", steps: [3] },
  { label: "Results", icon: "📋", steps: [4] },
];

const DESIGN_W = 393;
const DESIGN_H = 852;
const NAV_W = 200;
const GAP = 48;
const LAYOUT_W = DESIGN_W + GAP + NAV_W;

export default function App() {
  const [step, setStep] = useState(0);
  const [visible, setVisible] = useState(true);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.4);

  const updateScale = useCallback(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const availW = Math.max(wrap.clientWidth - 32, 1);
    const availH = Math.max(wrap.clientHeight - 32, 1);
    setScale(Math.min(availW / LAYOUT_W, availH / DESIGN_H, 1));
  }, []);

  useEffect(() => {
    updateScale();
    const wrap = wrapRef.current;
    window.addEventListener("resize", updateScale);
    const observer = wrap ? new ResizeObserver(updateScale) : null;
    if (wrap && observer) observer.observe(wrap);
    return () => {
      window.removeEventListener("resize", updateScale);
      observer?.disconnect();
    };
  }, [updateScale]);

  const advance = (next: number) => {
    setVisible(false);
    window.setTimeout(() => {
      setStep(next % TOTAL);
      setVisible(true);
    }, 220);
  };

  useEffect(() => {
    timerRef.current = setTimeout(() => advance(step + 1), STEPS[step].duration);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [step]);

  const goTo = (i: number) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    advance(i);
  };

  const activeGroup = NAV_GROUPS.findIndex((g) => g.steps.includes(step));

  return (
    <div
      ref={wrapRef}
      className="min-h-full h-full flex items-center justify-center overflow-hidden relative"
      style={{
        background:
          "radial-gradient(ellipse at 30% 60%, #f5e8b0 0%, #fdf3d0 40%, #fffdf7 100%)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "200px 200px",
        }}
      />

      <div
        className="relative flex items-center"
        style={{
          gap: GAP * scale,
          transform: "translateZ(0)",
        }}
      >
        <div
          className="flex-shrink-0"
          style={{ width: DESIGN_W * scale, height: DESIGN_H * scale, position: "relative" }}
        >
          <div
            className="absolute inset-0 rounded-[54px] pointer-events-none"
            style={{
              boxShadow: "0 0 80px 24px rgba(181,148,16,0.18)",
            }}
          />
          <div
            style={{
              width: DESIGN_W,
              height: DESIGN_H,
              transform: `scale(${scale})`,
              transformOrigin: "top left",
              borderRadius: 54,
              overflow: "hidden",
              opacity: visible ? 1 : 0,
              transition: "opacity 0.22s ease",
              boxShadow:
                "0 0 0 1px rgba(181,148,16,0.35), 0 32px 80px rgba(0,0,0,0.75)",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          >
            <div key={step} className="size-full">
              {STEPS[step].component}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3" style={{ width: NAV_W * scale }}>
          <p
            className="text-xs uppercase tracking-widest mb-2"
            style={{
              color: "rgba(120,75,0,0.65)",
              fontFamily: "system-ui, sans-serif",
              fontSize: Math.max(10 * scale, 8),
            }}
          >
            Prototype flow
          </p>

          {NAV_GROUPS.map((group, gi) => {
            const isActive = gi === activeGroup;
            const isDone = gi < activeGroup;

            return (
              <button
                key={gi}
                type="button"
                onClick={() => goTo(group.steps[0])}
                className="flex items-center gap-3 text-left rounded-xl px-4 py-3 transition-all duration-300"
                style={{
                  background: isActive
                    ? "rgba(255,255,255,0.55)"
                    : "rgba(255,255,255,0.25)",
                  border: isActive
                    ? "1px solid rgba(181,148,16,0.7)"
                    : "1px solid rgba(181,148,16,0.2)",
                  cursor: "pointer",
                  transform: isActive ? "translateX(6px)" : "translateX(0)",
                  padding: `${12 * scale}px ${16 * scale}px`,
                  gap: 12 * scale,
                  borderRadius: 12 * scale,
                }}
              >
                <div
                  className="flex-shrink-0 flex items-center justify-center rounded-full font-bold"
                  style={{
                    width: 28 * scale,
                    height: 28 * scale,
                    fontSize: Math.max(10 * scale, 8),
                    background: isActive
                      ? "linear-gradient(135deg,#d4a017,#b59410)"
                      : isDone
                      ? "rgba(181,148,16,0.35)"
                      : "rgba(181,148,16,0.12)",
                    color: isActive ? "#fff" : isDone ? "#7a5200" : "rgba(120,75,0,0.4)",
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  {isDone && !isActive ? "✓" : gi + 1}
                </div>

                <div>
                  <p
                    className="font-semibold leading-none mb-0.5"
                    style={{
                      color: isActive ? "#7a4f00" : "rgba(100,60,0,0.55)",
                      fontFamily: "system-ui, sans-serif",
                      fontSize: Math.max(13 * scale, 9),
                    }}
                  >
                    {group.label}
                  </p>
                  {isActive && (
                    <p
                      className="leading-none"
                      style={{
                        color: "rgba(120,75,0,0.6)",
                        fontFamily: "system-ui, sans-serif",
                        fontSize: Math.max(10 * scale, 7),
                        marginTop: 4 * scale,
                      }}
                    >
                      Now playing
                    </p>
                  )}
                </div>

                {isActive && (
                  <div
                    className="ml-auto flex-shrink-0 rounded-full overflow-hidden"
                    style={{
                      width: 3,
                      height: 28 * scale,
                      background: "rgba(181,148,16,0.25)",
                    }}
                  >
                    <div
                      className="rounded-full"
                      style={{
                        width: "100%",
                        background: "linear-gradient(180deg,#d4a017,#b59410)",
                        height: "100%",
                        animation: `growBar ${STEPS[step].duration}ms linear forwards`,
                      }}
                    />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes growBar {
          from { transform: scaleY(0); transform-origin: top; }
          to   { transform: scaleY(1); transform-origin: top; }
        }
      `}</style>
    </div>
  );
}
