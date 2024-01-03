import React, { FC, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypePrism from "rehype-prism-plus";
import rehypeRewrite from "rehype-rewrite";
import CodeEditor from "@uiw/react-textarea-code-editor";

interface ProblemViewProps {}

const ProblemView: FC<ProblemViewProps> = ({}) => {
  const [code, setCode] = useState(`function add(a, b) {\n  return a + b;\n}`);
  const [markDown, setMarkDown] = useState(`
# Problem #1
##   

## Minimum Value

Let there be a set of N natural numbers 1, 2, 3, 4...N. We are allowed to insert + or - sign in front of each number and add all the resultant numbers. The minimum non-negative value obtained is denoted as D(N).

Find the value of D(1) + D(2) + ... + D(19216812112)

**Tags:** number theory

**Contributed by:** Abhishek Das

**Solved by:** 2581 users
  `);
  const textRef = React.useRef(null);
  return (
    <div className="max-w-[820px]">
      <div className="bg-white boxShadow p-4 mt-4 mb-4">
        <ReactMarkdown>{markDown}</ReactMarkdown>
      </div>
      <CodeEditor
        value={code}
        ref={textRef}
        language="js"
        placeholder="Please enter JS code."
        className="min-h-[200px]"
        onChange={(evn) => setCode(evn.target.value)}
        padding={15}
        style={{
          fontFamily:
            "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
          fontSize: 14,
        }}
      />
    </div>
  );
};

export default ProblemView;
