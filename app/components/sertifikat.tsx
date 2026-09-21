import { getSertifikat } from "@/lib/sertifikat";
import SertifikatList from "@/app/components/sertifikatlist";

export default function SertifikatSection() {
  const sertifikat = getSertifikat();
  return <SertifikatList items={sertifikat} />;
}