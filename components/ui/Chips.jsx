export default function Chips({ price }) {
  return (
    <div className="badge badge-lg bg-base-300 rounded-full text-sm">
      Price: <span className="font-semibold">${price || "5000"}</span>
    </div>
  );
}
