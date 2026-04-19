"use client";

import { useState } from "react";

// ─── Icons ────────────────────────────────────────────────────────────────────

const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const LockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const EyeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const EyeOffIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
    <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
    <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
    <line x1="2" x2="22" y1="2" y2="22" />
  </svg>
);

// MANUAL STEP: Replace with official Google "G" SVG →
// https://developers.google.com/identity/branding-guidelines
const GoogleIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
);

// MANUAL STEP: Use official Instagram icon →
// https://about.meta.com/brand/resources/instagram/instagram-brand/
const InstagramIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#f09433" />
        <stop offset="25%" stopColor="#e6683c" />
        <stop offset="50%" stopColor="#dc2743" />
        <stop offset="75%" stopColor="#cc2366" />
        <stop offset="100%" stopColor="#bc1888" />
      </linearGradient>
    </defs>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="url(#ig-grad)" />
    <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="1.8" fill="none" />
    <circle cx="17.5" cy="6.5" r="1.2" fill="white" />
  </svg>
);

// ─── Reusable input row ───────────────────────────────────────────────────────

const InputRow = ({ children }: { children: React.ReactNode }) => (
  <div
    className="flex items-center gap-3 rounded-2xl px-4 py-3"
    style={{
      background: "rgba(255,255,255,0.38)",
      border: "1px solid rgba(255,255,255,0.55)",
    }}
  >
    {children}
  </div>
);

// ─── Page ─────────────────────────────────────────────────────────────────────

/*
 * MANUAL STEP — Font (Nunito, rounded sans-serif matching the design):
 *   1. Add to app/layout.tsx inside <head>:
 *      <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet" />
 *   2. In tailwind.config.js:
 *      theme: { extend: { fontFamily: { sans: ['Nunito', 'sans-serif'] } } }
 */

