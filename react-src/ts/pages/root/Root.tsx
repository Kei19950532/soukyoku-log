import React from "react";

export const Root: React.VFC = () => {
    const title: string = "TypeScript React !!";

    return (
        <>
            <div id="home" className="big-bg">
                <header className="page-header wrapper">
                    <h1>
                        <a href="index.html">
                            <img
                                className="logo"
                                src="images/logo.png"
                                alt="soukyoku log ホーム"
                            />
                        </a>
                    </h1>
                    <nav>
                        <ul className="main-nav">
                            <li>
                                <a href="profile.html">Home</a>
                            </li>
                            <li>
                                <a href="about.html">Service</a>
                            </li>
                            <li>
                                <a href="test.html">Member</a>
                            </li>
                            <li>
                                <a href="contact.html">新規会員登録</a>
                            </li>
                            <li>
                                <a href="login.html">ログイン</a>
                            </li>
                        </ul>
                    </nav>
                </header>
                <div className="home-content wrapper">
                    <h2 className="page-title">soukyoku log</h2>
                    <p>
                        テキストテキストテキスト
                        <br />
                        テキストテキストテキスト
                    </p>
                    <a className="button" href="about.html">
                        ログイン
                    </a>
                </div>
            </div>
            <footer>
                <div className="wrapper">
                    <p>
                        <small>
                            &copy; Soukyoku Log. 2020 All Rights Reserved.
                        </small>
                    </p>
                </div>
            </footer>
        </>
    );
};
