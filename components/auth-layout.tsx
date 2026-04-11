import { AnimatedBackground } from "./animated-background";

export function AuthLayout({
  children,
  sideElements,
  imageOnRight = true,
}: {
  children: React.ReactNode;
  sideElements: React.ReactNode;
  imageOnRight?: boolean;
}) {
  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row bg-white">
      {/* Form Section */}
      <div
        className={`w-full md:w-1/2 flex items-center justify-center p-8 lg:p-12 ${
          imageOnRight ? "order-1" : "order-2"
        }`}
      >
        <div className="w-full max-w-md mx-auto">{children}</div>
      </div>

      {/* Decorative/Background Section */}
      <div
        className={`w-full md:w-1/2 relative flex items-center justify-center p-8 lg:p-12 overflow-hidden bg-[var(--color-background-auth)] ${
          imageOnRight ? "order-2" : "order-1"
        }`}
      >
        <AnimatedBackground />
        
        {/* The Card or Decorative Content */}
        <div className="relative z-10 w-full max-w-md">
          {sideElements}
        </div>
      </div>
    </div>
  );
}
