function Button({ children }) {
  return (
    <div>
      <button className="border px-2 rounded-xl">{children}</button>
    </div>
  );
}

export default function App() {
  return (
    <>
      <div className="container p-8 flex flex-col gap-8">
        <Button>Click The Count</Button>
        <Button>Track The Tasks</Button>
      </div>
    </>
  );
}
