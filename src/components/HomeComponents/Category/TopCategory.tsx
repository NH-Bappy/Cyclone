import React, { useState } from "react"
import Container from "../../commonComponents/Container"
import { icons } from "../../../helpers/iconProvider"

const TopCategory = () => {
    const [categoryOpen , setCategoryOpen] = useState(false)
    console.log(categoryOpen)

    return (
        <div>
            <Container>
                <div className="py-3">
                    {/* category */}
                    <div className="relative">
                        <select
                            name="Category"
                            id="Category"
                            className="body_sm_500 bg-gray-50 pl-2 pr-8 py-2 rounded outline-none cursor-pointer appearance-none"
                            onClick={() => setCategoryOpen(!categoryOpen)}
                        >
                            <option className="body_sm_500 bg-gray-50" value="category">All Category</option>
                            <option className="body_sm_500 bg-gray-50" value="Mobile">Mobile</option>
                            <option className="body_sm_500 bg-gray-50" value="Laptop">Laptop</option>
                            <option className="body_sm_500 bg-gray-50" value="Tablet">Tablet</option>
                            <option className="body_sm_500 bg-gray-50" value="Camera">Camera</option>
                            <option className="body_sm_500 bg-gray-50" value="Accessories">Accessories</option>
                        </select>
                        <span
                            className="absolute top-1/2 -translate-1/2  left-[105px]">
                            {categoryOpen ? icons.upArrow : icons.downArrow}
                        </span>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default React.memo(TopCategory)

// React.memo() is a Higher Order Component(HOC) in React.

// It is used to prevent unnecessary re - renders of functional components.