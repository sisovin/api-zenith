import React from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';

/**
 * CodeSample component props interface
 */
interface CodeSampleProps {
  /**
   * The code to be highlighted
   */
  code: string;
  /**
   * The language of the code
   */
  language: string;
}

/**
 * CodeSample component
 * @param {CodeSampleProps} props - The props for the CodeSample component
 * @returns {JSX.Element} The rendered CodeSample component
 */
const CodeSample: React.FC<CodeSampleProps> = ({ code, language }) => {
  const highlightedCode = Prism.highlight(code, Prism.languages[language], language);

  return (
    <pre className="bg-gray-900 text-white p-4 rounded">
      <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
    </pre>
  );
};

export default CodeSample;
