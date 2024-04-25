import SyntaxHighlighter from 'react-syntax-highlighter';
import { useStyletron } from 'baseui';
import { vs } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

const CodeBlock = ({ children, language }) => {
  const [css, theme] = useStyletron();

  const customStyles = {
    ...vs, // Spread the base styles first
    // Now override the styles with theme colors
    hljs: {
      background: theme.colors.backgroundPrimary,
      color: theme.colors.contentPrimary,
    },
    'hljs-comment': {
      color: theme.colors.contentSecondary,
    },
    'hljs-keyword': {
      color: theme.colors.accent,
    },
    'hljs-string': {
      color: theme.colors.positive,
    },
    'hljs-variable': {
      color: theme.colors.warning,
    },
    'hljs-number': {
      color: theme.colors.warning,
    },
    'hljs-function': {
      color: theme.colors.accent,
    },
    // ... additional custom styles for different token types
  };

  return (
    <SyntaxHighlighter
      language={language}
      style={customStyles}
      codeTagProps={{
        style: {
          padding: 0,
        },
      }}
    >
      {children}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
