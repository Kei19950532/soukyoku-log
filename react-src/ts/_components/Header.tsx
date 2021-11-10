import React from "react";

export const Header: React.VFC<{
    setPageName: React.Dispatch<React.SetStateAction<string>>;
}> = ({ setPageName }) => {
    const handleSetPage = (
        e: React.MouseEvent<HTMLAnchorElement>,
        pageName: string
    ) => {
        e.preventDefault;
        setPageName(pageName);
    };

    return (
        <header className="page-header wrapper">
            <h1>
                <a href="index.tsx">
                    <img
                        className="logo"
                        src="images/logo.png"
                        alt="Soukyoku Log ホーム"
                    />
                </a>
            </h1>
            <nav>
                <ul className="main-nav">
                    <li>
                        <a onClick={(event) => handleSetPage(event, "root")}>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="about.html">Service</a>
                    </li>
                    <li>
                        <a onClick={(event) => handleSetPage(event, "member")}>
                            Member
                        </a>
                    </li>
                    <li>
                        <a href="contact.html">新規会員登録</a>
                    </li>
                    <li>
                        <a className="header-button" href="login.html">
                            ログイン
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
