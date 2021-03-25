import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();

  return (
    <div className="h-12 w-screen flex items-center justify-between px-20 shadow-xl">
      <div className="my__name flex text-lg">
        <p className="font-light">Joaquin</p>
        <p className="font-bold">Mancheno</p>
      </div>
      <div className="options flex space-x-12  text-sm">
        <div
          className={
            router.pathname == "/"
              ? "  font-semibold text-base "
              : "font-light no-underline"
          }
          style={{ cursor: "pointer" }}
        >
          <Link href="/">
            <p>About Me</p>
          </Link>
        </div>
        <div
          style={{ cursor: "pointer" }}
          className={
            router.pathname == "/Projects"
              ? "font-semibold text-base"
              : "font-light no-underline"
          }
        >
          <Link href="/Projects">
            <p>Projects</p>
          </Link>
        </div>
        <div
          className={
            router.pathname == "/Contact"
              ? "font-semibold text-base"
              : "font-light no-underline"
          }
          style={{ cursor: "pointer" }}
        >
          <Link href="/Contact">
            <p>Contact</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
