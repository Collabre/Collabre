"use client";

import { useState, useEffect } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface FieldState {
  value: string;
  touched: boolean;
  error: string;
}

// ─── Icons ────────────────────────────────────────────────────────────────────

const UserIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const LockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const EyeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const EyeOffIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
    <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
    <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
    <line x1="2" x2="22" y1="2" y2="22" />
  </svg>
);

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const StarIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

// MANUAL STEP: Replace with official Google "G" SVG →
// https://developers.google.com/identity/branding-guidelines
const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
);

// MANUAL STEP: Use official Instagram icon →
// https://about.meta.com/brand/resources/instagram/instagram-brand/
const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="ig2" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#f09433" />
        <stop offset="50%" stopColor="#dc2743" />
        <stop offset="100%" stopColor="#bc1888" />
      </linearGradient>
    </defs>
    <rect x="2" y="2" width="20" height="20" rx="5" fill="url(#ig2)" />
    <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="1.8" fill="none" />
    <circle cx="17.5" cy="6.5" r="1.2" fill="white" />
  </svg>
);

// ─── Helpers ──────────────────────────────────────────────────────────────────

const validateUsername = (v: string) => {
  if (!v.trim()) return "Username is required";
  if (v.trim().length < 3) return "At least 3 characters";
  if (!/^[a-zA-Z0-9_]+$/.test(v)) return "Letters, numbers and _ only";
  return "";
};

const validateEmail = (v: string) => {
  if (!v.trim()) return "Email is required";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return "Enter a valid email";
  return "";
};

const validatePassword = (v: string) => {
  if (!v) return "Password is required";
  if (v.length < 8) return "At least 8 characters";
  return "";
};

const getPasswordStrength = (v: string): { score: number; label: string; color: string } => {
  if (!v) return { score: 0, label: "", color: "" };
  let score = 0;
  if (v.length >= 8) score++;
  if (v.length >= 12) score++;
  if (/[A-Z]/.test(v) && /[a-z]/.test(v)) score++;
  if (/\d/.test(v)) score++;
  if (/[^a-zA-Z0-9]/.test(v)) score++;
  if (score <= 1) return { score: 1, label: "Weak", color: "#e05555" };
  if (score <= 3) return { score: 2, label: "Fair", color: "#e08c00" };
  return { score: 3, label: "Strong", color: "#2e9e6b" };
};

// ─── Sub-components ───────────────────────────────────────────────────────────

const ProofPoint = ({ icon, text }: { icon: string; text: string }) => (
  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
    <div style={{
      width: 28, height: 28, borderRadius: "50%",
      background: "rgba(255,255,255,0.15)",
      display: "flex", alignItems: "center", justifyContent: "center",
      fontSize: 14, flexShrink: 0,
    }}>
      {icon}
    </div>
    <span style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.82)", lineHeight: 1.4 }}>
      {text}
    </span>
  </div>
);

const Testimonial = () => (
  <div style={{
    background: "rgba(255,255,255,0.1)",
    border: "1px solid rgba(255,255,255,0.18)",
    borderRadius: 14,
    padding: "1rem 1.25rem",
    marginTop: "auto",
  }}>
    {/* Stars */}
    <div style={{ display: "flex", gap: 3, color: "#FFD166", marginBottom: 8 }}>
      {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
    </div>
    <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.88)", lineHeight: 1.6, margin: "0 0 12px" }}>
      "Collab helped us grow our brand partnerships by 3× in just 90 days. The platform is seamless."
    </p>
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      {/* Avatar initials */}
      <div style={{
        width: 34, height: 34, borderRadius: "50%",
        background: "rgba(255,255,255,0.25)",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "0.75rem", fontWeight: 700, color: "#fff",
        flexShrink: 0,
      }}>
        PR
      </div>
      <div>
        <p style={{ margin: 0, fontSize: "0.8rem", fontWeight: 700, color: "#fff" }}>Priya Rajan</p>
        <p style={{ margin: 0, fontSize: "0.72rem", color: "rgba(255,255,255,0.6)" }}>Head of Partnerships, Novaura</p>
      </div>
    </div>
  </div>
);

interface FormFieldProps {
  icon: React.ReactNode;
  type: string;
  placeholder: string;
  field: FieldState;
  onChange: (v: string) => void;
  onBlur: () => void;
  suffix?: React.ReactNode;
}

