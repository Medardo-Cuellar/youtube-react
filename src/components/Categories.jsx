export default function Categories() {
    const categories = [
        "all","music","gaming","news","movies","fashion","sports","tech"
    ]
    return(
        <div id="categories-list">
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
                return <span key={`category-${category}`} className="category">{category}</span>
            })}
        </div>
        
    );
}