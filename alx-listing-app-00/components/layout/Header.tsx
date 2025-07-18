const Header = () => {
  return (
    <header className="p-4 bg-white shadow flex justify-between items-center">
      <h1 className="text-xl font-bold">ListingApp</h1>
      <nav className="flex gap-4">
        <button>Rooms</button>
        <button>Mansion</button>
        <button>Countryside</button>
      </nav>
      <div>
        <input type="text" placeholder="Search..." className="border p-1" />
        <button className="ml-2">Sign in</button>
        <button className="ml-2">Sign up</button>
      </div>
    </header>
  );
};

export default Header;
