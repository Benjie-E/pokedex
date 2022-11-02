import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <>
      <header className="">
        <h1 className="">Pokédex App</h1>
      </header>
      <main className="w-screen flex flex-col">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;