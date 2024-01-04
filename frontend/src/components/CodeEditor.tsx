import MonacoEditor from "react-monaco-editor";
import { useState } from "react";

export const CodeEditor = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("javascript");

  const getInitialCode = (language: any) => {
    switch (language) {
      case "javascript":
        return 'console.log("Hello, Daily Coder!");';
      case "python":
        return 'print("Hello, Daily Coder!")';
      case "c++":
        return '#include <iostream>\n\nint main() {\n  std::cout << "Hello, Daily Coder!" << std::endl;\n  return 0;\n}';
      case "java":
        return 'public class HelloWorld {\n  public static void main(String[] args) {\n    System.out.println("Hello, Daily Coder!");\n  }\n}';
      default:
        return '';
    }
  };

  const [code, setCode] = useState(getInitialCode(selectedLanguage));
  const [selectedTheme, setSelectedTheme] = useState("vs-dark");

  const options = {
    selectOnLineNumbers: true,
    fontSize: 14,
    automaticLayout: true,
  };

  const languages = [
    { value: "javascript", label: "JavaScript" },
    { value: "python", label: "Python" },
    { value: "c++", label: "C++" },
    { value: "java", label: "Java" },
  ];

  const themes = [
    { value: "vs-dark", label: "Dark Theme" },
    { value: "vs-light", label: "Light Theme" },
    { value: "hc-black", label: "High Contrast" },
  ];

  const handleLanguageChange = (e: any) => {
    const selectedValue = e.target.value;
    setSelectedLanguage(selectedValue);
    setCode(getInitialCode(selectedValue));
  };

  const handleThemeChange = (e: any) => {
    setSelectedTheme(e.target.value);
  };

  return (
    <div className="flex flex-col items-start space-y-4">
      <div className="flex gap-2">
        
      <div className="relative">
        
        <select
          id="language"
          className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          value={selectedLanguage}
          onChange={handleLanguageChange}
        >
          {languages.map((lang) => (
            <option key={lang.value} value={lang.value}>
              {lang.label}
            </option>
          ))}
        </select>
      </div>

      <div className="relative">
        <select
          id="theme"
          className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          value={selectedTheme}
          onChange={handleThemeChange}
        >
          {themes.map((theme) => (
            <option key={theme.value} value={theme.value}>
              {theme.label}
            </option>
          ))}
        </select>
      </div>
      </div>

      <div style={{ height: "500px" }} className="w-full shadow-lg">
        <MonacoEditor
          width="100%"
          height="100%"
          language={selectedLanguage}
          theme={selectedTheme}
          value={code}
          options={options}
          onChange={(newValue) => setCode(newValue)}
        />
      </div>
    </div>
  );
};
