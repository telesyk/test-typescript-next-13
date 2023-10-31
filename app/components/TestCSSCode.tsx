const testCode = `.page {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
  --tw-gradient-from: #581c87;
  --tw-gradient-to: rgb(88 28 135 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
  --tw-gradient-to: #fcd34d;
  --tw-text-opacity: 1;
  color: rgb(248 250 252 / var(--tw-text-opacity));
}`

export default function TestCSSCode() {
  return (
    <div className="my-4">
      <details>
        <summary>Copy test code</summary>
        <pre className="mt-2 p-4 text-xs rounded bg-slate-800">
          <code>{testCode}</code>
        </pre>
      </details>
    </div>
  )
}
