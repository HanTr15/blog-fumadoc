import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { docsSource } from '@/lib/source';
import type { ReactNode } from 'react';
import SidebarTabs from "@/components/SidebarTabs";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={docsSource.getPageTree()}
      sidebar={{
        className: "md:w-68 w-full",
        footer: <SidebarTabs />,
      }}
    >
      {children}
    </DocsLayout>
  );
}
