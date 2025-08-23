import propsImg from "./assets/config.png";
import jsxImg from "./assets/jsx-ui.png";
import stateImg from "./assets/state-mgmt.png";

export const CORE_CONCEPTS = [
  {
    img: jsxImg,
    title: "JSX",
    description:
      "JSX, or JavaScript XML, is a syntax extension for JavaScript primarily used with React to describe the structure of user interfaces. It allows developers to write HTML-like code directly within JavaScript files, combining markup and logic within the same component.",
  },
  {
    img: propsImg,
    title: "Props",
    description:
      "In React, 'props' (short for properties) are a mechanism for passing data from a parent component to a child component. They are read-only, meaning the child component cannot modify the data received through props. Props enable components to be dynamic and reusable by allowing configuration and customization of their behavior based on the data passed to them.",
  },
  {
    img: stateImg,
    title: "State",
    description:
      "n React, state is a JavaScript object that holds data specific to a component, allowing it to manage and update its own internal information. This data can change over time, typically in response to user interactions, events, or data fetching. When a component's state changes, React automatically re-renders that component to reflect the updated data in the user interface, enabling the creation of dynamic and interactive UIs.",
  },
];
