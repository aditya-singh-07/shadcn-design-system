/** Parse any CSS color string to #rrggbb for `<input type="color">`. */
export function cssColorToHex(color: string): string {
  const trimmed = color.trim();
  if (/^#[0-9a-f]{6}$/i.test(trimmed)) {
    return trimmed.toLowerCase();
  }
  if (/^#[0-9a-f]{3}$/i.test(trimmed)) {
    const h = trimmed.slice(1);
    return `#${h[0]}${h[0]}${h[1]}${h[1]}${h[2]}${h[2]}`.toLowerCase();
  }

  if (typeof document === "undefined") {
    return "#808080";
  }

  const probe = document.createElement("span");
  probe.style.color = trimmed;
  probe.style.display = "none";
  document.body.appendChild(probe);
  const computed = getComputedStyle(probe).color;
  document.body.removeChild(probe);

  const match = computed.match(
    /^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/i,
  );
  if (!match) {
    return "#808080";
  }

  const [, r, g, b] = match;
  return `#${[r, g, b]
    .map((n) => Number(n).toString(16).padStart(2, "0"))
    .join("")}`;
}