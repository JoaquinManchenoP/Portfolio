import NavBar from "../public/Components/NavBar";
export default function Layout({ children }) {
  return (
    <div>
      <div className="nav absolute z-20">
        <NavBar />
      </div>
      <div className=" h-screen w-full flex flex-col items-center   z-0">
        <div className="content h-full xs:w-4/5 sm:w-3/5 mt-32">{children}</div>
      </div>
    </div>
  );
}
