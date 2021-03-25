import NavBar from "../public/Components/NavBar";
export default function Layout({ children }) {
  return (
    <div>
      <div className="nav fixed">
        <NavBar />
      </div>
      <div className=" h-screen w-full flex flex-col items-center">
        <div className="content h-full w-3/6  mt-32">{children}</div>
      </div>
    </div>
  );
}
