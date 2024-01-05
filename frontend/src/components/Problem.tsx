import CodeMirror, { Extension, ReactCodeMirrorRef } from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { useEffect, useRef, useState } from "react";
import ResizeHandle from "./Panel/ResizeHandle";
import Dropdown from "./Dropdown";
import { PanelGroup, Panel } from "react-resizable-panels";
import { syntaxTree } from "@codemirror/language";
import { OptionType } from "../interfaces";
import ProblemMarkdown from "../constants/problem.mdx";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

function Problem() {
  const [extensionsList, setExtensionsList] = useState<Extension[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>("Javascript");
  const [codeEditorValue, setCodeEditorValue] = useState<string | undefined>();
  const refs = useRef<ReactCodeMirrorRef>({});

  const languagesList = [
    { id: 1, option: "Javascript" },
    { id: 2, option: "Python" },
  ];

  const handleOptionClick = (option: OptionType) => {
    setSelectedOption(option.option);
    // setIsOpen(!isOpen);
  };

  /**
   * The function `handleRunCode` parses the syntax tree of an editor, retrieves the statements, and
   * returns the code for each statement.
   */
  const handleRunCode = () => {
    if (refs?.current?.view?.state) {
      /* parse editor syntax tree */
      const tree = syntaxTree(refs?.current?.view?.state);
      /* get statements */
      const statements = tree.topNode.getChildren("Statement");
      if (statements && statements.length > 0) {
        statements.forEach((statement) => {
          if (refs?.current?.view) {
            const code = refs?.current?.view.state.sliceDoc(statement.from, statement.to);
            if (code) {
              console.log("Code: ", code);
              return code;
            }
          }
        });
      }
    }
  };

  useEffect(() => {
    if (selectedOption === "Javascript") {
      setExtensionsList([javascript()]);
    } else if (selectedOption === "Python") {
      setExtensionsList([python()]);
    }
  }, [selectedOption]);

  return (
    <div
      style={{
        width: "100%",
        height: "75vh",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <div style={{ flex: "1 1 auto" }}>
        <PanelGroup autoSaveId="example" direction="vertical">
          <Panel
            style={{ display: "flex", flexDirection: "column" }}
            collapsible={true}
            defaultSize={20}
            order={1}
          >
            <div
              style={{
                height: "100vh",
                width: "100%",
                overflow: "hidden",
                borderRadius: "0.5rem",
              }}
              className="bg-slate-950 text-white mt-2 p-5"
            >
              <ProblemMarkdown
                components={{
                  h2: ({ children }) => (
                    <p className="text-green-600 font-semibold text-xl py-3">{children}</p>
                  ),
                  p: ({ children }) => <p className="text-white py-3">{children}</p>,
                  code(props) {
                    const { children, className, ...rest } = props;
                    const match = /language-(\w+)/.exec(className || "");
                    return match ? (
                      <SyntaxHighlighter
                        children={String(children).replace(/\n$/, "")}
                        language={"javascript"}
                        style={atomOneDark}
                      />
                    ) : (
                      <code {...rest} className={className}>
                        {children}
                      </code>
                    );
                  },
                }}
              />
            </div>
          </Panel>
          <ResizeHandle />
          <Panel style={{ display: "flex", flexDirection: "column" }} collapsible={true} order={2}>
            <div
              style={{
                height: "100vh",
                width: "100%",
                overflow: "hidden",
                borderRadius: "0.5rem",
              }}
              className="flex flex-col"
            >
              <div className="flex items-center justify-end bg-slate-950 p-3 text-white px-4">
                <button
                  className="inline-flex justify-center items-center mr-4 px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-blue-900 transition ease-in-out duration-150"
                  onClick={handleRunCode}
                >
                  Run
                </button>
                <Dropdown
                  options={languagesList}
                  handleOptionClick={handleOptionClick}
                  selectedOption={selectedOption}
                />
              </div>
              <div>
                <CodeMirror
                  height="90vh"
                  theme={"dark"}
                  ref={refs}
                  className="text-lg"
                  value={codeEditorValue}
                  onChange={(value) => setCodeEditorValue(value)}
                  extensions={extensionsList}
                />
              </div>
            </div>
          </Panel>
        </PanelGroup>
      </div>
    </div>
  );
}

export default Problem;
