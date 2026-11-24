import { Badge } from "@/components/ui/badge";

type UiDemoShellProps = {
  title: string;
  importPath: string;
  children: React.ReactNode;
};

export function UiDemoShell({ title, importPath, children }: UiDemoShellProps) {
  return (
    <div className="flex flex-col gap-4 p-6 md:p-10">
      <div className="flex flex-wrap items-center gap-2">
        <h2 className="font-heading text-xl font-semibold tracking-tight">{title}</h2>
        <Badge variant="secondary" className="font-mono text-[10px] font-normal">
          {importPath}
        </Badge>
      </div>
      <div className="w-full max-w-3xl">{children}</div>
    </div>
  );
}