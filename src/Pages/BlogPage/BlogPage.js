import React from "react";

const BlogPage = () => {
  return (
    <div>
      <div class="collapse">
        <input type="checkbox" class="peer" />
        <div class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          How will you improve the performance of a React Application?
        </div>
        <div class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          <p>* Keeping component state local where necessary.</p>
          <p>* Memoizing React components to prevent unnecessary re-renders.</p>
          <p>* Lazy loading images in React.</p>
          <p>* Code-splitting in React using dynamic import().</p>
          <p>* Windowing or list virtualization in React.</p>
        </div>
      </div>

      <div class="collapse mt-2">
        <input type="checkbox" class="peer" />
        <div class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          What are the different ways to manage a state in a React application?
        </div>
        <div class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          <h2>Location State </h2>
          <p>
            Location state is the UTF-8 display that appears in your URL bar. In
            fact, the L in URL stands for Locator! One of the most interesting
            facts about Location state is that you can give directions to a user
            to parts of the application that do not have unique URLs associated
            with them. Also, the HTML5 History API allows you to store states
            separately from the specific URL. Unlike Data and Communication
            state, which follow a particular pattern or a shape to store
            information, location state instead stores information in a simple
            string like structure. However, one of the most interesting things
            about location states is that it typically stores URLs in the forms
            of string-like structures even when they don’t actually represent
            strings. URLs represent a hierarchy of components, overlaid on one
            top of the other. One can build a location tree using different URLs
            that represent different parts of your application.
          </p>
        </div>
      </div>

      <div class="collapse mt-2">
        <input type="checkbox" class="peer" />
        <div class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          How does prototypical inheritance work?
        </div>
        <div class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          <p>
            Simply put, prototypical inheritance refers to the ability to access
            object properties from another object. We use a JavaScript prototype
            to add new properties and methods to an existing object constructor.
            We can then essentially tell our JS code to inherit properties from
            a prototype. Prototypical inheritance allows us to reuse the
            properties or methods from one JavaScript object to another through
            a reference pointer function.
          </p>
        </div>
      </div>

      <div class="collapse mt-2">
        <input type="checkbox" class="peer" />
        <div class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          What is a unit test? Why should write unit tests?
        </div>
        <div class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          <p>
            UNIT TESTING is a type of software testing where individual units or
            components of a software are tested. The purpose is to validate that
            each unit of the software code performs as expected. Unit Testing is
            done during the development (coding phase) of an application by the
            developers. Unit Tests isolate a section of code and verify its
            correctness. A unit may be an individual function, method,
            procedure, module, or object. In SDLC, STLC, V Model, Unit testing
            is first level of testing done before integration testing. Unit
            testing is a WhiteBox testing technique that is usually performed by
            the developer. Though, in a practical world due to time crunch or
            reluctance of developers to tests, QA engineers also do unit
            testing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
