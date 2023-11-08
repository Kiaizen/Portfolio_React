
import NavUi from "./NavUi";

const Nav = () => {
  return (
    <nav className="fixed bottom-8 lg:bottom-8 w-full  z-50">
      <div className="container mx-auto">
        <NavUi/>
      </div>
    </nav>
  );
};

export default Nav;
