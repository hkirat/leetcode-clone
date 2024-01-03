import React, { useState } from 'react';
import MonacoEditor from 'react-monaco-editor';

export const ProblemCard = () => {
  const [solutionCode, setSolutionCode] = useState('');

  const problemName = 'Sample Problem';
  const problemDescription = `
## Problem Description

This is a mathematical problem example in Markdown:

Given two numbers, find their sum.

Example:
\`\`\`
Input: 3, 5
Output: 8
\`\`\`

Please write a function that takes two numbers as input and returns their sum.

`;

  const markdownExplanation = `
## Mathematical Problem Solving

To solve this problem, you can simply add the two given numbers together. The function should take two parameters representing the numbers to be added and return their sum.

Here's an example solution in JavaScript:

\`\`\`javascript
function findSum(a, b) {
  return a + b;
}
\`\`\`
`;

  const handleCodeChange = (newCode) => {
    setSolutionCode(newCode);
  };

  const editorOptions = {
    selectOnLineNumbers: true,
    automaticLayout: true,
    minimap: {
      enabled: false,
    },
  };

  return (
    <div className="bg-white rounded-md shadow-md p-6 max-w-3xl mx-auto mt-8">
      <h2 className="text-xl font-bold mb-4">{problemName}</h2>
      <p className="text-sm mb-4">{problemDescription}</p>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Problem Explanation</h3>
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: markdownExplanation }}
        />
      </div>
      <h3 className="text-lg font-semibold mb-2">Solution Editor</h3>
      <div className="w-full h-96">
        <MonacoEditor
          language="javascript"
          theme="vs-dark"
          value={solutionCode}
          options={editorOptions}
          onChange={handleCodeChange}
        />
      </div>
    </div>
  );
};
