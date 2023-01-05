import categoryCards from '../data/categories'

export default function CategoryCards() {

    const categoryLists = categoryCards.map(category => {
        return (
            <CategoryCard
                title={category.title}
                position={category.position}
                children={category.children}
            />
        )
    })

    console.log(categoryLists);
    return (
        < div className="category-card-container border" >
            {categoryLists}
            <div className="card-img">{categoryLists.title}</div>
            <div>
                <div className="card-title">Title</div>
                <div className="card-items">Items</div>
            </div>
        </div >
    )
}