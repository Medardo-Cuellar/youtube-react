import YouTubeLogo from "./YouTubeLogo";

export default function NavBar() {
  return (
    <nav id="navbar" className="col-start-1 col-end-3 grid grid-cols-3">
      <div id="logo" className="flex flex-row items-center gap-1 pl-4">
        <YouTubeLogo height="1.8 rem" width="3rem" />
        <span>YouTube</span>
      </div>
      <div id="search-container" className="flex justify-center content-center">
        <input type="text" placeholder="search" className="w-full p-2 rounded-lg border-none bg-transparent"/>
      </div>
      <div id="user-icon" className="flex justify-end content-center" >
        <img
          src="https://api.dicebear.com/8.x/notionists-neutral/svg?seed=Cuellar"
          alt="user"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </nav>
  );
}
