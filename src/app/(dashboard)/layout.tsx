import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* left */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] px-2 py-1">
        <Link
          href="/"
          className="flex justify-center lg:justify-start items-center gap-2"
        >
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <span className="hidden lg:block">Scedule</span>
        </Link>
        <Menu />
      </div>
      {/* right */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F7F7] overflow-scroll text-gray-400">
        <Breadcrumb
          homeElement={"home"}
          separator={<span> / </span>}
          activClasses="font-bold text-gray-900"
          containerClasses="flex py-5"
          listClasses="hover:underline mx-2"
          capitalizeLinks
        />
        {children}
      </div>
    </div>
  );
}
