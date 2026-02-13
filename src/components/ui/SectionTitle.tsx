export default function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-16 w-full text-center">
      <h2 className="text-5xl md:text-7xl font-black uppercase italic text-white tracking-tight">
        {title} {subtitle && <span className="text-[#15E49A]">{subtitle}</span>}
      </h2>
    </div>
  );
}
