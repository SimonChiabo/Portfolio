import { Beaker } from 'lucide-react';

export default function SyntheticDataBadge() {
  return (
    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-100 text-amber-800 rounded-full text-xs font-semibold shadow-sm border border-amber-200">
      <Beaker size={14} className="text-amber-700" />
      Datos Sintéticos
    </div>
  );
}
