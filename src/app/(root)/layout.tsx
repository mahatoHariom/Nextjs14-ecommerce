import Footer from "@/components/Footer";
import MainNavbar from "@/components/Navbar/MainNavbar";
// import SearchNavbar from "@/components/Navbar/SearchNavbar";
import TopBar from "@/components/Navbar/TopNavbar";
import Providers from "@/utils/Providers";
import dynamic from "next/dynamic";

const SearchNavbar = dynamic(() => import("@/components/Navbar/SearchNavbar"), {
  ssr: false,
});

export default async function DashboardLayout(props: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <TopBar />
      <SearchNavbar />
      <MainNavbar />
      <Providers>
        <main>{props.children}</main>
      </Providers>
      <Footer />
    </section>
  );
}
