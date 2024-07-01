
import { Item } from '../../types/Item';
import { TableItem } from '../TableItem';

type Props = {
  list: Item[];
}

export function TableArea({ list }: Props) {
  return ( 
    <div className="overflow-x-auto p-5 mt-6 shadow-custom rounded-lg">
      <table className="w-full">
        <thead>
          <tr className='text-left'>
            <th className="py-2 w-[50px]">Data</th>
            <th className="py-2 w-[130px]">Categoria</th>
            <th className="py-2 w-[150px]">Título</th>
            <th className="py-2 w-[40px]">Valor</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => (
           <TableItem key={index} item={item} isLast={index === list.length - 1} />
          ))}
        </tbody>
      </table>
    </div>
  );
}