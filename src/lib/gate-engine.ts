// src/lib/gate-engine.ts
import {
  ShoppingMission,
  CandidateProduct,
  GateResult,
  TrustScore,
} from "./types";

export function evaluateConstitution(
  mission: ShoppingMission,
  product: CandidateProduct,
  trust: TrustScore,
): GateResult[] {
  const results: GateResult[] = [];

  // 1. Kapı: Bütçe (Mission Budget)
  if (product.price <= mission.maxBudget) {
    results.push({
      gateName: "Constitution (Budget)",
      passed: true,
      reason: `Price ($${product.price}) is within mission budget ($${mission.maxBudget}).`,
    });
  } else {
    results.push({
      gateName: "Constitution (Budget)",
      passed: false,
      reason: `Price ($${product.price}) exceeds mission budget ($${mission.maxBudget}).`,
    });
  }

  // 2. Kapı: AI Findeks Dinamik Limiti
  if (product.price <= trust.dynamicLimit) {
    results.push({
      gateName: "Dynamic Limit",
      passed: true,
      reason: `Price is within AI's current trust limit ($${trust.dynamicLimit}).`,
    });
  } else {
    results.push({
      gateName: "Dynamic Limit",
      passed: false,
      reason: `Price ($${product.price}) exceeds AI's trust limit ($${trust.dynamicLimit}). AI needs a higher score.`,
    });
  }

  // 3. Kapı: Satıcı Güvenliği
  if (product.isAllowedSeller) {
    results.push({
      gateName: "Seller Trust",
      passed: true,
      reason: `${product.seller} is a verified and safe seller.`,
    });
  } else {
    results.push({
      gateName: "Seller Trust",
      passed: false,
      reason: `${product.seller} is flagged as untrusted/scam.`,
    });
  }

  // 4. Kapı: Teslimat (Deadline Kontrolü)
  if (product.shippingDays <= 1) {
    results.push({
      gateName: "Delivery Time",
      passed: true,
      reason: `Fast delivery (${product.shippingDays} day) meets the deadline.`,
    });
  } else {
    results.push({
      gateName: "Delivery Time",
      passed: false,
      reason: `Delivery takes ${product.shippingDays} days. Too slow for the mission deadline.`,
    });
  }

  return results;
}

export function isConstitutionPassed(results: GateResult[]): boolean {
  return results.every((r) => r.passed);
}
