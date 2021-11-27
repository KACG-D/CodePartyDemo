import React from "react";
import "./Demo.scss";
import { Button } from "./components/Button/Button";
import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";
type Prop = {};

export const Demo: React.FC<Prop> = () => {
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth
  });

  const windowHeight = dimensions.height;
  const marginHeight = 184 + 48;
  const contentsHeight = windowHeight - marginHeight;
  //console.log(contentsHeight);
  return (
    <div className="DemoPage">
      <div className="Header">
        <img className="Header__logo" src="/image/logo.png" alt="CodeParty" />
        <div className="Header__menu">でも太郎</div>
      </div>
      <div className="Contents">
        <div className="Contents__window">
          <div className="Contents__headding">デモステージ</div>
          <div className="Contents__window_contents">
            <div className="Contents__left">
              <div className="Contents__editor">
                <Editor
                  defaultLanguage="python"
                  defaultValue={"print('hello world')\n\n\n\n"}
                  theme="vs-dark"
                />
              </div>
            </div>
            <div className="Contents__divider"></div>
            <div className="Contents__right">
              <div className="Contents__preview">ここにUnity</div>
              <div className="Contents__buttons">
                <Button>
                  <img className="icon" src="/image/run.png" alt="CodeParty" />
                  ジッコウ
                </Button>
                <Button>
                  <img
                    className="icon"
                    src="/image/submit.png"
                    alt="CodeParty"
                  />
                  テイシュツ
                </Button>
                <Button>
                  <img className="icon" src="/image/log.png" alt="CodeParty" />
                  ログ
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
