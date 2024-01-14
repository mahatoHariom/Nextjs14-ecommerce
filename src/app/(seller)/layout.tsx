import Providers from "@/utils/Providers";


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <section className="h-screen">{children}</section>;
    </Providers>
  );
}
