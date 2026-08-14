/** Small uppercase label that introduces a page section. */
export function SectionLabel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={`uppercase text-label tracking-wider text-faint font-normal mb-5 ${className}`}>{children}</h2>
  );
}

/** Rule-underlined heading that divides a page into named groups. */
export function CategoryHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-title text-silver mt-0 mb-7.5 pb-3.75 border-b border-rule-strong font-medium tracking-[0.5px]">
      {children}
    </h3>
  );
}
