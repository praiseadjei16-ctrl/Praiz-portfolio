"use client";

import {
  createContext,
  useContext,
  useEffect,
  useSyncExternalStore,
} from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MotionProfileContext = createContext("light");

const MOTION_QUERIES = {
  reduced: "(prefers-reduced-motion: reduce)",
  mobile: "(max-width: 900px)",
  coarse: "(pointer: coarse)",
};

function getMotionProfile() {
  if (typeof window === "undefined") return "light";
  if (window.matchMedia(MOTION_QUERIES.reduced).matches) return "none";
  if (
    window.matchMedia(MOTION_QUERIES.mobile).matches ||
    window.matchMedia(MOTION_QUERIES.coarse).matches
  ) {
    return "light";
  }
  return "full";
}

function subscribeToMotionProfile(onChange) {
  if (typeof window === "undefined") return () => {};

  const mediaQueries = Object.values(MOTION_QUERIES).map((query) =>
    window.matchMedia(query)
  );
  mediaQueries.forEach((query) => query.addEventListener("change", onChange));

  return () => {
    mediaQueries.forEach((query) =>
      query.removeEventListener("change", onChange)
    );
  };
}

export function useMotionProfile() {
  return useContext(MotionProfileContext);
}

export default function LenisProvider({ children }) {
  const motionProfile = useSyncExternalStore(
    subscribeToMotionProfile,
    getMotionProfile,
    () => "light"
  );

  useEffect(() => {
    if (motionProfile !== "full") return undefined;

    const lenis = new Lenis({
      autoRaf: false,
      lerp: 0.1,
      duration: 1.5,
      smoothWheel: true,
      syncTouch: false,
    });

    function update(time) {
      lenis.raf(time * 1000);
    }

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
      lenis.off("scroll", ScrollTrigger.update);
      lenis.destroy();
    };
  }, [motionProfile]);

  return (
    <MotionProfileContext.Provider value={motionProfile}>
      {children}
    </MotionProfileContext.Provider>
  );
}
