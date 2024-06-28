import LeftSidebar from "@/components/LeftSidebar";
import MobileNav from "@/components/MobileNav";
import RightSidebar from "@/components/RightSidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex flex-col">
        <main className="relative flex beg-black-3">
            <LeftSidebar />
            <section className="flex min-h-screen flex-1 flex-col px-4 sm:px-14">
              <div className="mx-auto flex w-full max-w-5xl flex-col max-sm:px4">
                <div className="flex h-16 items-center justify-between md:hidden">
                  
                  <MobileNav />
                </div>
              <div className="flex flex-col md:pb-14">
                Toaster (notification popups)
                {children}
              </div>
              </div>
            </section>
            <RightSidebar />
        </main>
    </div>
  );
}
