export type IconName =
  | "arrow"
  | "brochure"
  | "location"
  | "mail"
  | "measure"
  | "phone"
  | "specs"
  | "switch";

const iconGlyphs: Record<IconName, string> = {
  arrow: "→",
  brochure: "▤",
  location: "⌖",
  mail: "@",
  measure: "◎",
  phone: "⌁",
  specs: "☷",
  switch: "⇄",
};

export function Icon({ name, className = "" }: { name: IconName; className?: string }) {
  return (
    <span className={`ui-icon ui-icon--${name}${className ? ` ${className}` : ""}`} aria-hidden="true">
      {iconGlyphs[name]}
    </span>
  );
}
