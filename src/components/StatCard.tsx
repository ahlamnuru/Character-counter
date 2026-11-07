type Props = {
  label: string;
  value: number;
  color: string;
};

function StatCard({ label, value, color }: Props) {
  return (
    <div className={`rounded-2xl p-6 text-zinc-950 ${color}`}>
      <p className="text-5xl font-bold">{String(value).padStart(2, "0")}</p>{" "}
      <p className="mt-1 text-lg">{label}</p>
    </div>
  );
}

export default StatCard;
