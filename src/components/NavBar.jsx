import YouTubeLogo from "./YouTubeLogo";

export default function NavBar() {
  return (
    <nav id="navbar">
      <div id="logo">
        <YouTubeLogo height="1.8 rem" width="3rem" />
        <span>YouTube</span>
      </div>
      <div id="search-container">
        <input type="text" placeholder="search" />
      </div>
      <div id="user-icon">
        <img
          src="https://api.dicebear.com/8.x/notionists-neutral/svg?seed=Cuellar"
          alt="user"
        />
      </div>
    </nav>
  );
}
