import React from "react"
import Container from "../../commonComponents/Container"

const TopCategory = () => {
    return (
        <div>
            <Container>
                <div className="py-3">
                    <select name="Category" id="Category" className="body_sm_500 bg-gray-50 px-2 py-2 rounded outline-none cursor-pointer">
                        <option value="category">All Category</option>
                        <option value="Mobile">Mobile</option>
                        <option value="Laptop">Laptop</option>
                        <option value="Tablet">Tablet</option>
                        <option value="Camera">Camera</option>
                        <option value="Accessories">Accessories</option>
                    </select>
                </div>
            </Container>
        </div>
    )
}

export default React.memo(TopCategory)

// React.memo() is a Higher Order Component(HOC) in React.

// It is used to prevent unnecessary re - renders of functional components.