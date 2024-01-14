import Footer from "@/components/Footer";
import MainNavbar from "@/components/Navbar/MainNavbar";
import SearchNavbar from "@/components/Navbar/SearchNavbar";
import TopBar from "@/components/Navbar/TopNavbar";
export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <TopBar />
      <SearchNavbar />
      <MainNavbar />
      <main>{children}</main>
      <Footer />
    </section>
  );
}
