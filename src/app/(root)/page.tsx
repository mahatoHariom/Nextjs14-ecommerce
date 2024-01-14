import HomeComponent from "@/components/Home";
// import { ModeToggle } from "@/components/Theme-toggle";
export const dynamic = "force-dynamic";
export default async function Home() {
  return (
    <>
    {/* <ModeToggle/> */}

      <HomeComponent />
    </>
  );
}
