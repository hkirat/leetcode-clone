import { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';

const startedValue = `
# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
\`\`\`cpp
// Add your code here
\`\`\`
`;

const MarkdownEditor = () => {
  const [value, setValue] = useState(startedValue);
  return (
    <MDEditor
      className='!h-[80vh]'
      value={value}
      onChange={(newValue) => setValue(newValue || '')}
    />
  );
};

export default MarkdownEditor;
