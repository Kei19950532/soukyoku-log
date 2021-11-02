import React from "react";

export const Root: React.VFC = () => {
    const title: string = "TypeScript React !!";

    return (
        <div id="home" className="big-bg">
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
    );
};
