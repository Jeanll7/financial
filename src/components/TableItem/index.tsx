import { Item } from '../../types/Item';
import { categories } from '../../data/categories'

type Props = {
  item: Item;
  isLast: boolean;
}

export function TableItem({ item, isLast }: Props) {
  const rowClasses = `py-2 px-0 ${isLast ? '' : 'border-b'}`;
  
  // Função para formatar o valor monetário
  const formatCurrency = (value: number): string => {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  };

  // Obtém a cor da categoria
  const categoryColor = categories[item.category]?.color || 'gray';

  return (
    <tr className={rowClasses}>
      <td className="p-3 px-0">{item.date.toLocaleDateString()}</td>
      <td className={`py-[5px] px-[10px] text-white mt-2 rounded-md inline-block bg-${categoryColor}`}>
        {categories[item.category]?.title || item.category}
      </td>
      <td className="p-3 px-0">{item.title}</td>
      <td className={`p-3 px-0 ${categories[item.category].expense ? 'text-red' : 'text-green'}`}>
        {formatCurrency(item.value)}
      </td>
    </tr>
  );
}
