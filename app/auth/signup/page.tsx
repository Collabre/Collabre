"use client";

import { useState } from "react";
import Link from "next/link";
import { AuthLayout } from "@/components/auth-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sparkles, Megaphone, Briefcase, User, Mail, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

export default function RegisterPage() {
  const [role, setRole] = useState<"influencer" | "business" | null>(null);

  const decorativeSideElements = (
    <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl space-y-6">
      <h1 className="text-4xl font-bold text-gray-900 leading-tight">
        Start Your Journey Today
      </h1>
      <p className="text-gray-600">
        Whether you're an influencer or a business, create meaningful connections
        that drive real results.
      </p>

      <div className="space-y-4 mt-8">
        <div className="p-4 bg-orange-50 border border-orange-100 rounded-xl space-y-2">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-orange-500 rounded-lg text-white">
              <Megaphone size={18} />
            </div>
            <h3 className="font-bold text-gray-900">For Influencers</h3>
          </div>
          <p className="text-sm text-gray-600 pl-11">
            Showcase your reach, connect with brands, and monetize your influence
          </p>
        </div>

        <div className="p-4 bg-red-50 border border-red-100 rounded-xl space-y-2">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[var(--color-primary)] rounded-lg text-white">
              <Briefcase size={18} />
            </div>
            <h3 className="font-bold text-gray-900">For Businesses</h3>
          </div>
          <p className="text-sm text-gray-600 pl-11">
            Find the perfect influencers, launch campaigns, and grow your brand
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <AuthLayout sideElements={decorativeSideElements} imageOnRight={false}>
      <div className="flex flex-col items-center justify-center space-y-6 w-full max-h-screen overflow-y-auto py-8">
        {/* Logo Icon */}
        <div className="p-3 bg-[var(--color-primary)] rounded-xl text-white shadow-lg mx-auto">
          <Sparkles size={32} />
        </div>

        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-[var(--color-primary)]">
            Create Account
          </h2>
          <p className="text-sm text-gray-500">
            Join thousands of influencers and businesses
          </p>
        </div>

        <form className="space-y-4 w-full">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-xs font-semibold text-gray-700">
              Full Name
            </Label>
            <div className="relative">
              <span className="absolute left-3 top-2.5 text-gray-400">
                <User size={16} />
              </span>
              <Input id="name" type="text" placeholder="John Doe" className="pl-10" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-xs font-semibold text-gray-700">
              Email
            </Label>
            <div className="relative">
              <span className="absolute left-3 top-2.5 text-gray-400">
                <Mail size={16} />
              </span>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                className="pl-10"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="password"
              className="text-xs font-semibold text-gray-700"
            >
              Password
            </Label>
            <div className="relative">
              <span className="absolute left-3 top-2.5 text-gray-400">
                <Lock size={16} />
              </span>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="pl-10"
              />
            </div>
            <p className="text-[10px] text-gray-400">Must be at least 8 characters</p>
          </div>

          <div className="space-y-3 pt-2">
            <Label className="text-xs font-semibold text-gray-700">
              I am a...
            </Label>
            
            <div 
              className={cn(
                "flex items-center gap-4 p-3 rounded-xl border-2 cursor-pointer transition-all",
                role === "influencer" ? "border-orange-500 bg-orange-50" : "border-gray-100 hover:border-gray-200"
              )}
              onClick={() => setRole("influencer")}
            >
              <div className={cn("w-4 h-4 rounded-full border-2 flex items-center justify-center", role === "influencer" ? "border-orange-500" : "border-gray-300")}>
                {role === "influencer" && <div className="w-2 h-2 bg-orange-500 rounded-full" />}
              </div>
              <div className="p-2 bg-orange-500 text-white rounded-lg">
                <Megaphone size={16} />
              </div>
              <div>
                <div className="font-bold text-sm text-gray-900">Influencer / Creator</div>
                <div className="text-xs text-gray-500">Build partnerships with brands</div>
              </div>
            </div>

            <div 
              className={cn(
                "flex items-center gap-4 p-3 rounded-xl border-2 cursor-pointer transition-all",
                role === "business" ? "border-[var(--color-primary)] bg-red-50" : "border-gray-100 hover:border-gray-200"
              )}
              onClick={() => setRole("business")}
            >
              <div className={cn("w-4 h-4 rounded-full border-2 flex items-center justify-center", role === "business" ? "border-[var(--color-primary)]" : "border-gray-300")}>
                {role === "business" && <div className="w-2 h-2 bg-[var(--color-primary)] rounded-full" />}
              </div>
              <div className="p-2 bg-[var(--color-primary)] text-white rounded-lg">
                <Briefcase size={16} />
              </div>
              <div>
                <div className="font-bold text-sm text-gray-900">Business / Brand</div>
                <div className="text-xs text-gray-500">Connect with influencers</div>
              </div>
            </div>
          </div>

          <Button type="submit" className="w-full font-bold pt-6 pb-6 text-md mt-6">
            Create Account &rarr;
          </Button>

          <p className="text-center text-[10px] text-gray-400 py-2">
            By creating an account, you agree to our Terms of Service and Privacy Policy
          </p>

          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-gray-400">
                Or continue with
              </span>
            </div>
          </div>

          <Button variant="outline" type="button" className="w-full font-semibold pt-6 pb-6">
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Sign up with Google
          </Button>

          <div className="text-center text-xs text-gray-500 pt-4">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-[var(--color-primary)] font-semibold hover:underline">
              Sign In
            </Link>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
}
