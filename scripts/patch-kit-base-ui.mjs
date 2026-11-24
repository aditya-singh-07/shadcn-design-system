#!/usr/bin/env node
/**
 * Base UI: accordion variants 2/4/6/7 ship with radix-ui triggers in the kit registry.
 * Re-map to AccordionTrigger + group-aria-expanded selectors (base-nova).
 */
import fs from "node:fs";
import path from "node:path";

const targets = {
  "accordion2.tsx": {
    trigger:
      'className="focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-center justify-between gap-4 rounded-none border-none p-4 px-0 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 **:data-[slot=accordion-trigger-icon]:hidden [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 group-aria-expanded/accordion-trigger:[&>svg]:rotate-180 group-aria-expanded/accordion-trigger:[&>svg>path:last-child]:rotate-90 group-aria-expanded/accordion-trigger:[&>svg>path:last-child]:opacity-0"',
  },
  "accordion4.tsx": {
    trigger:
      'className="focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-center gap-3 rounded-md border-none py-4 text-left text-sm leading-6 font-medium transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 **:data-[slot=accordion-trigger-icon]:hidden [&>svg]:-order-1 [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 group-aria-expanded/accordion-trigger:[&>svg]:rotate-180 group-aria-expanded/accordion-trigger:[&>svg>path:last-child]:rotate-90 group-aria-expanded/accordion-trigger:[&>svg>path:last-child]:opacity-0"',
  },
  "accordion6.tsx": {
    trigger:
      'className="focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-center justify-between rounded-md border-none py-4 text-left text-sm font-semibold transition-all outline-none focus-visible:ring-[3px] **:data-[slot=accordion-trigger-icon]:hidden group-aria-expanded/accordion-trigger:[&>svg]:rotate-180"',
  },
  "accordion7.tsx": {
    trigger:
      'className="focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-center justify-between rounded-md border-none py-4 text-left text-sm font-medium transition-all outline-none focus-visible:ring-[3px] **:data-[slot=accordion-trigger-icon]:hidden group-aria-expanded/accordion-trigger:[&>svg]:rotate-180"',
  },
};

const blockRe =
  /<AccordionPrimitive\.Header[^]*?<\/AccordionPrimitive\.Header>\s*/g;

for (const [file, { trigger }] of Object.entries(targets)) {
  const p = path.join(process.cwd(), "examples/components/accordion", file);
  if (!fs.existsSync(p)) continue;
  let src = fs.readFileSync(p, "utf8");
  if (!src.includes("AccordionPrimitive") && !src.includes("radix-ui")) {
    if (src.includes("AccordionTrigger") && src.includes("group-aria-expanded")) {
      continue;
    }
  }

  src = src.replace(
    /import \{ Accordion as AccordionPrimitive \} from "radix-ui";\n\n/,
    "",
  );
  src = src.replace(
    /import \{\s*Accordion,\s*AccordionContent,\s*AccordionItem,\s*\}/,
    "import {\n  Accordion,\n  AccordionContent,\n  AccordionItem,\n  AccordionTrigger,\n}",
  );
  src = src.replace(/\s*AccordionTrigger,\s*AccordionTrigger,/g, "\n  AccordionTrigger,");
  if (!src.includes("AccordionTrigger")) {
    src = src.replace(
      "AccordionItem,\n} from",
      "AccordionItem,\n  AccordionTrigger,\n} from",
    );
  }

  if (src.match(blockRe)) {
    const inner = src.match(
      /<AccordionPrimitive\.Trigger[^>]*>([\s\S]*?)<\/AccordionPrimitive\.Trigger>/,
    );
    if (inner) {
      src = src.replace(
        blockRe,
        `<AccordionTrigger ${trigger}>\n${inner[1].trim()}\n            </AccordionTrigger>\n            `,
      );
    }
  }

  src = src.replace(
    /<AccordionTrigger className="[^"]*group-aria-expanded\/accordion-trigger:[^"]*"/,
    `<AccordionTrigger ${trigger.replace('className="', "").slice(0, -1) ? "" : trigger}`,
  );

  fs.writeFileSync(p, src);
  console.log(`patched ${file}`);
}