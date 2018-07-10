import * as React from "react";
import * as ReactDOM from "react-dom";
import TestPage from "./components/TestPage";

/**
 * App component definition
 * @extends React.Component
 */
export default class App extends React.Component {

    /**
     * Renders the component
     * @return {function}
     */
    public render(): JSX.Element {
        return (
            <TestPage managedClasses={undefined} />
        );
    }
}

/**
 * Create the root node
 */
const root: HTMLElement = document.createElement("div");
root.setAttribute("id", "root");
document.body.appendChild(root);

/**
 * Primary render function for app. Called on store updates
 */
ReactDOM.render(
    <App />,
    document.getElementById("root")
);
