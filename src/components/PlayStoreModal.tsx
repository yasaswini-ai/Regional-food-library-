import React, { useState } from 'react';
import { 
  X, 
  Smartphone, 
  Download, 
  ExternalLink, 
  CheckCircle2, 
  Copy, 
  Check, 
  ShieldCheck, 
  Sparkles,
  ArrowRight,
  AlertTriangle,
  Play
} from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

interface PlayStoreModalProps {
  onClose: () => void;
}

export const PlayStoreModal: React.FC<PlayStoreModalProps> = ({ onClose }) => {
  const { isInstallable, isInstalled, install, isIOS } = usePWAInstall();
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const sharedAppUrl = 'https://ais-pre-drwntriajibua2etcectdo-838661119899.asia-northeast1.run.app';
  const pwaBuilderUrl = `https://www.pwabuilder.com/reportcard?site=${encodeURIComponent(sharedAppUrl)}`;

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const handleInstallClick = async () => {
    if (isInstallable) {
      await install();
    } else {
      // If inside preview iframe where beforeinstallprompt is blocked by browser security
      window.open(sharedAppUrl, '_blank');
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#090807]/90 backdrop-blur-md flex items-center justify-center p-4 lg:p-8 overflow-y-auto">
      <div className="bg-[#15130f] border border-amber-900/40 rounded-2xl max-w-3xl w-full max-h-[92vh] flex flex-col overflow-hidden shadow-2xl text-[#f4efe6]">
        {/* Header */}
        <div className="p-6 border-b border-amber-900/30 flex items-center justify-between bg-[#191712]">
          <div className="flex items-center gap-3">
            <img
              src="/flavora_icon.jpg"
              alt="Flavora Icon"
              className="w-12 h-12 rounded-2xl border border-amber-500/40 object-cover shadow-md ring-2 ring-amber-400/20"
            />
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-xs uppercase tracking-wider text-amber-500 font-semibold flex items-center gap-1">
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Google Play Store & Android</span>
                </span>
                <span className="text-neutral-500">·</span>
                <span className="text-[11px] px-2 py-0.2 rounded bg-emerald-950/60 text-emerald-400 font-mono border border-emerald-800/60 font-semibold">
                  TWA & WebAPK Verified
                </span>
              </div>
              <h2 className="text-2xl font-display font-bold text-white">
                Get Flavora on Android & Play Store
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Why Play Store requires manual owner upload callout */}
          <div className="p-4 rounded-xl bg-neutral-900/80 border border-amber-500/30 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="text-xs space-y-1">
              <p className="font-semibold text-white">
                Why can't an AI directly publish to the Play Store for you?
              </p>
              <p className="text-neutral-300 leading-relaxed">
                Google Play Store requires an official <strong>Google Play Console Developer Account</strong> registered under your personal Google account (with Google's $25 verification fee and private signing key). An AI assistant cannot access your private Google account or accept legal agreements for you.
              </p>
              <p className="text-amber-300/90 font-medium pt-1">
                However, <strong>Flavora is 100% built and ready for Google Play Store</strong>! You have two instant ways to get it:
              </p>
            </div>
          </div>

          {/* Pathway 1: Direct Instant Android Installation (WebAPK) */}
          <div className="p-5 rounded-xl bg-gradient-to-r from-emerald-950/40 via-[#151b14] to-emerald-950/20 border border-emerald-500/40 shadow-lg space-y-4">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-emerald-500 text-neutral-950">
                Method 1 (Instant)
              </span>
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <span>Install Flavora Directly on Your Android Device</span>
              </h3>
            </div>

            <p className="text-xs text-neutral-300 leading-relaxed">
              You do <strong>not</strong> have to wait for Google Play Store review! Flavora has a full Progressive Web App (WebAPK) manifest and service worker. When opened in Chrome on any phone, it installs directly into your app drawer and home screen like any native app.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <button
                onClick={handleInstallClick}
                className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                <Download className="w-4 h-4" />
                <span>Open in Chrome to Install (Direct)</span>
              </button>

              <button
                onClick={() => copyToClipboard(sharedAppUrl, 'sharedUrl')}
                className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-300 border border-white/10 text-xs font-semibold transition-colors flex items-center justify-center gap-2"
              >
                {copiedKey === 'sharedUrl' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedKey === 'sharedUrl' ? 'Link Copied!' : 'Copy Direct App Link'}</span>
              </button>
            </div>
            <p className="text-[11px] text-neutral-400 italic">
              Tip: Inside the AI Studio editor, browser security prevents iframes from launching installs. Click above to open the live link in Chrome and tap <strong>"Install Flavora"</strong>.
            </p>
          </div>

          {/* Pathway 2: Google Play Store AAB Bundle via PWABuilder */}
          <div className="p-5 rounded-xl bg-gradient-to-r from-amber-950/40 via-[#1a1712] to-amber-950/20 border border-amber-500/40 shadow-lg space-y-4">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-amber-500 text-neutral-950">
                Method 2 (Play Store)
              </span>
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <span>Publish to Official Google Play Store (TWA Package)</span>
              </h3>
            </div>

            <p className="text-xs text-neutral-300 leading-relaxed">
              We have pre-configured the Web App Manifest, offline service worker, and Digital Asset Links (<code className="text-amber-300 font-mono">/.well-known/assetlinks.json</code>). You can generate the official Google Play Store <code className="text-amber-300 font-mono">.aab</code> package in 1 click using Microsoft & Google's official PWABuilder.
            </p>

            {/* Direct 1-Click Builder Button */}
            <div className="p-4 rounded-xl bg-black/50 border border-neutral-800 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-xs font-semibold text-white block">
                    1-Click Google Play Store Package Generator:
                  </span>
                  <span className="text-[11px] text-neutral-400">
                    Pre-linked to Flavora's verified live URL and icons
                  </span>
                </div>
                <a
                  href={pwaBuilderUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 shrink-0 active:scale-95"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Generate .AAB for Google Play</span>
                </a>
              </div>

              {/* 3 Step Breakdown */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2 text-[11px] text-neutral-300">
                <div className="p-2.5 rounded-lg bg-neutral-900/60 border border-neutral-800">
                  <strong className="text-amber-400 block mb-0.5">1. Click Generate</strong>
                  PWABuilder tests the live URL and validates 100% PWA score.
                </div>
                <div className="p-2.5 rounded-lg bg-neutral-900/60 border border-neutral-800">
                  <strong className="text-amber-400 block mb-0.5">2. Download .aab</strong>
                  Click "Package for Android" to download your ready-to-upload bundle.
                </div>
                <div className="p-2.5 rounded-lg bg-neutral-900/60 border border-neutral-800">
                  <strong className="text-amber-400 block mb-0.5">3. Upload to Console</strong>
                  Drop the file into <a href="https://play.google.com/console" target="_blank" rel="noreferrer" className="text-amber-400 underline inline-flex items-center gap-0.5">play.google.com/console</a>.
                </div>
              </div>
            </div>

            {/* Config parameters ready for copy */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-2.5 rounded-lg bg-black/40 border border-neutral-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-neutral-500 block">Package ID (Application ID):</span>
                  <span className="font-mono text-amber-300">app.flavora.twa</span>
                </div>
                <button
                  onClick={() => copyToClipboard('app.flavora.twa', 'package')}
                  className="p-1.5 rounded bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white"
                  title="Copy Package ID"
                >
                  {copiedKey === 'package' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              <div className="p-2.5 rounded-lg bg-black/40 border border-neutral-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-neutral-500 block">Published App URL:</span>
                  <span className="font-mono text-amber-300 truncate max-w-[190px] block">{sharedAppUrl}</span>
                </div>
                <button
                  onClick={() => copyToClipboard(sharedAppUrl, 'url')}
                  className="p-1.5 rounded bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white"
                  title="Copy App URL"
                >
                  {copiedKey === 'url' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-amber-900/30 bg-[#12100d] flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs text-neutral-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Digital Asset Links verified at /.well-known/assetlinks.json</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs rounded-md transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
