import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();

  return (
    <div className="h-12 w-screen flex items-center justify-between mt-2∫">
      <div className="myName flex  text-xl w-1/2 ml-4">
        <p className="font-bold">Joaquin</p>
        <p className="font-light">Mancheno</p>
      </div>
      <div className="options flex space-x-4 w-1/2  items-end justify-end mr-4 font-light  ">
        <Link href="/">
          <p
            className={router.pathname == "/" ? "font-bold" : "font-light"}
            style={{ cursor: "pointer" }}
          >
            Home
          </p>
        </Link>
        <Link href="/Projects ">
          <p
            className={
              router.pathname == "/Projects" ? "font-bold" : "font-light"
            }
            style={{ cursor: "pointer" }}
          >
            Projects
          </p>
        </Link>
        <Link href="/Contact">
          <p
            className={
              router.pathname == "/Contact" ? "text-light" : "font-light"
            }
            style={{ cursor: "pointer" }}
          >
            Contact
          </p>
        </Link>
      </div>
    </div>
  );
}
