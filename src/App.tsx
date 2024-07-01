import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { InfoArea } from './components/InfoArea';
import { InputArea } from './components/InputArea';
import { TableArea } from './components/TableArea';

import { Item } from './types/Item';
// import { Category } from './types/Category';
import { categories } from './data/categories';
import { items } from './data/items';
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter'

function App() {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setcurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    setFilteredList( filterListByMonth(list, currentMonth) );
  }, [list, currentMonth]);

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for (let i in filteredList) {
      if (categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;
      }
    }

    setIncome(incomeCount);
    setExpense(expenseCount);
  }, [filteredList])

  const handleMonthChange = (newMonth: string) => {
    setcurrentMonth(newMonth);
  }

  const handleAddItem = (item: Item) => {
    let newList = [...list];
    newList.push(item)
    setList(newList)
  }

  return (
    <>
      <Header />
      <main className="mx-auto max-w-[980px] mb-14">
        {/* cor provisoria */}
        <section>  
          <InfoArea 
            currentMonth={currentMonth}
            onMonthChange={handleMonthChange}    
            income={income}    
            expense={expense} 
          />

          <InputArea onAddItem={handleAddItem} />
          
          <TableArea list={filteredList} />
        </section>   
      </main>
    </>
  );
}

export default App;
