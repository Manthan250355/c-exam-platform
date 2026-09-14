import type { Question } from '../types';

interface QuestionPanelProps {
  question: Question;
  questionNumber: number;
}

export default function QuestionPanel({ question, questionNumber }: QuestionPanelProps) {
  return (
    <section className="question-panel">
      <div className="question-scroll">
        <div className="question-tag">CODING</div>
        <h1 className="question-title">
          {questionNumber}. {question.title}
        </h1>
        <p className="question-description">{question.description}</p>

        <div className="question-block">
          <h3>Input Format</h3>
          <p>{question.inputFormat}</p>
        </div>

        <div className="question-block">
          <h3>Output Format</h3>
          <p>{question.outputFormat}</p>
        </div>

        <div className="question-block">
          <h3>Constraints</h3>
          <p className="question-constraints">{question.constraints}</p>
        </div>

        {question.sampleTests.slice(0, 1).map((t, i) => (
          <div className="sample-io-pair" key={i}>
            <div className="question-block">
              <h3>Sample Input</h3>
              <pre className="io-pre">{t.input}</pre>
            </div>
            <div className="question-block">
              <h3>Sample Output</h3>
              <pre className="io-pre">{t.expectedOutput}</pre>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
