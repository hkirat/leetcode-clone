import Editor from '@monaco-editor/react';
import { useState } from 'react';

const options = {
  contextmenu: true,
  fontFamily: 'monospace',
  fontSize: 13,
  lineHeight: 24,
  hideCursorInOverviewRuler: true,
  minimap: {
    enabled: true,
  },
  scrollbar: {
    horizontalSliderSize: 4,
    verticalSliderSize: 18,
  },
  selectOnLineNumbers: true,
  roundedSelection: false,
  readOnly: false,
}; 

const languages = [
  'javascript',
  'python',
  'java',
  'c',
  'c++',
];

const CodeEditor = () => {
  const [language, setLanguage] = useState('javascript');

  return (
    // make a beautiful code editor using monaco editor along with seperate buttons for changing themes and languages in the top

    <div className='flex flex-col justify-center gap-4'>
      <div>
        <label
          htmlFor='Language'
          className='block text-sm font-medium text-gray-700'
        >
          Language
        </label>
        <select
          id='Language'
          name='Language'
          className='mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md'
          defaultValue='Canada'
          onChange={(e) => setLanguage(e.target.value)}
        >
          {languages.map((language, idx) => (
            <option key={idx} value={language}>
              {language.charAt(0).toUpperCase() + language.slice(1)}
            </option>
          ))}
        </select>
      </div>
      <div className='w-full shadow rounded-lg py-4'>
        <Editor
          height='90vh'
          language={language.toLowerCase()}
          options={options}
          theme='vs-dark'
        />
      </div>
    </div>
  );
};

export default CodeEditor;
