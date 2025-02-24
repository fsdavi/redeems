import { getRedeemsPages } from "@/api/getRedeemsPages";
import { openSans } from "@/lib/fonts";
import { notFound } from "next/navigation";

const DEFAULT_LOGO_PROPS = {
  src: "/default-logo.svg",
  alt: "Lobby Tech",
  width: 189,
  height: 54,
};

export default function Layout(
  {
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>,
) {

  return (
    <>{children}</>
  );
}
