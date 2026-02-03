import type { PropsWithChildren, ButtonHTMLAttributes } from "react";

type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement>
>;

const Button = ({ children, className, ...rest }: ButtonProps) => {
  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
};

export default Button;

// children → The content inside the button.

//   className → CSS classes you want to pass.

// ...rest → Everything else in the props object that isn't children or className.


// 1️⃣ PropsWithChildren<T>
// Purpose:
// This is a React utility type that adds the children prop to any type T.
// In React, children represents the content between opening and closing tags of a component.



// 2️⃣ ButtonHTMLAttributes<T>

// Purpose:
// This is a React type that describes all valid HTML < button > attributes.
// Examples include:
// onClick, disabled, type, id, style, className, name, etc.
// The T is the HTML element type the attributes are for.In this case, HTMLButtonElement.



// 3️⃣ HTMLButtonElement
// Purpose:
// This is a TypeScript built -in DOM type representing a real < button > element in the browser.
// It gives you proper type checking for things like.focus(), .click(), .disabled, etc.