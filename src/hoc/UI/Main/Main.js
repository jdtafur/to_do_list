import React from "react";
import Toolbar from "../../../components/toolbar/Toolbar";
import SectionsContainer from "../sectionContainer/SectionsContainer";
import {withRouter} from "react-router";

function Main() {
    return (
        <div className="App">
            <Toolbar/>
            <SectionsContainer/>
        </div>
    );
}

export default withRouter(Main)
