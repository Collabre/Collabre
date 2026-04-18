"use client";

import { useState } from "react";
import { AuthLayout } from "@/components/auth-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Check, 
  User, 
  Camera, 
  Instagram, 
  Youtube, 
  Twitter, 
  ArrowRight, 
  ArrowLeft,
  Sparkles,
  Info,
  PartyPopper
} from "lucide-react";

const NICHES = [
  "Fashion", "Beauty", "Tech", "Food", 
  "Fitness", "Gaming", "Travel", "Lifestyle", 
  "Music", "Art", "Photography", "Sports",
  "Education", "Comedy", "Business", "Health"
];

export default function InfluencerOnboarding() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    niches: [] as string[],
    bio: "",
    country: "",
    language: "",
    rate: "",
    isNegotiable: false
  });

  const handleNext = () => setStep((s) => Math.min(4, s + 1));
  const handlePrev = () => setStep((s) => Math.max(1, s - 1));

  const toggleNiche = (niche: string) => {
    setFormData((prev) => ({
      ...prev,
      niches: prev.niches.includes(niche)
        ? prev.niches.filter((n) => n !== niche)
        : [...prev.niches, niche]
    }));
  };

  const sideElements = (
    <div className="bg-white/95 backdrop-blur-md p-8 sm:p-10 rounded-[2rem] shadow-xl space-y-6">
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
        Build Your Influencer <br />
        Profile
      </h1>
      <p className="text-gray-600 text-lg">
        Complete your profile to start connecting with brands and landing amazing collaboration opportunities.
      </p>

      <div className="space-y-5 mt-8">
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-orange-500 rounded-full text-white">
            <Check size={18} strokeWidth={3} />
          </div>
          <span className="text-lg text-gray-800">Showcase your unique style</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-orange-500 rounded-full text-white">
            <Check size={18} strokeWidth={3} />
          </div>
          <span className="text-lg text-gray-800">Connect social accounts</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-orange-500 rounded-full text-white">
            <Check size={18} strokeWidth={3} />
          </div>
          <span className="text-lg text-gray-800">Start collaborating today</span>
        </div>
      </div>
    </div>
  );

  return (
    <AuthLayout sideElements={sideElements} imageOnRight={false}>
      {step < 4 ? (
        <div className="w-full flex-col flex h-full justify-between max-w-[500px] mx-auto min-h-[600px] px-2 py-4">
          
          {/* Header Progress */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-[var(--color-primary)] rounded-xl text-white shadow-lg inline-block">
                <Sparkles size={24} />
              </div>
              <span className="text-sm font-medium text-gray-500">Step {step} of 4</span>
            </div>
            
            {/* Progress Bar Segments */}
            <div className="flex gap-2 w-full">
              {[1, 2, 3, 4].map((i) => (
                <div 
                  key={i} 
                  className={`h-1.5 flex-1 rounded-full ${i <= step ? 'bg-[var(--color-primary)]' : 'bg-gray-200'}`} 
                />
              ))}
            </div>
          </div>

          <div className="flex-1 overflow-y-auto pr-2 pb-8">
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-1">Create Your Profile</h2>
                  <p className="text-gray-500">Let's start with the basics</p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-xs font-semibold text-gray-700">Full Name *</Label>
                    <div className="relative">
                      <span className="absolute left-3 top-2.5 text-gray-400">
                        <User size={16} />
                      </span>
                      <Input
                        value={formData.fullName}
                        onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                        placeholder="Your full name"
                        className="pl-10 h-11 bg-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-xs font-semibold text-gray-700">Username *</Label>
                    <div className="relative">
                      <span className="absolute left-3 top-2.5 text-gray-400 font-medium">@</span>
                      <Input
                        value={formData.username}
                        onChange={(e) => setFormData({...formData, username: e.target.value})}
                        placeholder="username"
                        className="pl-10 h-11 bg-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-xs font-semibold text-gray-700">Profile Photo</Label>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="w-16 h-16 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center bg-gray-50 text-gray-400">
                        <Camera size={24} />
                      </div>
                      <Button variant="outline" className="font-semibold bg-white border-gray-200 text-gray-700">
                        <Camera size={16} className="mr-2" /> Upload Photo
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2 pb-2">
                    <Label className="text-xs font-semibold text-gray-700">Select Your Niches * (Choose at least one)</Label>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      {NICHES.map((niche) => {
                        const isSelected = formData.niches.includes(niche);
                        return (
                          <button
                            key={niche}
                            onClick={() => toggleNiche(niche)}
                            className={`flex items-center p-3 border rounded-xl text-sm font-medium transition-colors ${
                              isSelected 
                              ? "border-[var(--color-primary)] bg-orange-50 text-gray-900" 
                              : "border-gray-200 hover:border-gray-300 text-gray-600 bg-white"
                            }`}
                          >
                            <div className={`w-5 h-5 rounded flex items-center justify-center mr-3 ${
                              isSelected ? "bg-gray-900" : "bg-gray-100"
                            }`}>
                              {isSelected && <Check size={14} className="text-white" strokeWidth={3} />}
                            </div>
                            {niche}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-xs font-semibold text-gray-700">Bio * (160 characters max)</Label>
                    <textarea
                      value={formData.bio}
                      onChange={(e) => setFormData({...formData, bio: e.target.value.substring(0, 160)})}
                      placeholder="Tell brands about yourself..."
                      className="w-full min-h-[100px] p-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent resize-none bg-white"
                    />
                    <div className="text-xs text-gray-400 text-right">
                      {formData.bio.length}/160 characters
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-xs font-semibold text-gray-700">Country *</Label>
                      <select 
                        className="w-full h-11 px-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent bg-white appearance-none"
                        value={formData.country}
                        onChange={(e) => setFormData({...formData, country: e.target.value})}
                      >
                        <option value="">Select country</option>
                        <option value="US">United States</option>
                        <option value="UK">United Kingdom</option>
                        <option value="IN">India</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-xs font-semibold text-gray-700">Language *</Label>
                      <select 
                        className="w-full h-11 px-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent bg-white appearance-none"
                        value={formData.language}
                        onChange={(e) => setFormData({...formData, language: e.target.value})}
                      >
                        <option value="">Select language</option>
                        <option value="EN">English</option>
                        <option value="ES">Spanish</option>
                        <option value="BN">Bengali</option>
                        <option value="HI">Hindi</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-1">Connect Your Socials</h2>
                  <p className="text-gray-500">Link your social media to verify your reach and engagement</p>
                </div>
                
                <div className="space-y-4">
                  {/* Instagram */}
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-2xl bg-white shadow-sm">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 flex items-center justify-center bg-pink-50 text-pink-500 rounded-xl">
                        <Instagram size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">Instagram</h3>
                        <p className="text-xs text-gray-500 mt-0.5">Connect via Instagram Basic Display API</p>
                      </div>
                    </div>
                    <Button className="bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90 text-white font-semibold">
                      Connect
                    </Button>
                  </div>

                  {/* YouTube */}
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-2xl bg-white shadow-sm">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 flex items-center justify-center bg-red-50 text-red-500 rounded-xl">
                        <Youtube size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">YouTube</h3>
                        <p className="text-xs text-gray-500 mt-0.5">Connect via Google OAuth</p>
                      </div>
                    </div>
                    <Button className="bg-red-500 hover:bg-red-600 text-white font-semibold">
                      Connect
                    </Button>
                  </div>

                  {/* Twitter */}
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-2xl bg-white shadow-sm">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 flex items-center justify-center bg-blue-50 text-blue-500 rounded-xl">
                        <Twitter size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">Twitter / X</h3>
                        <p className="text-xs text-gray-500 mt-0.5">Optional - Connect to expand reach</p>
                      </div>
                    </div>
                    <Button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold">
                      Connect
                    </Button>
                  </div>

                  <div className="bg-orange-50 border border-orange-100 p-4 rounded-xl mt-6 flex gap-3 text-orange-800">
                    <Info size={20} className="flex-shrink-0 mt-0.5" />
                    <p className="text-sm">
                      <strong>Auto-pulled stats:</strong> When you connect your accounts, we'll automatically retrieve your follower count, engagement rate, and average views to showcase on your profile.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-1">Set Your Rates</h2>
                  <p className="text-gray-500">Let brands know your collaboration rates</p>
                </div>

                <div className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm space-y-6">
                  <div className="space-y-2">
                    <Label className="text-sm font-bold text-gray-900">Collaboration Rate Per Post/Video/Reel</Label>
                    <div className="relative mt-2">
                      <span className="absolute left-4 top-3.5 text-gray-400 font-medium text-lg">$</span>
                      <Input
                        type="number"
                        placeholder="10,000"
                        value={formData.rate}
                        onChange={(e) => setFormData({...formData, rate: e.target.value})}
                        className="pl-8 h-14 text-lg font-semibold bg-white border-gray-300 focus:border-[var(--color-primary)]"
                      />
                    </div>
                  </div>

                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className={`w-5 h-5 rounded border ${
                      formData.isNegotiable 
                        ? 'bg-[var(--color-primary)] border-[var(--color-primary)]' 
                        : 'bg-white border-gray-300 group-hover:border-[var(--color-primary)]'
                    } flex items-center justify-center transition-colors`}>
                      {formData.isNegotiable && <Check size={14} className="text-white" strokeWidth={3} />}
                    </div>
                    <input 
                      type="checkbox" 
                      className="hidden" 
                      checked={formData.isNegotiable}
                      onChange={() => setFormData({...formData, isNegotiable: !formData.isNegotiable})}
                    />
                    <span className="text-sm font-medium text-gray-700">Mark as negotiable</span>
                  </label>
                </div>

                <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl flex gap-3 text-blue-800">
                  <div className="flex-shrink-0 mt-0.5 text-blue-500"><Sparkles size={20} /></div>
                  <p className="text-sm">
                    <strong>Tip:</strong> Your rates can be adjusted for individual collaborations. Setting this helps brands filter and find influencers in their budget range.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Footer Navigation */}
          <div className="mt-auto pt-4 flex items-center justify-between border-t border-gray-100 bg-white">
            <Button
              variant="outline"
              onClick={handlePrev}
              disabled={step === 1}
              className={`font-semibold h-12 px-6 rounded-xl ${step === 1 ? 'invisible' : ''}`}
            >
              <ArrowLeft size={16} className="mr-2" /> Back
            </Button>
            
            <Button 
              onClick={() => {
                if(step === 3) {
                  // Handle save logic
                  localStorage.setItem('influencerOnboarding', JSON.stringify(formData));
                  setStep(4);
                } else {
                  handleNext();
                }
              }}
              className="font-bold h-12 px-8 rounded-xl bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90 text-white ml-auto"
            >
              {step === 3 ? (
                <>Complete Setup <Check size={18} className="ml-2" /></>
              ) : (
                <>Continue <ArrowRight size={18} className="ml-2" /></>
              )}
            </Button>
          </div>
        </div>
      ) : (
        <div className="w-full flex-col flex items-center justify-center h-full max-w-[500px] mx-auto min-h-[600px] px-6 text-center">
          <div className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6">
            <PartyPopper size={48} />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Your Profile is Live!</h2>
          <p className="text-lg text-gray-500 mb-8 max-w-sm">
            Everything is set up. You're now ready to connect with top brands and explore collaboration opportunities.
          </p>
          <div className="space-y-3 w-full max-w-sm">
            <Link href="/dashboard" className="w-full">
              <Button className="w-full h-14 text-lg font-bold bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90 text-white rounded-xl">
                Browse Brand Deals
              </Button>
            </Link>
            <Button variant="outline" className="w-full h-14 text-lg font-semibold rounded-xl text-gray-700">
              Complete Portfolio
            </Button>
          </div>
        </div>
      )}
    </AuthLayout>
  );
}
