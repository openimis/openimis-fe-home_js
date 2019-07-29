import React, { Component } from "react";
import { ProxyPage } from "@openimis/fe-core";


class HomePage extends Component {
    render() {
        return <ProxyPage url="/LegacyHome" />
    }
}

export { HomePage };