export default function SignUpPage() {
  const [username, setUsername]       = useState("");
  const [email, setEmail]             = useState("");
  const [password, setPassword]       = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed]           = useState(false);

  // MANUAL STEP: Replace console.log with your API call, e.g.:
  // await fetch("/api/auth/register", { method: "POST", body: JSON.stringify({ username, email, password }) })
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) { alert("Please agree to Terms & Privacy."); return; }
    console.log({ username, email, password });
  };

  // MANUAL STEP: NextAuth → signIn("google")  |  Firebase → signInWithPopup(auth, googleProvider)
  const handleGoogleSignIn    = () => console.log("Google sign-in triggered");

  // MANUAL STEP: Redirect to your Instagram OAuth endpoint
  const handleInstagramSignIn = () => console.log("Instagram sign-in triggered");

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center"
      style={{
        background: "linear-gradient(135deg, #e05555 0%, #f08080 35%, #fca5a5 65%, #fecaca 100%)",
        padding: "2rem",
      }}
    >
      {/* ── Grid: 2fr left | 1fr right ─────────────────────────────────────── */}
      <div
        className="w-full"
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "1.5rem",
          maxWidth: "1500px",
          minHeight: "580px",
        }}
      >

        {/* ══ LEFT PANEL ════════════════════════════════════════════════════ */}
        <div
          className="hidden md:flex flex-col justify-end rounded-3xl overflow-hidden relative"
          style={{ background: "#2a2a2a" }}
        >
          {/*
           * Three concentric circles anchored to the top-left corner.
           * Outermost → darkest salmon. Innermost → lightest blush.
           * overflow:hidden on the parent clips any circle that bleeds out.
           */}

          {/* Circle 1 — outermost, darkest */}
          <div
            className="absolute"
            style={{
              width: "78%",
              aspectRatio: "1 / 1",
              background: "#cc4444",
              borderRadius: "50%",
              top: "-20%",
              left: "-12%",
            }}
          />

          {/* Circle 2 — middle */}
          <div
            className="absolute"
            style={{
              width: "63%",
              aspectRatio: "1 / 1",
              background: "#e86060",
              borderRadius: "50%",
              top: "-13%",
              left: "-5%",
            }}
          />

          {/* Circle 3 — innermost, lightest */}
          <div
            className="absolute"
            style={{
              width: "48%",
              aspectRatio: "1 / 1",
              background: "#fbb0b0",
              borderRadius: "50%",
              top: "-6%",
              left: "1%",
            }}
          />

          {/* Bottom-left text */}
          <div className="relative z-10 p-10 pb-12">
            <h2
              className="text-white font-extrabold mb-3 leading-tight"
              style={{ fontSize: "1.85rem", textAlign: "left" }}
            >
              Connect. Collab. Create.
            </h2>
            <p
              className="font-semibold leading-relaxed"
              style={{ fontSize: "0.875rem", color: "#f5b0b0", textAlign: "left" }}
            >
              Whether you're an influencer or a business, create
              meaningful connections that drive real results.
            </p>
          </div>
        </div>

        {/* ══ RIGHT PANEL — Sign-up form ════════════════════════════════════ */}
        <div
          className="flex flex-col justify-center rounded-3xl"
          style={{
            background: "rgba(255, 200, 200, 0.46)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1px solid rgba(255,255,255,0.45)",
            padding: "2.25rem 1.75rem",
          }}
        >
          {/* Heading */}
          <h1
            className="font-extrabold text-white text-center mb-7 tracking-wide"
            style={{ fontSize: "2rem", textShadow: "0 1px 8px rgba(0,0,0,0.1)" }}
          >
            Sign-up
          </h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">

            {/* Username */}
            <InputRow>
              <span className="text-rose-400 flex-shrink-0"><UserIcon /></span>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="flex-1 bg-transparent outline-none text-sm font-medium placeholder-rose-300"
                style={{ color: "#7b2e2e" }}
              />
            </InputRow>

            {/* Email */}
            <InputRow>
              <span className="text-rose-400 flex-shrink-0"><MailIcon /></span>
              <input
                type="email"
                placeholder="E-Mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-transparent outline-none text-sm font-medium placeholder-rose-300"
                style={{ color: "#7b2e2e" }}
              />
            </InputRow>

            {/* Password */}
            <InputRow>
              <span className="text-rose-400 flex-shrink-0"><LockIcon /></span>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="flex-1 bg-transparent outline-none text-sm font-medium placeholder-rose-300"
                style={{ color: "#7b2e2e" }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-rose-400 hover:text-rose-600 transition-colors flex-shrink-0"
              >
                {showPassword ? <EyeOffIcon /> : <EyeIcon />}
              </button>
            </InputRow>

            {/* Terms checkbox */}
            <label className="flex items-center gap-2 cursor-pointer mt-1 ml-1">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="w-3.5 h-3.5 accent-rose-500 flex-shrink-0"
              />
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.75)" }}>
                I agree to the{" "}
                {/* MANUAL STEP: Update href to your Terms & Privacy page */}
                <a href="/terms" className="underline text-white hover:opacity-80">
                  Term &amp; Privacy
                </a>
              </span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              className="mt-3 w-full py-3 rounded-2xl font-bold text-white text-sm tracking-wide transition-all hover:opacity-90 active:scale-95"
              style={{ background: "#d95555" }}
            >
              Sign-up
            </button>

            {/* Login link */}
            <p className="text-center text-xs mt-1" style={{ color: "rgba(255,255,255,0.7)" }}>
              Already have an account?{" "}
              {/* MANUAL STEP: Update href to your login route */}
              <a href="/login" className="text-white font-semibold hover:underline">
                Login
              </a>
            </p>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.3)" }} />
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>or</span>
            <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.3)" }} />
          </div>

          {/* Social buttons — stacked vertically to fit the narrow column */}
          <div className="flex flex-col gap-2">
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-2xl text-xs font-semibold transition-all hover:opacity-90 active:scale-95"
              style={{
                background: "rgba(255,255,255,0.82)",
                border: "1px solid rgba(255,255,255,0.65)",
                color: "#444",
              }}
            >
              <GoogleIcon />
              Sign in with Google
            </button>
            <button
              type="button"
              onClick={handleInstagramSignIn}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-2xl text-xs font-semibold text-white transition-all hover:opacity-90 active:scale-95"
              style={{
                background: "rgba(255,255,255,0.22)",
                border: "1px solid rgba(255,255,255,0.4)",
              }}
            >
              <InstagramIcon />
              Sign in with Instagram
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
