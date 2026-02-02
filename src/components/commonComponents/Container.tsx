import { type PropsWithChildren } from 'react'

// { children: React.ReactNode } == PropsWithChildren

const Container = ({children} : PropsWithChildren) => {
  return (
    <div className='container mx-auto'>{children}</div>
  )
}

export default Container

// 1️⃣ What is children?

// In React, children is whatever you put between the opening and closing tag of a component.

// Example:

// <Container>
//   <h1>Hello</h1>
//   <p>Welcome</p>
// </Container>



//2️⃣ Why React.ReactNode?

// Because children can be anything React can render:

// ✔ JSX
// ✔ text
// ✔ numbers
// ✔ fragments
// ✔ arrays

// React.ReactNode covers all valid renderable values.