export default function ImpactStat({ value, size = 'default' }: { value: string, size?: 'sm' | 'default' | 'lg' }) {
  const sizeClasses = {
    sm: "text-lg",
    default: "text-2xl",
    lg: "text-4xl md:text-5xl"
  };

  return (
    <div className="flex flex-col">
      <span className="text-xs font-bold tracking-wider text-gray-500 uppercase mb-1">
        Impacto
      </span>
      <span className={`font-black text-gray-900 tracking-tight leading-none ${sizeClasses[size]}`}>
        {value}
      </span>
    </div>
  );
}
