import React, { useEffect } from "react";

interface Props {
  count: number;
}

/**
 * MyComponent is a simple React component that demonstrates the use of the useEffect hook.
 *
 * @component
 * @param {number} count - The count value to be displayed and logged.
 *
 * The `useEffect` hook in this component logs the count value to the console
 * whenever it changes. This demonstrates how side effects can be managed in
 * functional components using hooks.
 *
 * @example
 * ```tsx
 * const count = 5;
 * return <MyComponent count={count} />;
 * ```
 *
 * @remarks
 * The `useEffect` hook is used to log the count value to the console
 * whenever it changes. This is a common pattern for side effects in React
 * @params
 * functional components.
 */
const MyComponent: React.FC<Props> = ({ count }) => {
  // Logs the count value to the console whenever it changes.
  useEffect(() => {
    console.log(`Count has changed to: ${count}`);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
};

export default MyComponent;
