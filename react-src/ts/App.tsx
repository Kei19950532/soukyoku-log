import React, { useState } from "react";

import { Header, Footer } from "@ts/_components";
import { Root, MemberIntroduction } from "@ts/pages";

const App: React.VFC = () => {
    const [pageName, setPageName] = useState("root");

    return (
        <>
            <Header setPageName={setPageName} />
            <SwitchPage pageName={pageName} />
            <Footer />
        </>
    );
};

const SwitchPage: React.VFC<{ pageName: string }> = ({ pageName }) => {
    switch (pageName) {
        default:
        case "root":
            return <Root />;
        case "member":
            return <MemberIntroduction />;
    }
};

export default App;
