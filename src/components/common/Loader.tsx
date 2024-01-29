export default function Loader({ children }: { children: React.ReactNode }) {
  return (
    <div className="loader-wrapper">
      <div className="loader-wrap">
        <div className="loader"></div>
        {children}
      </div>
    </div>
  );
}
