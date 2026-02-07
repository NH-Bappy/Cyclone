import React from 'react'

type props = {
    children: React.ReactNode;
    className?: string
};

const Search: React.FC<props> = ({ children, className }) => {
    return <div className ={className}>{children}</div>

};

export default Search;