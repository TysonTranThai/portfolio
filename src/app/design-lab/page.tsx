import type { Metadata } from "next";
import { DesignLabExplorer } from "@/components/design-lab/DesignLabExplorer";

export const metadata: Metadata = {
  title: "Design Exploration Studio · Tyson Tran Brand Identity",
  description:
    "Interactive Phase 1 Design Studio exploring 6 distinct visual design systems (Apple Product, Liquid Glass, Editorial, Dark AI Lab, Soft Premium, Tyson Signature) for Tyson Tran's personal brand.",
};

export default function DesignLabPage() {
  return (
    <div className="pt-20 pb-28">
      <DesignLabExplorer />
    </div>
  );
}
