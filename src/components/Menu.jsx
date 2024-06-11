export default function Menu() {
  // list rendering
  const menuItems = [
    { icon: "🏠", label: "Home" },
    { icon: "🩳", label: "Shorts" },
    { icon: "🕐", label: "Subscriptions" },
    { icon: "📺", label: "Library" },
    { icon: "🌟", label: "Favorites" },
  ];
  return (
    <aside id="menu">
      {/* <div className="menu-item">
            <span>🏠</span>
            <span>Hong</span>
            </div>
        <div className="menu-item">
            <span>🩳</span>
            <span>Shorts</span>
            </div>
        <div className="menu-item">
            <span>🕐</span>
            <span>Subscriptions</span>
            </div> */}
      {menuItems
        .filter((item) => item.label.startsWith("S"))
        .map((item) => {
          return (
            <div key={`menu-item=${item.text}`} className="menu-item">
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </div>
          );
        })}
    </aside>
  );
}
