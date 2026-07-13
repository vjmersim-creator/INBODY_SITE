export type IconName =
  | "arrow"
  | "brochure"
  | "location"
  | "mail"
  | "measure"
  | "phone"
  | "precision"
  | "results"
  | "specs"
  | "switch"
  | "time"
  | "weight";

const iconGlyphs: Record<IconName, string> = {
  arrow: "→",
  brochure: "▤",
  location: "⌖",
  mail: "@",
  measure: "◎",
  phone: "⌁",
  precision: "◈",
  results: "▦",
  specs: "☷",
  switch: "⇄",
  time: "◷",
  weight: "↕",
};

export function Icon({ name, className = "" }: { name: IconName; className?: string }) {
  return (
    <span className={`ui-icon ui-icon--${name}${className ? ` ${className}` : ""}`} aria-hidden="true">
      {iconGlyphs[name]}
    </span>
  );
}