const FormField = ({ icon, type, placeholder, field, onChange, onBlur, suffix }: FormFieldProps) => {
  const hasError = field.touched && field.error;
  return (
    <div>
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "0 14px",
        height: 48,
        borderRadius: 10,
        border: `1.5px solid ${hasError ? "#e05555" : field.touched && !field.error ? "#2e9e6b" : "#e2d5d5"}`,
        background: "#fff",
        transition: "border-color 0.2s",
      }}>
        <span style={{ color: hasError ? "#e05555" : field.touched && !field.error ? "#2e9e6b" : "#c0a0a0", flexShrink: 0 }}>
          {icon}
        </span>
        <input
          type={type}
          placeholder={placeholder}
          value={field.value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          style={{
            flex: 1,
            border: "none",
            outline: "none",
            fontSize: "0.875rem",
            color: "#2a1a1a",
            background: "transparent",
            fontFamily: "inherit",
          }}
        />
        {suffix && <span style={{ flexShrink: 0 }}>{suffix}</span>}
        {field.touched && !field.error && !suffix && (
          <span style={{ color: "#2e9e6b", flexShrink: 0 }}><CheckIcon /></span>
        )}
      </div>
      {hasError && (
        <p style={{ margin: "4px 0 0 4px", fontSize: "0.75rem", color: "#e05555" }}>
          {field.error}
        </p>
      )}
    </div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────

/*
 * MANUAL STEP — Font:
 * Add to app/layout.tsx inside <head>:
 *   <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=DM+Serif+Display&display=swap" rel="stylesheet" />
 * Then in tailwind.config.js:
 *   theme: { extend: { fontFamily: { sans: ['DM Sans', 'sans-serif'], serif: ['DM Serif Display', 'serif'] } } }
 */

export default function SignUpPage() {
  const [username, setUsername] = useState<FieldState>({ value: "", touched: false, error: "" });
  const [email, setEmail]       = useState<FieldState>({ value: "", touched: false, error: "" });
  const [password, setPassword] = useState<FieldState>({ value: "", touched: false, error: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed]     = useState(false);
  const [agreedError, setAgreedError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const strength = getPasswordStrength(password.value);

  const touch = (
    setter: React.Dispatch<React.SetStateAction<FieldState>>,
    validator: (v: string) => string,
    value: string
  ) => setter((prev) => ({ ...prev, touched: true, error: validator(value) }));

  // MANUAL STEP: Replace with your backend call, e.g.:
  // await fetch("/api/auth/register", { method: "POST", body: JSON.stringify({ username, email, password }) })
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const uErr = validateUsername(username.value);
    const eErr = validateEmail(email.value);
    const pErr = validatePassword(password.value);
    setUsername((p) => ({ ...p, touched: true, error: uErr }));
    setEmail((p) => ({ ...p, touched: true, error: eErr }));
    setPassword((p) => ({ ...p, touched: true, error: pErr }));
    if (!agreed) { setAgreedError(true); return; }
    if (uErr || eErr || pErr) return;
    setSubmitted(true);
    console.log({ username: username.value, email: email.value, password: password.value });
  };

  // MANUAL STEP: NextAuth → signIn("google")  |  Firebase → signInWithPopup(auth, googleProvider)
  const handleGoogleSignIn    = () => console.log("Google sign-in triggered");

  // MANUAL STEP: Redirect to your Instagram OAuth endpoint
  const handleInstagramSignIn = () => console.log("Instagram sign-in triggered");

  return (
    <div style={{
      minHeight: "100vh",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(140deg, #d94545 0%, #e87070 40%, #f5a8a8 75%, #fdd8d8 100%)",
      padding: "2rem",
      fontFamily: "'DM Sans', sans-serif",
      boxSizing: "border-box",
    }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1.05fr",
        gap: "1.5rem",
        width: "100%",
        maxWidth: "920px",
        minHeight: "600px",
      }}>

        {/* ══ LEFT — Social proof panel ═══════════════════════════════════ */}
        <div style={{
          background: "rgba(180,40,40,0.35)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          border: "1px solid rgba(255,255,255,0.18)",
          borderRadius: 24,
          padding: "2.5rem 2rem",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          position: "relative",
          overflow: "hidden",
        }}
          className="hidden md:flex"
        >
          {/* Background circle accents */}
          <div style={{ position: "absolute", width: "55%", aspectRatio: "1/1", borderRadius: "50%", background: "rgba(255,255,255,0.07)", top: "-15%", left: "-15%", pointerEvents: "none" }} />
          <div style={{ position: "absolute", width: "40%", aspectRatio: "1/1", borderRadius: "50%", background: "rgba(255,255,255,0.05)", top: "-8%", left: "-5%", pointerEvents: "none" }} />
          <div style={{ position: "absolute", width: "28%", aspectRatio: "1/1", borderRadius: "50%", background: "rgba(255,255,255,0.07)", top: "-2%", left: "3%", pointerEvents: "none" }} />

          {/* Brand */}
          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(255,255,255,0.15)",
              borderRadius: 8, padding: "5px 12px",
              marginBottom: "1.5rem",
            }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#fff" }} />
              <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "#fff", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Collab
              </span>
            </div>

            <h2 style={{
              margin: "0 0 0.5rem",
              fontSize: "1.75rem",
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.25,
              fontFamily: "'DM Serif Display', serif",
            }}>
              Connect.<br />Collab.<br />Create.
            </h2>
            <p style={{ margin: 0, fontSize: "0.875rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}>
              The platform where influencers and brands build lasting partnerships.
            </p>
          </div>

          {/* Proof points */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", position: "relative", zIndex: 1 }}>
            <ProofPoint icon="🚀" text="10,000+ active creators worldwide" />
            <ProofPoint icon="🤝" text="Trusted by 500+ brands and agencies" />
            <ProofPoint icon="🎉" text="Free to join — no credit card needed" />
          </div>

          {/* Divider */}
          <div style={{ height: 1, background: "rgba(255,255,255,0.15)", position: "relative", zIndex: 1 }} />

          {/* Testimonial */}
          <div style={{ position: "relative", zIndex: 1, marginTop: "auto" }}>
            <Testimonial />
          </div>
        </div>

        {/* ══ RIGHT — Sign-up form ════════════════════════════════════════ */}
        <div style={{
          background: "#fff",
          borderRadius: 24,
          padding: "2.5rem 2.25rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          boxShadow: "0 8px 40px rgba(180,60,60,0.18)",
        }}>

          {/* Trust badge */}
          <p style={{ margin: "0 0 1.25rem", fontSize: "0.75rem", color: "#b07070", textAlign: "center", letterSpacing: "0.04em" }}>
            FREE ACCOUNT · NO CREDIT CARD REQUIRED
          </p>

          {/* Heading */}
          <h1 style={{
            margin: "0 0 0.25rem",
            fontSize: "1.75rem",
            fontWeight: 700,
            color: "#1a0a0a",
            fontFamily: "'DM Serif Display', serif",
            textAlign: "center",
          }}>
            Create your account
          </h1>
          <p style={{ margin: "0 0 1.75rem", fontSize: "0.875rem", color: "#9a7070", textAlign: "center" }}>
            Already have one?{" "}
            {/* MANUAL STEP: Update href to your login route */}
            <a href="/login" style={{ color: "#c0392b", fontWeight: 600, textDecoration: "none" }}>Sign in</a>
          </p>

          {submitted ? (
            <div style={{ textAlign: "center", padding: "2rem 0" }}>
              <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>🎉</div>
              <h2 style={{ margin: "0 0 0.5rem", color: "#1a0a0a", fontSize: "1.25rem", fontWeight: 700 }}>You're in!</h2>
              <p style={{ color: "#9a7070", fontSize: "0.875rem" }}>Check your email to verify your account.</p>
            </div>
          ) : (
            <>
              {/* Social sign-in */}
              <div style={{ display: "flex", gap: 10, marginBottom: "1.25rem" }}>
                <button
                  type="button"
                  onClick={handleGoogleSignIn}
                  style={{
                    flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                    padding: "10px 0", borderRadius: 10, fontSize: "0.8rem", fontWeight: 600,
                    color: "#333", cursor: "pointer", transition: "background 0.15s",
                    background: "#f7f3f3", border: "1.5px solid #ede0e0", fontFamily: "inherit",
                  }}
                >
                  <GoogleIcon /> Google
                </button>
                <button
                  type="button"
                  onClick={handleInstagramSignIn}
                  style={{
                    flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                    padding: "10px 0", borderRadius: 10, fontSize: "0.8rem", fontWeight: 600,
                    color: "#333", cursor: "pointer", transition: "background 0.15s",
                    background: "#f7f3f3", border: "1.5px solid #ede0e0", fontFamily: "inherit",
                  }}
                >
                  <InstagramIcon /> Instagram
                </button>
              </div>

              {/* Divider */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "1.25rem" }}>
                <div style={{ flex: 1, height: 1, background: "#ede0e0" }} />
                <span style={{ fontSize: "0.75rem", color: "#c0a0a0" }}>or sign up with email</span>
                <div style={{ flex: 1, height: 1, background: "#ede0e0" }} />
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>

                <FormField
                  icon={<UserIcon />}
                  type="text"
                  placeholder="Username"
                  field={username}
                  onChange={(v) => setUsername((p) => ({ ...p, value: v, error: p.touched ? validateUsername(v) : "" }))}
                  onBlur={() => touch(setUsername, validateUsername, username.value)}
                />

                <FormField
                  icon={<MailIcon />}
                  type="email"
                  placeholder="Email address"
                  field={email}
                  onChange={(v) => setEmail((p) => ({ ...p, value: v, error: p.touched ? validateEmail(v) : "" }))}
                  onBlur={() => touch(setEmail, validateEmail, email.value)}
                />

                <div>
                  <FormField
                    icon={<LockIcon />}
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    field={password}
                    onChange={(v) => setPassword((p) => ({ ...p, value: v, error: p.touched ? validatePassword(v) : "" }))}
                    onBlur={() => touch(setPassword, validatePassword, password.value)}
                    suffix={
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        style={{ background: "none", border: "none", cursor: "pointer", color: "#c0a0a0", padding: 0, display: "flex" }}
                      >
                        {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                      </button>
                    }
                  />

                  {/* Password strength meter */}
                  {password.value && (
                    <div style={{ marginTop: 8 }}>
                      <div style={{ display: "flex", gap: 4, marginBottom: 4 }}>
                        {[1, 2, 3].map((i) => (
                          <div key={i} style={{
                            flex: 1, height: 3, borderRadius: 4,
                            background: i <= strength.score ? strength.color : "#ede0e0",
                            transition: "background 0.3s",
                          }} />
                        ))}
                      </div>
                      <p style={{ margin: 0, fontSize: "0.72rem", color: strength.color, fontWeight: 600 }}>
                        {strength.label} password
                      </p>
                    </div>
                  )}
                </div>

                {/* Terms */}
                <label style={{ display: "flex", alignItems: "flex-start", gap: 8, cursor: "pointer", marginTop: 2 }}>
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => { setAgreed(e.target.checked); setAgreedError(false); }}
                    style={{ marginTop: 2, accentColor: "#c0392b", flexShrink: 0 }}
                  />
                  <span style={{ fontSize: "0.78rem", color: "#9a7070", lineHeight: 1.5 }}>
                    I agree to the{" "}
                    {/* MANUAL STEP: Update href to your Terms of Service page */}
                    <a href="/terms" style={{ color: "#c0392b", textDecoration: "underline" }}>Terms of Service</a>
                    {" "}and{" "}
                    {/* MANUAL STEP: Update href to your Privacy Policy page */}
                    <a href="/privacy" style={{ color: "#c0392b", textDecoration: "underline" }}>Privacy Policy</a>
                  </span>
                </label>
                {agreedError && (
                  <p style={{ margin: "-4px 0 0 4px", fontSize: "0.75rem", color: "#e05555" }}>
                    Please accept the terms to continue
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  style={{
                    marginTop: 6,
                    width: "100%",
                    padding: "13px 0",
                    borderRadius: 10,
                    border: "none",
                    background: "linear-gradient(135deg, #c0392b, #e05555)",
                    color: "#fff",
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    cursor: "pointer",
                    letterSpacing: "0.02em",
                    fontFamily: "inherit",
                    transition: "opacity 0.15s, transform 0.1s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.92")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                  onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.98)")}
                  onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                  Create free account
                </button>
              </form>
            </>
          )}
        </div>

      </div>
    </div>
  );
}
