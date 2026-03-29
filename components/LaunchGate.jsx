'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const LAUNCH_DATE = new Date('2026-03-30T00:00:00+05:30').getTime();

function getTimeLeft() {
  const now = Date.now();
  const diff = LAUNCH_DATE - now;

  if (diff <= 0) return null;

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    total: diff,
  };
}

function CountdownUnit({ value, label, isFinal }) {
  const digits = String(value).padStart(2, '0');

  return (
    <div className="flex flex-col items-center gap-2 sm:gap-3">
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-b from-white/20 to-white/5 rounded-2xl blur-sm group-hover:from-white/30 transition-all duration-500" />
        <div className="relative flex gap-1 sm:gap-1.5">
          {digits.split('').map((d, i) => (
            <div
              key={i}
              className={`w-[32px] h-[46px] sm:w-[40px] sm:h-[56px] md:w-[52px] md:h-[72px] bg-white/[0.08] backdrop-blur-xl rounded-lg sm:rounded-xl border flex items-center justify-center text-[1.2rem] sm:text-[1.6rem] md:text-[2.2rem] font-bold text-white font-heading tabular-nums shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300 ${
                isFinal
                  ? 'border-[#4353ff]/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_0_30px_rgba(67,83,255,0.4)]'
                  : 'border-white/[0.12]'
              }`}
            >
              {d}
            </div>
          ))}
        </div>
      </div>
      <span className="text-[0.55rem] sm:text-[0.65rem] md:text-[0.7rem] font-semibold tracking-[0.2em] sm:tracking-[0.25em] uppercase text-white/50">{label}</span>
    </div>
  );
}

function LaunchTransition({ onComplete }) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 100);
    const t2 = setTimeout(() => setPhase(2), 1500);
    const t3 = setTimeout(() => setPhase(3), 2800);
    const t4 = setTimeout(() => setPhase(4), 4200);
    const t5 = setTimeout(() => onComplete(), 5000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); clearTimeout(t5); };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden" style={{ background: '#030014' }}>
      {/* Expanding ring pulse */}
      <div
        className="absolute rounded-full border-2 border-[#4353ff]/40 transition-all ease-out"
        style={{
          width: phase >= 1 ? '200vmax' : '0px',
          height: phase >= 1 ? '200vmax' : '0px',
          opacity: phase >= 3 ? 0 : 0.3,
          transitionDuration: '2s',
        }}
      />
      <div
        className="absolute rounded-full border border-[#8b5cf6]/30 transition-all ease-out"
        style={{
          width: phase >= 1 ? '180vmax' : '0px',
          height: phase >= 1 ? '180vmax' : '0px',
          opacity: phase >= 3 ? 0 : 0.2,
          transitionDuration: '2.5s',
          transitionDelay: '0.3s',
        }}
      />

      {/* Central flash */}
      <div
        className="absolute rounded-full transition-all ease-out"
        style={{
          width: phase >= 2 ? '250px' : '8px',
          height: phase >= 2 ? '250px' : '8px',
          background: 'radial-gradient(circle, rgba(67,83,255,0.8) 0%, rgba(139,92,246,0.4) 40%, transparent 70%)',
          opacity: phase >= 3 ? 0 : 1,
          transitionDuration: '1.5s',
        }}
      />

      {/* Particles burst */}
      {phase >= 1 && Array.from({ length: 16 }).map((_, i) => {
        const angle = (i / 16) * 360;
        const distance = phase >= 2 ? 150 + Math.random() * 100 : 0;
        const rad = (angle * Math.PI) / 180;
        return (
          <div
            key={i}
            className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full transition-all ease-out"
            style={{
              background: i % 3 === 0 ? '#4353ff' : i % 3 === 1 ? '#8b5cf6' : '#06b6d4',
              transform: `translate(${Math.cos(rad) * distance}px, ${Math.sin(rad) * distance}px)`,
              opacity: phase >= 3 ? 0 : 0.8,
              transitionDuration: `${1 + Math.random() * 0.5}s`,
              boxShadow: `0 0 8px ${i % 3 === 0 ? '#4353ff' : i % 3 === 1 ? '#8b5cf6' : '#06b6d4'}`,
            }}
          />
        );
      })}

      {/* "We're Live" text */}
      <div className="relative z-10 flex flex-col items-center gap-4 sm:gap-6 px-4">
        <div
          className="transition-all ease-out"
          style={{
            opacity: phase >= 2 ? 1 : 0,
            transform: phase >= 2 ? 'scale(1) translateY(0)' : 'scale(0.5) translateY(20px)',
            transitionDuration: '0.8s',
          }}
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-[0_0_60px_rgba(67,83,255,0.6)]">
            <Image src="/images/zenvict-logo.svg" alt="Zenvict" width={70} height={62} className="h-12 sm:h-16 w-auto brightness-0 invert" priority />
          </div>
        </div>

        <div
          className="flex flex-col items-center gap-2 sm:gap-3 transition-all ease-out"
          style={{
            opacity: phase >= 3 ? 1 : 0,
            transform: phase >= 3 ? 'translateY(0)' : 'translateY(30px)',
            transitionDuration: '0.8s',
          }}
        >
          <h2 className="text-[2rem] sm:text-[2.8rem] md:text-[3.5rem] font-heading font-extrabold text-white leading-none tracking-tight">
            We&apos;re <span className="bg-gradient-to-r from-[#4353ff] via-[#8b5cf6] to-[#06b6d4] bg-clip-text text-transparent">Live</span>
          </h2>
          <p className="text-white/50 text-xs sm:text-sm font-medium">Welcome to the future of enterprise AI</p>
        </div>

        {/* Loading bar */}
        <div
          className="w-32 sm:w-48 h-1 bg-white/10 rounded-full overflow-hidden transition-all ease-out"
          style={{
            opacity: phase >= 3 ? 1 : 0,
            transitionDuration: '0.5s',
          }}
        >
          <div
            className="h-full rounded-full transition-all ease-out"
            style={{
              width: phase >= 4 ? '100%' : '0%',
              background: 'linear-gradient(90deg, #4353ff, #8b5cf6, #06b6d4)',
              transitionDuration: '1.2s',
            }}
          />
        </div>
      </div>

      {/* Final white wipe */}
      <div
        className="absolute inset-0 bg-white transition-opacity ease-in"
        style={{
          opacity: phase >= 4 ? 1 : 0,
          transitionDuration: '0.6s',
          transitionDelay: '0.2s',
        }}
      />
    </div>
  );
}

