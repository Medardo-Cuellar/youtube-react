export default function Categories() {
    const categories = [
        "all","music","gaming","news","movies","fashion","sports","tech"
    ]
    return(
        <div id="categories-list" className="flex flex-row gap-4 mt-2">
            {/* <span className="category">
                Cat 1
                </span>
            <span className="category">
                Cat 2
                </span>
            <span className="category">
                Cat 3
            </span> */}
            {categories.map((category) => {
                return <span key={`category-${category}`} className="p-4 rounded-2xl bg-slate-600 flex flex-col gap-2">{category}</span>
            })}
        </div>
        
    );
}