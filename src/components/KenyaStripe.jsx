// A small, understated nod to the national colours.
export default function KenyaStripe({ className = "" }) {
  return (
    <span aria-hidden="true" className={`flex h-1 w-16 overflow-hidden rounded-full ${className}`}>
      <span className="flex-1 bg-ink" />
      <span className="w-0.5 bg-white" />
      <span className="flex-1 bg-kenya-red" />
      <span className="w-0.5 bg-white" />
      <span className="flex-1 bg-kenya-green" />
    </span>
  );
}
