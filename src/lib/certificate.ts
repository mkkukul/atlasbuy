// src/lib/certificate.ts
import crypto from "crypto";
import {
  ShoppingMission,
  CandidateProduct,
  GateResult,
  SpendProofCertificate,
} from "./types";

export function generateSpendProof(
  mission: ShoppingMission,
  product: CandidateProduct,
  gates: GateResult[],
): SpendProofCertificate {
  const proofId = "PRF-" + crypto.randomBytes(4).toString("hex").toUpperCase();
  const timestamp = new Date().toISOString();

  // Sertifika içeriğini (payload) oluşturuyoruz
  const payload = {
    proofId,
    missionId: mission.missionId,
    productId: product.id,
    price: product.price,
    gatesPassed: gates.map((g) => `${g.gateName}:${g.passed}`).join("|"),
  };

  // 1. Mevcut İşlemin SHA-256 Hash'ini oluştur
  const hash = crypto
    .createHash("sha256")
    .update(JSON.stringify(payload))
    .digest("hex");

  // 2. Dijital İmza (HMAC) oluştur
  const signature = crypto
    .createHmac("sha256", "ATLASBUY_SECRET_KEY")
    .update(hash)
    .digest("hex");

  return {
    proofId,
    timestamp,
    mission,
    product,
    gateResults: gates,
    hash,
    signature,
  };
}
