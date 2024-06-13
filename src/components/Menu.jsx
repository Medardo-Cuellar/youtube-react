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
    <aside id="menu" className="col-start-1 col-end-2 row-start-2 row-end-3 ps-4">
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
      {menuItems.map((item) => {
          return (
            <div key={`menu-item=${item.text}`} className="p-4 rounded-sm flex flex-row gap-2 align-middle bg-transparent hover:bg-slate-700 hover:rounded-xl hover:me-4">
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </div>
          );
        })/* .filter((item) => item.label.startsWith("S")) */}
    </aside>
  );
}
