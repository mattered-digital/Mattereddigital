const GRID_COLUMNS = 50;

export default function GridOverlay() {
  return (
    <div className="grid-overlay" aria-hidden="true">
      {Array.from({ length: GRID_COLUMNS }).map((_, i) => (
        <span key={i} />
      ))}
    </div>
  );
}
