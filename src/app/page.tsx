// src/app/page.tsx
"use client";

import React, { useState } from "react";
import { translations, Lang } from "@/lib/i18n";
import {
  ShieldCheck,
  ShieldAlert,
  CheckCircle2,
  XCircle,
  ShoppingCart,
  Globe,
  Star,
  Cpu,
  Scale,
  Activity,
  FileSignature,
  Lock,
} from "lucide-react";
import { motion } from "framer-motion";

const PRODUCTS = [
  {
    id: "prod_001",
    name: "Anker USB-C Hub 4-in-1",
    platform: "Amazon",
    price: 25.0,
    seller: "Amazon Official",
    rating: 4.9,
    shippingDays: 1,
    isAllowedSeller: true,
    image: "🔌",
  },
  {
    id: "prod_002",
    name: "Bulk USB-C Hub (Wholesale)",
    platform: "Alibaba",
    price: 15.0,
    seller: "Shenzhen Tech Co.",
    rating: 4.2,
    shippingDays: 14,
    isAllowedSeller: true,
    image: "📦",
  },
  {
    id: "prod_003",
    name: "Premium USB-C Hub 8-in-1",
    platform: "ScamStore",
    price: 10.0,
    seller: "UnknownSeller_99",
    rating: 2.1,
    shippingDays: 2,
    isAllowedSeller: false,
    image: "⚠️",
  },
];

