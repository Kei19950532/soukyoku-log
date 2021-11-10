import React from "react";

export const Root: React.VFC = () => {
    return (
        <div id="home" className="big-bg">
            <div className="home-content wrapper">
                <h2 className="page-title">Soukyoku Log</h2>
                <div className="page-text">
                    テキストテキストテキストテキストテキスト
                    <br />
                    テキストテキストテキストテキストテキスト
                </div>
                <a className="top-button" href="about.html">
                    ログイン
                </a>
            </div>
        </div>
    );
};
