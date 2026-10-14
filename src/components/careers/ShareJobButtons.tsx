"use client";

import { useState } from "react";
import { Copy, Check, Share2, Linkedin, Twitter, Mail } from "lucide-react";

interface ShareJobButtonsProps {
  title: string;
  url?: string;
}

export default function ShareJobButtons({ title, url }: ShareJobButtonsProps) {
  const [copied, setCopied] = useState(false);

  const currentUrl = typeof window !== "undefined" ? (url || window.location.href) : "";

  const handleCopy = async () => {
    if (typeof window !== "undefined") {
      try {
        await navigator.clipboard.writeText(currentUrl || window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      } catch (err) {
        console.error("Failed to copy link", err);
      }
    }
  };

  const shareToLinkedIn = () => {
    const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;
    window.open(shareUrl, "_blank", "noopener,noreferrer");
  };

  const shareToTwitter = () => {
    const text = `We're hiring: ${title} at Lydia Painting LLC! Apply here:`;
    const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(currentUrl)}`;
    window.open(shareUrl, "_blank", "noopener,noreferrer");
  };

  const shareToEmail = () => {
    const subject = `Job Opportunity: ${title} at Lydia Painting LLC`;
    const body = `Hi,\n\nI thought you might be interested in this open position at Lydia Painting LLC:\n\n${title}\n${currentUrl}\n\nCheck it out!`;
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
      <h4 className="font-heading font-bold text-base text-brand-navy mb-3 flex items-center gap-2">
        <Share2 className="w-4 h-4 text-brand-orange" />
        Share This Position
      </h4>
      <p className="text-xs text-slate-500 font-sans mb-4">
        Know someone qualified for this role? Share it directly with your network.
      </p>

      <div className="flex flex-wrap items-center gap-2">
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 transition-colors"
          title="Copy link to clipboard"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
          <span>{copied ? "Link Copied!" : "Copy Link"}</span>
        </button>

        <button
          onClick={shareToLinkedIn}
          className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg bg-[#0077b5]/10 text-[#0077b5] hover:bg-[#0077b5]/20 transition-colors"
          title="Share on LinkedIn"
        >
          <Linkedin className="w-3.5 h-3.5" />
          <span>LinkedIn</span>
        </button>

        <button
          onClick={shareToTwitter}
          className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg bg-slate-900/10 text-slate-900 hover:bg-slate-900/20 transition-colors"
          title="Share on X"
        >
          <Twitter className="w-3.5 h-3.5" />
          <span>Post</span>
        </button>

        <button
          onClick={shareToEmail}
          className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg bg-brand-orange/10 text-brand-orange hover:bg-brand-orange/20 transition-colors"
          title="Share via Email"
        >
          <Mail className="w-3.5 h-3.5" />
          <span>Email</span>
        </button>
      </div>
    </div>
  );
}
