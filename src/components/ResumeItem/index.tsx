
type Props = {
  title: string;
  value: number;
  color?: string;
};

export function ResumeItem({ title, value, color }: Props) {

  return (
    <div className="flex flex-col font-bold gap-1">
      <h1 className="text-[#888]">{title}</h1>
      <span className={`text-center ${color}`}>R$ {value}</span>
    </div>
  )
}

