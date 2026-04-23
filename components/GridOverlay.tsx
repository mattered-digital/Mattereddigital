export default function GridOverlay() {
  return (
    <div className="grid-overlay" aria-hidden="true">
      {Array.from({ length: 6 }).map((_, i) => (
        <span key={i} />
      ))}
    </div>
  );
}
