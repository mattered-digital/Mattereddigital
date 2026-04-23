const GRID_LINES = 50;

export default function GridOverlay() {
  return (
    <div className="grid-overlay" aria-hidden="true">
      {Array.from({ length: GRID_LINES }).map((_, index) => (
        <span
          key={index}
          style={{ left: `${((index + 1) / (GRID_LINES + 1)) * 100}%` }}
        />
      ))}
    </div>
  );
}
