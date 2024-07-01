import { useState } from "react";
import { Item } from "../../types/Item";

import { categories } from "../../data/categories";
import { newDateAdjusted } from "../../helpers/dateFilter";

type Props = {
  onAddItem: (item: Item) => void;
};

export function InputArea({ onAddItem }: Props) {
  const [dateField, setDateField] = useState("");
  const [categoryField, setCategoryField] = useState("");
  const [titleField, setTitleField] = useState("");
  const [valueField, setValueField] = useState(0);

  let categoryKeys: string[] = Object.keys(categories);

  const handleAddEvent = () => {
    let errors: string[] = [];

    if (isNaN(new Date(dateField).getTime())) {
      errors.push("Data inválida!");
    }
    if (!categoryKeys.includes(categoryField)) {
      errors.push("Categoria inválida!");
    }
    if (titleField === "") {
      errors.push("Título vazio!");
    }
    if (valueField <= 0) {
      errors.push("Valor inválido!");
    }

    if (errors.length > 0) {
      alert(errors.join("\n"));
    } else {
      onAddItem({
        date: newDateAdjusted(dateField),
        category: categoryField,
        title: titleField,
        value: valueField,
      });
      clearFields();
    }
  };

  const clearFields = () => {
    setDateField("");
    setCategoryField("");
    setTitleField("");
    setValueField(0);
  };

  return (
    <div className="bg-white shadow-custom rounded-lg p-5 mt-5 flex items-center">
      <div className="flex-1 m-2">
        <div className="font-bold mb-2">Título</div>
        <input 
          type="text" 
          value={titleField} 
          onChange={e => setTitleField(e.target.value)}
          className="w-full h-8 px-2 border border-lightblue rounded"
        />
      </div>
      <div className="flex-1 m-2">
        <div className="font-bold mb-2">Data</div>
        <input 
          type="date" 
          value={dateField} 
          onChange={e => setDateField(e.target.value)} 
          className="w-full h-8 px-2 border border-lightblue rounded"
        />
      </div>
      <div className="flex-1 m-2">
        <div className="font-bold mb-2">Categoria</div>
        <select 
          value={categoryField} 
          onChange={e => setCategoryField(e.target.value)}
          className="w-full h-8 px-2 border border-lightblue rounded"
        >
          <option value="">Selecione uma categoria</option>
          {categoryKeys.map((key, index) => (
            <option key={index} value={key}>
              {categories[key].title}
            </option>
          ))}
        </select>
      </div>
      <div className="flex-1 m-2">
        <div className="font-bold mb-2">Valor</div>
        <input 
          type="number" 
          value={valueField} 
          onChange={e => setValueField(parseFloat(e.target.value))}
          className="w-full h-8 px-2 border border-lightblue rounded"
        />
      </div>
      <div className="flex-1 m-2 mt-10">
        <button 
          className="w-full h-8 px-2 border border-blue rounded bg-lightblue bg-blue text-white" 
          onClick={handleAddEvent}
        >
          Adicionar
        </button>
      </div>
    </div>
  );
}
