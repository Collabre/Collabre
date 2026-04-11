import Link from "next/link";
import { AuthLayout } from "@/components/auth-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sparkles, CheckCircle2, ShieldCheck, MessageSquare } from "lucide-react";

export default function LoginPage() {
  const decorativeSideElements = (
    <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl space-y-6">
      <h1 className="text-4xl font-bold text-gray-900 leading-tight">
        Connect. Collaborate. <br />
        Grow.
      </h1>
      <p className="text-gray-600">
        Join the premier network where influencers meet businesses and
        opportunities become partnerships.
      </p>

      <div className="space-y-4 mt-8">
        <div className="flex items-start gap-4">
          <div className="p-2 bg-orange-100 rounded-lg text-[var(--color-primary)]">
            <CheckCircle2 size={24} />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Verified Profiles</h3>
            <p className="text-sm text-gray-500">
              Connect with authentic influencers and trusted businesses
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="p-2 bg-red-100 rounded-lg text-red-500">
            <Sparkles size={24} />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Smart Matching</h3>
            <p className="text-sm text-gray-500">
              AI-powered recommendations for perfect collaborations
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="p-2 bg-yellow-100 rounded-lg text-yellow-600">
            <ShieldCheck size={24} />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Secure Messaging</h3>
            <p className="text-sm text-gray-500">
              Professional communication tools built for collaboration
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <AuthLayout sideElements={decorativeSideElements} imageOnRight={true}>
      <div className="flex flex-col items-center justify-center space-y-8 w-full">
        {/* Logo Icon */}
        <div className="p-3 bg-[var(--color-primary)] rounded-xl text-white shadow-lg">
          <Sparkles size={32} />
        </div>

        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-[var(--color-primary)]">
            Welcome Back
          </h2>
          <p className="text-sm text-gray-500">
            Sign in to connect with influencers and businesses
          </p>
        </div>

        <form className="space-y-4 w-full">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-xs font-semibold text-gray-700">
              Email
            </Label>
            <div className="relative">
              <span className="absolute left-3 top-2.5 text-gray-400">
                <MessageSquare size={16} />
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
            <div className="flex items-center justify-between">
              <Label
                htmlFor="password"
                className="text-xs font-semibold text-gray-700"
              >
                Password
              </Label>
              <Link
                href="#"
                className="text-xs text-[var(--color-primary)] hover:underline"
              >
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <span className="absolute left-3 top-2.5 text-gray-400">
                <ShieldCheck size={16} />
              </span>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="pl-10"
              />
            </div>
          </div>

          <Button type="submit" className="w-full font-bold pt-6 pb-6 text-md mt-6">
            Sign In &rarr;
          </Button>

          <div className="relative my-6">
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
            Sign in with Google
          </Button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-100" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-white px-2 text-gray-400">
                New to the platform?
              </span>
            </div>
          </div>

          <Link href="/auth/signup">
            <Button
              variant="outline"
              className="w-full text-[var(--color-primary)] font-semibold border-gray-200 pt-6 pb-6"
            >
              Create an Account
            </Button>
          </Link>
        </form>
      </div>
    </AuthLayout>
  );
}
