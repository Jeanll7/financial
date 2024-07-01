
import { formatCurrentMonth } from "../../helpers/dateFilter";
import { ResumeItem } from "../ResumeItem";

type Props = {
  currentMonth: string;
  onMonthChange: (newMonth: string) => void;
  income: number;
  expense: number;
};

export function InfoArea({ currentMonth, onMonthChange, income, expense }: Props) {
  
  const handlePreMonth = () => {
    let [year, month] = currentMonth.split("-");
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() - 1);
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  };

  const handleNextMonth = () => {
    let [year, month] = currentMonth.split("-");
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() + 1);
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  };

  return (
    <section className="overflow-x-auto flex items-center p-5 shadow-md rounded-lg mt-[-40px] bg-white">
      <div className="flex items-center space-x-8 w-full justify-between px-8">
        <div
          className="w-[40px] text-[25px] cursor-pointer"
          onClick={handlePreMonth}>
          ⬅️
        </div>
        <div className="flex-grow text-center">
          <span>{formatCurrentMonth(currentMonth)}</span>
        </div>
        <div
          className="w-[40px] text-[25px] cursor-pointer"
          onClick={handleNextMonth}>
          ➡️
        </div>
        <div className="flex px-6 mx-0 gap-[120px]">
          <ResumeItem title="Receitas" value={income} />
          <ResumeItem title="Despezas" value={expense} />
          <ResumeItem 
            title="Balanço" 
            value={income - expense} 
            color={(income - expense) < 0 ? 'text-red' : (income - expense) > 0 ? 'text-green' : 'text-black'}
          />
        </div>
      </div>
    </section>
  );
}
