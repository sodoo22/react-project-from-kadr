import React from 'react'
import { NavLink, Nav, NavDropdown } from 'react-bootstrap'
import CategoryCards from './CategoryCards'


const CategoryCard = (props) => {
    const category = props.children.length > 0 ? (
        <div>title={props.title}
            {
                props.children.map(child => {
                    return (
                        child.title
                    )
                })
            }
        </div>
    ) : (
        props.title
    )

    return (
        <div>
            {category}
        </div>

    )
}

export default CategoryCards