export default function AtlasBuyMissionControl() {
  const [lang, setLang] = useState<Lang>("en");
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [agentChat, setAgentChat] = useState(false);

  const t = translations[lang];

  const mission = {
    missionId: "MSN-8091",
    goal: "3x USB-C Hub",
    purpose: "Urgent need for tomorrow's presentation",
    maxBudget: 50.0,
    deadline: "Tomorrow 09:00 AM",
    autoBuy: false,
  };
  const trustScore = {
    overallScore: 78,
    level: "Assisted Buyer",
    dynamicLimit: 100.0,
    budgetDiscipline: 85,
    sellerLoyalty: 90,
    timingAccuracy: 60,
  };

  const handleProcess = async (product: any) => {
    setSelectedProduct(product);
    setLoading(true);
    setResult(null);
    setAgentChat(false);
    setTimeout(() => setAgentChat(true), 1200);

    try {
      const res = await fetch("/api/process", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mission, product, trust: trustScore }),
      });
      const data = await res.json();
      setTimeout(() => {
        setResult(data);
        setLoading(false);
      }, 3500);
    } catch (error) {
      setResult({ status: "ERROR", message: "Failed to connect to API" });
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-indigo-500/30">
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-600/10 rounded-full blur-[120px]" />
      </div>

      <header className="relative z-10 border-b border-white/10 bg-black/40 backdrop-blur-md sticky top-0">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-indigo-500 rounded-lg shadow-[0_0_15px_rgba(99,102,241,0.5)]">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white tracking-tight">
                AtlasBuy <span className="text-indigo-400">AI</span>
              </h1>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-emerald-400" />{" "}
                {t.subtitle}
              </p>
            </div>
          </div>
          <select
            className="bg-slate-900 border border-slate-700 px-3 py-1.5 rounded-lg text-sm text-white focus:outline-none"
            onChange={(e) => setLang(e.target.value as Lang)}
            value={lang}
          >
            <option value="en">English</option>
            <option value="tr">Türkçe</option>
          </select>
        </div>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 backdrop-blur-sm">
                <h2 className="text-sm font-bold text-indigo-400 mb-4 flex items-center gap-2">
                  <Activity className="w-4 h-4" /> {t.mission}
                </h2>
                <div className="space-y-3 text-xs">
                  <div className="flex justify-between border-b border-slate-800 pb-2">
                    <span className="text-slate-500">Goal:</span>{" "}
                    <span className="text-white font-medium">
                      {mission.goal}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-2">
                    <span className="text-slate-500">{t.deadline}:</span>{" "}
                    <span className="text-rose-400 font-medium">
                      {mission.deadline}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">{t.budget}:</span>{" "}
                    <span className="text-emerald-400 font-bold text-sm">
                      ${mission.maxBudget.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 backdrop-blur-sm relative overflow-hidden">
                <h2 className="text-sm font-bold text-emerald-400 mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" /> {t.trustScore}
                </h2>
                <div className="flex items-end gap-2 mb-3">
                  <span className="text-4xl font-black text-white">
                    {trustScore.overallScore}
                  </span>
                  <span className="text-sm text-slate-500 mb-1">/ 100</span>
                </div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-400">{t.level}</span>
                  <span className="text-indigo-400 font-bold">
                    {trustScore.level}
                  </span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">{t.limit}</span>
                  <span className="text-emerald-400 font-bold">
                    ${trustScore.dynamicLimit.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">
                {t.products}
              </h3>
              <div className="space-y-3">
                {PRODUCTS.map((p) => (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    key={p.id}
                    className={`bg-slate-900/40 border border-slate-800 rounded-xl p-4 flex items-center justify-between hover:bg-slate-800/60 transition-all ${selectedProduct?.id === p.id ? "ring-1 ring-indigo-500" : ""}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-3xl bg-slate-800 p-2 rounded-lg">
                        {p.image}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="px-2 py-0.5 bg-slate-800 text-[10px] font-bold text-slate-300 rounded uppercase">
                            {p.platform}
                          </span>
                          <div className="flex items-center text-amber-400 text-[10px] font-bold">
                            <Star className="w-3 h-3 fill-current mr-1" />{" "}
                            {p.rating}
                          </div>
                        </div>
                        <h4 className="text-sm font-bold text-white">
                          {p.name}
                        </h4>
                        <p className="text-[11px] text-slate-500">
                          Seller: {p.seller} | {p.shippingDays} Days Delivery
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-black text-white mb-2">
                        ${p.price.toFixed(2)}
                      </p>
                      <button
                        onClick={() => handleProcess(p)}
                        className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-1.5 rounded-lg text-xs font-bold transition-colors flex items-center gap-1"
                      >
                        <ShoppingCart className="w-3 h-3" /> {t.verify}
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-[#0a0a0a] border border-slate-800 rounded-2xl h-full min-h-[600px] flex flex-col relative overflow-hidden shadow-2xl">
              <div className="h-12 border-b border-slate-800 bg-black/50 flex items-center justify-between px-4">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <Lock className="w-3 h-3 text-indigo-400" /> {t.terminal}
                </div>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                </div>
              </div>
              <div className="flex-1 p-6 flex flex-col relative overflow-y-auto">
                {!selectedProduct && (
                  <div className="h-full flex flex-col items-center justify-center text-slate-600 space-y-4">
                    <Cpu className="w-16 h-16 opacity-20" />
                    <p className="text-sm text-center">{t.awaiting}</p>
                  </div>
                )}
                {loading && !result && (
                  <div className="flex flex-col h-full justify-center space-y-6">
                    <div className="flex items-center gap-2 text-indigo-400 mb-2 font-mono text-sm">
                      <Activity className="w-4 h-4 animate-pulse" /> System
                      Analyzing...
                    </div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="bg-emerald-950/30 border border-emerald-900/50 p-3 rounded-xl rounded-tl-none w-4/5"
                    >
                      <span className="text-[10px] font-bold text-emerald-500 uppercase flex items-center gap-1">
                        <Cpu className="w-3 h-3" /> {t.buyerAgent}
                      </span>
                      <p className="text-xs text-slate-300 mt-1">
                        "This is a great deal! We should buy it immediately to
                        secure stock."
                      </p>
                    </motion.div>
                    {agentChat && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-rose-950/30 border border-rose-900/50 p-3 rounded-xl rounded-tr-none w-4/5 self-end"
                      >
                        <span className="text-[10px] font-bold text-rose-500 uppercase flex items-center gap-1">
                          <Scale className="w-3 h-3" /> {t.challengerAgent}
                        </span>
                        <p className="text-xs text-slate-300 mt-1">
                          "Wait. I am checking the delivery time and seller
                          trust against the Constitution. Do not authorize yet."
                        </p>
                      </motion.div>
                    )}
                  </div>
                )}
                {result && result.status === "BLOCKED" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="h-full flex flex-col"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-rose-500/20 rounded-lg border border-rose-500/30">
                        <ShieldAlert className="w-6 h-6 text-rose-500" />
                      </div>
                      <div>
                        <h2 className="text-lg font-bold text-white">
                          {t.blocked}
                        </h2>
                        <p className="text-xs text-rose-400">
                          Constitution rules prevented this purchase.
                        </p>
                      </div>
                    </div>
                    <div className="space-y-2 mb-6 flex-1">
                      {result.gates.map((g: any, i: number) => (
                        <div
                          key={i}
                          className={`p-3 rounded-lg border text-xs flex items-start gap-2 ${g.passed ? "bg-emerald-950/20 border-emerald-900/30 text-emerald-400" : "bg-rose-950/20 border-rose-900/30 text-rose-400"}`}
                        >
                          {g.passed ? (
                            <CheckCircle2 className="w-4 h-4 shrink-0" />
                          ) : (
                            <XCircle className="w-4 h-4 shrink-0" />
                          )}
                          <div>
                            <span className="font-bold">{g.gateName}</span>
                            <p className="mt-0.5 text-slate-400">{g.reason}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="bg-slate-900/50 border border-slate-800 p-3 rounded-lg text-center mt-auto">
                      <p className="text-[10px] text-slate-500 font-mono">
                        🛑 API blocked the transaction. No funds were touched.
                      </p>
                    </div>
                  </motion.div>
                )}
                {result && result.status === "AUTHORIZED" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="h-full flex flex-col"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-emerald-500/20 rounded-lg border border-emerald-500/30">
                        <ShieldCheck className="w-6 h-6 text-emerald-500" />
                      </div>
                      <div>
                        <h2 className="text-lg font-bold text-white">
                          {t.authorized}
                        </h2>
                        <p className="text-xs text-emerald-400">
                          Constitution passed.
                        </p>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-indigo-950/40 to-slate-900 border border-indigo-500/30 rounded-xl p-4 relative overflow-hidden flex-1 mb-4">
                      <div className="flex items-center gap-2 mb-4">
                        <FileSignature className="w-4 h-4 text-indigo-400" />
                        <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                          {t.proof}
                        </h3>
                      </div>
                      <div className="space-y-3 text-[10px] font-mono relative z-10">
                        <div>
                          <p className="text-slate-500 mb-0.5">PROOF_ID</p>
                          <p className="text-white break-all">
                            {result.certificate.proofId}
                          </p>
                        </div>
                        <div>
                          <p className="text-slate-500 mb-0.5">
                            {t.amount.toUpperCase()}
                          </p>
                          <p className="text-emerald-400 font-bold text-sm">
                            ${result.certificate.product.price.toFixed(2)}
                          </p>
                        </div>
                        <div>
                          <p className="text-slate-500 mb-0.5">
                            {t.hash.toUpperCase()}
                          </p>
                          <p className="text-indigo-300 break-all bg-indigo-500/10 p-1.5 rounded border border-indigo-500/20">
                            {result.certificate.hash}
                          </p>
                        </div>
                        <div>
                          <p className="text-slate-500 mb-0.5">
                            {t.signature.toUpperCase()}
                          </p>
                          <p className="text-slate-400 break-all">
                            {result.certificate.signature}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
