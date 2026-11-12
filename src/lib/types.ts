// src/lib/types.ts

export type ShoppingMission = {
  missionId: string;
  goal: string;
  purpose: string;
  maxBudget: number;
  deadline: string;
  autoBuy: boolean;
};

export type CandidateProduct = {
  id: string;
  name: string;
  platform: string;
  price: number;
  seller: string;
  rating: number;
  shippingDays: number;
  isAllowedSeller: boolean;
  image: string;
};

export type TrustScore = {
  overallScore: number;
  level: "Advisor" | "Assisted Buyer" | "Autonomous Buyer";
  dynamicLimit: number;
  budgetDiscipline: number;
  sellerLoyalty: number;
  timingAccuracy: number;
};

export type GateResult = {
  gateName:
    | "Constitution (Budget)"
    | "Dynamic Limit"
    | "Seller Trust"
    | "Delivery Time";
  passed: boolean;
  reason: string;
};

export type SpendProofCertificate = {
  proofId: string;
  timestamp: string;
  mission: ShoppingMission;
  product: CandidateProduct;
  gateResults: GateResult[];
  hash: string;
  signature: string;
};
