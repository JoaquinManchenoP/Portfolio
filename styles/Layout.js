import NavBar from "../public/Components/NavBar";
export default function Layout({ children }) {
  return (
    <div>
      <div className="nav absolute z-20">
        <NavBar />
      </div>
      <div className=" h-screen w-full flex flex-col items-center   z-0">
        <div className="content h-full w-3/6  mt-32">{children}</div>
      </div>
    </div>
  );
}
