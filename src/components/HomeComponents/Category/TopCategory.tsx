import React, { useState } from "react"
import Container from "../../commonComponents/Container"
import { icons } from "../../../helpers/iconProvider"

const TopCategory = () => {
    const [categoryOpen, setCategoryOpen] = useState(false)

    const items = [
        {
            id: 1,
            name: "Track Order",
            icon: icons.location,
        },
        {
            id: 2,
            name: "Compare",
            icon: icons.compare,
        },
        {
            id: 3,
            name: "Customer Support",
            icon: icons.support
        },
        {
            id: 4,
            name: "need help",
            icon: icons.help,
        },
    ]


    return (
        <div className="shadow">
            <Container>
                <div className="flex items-center justify-between py-4">
                    {/* category */}
                    <div className="flex items-center gap-x-3">
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
                        {/* category for support */}
                        <div className="flex items-center gap-4" >
                            {items.map((item) => (
                                <div key={item.id}
                                    className="text-gray-600 body_sm_400 flex items-center gap-1 cursor-pointer hover:text-warning-500 transition-all">
                                    <span className="text-2xl">{item.icon}</span>
                                    <span>{item.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* contact section */}
                    <div className="flex items-center gap-x-3">
                        <span>{icons.phone}</span>
                        <span className="body_lg_400">+1-238-903-739</span>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default React.memo(TopCategory)







                                                                              









