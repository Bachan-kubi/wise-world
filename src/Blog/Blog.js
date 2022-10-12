import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div>
      <div className="blog">
        <h3>Purpose of React Router</h3>
        <p>
          React Router, and dynamic, client-side routing, allows us to build a
          single-page web application with navigation without the page
          refreshing as the user navigates. React Router uses component
          structure to call components, which display the appropriate
          information. By preventing a page refresh, and using Router or Link,
          which is explained in more depth below, the flash of a white screen or
          blank page is prevented. This is one increasingly common way of having
          a more seamless user experience. React router also allows the user to
          utilize browser functionality like the back button and the refresh
          page while maintaining the correct view of the application.
        </p>
      </div>
      <div className="blog">
        <h3>How does context API work?</h3>
        <p>
          React.createContext() is all you need. It returns a consumer and a
          provider. Provider is a component that as it's names suggests provides
          the state to its children. It will hold the "store" and be the parent
          of all the components that might need that store. Consumer as it so
          happens is a component that consumes and uses the state. More
          information can be found on React's documentation page
        </p>
      </div>
      <div className="blog">
        <h3>What is useRef in react Hook?</h3>
        <p>
          The useRef is a hook that allows to directly create a reference to the
          DOM element in the functional component. Syntax: const refContainer =
          useRef(initialValue); The useRef returns a mutable ref object. useRef
          is one of the standard hooks provided by React. It will return an
          object that you can use during the whole lifecycle of the component.
          The main use case for the useRef hook is to access a DOM child
          directly. I’ll show exactly how to do that in another section.
          Although accessing the DOM is the main use case, it doesn’t mean it’s
          the only one! useRef can also be very useful to hold a mutable value
          across different renders of your component.
        </p>
      </div>
    </div>
  );
};

export default Blog;
