"use client";

import { UiDemoShell } from "@/app/generator/ui-demos/shell";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell, TableCaption } from "@/components/ui/table";

export default function Demo() {
  return (
    <UiDemoShell title="Table" importPath="@/components/ui/table">
      <Table>
        <TableCaption className="text-muted-foreground">
          Recent invoices
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>INV002</TableCell>
            <TableCell>Pending</TableCell>
            <TableCell className="text-right">$120.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </UiDemoShell>
  );
}
