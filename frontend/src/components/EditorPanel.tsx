import Editor, { type OnMount } from '@monaco-editor/react';
import { useRef } from 'react';

interface EditorPanelProps {
  code: string;
  onChange: (value: string) => void;
  fontSize: number;
  disabled: boolean;
}

export default function EditorPanel({ code, onChange, fontSize, disabled }: EditorPanelProps) {
  const editorRef = useRef<any>(null);

  const handleMount: OnMount = (editor) => {
    editorRef.current = editor;
  };

  return (
    <section className="editor-panel">
      <div className="editor-toolbar">
        <label className="lang-select">
          <select disabled>
            <option>C</option>
          </select>
        </label>
        <span className="editor-hint">Monaco · gcc (MinGW-w64)</span>
      </div>
      <div className="editor-surface">
        <Editor
          height="100%"
          defaultLanguage="cpp"
          value={code}
          theme="vs"
          onChange={(v) => onChange(v ?? '')}
          onMount={handleMount}
          options={{
            fontSize,
            fontFamily: "'Fira Code', 'Cascadia Code', Consolas, 'Courier New', monospace",
            minimap: { enabled: false },
            automaticLayout: true,
            tabSize: 4,
            insertSpaces: true,
            autoIndent: 'full',
            matchBrackets: 'always',
            bracketPairColorization: { enabled: true },
            readOnly: disabled,
            scrollBeyondLastLine: false,
            renderLineHighlight: 'all',
            cursorBlinking: 'smooth',
            smoothScrolling: true,
            wordWrap: 'off',
          }}
        />
      </div>
    </section>
  );
}
