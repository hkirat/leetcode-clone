import React, { FC, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypePrism from "rehype-prism-plus";
import rehypeRewrite from "rehype-rewrite";
import CodeEditor from "@uiw/react-textarea-code-editor";

interface ProblemViewProps {}

const baseCodes = {
  js: `function add(a, b) {\n  return a + b;\n}`,
  py: `def add(a, b):\n  return a + b`,
  cpp: `int add(int a, int b) {\n  return a + b;\n}`,
};

const ProblemView: FC<ProblemViewProps> = ({}) => {
  const [code, setCode] = useState<"js" | "py" | "cpp">("js");
  const [markDown] = useState(`
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
    <div className="max-w-[820px] ml-4 lg:ml-0">
      <div className="bg-white boxShadow p-4 mt-4 mb-4">
        <ReactMarkdown>{markDown}</ReactMarkdown>
      </div>
      <CodeEditor
        value={baseCodes[code]}
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
      <select
        className="mt-4 mb-4"
        onChange={(e) => {
          setCode(
            e.target.options[e.target.selectedIndex].value as
              | "js"
              | "py"
              | "cpp"
          );
        }}
      >
        <option value="js">Javascript</option>
        <option value="py">Python</option>
        <option value="cpp">C++</option>
      </select>
    </div>
  );
};

export default ProblemView;
