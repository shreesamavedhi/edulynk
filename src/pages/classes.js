import React, { Component, Fragment } from "react";
import ClassSelector from "../components/ClassSelector.js";

class Classes extends Component {
   render() {
      return (
         <Fragment>
            <div class="container-fluid">
               <h1 class="mt-4">Classes Page</h1>
               <p>
                  {" "}
                  <ClassSelector></ClassSelector>Classes page:The starting state
                  of the menu will appear collapsed on smaller screens, and will
                  appear non-collapsed on larger screens. When toggled using the
                  button below, the menu will change.
               </p>
               <p>
                  Make sure to keep all page content within the{" "}
                  <code>#page-content-wrapper</code>. The top navbar is
                  optional, and just for demonstration. Just create an element
                  with the <code>#menu-toggle</code> ID which will toggle the
                  menu when clicked.
               </p>
            </div>
         </Fragment>
      );
   }
}
export default Classes;