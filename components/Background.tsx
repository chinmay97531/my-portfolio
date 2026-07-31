export default function Background() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="bg-wash absolute inset-0" />
      <div className="bg-noise absolute inset-0 opacity-[0.025] mix-blend-multiply" />
    </div>
  );
}
