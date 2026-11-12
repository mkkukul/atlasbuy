// src/app/api/process/route.ts
import { NextResponse } from "next/server";
import { evaluateConstitution, isConstitutionPassed } from "@/lib/gate-engine";
import { generateSpendProof } from "@/lib/certificate";
import { ShoppingMission, CandidateProduct, TrustScore } from "@/lib/types";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { mission, product, trust } = body;

    // 1. Alışveriş Anayasası Kapılarını Çalıştır
    const gates = evaluateConstitution(mission, product, trust);

    // 2. Kurallardan biri bile kırmızıysa işlemi REDDET
    if (!isConstitutionPassed(gates)) {
      return NextResponse.json(
        {
          status: "BLOCKED",
          message: "Shopping Constitution failed. Transaction aborted.",
          gates,
        },
        { status: 403 },
      );
    }

    // 3. Tüm kurallar yeşilse Sertifikayı Üret
    const certificate = generateSpendProof(mission, product, gates);

    // 4. Başarılı yanıtı dön
    return NextResponse.json({
      status: "AUTHORIZED",
      message: "Constitution passed. SpendProof generated successfully.",
      certificate,
    });
  } catch (error) {
    return NextResponse.json(
      { status: "ERROR", message: "Internal Server Error" },
      { status: 500 },
    );
  }
}