export default function LaunchGate({ children }) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  const [mounted, setMounted] = useState(false);
  const [showTransition, setShowTransition] = useState(false);
  const [showSite, setShowSite] = useState(false);
  const wasCountingDown = useRef(true);

  useEffect(() => {
    setMounted(true);
    const initial = getTimeLeft();
    if (!initial) {
      wasCountingDown.current = false;
      setShowSite(true);
    }
    const timer = setInterval(() => {
      const t = getTimeLeft();
      if (!t && wasCountingDown.current) {
        wasCountingDown.current = false;
        setTimeLeft(null);
        setShowTransition(true);
      } else {
        setTimeLeft(t);
      }
      if (!t) clearInterval(timer);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!mounted) return null;

  if (showSite) return children;

  if (showTransition) {
    return (
      <>
        {children}
        <LaunchTransition onComplete={() => setShowSite(true)} />
      </>
    );
  }

  if (!timeLeft) return children;

  const totalSeconds = timeLeft.total / 1000;
  const isFinalCountdown = totalSeconds <= 5;

  const progress = Math.min(100, ((Date.now() - (LAUNCH_DATE - 30 * 24 * 60 * 60 * 1000)) / (30 * 24 * 60 * 60 * 1000)) * 100);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden transition-all duration-1000"
      style={{ background: '#030014' }}
    >
      {/* Animated gradient orbs — smaller on mobile */}
      <div
        className="absolute top-[-20%] left-[-10%] w-[300px] sm:w-[450px] md:w-[600px] h-[300px] sm:h-[450px] md:h-[600px] rounded-full animate-[float_8s_ease-in-out_infinite] transition-all duration-1000"
        style={{
          background: 'radial-gradient(circle, #4353ff 0%, transparent 70%)',
          opacity: isFinalCountdown ? 0.6 : 0.3,
        }}
      />
      <div
        className="absolute bottom-[-20%] right-[-10%] w-[250px] sm:w-[380px] md:w-[500px] h-[250px] sm:h-[380px] md:h-[500px] rounded-full animate-[float_10s_ease-in-out_infinite_reverse] transition-all duration-1000"
        style={{
          background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)',
          opacity: isFinalCountdown ? 0.5 : 0.2,
        }}
      />
      <div
        className="absolute top-[30%] right-[20%] w-[150px] sm:w-[220px] md:w-[300px] h-[150px] sm:h-[220px] md:h-[300px] rounded-full animate-[float_12s_ease-in-out_infinite] transition-all duration-1000"
        style={{
          background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)',
          opacity: isFinalCountdown ? 0.4 : 0.15,
        }}
      />

      {/* Pulse ring in final 5 seconds */}
      {isFinalCountdown && (
        <div className="absolute w-[250px] sm:w-[350px] md:w-[400px] h-[250px] sm:h-[350px] md:h-[400px] rounded-full border border-[#4353ff]/30 animate-ping" style={{ animationDuration: '1.5s' }} />
      )}

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-6 sm:gap-8 md:gap-12 px-4 sm:px-6 max-w-[680px] w-full">

        {/* Logo & Brand */}
        <div className="flex flex-col items-center gap-3 sm:gap-5">
          <div
            className="transition-all duration-1000 rounded-xl sm:rounded-2xl p-2 sm:p-3"
            style={{
              boxShadow: isFinalCountdown
                ? '0 0 60px rgba(67,83,255,0.7), 0 0 120px rgba(139,92,246,0.3)'
                : '0 0 40px rgba(67,83,255,0.2)',
            }}
          >
            <Image src="/images/zenvict-logo.svg" alt="Zenvict" width={60} height={53} className="h-10 sm:h-12 md:h-14 w-auto brightness-0 invert" priority />
          </div>
          <Image src="/images/zenvict-name.svg" alt="Zenvict" width={160} height={52} className="h-6 sm:h-7 md:h-8 w-auto brightness-0 invert" priority />
        </div>

        {/* Main message */}
        <div className="flex flex-col items-center gap-2 sm:gap-3 text-center">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white/[0.06] border border-white/[0.08] backdrop-blur-sm">
            <span className={`w-1.5 h-1.5 rounded-full animate-pulse transition-colors duration-500 ${isFinalCountdown ? 'bg-[#4353ff]' : 'bg-emerald-400'}`} />
            <span className="text-white/60 text-[0.65rem] sm:text-xs font-medium tracking-wide">
              {isFinalCountdown ? 'LAUNCHING NOW' : 'LAUNCHING SOON'}
            </span>
          </div>
          <h2 className="text-[1.5rem] sm:text-[2.2rem] md:text-[3rem] font-heading font-extrabold text-white leading-[1.1] tracking-tight">
            {isFinalCountdown ? (
              <>
                Get<br />
                <span className="bg-gradient-to-r from-[#4353ff] via-[#8b5cf6] to-[#06b6d4] bg-clip-text text-transparent animate-pulse">Ready</span>
              </>
            ) : (
              <>
                Something Big<br />
                <span className="bg-gradient-to-r from-[#4353ff] via-[#8b5cf6] to-[#06b6d4] bg-clip-text text-transparent">Is Coming</span>
              </>
            )}
          </h2>
          <p className="text-white/40 text-xs sm:text-sm max-w-[320px] sm:max-w-[400px] leading-relaxed font-medium">
            {isFinalCountdown
              ? 'The wait is almost over. Zenvict is about to go live.'
              : "We're building the future of enterprise AI. Get ready for a platform that transforms how businesses operate."
            }
          </p>
        </div>

        {/* Countdown */}
        <div className={`flex items-center gap-2 sm:gap-4 md:gap-6 transition-transform duration-500 ${isFinalCountdown ? 'scale-105 sm:scale-110' : 'scale-100'}`}>
          <CountdownUnit value={timeLeft.days} label="Days" isFinal={isFinalCountdown} />
          <span className="text-white/20 text-lg sm:text-xl md:text-2xl font-light mt-[-20px] sm:mt-[-24px]">:</span>
          <CountdownUnit value={timeLeft.hours} label="Hours" isFinal={isFinalCountdown} />
          <span className="text-white/20 text-lg sm:text-xl md:text-2xl font-light mt-[-20px] sm:mt-[-24px]">:</span>
          <CountdownUnit value={timeLeft.minutes} label="Min" isFinal={isFinalCountdown} />
          <span className="text-white/20 text-lg sm:text-xl md:text-2xl font-light mt-[-20px] sm:mt-[-24px]">:</span>
          <CountdownUnit value={timeLeft.seconds} label="Sec" isFinal={isFinalCountdown} />
        </div>

        {/* Progress bar */}
        <div className="w-full max-w-[300px] sm:max-w-[400px] flex flex-col gap-2">
          <div className="h-1 w-full bg-white/[0.06] rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-1000"
              style={{
                width: `${Math.max(5, progress)}%`,
                background: 'linear-gradient(90deg, #4353ff, #8b5cf6, #06b6d4)',
              }}
            />
          </div>
          <div className="flex justify-between">
            <span className="text-[0.6rem] sm:text-[0.65rem] text-white/25 font-medium">Building</span>
            <span className="text-[0.6rem] sm:text-[0.65rem] text-white/25 font-medium">Launch Day</span>
          </div>
        </div>

        {/* Footer info */}
        <div className="flex flex-col items-center gap-3 sm:gap-4 mt-2 sm:mt-4">
          <div className="flex items-center gap-4 sm:gap-6">
            <a href="mailto:hello@zenvict.com" className="text-white/30 text-[0.65rem] sm:text-xs font-medium hover:text-white/60 transition-colors no-underline">hello@zenvict.com</a>
            <span className="w-px h-3 bg-white/10" />
            <span className="text-white/30 text-[0.65rem] sm:text-xs font-medium">zenvict.com</span>
          </div>
          <p className="text-white/15 text-[0.55rem] sm:text-[0.65rem]">&copy; 2026 Zenvict Technologies. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
