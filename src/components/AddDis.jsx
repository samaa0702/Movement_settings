import React, { useState } from "react";
import { BsPencil } from "react-icons/bs";

const AddDis = () => {
  let count = 1;
  const [arr, setArr] = useState([["Краснодар0", "2022-03-22 - 2022-04-22"]]);
  const [pen, setPen] = useState(true);

  return (
    <>
      <div className='mt-6 flex flex-row'>
        <form className='relative max-w-[60%] pb-[60px]' id='form1'>
          <h2 className='text-black text-lg mb-4'>
            Добавить отключение регулярного перемещения
          </h2>
          <div className='mt-4 flex justify-between'>
            <p className='text-black text-base mr-6 inline-block'>
              Выбериет склад
            </p>
            <select
              name='wareHouse1'
              id='wareHouse1'
              className={`cursor-pointer inline-block
              w-[400px] p-3 bg-slate-100 border rounded-md`}
            >
              <option value='' disabled selected hidden>
                Не выбрано
              </option>
              <option value='Краснодар'>Краснодар</option>
              <option value='Ставрополь'>Ставрополь</option>
              <option value='Москва'>Москва</option>
              <option value='Белгород'>Белгород</option>
            </select>
          </div>
          <div className='mt-4 flex justify-between'>
            <p className='text-black text-base mr-6 inline-block'>
              Выбериет причину
            </p>
            <select
              name='cause'
              id='cause'
              className='inline-block cursor-pointer
              w-[400px] p-3 bg-slate-100 border rounded-md'
            >
              <option value='vacation'>Отпуск</option>
              <option value='medical'>Больничный</option>
              <option value='other'>Иная</option>
            </select>
          </div>
          <div className='mt-4 flex justify-between'>
            <p className='text-black text-base mr-6 inline-block'>
              Выбериет период
            </p>
            <div>
              <input
                id='date1'
                type='date'
                className='cursor-pointer w-[150px] p-2 border bg-slate-100 rounded-md'
              />
              <input
                id='date2'
                type='date'
                className='cursor-pointer w-[150px] p-2 border bg-slate-100 rounded-md ml-4'
              />
            </div>
          </div>
          <div
            onClick={(e) => {
              e.preventDefault();
              const form = document.querySelector("#form1");
              const ware = form.querySelector('[name="wareHouse1"]');
              const date1 = form.querySelector("#date1");
              const date2 = form.querySelector("#date2");
              ware.value != "" &&
                setArr((prev) => [
                  ...prev,
                  [`${ware.value}${count}`, `${date1.value} - ${date2.value}`],
                ]);
              count++;
            }}
            className='p-2 bg-blue-500 text-white cursor-pointer w-[100px] rounded-2xl text-center absolute bottom-0 right-0'
          >
            Добавить
          </div>
        </form>
        <div className='ml-10 mt-[50px]'>
          <p>Все запланированные отключения регулярных перемещений</p>
          <table className='mt-3'>
            <thead>
              <tr className='bg-gray-200 border border-gray-500'>
                <th className=' border border-gray-500 p-1'>Склад</th>
                <th className=' border border-gray-500 p-1'>Период</th>
              </tr>
            </thead>
            <tbody>
              {Array.from(arr).map((item, index) => (
                <tr key={`${item[0]}${index}`}>
                  <td className='px-3 border border-gray-500'>
                    <input
                      id={`${item[0]}${index}`}
                      className='placeholder:text-black placeholder:text-center text-center'
                      disabled
                      type='text'
                      placeholder={item[0].substring(0, item[0].length - 1)}
                      onFocus={(e) =>
                        (e.target.value = item[0].substring(
                          0,
                          item[0].length - 1
                        ))
                      }
                    />
                  </td>
                  <td className='px-3 border border-gray-500 relative'>
                    <input
                      id={`${item[0]}${index}date`}
                      className='placeholder:text-black'
                      type='text'
                      disabled
                      placeholder={item[1]}
                      onFocus={(e) => (e.target.value = item[1])}
                    />
                    <BsPencil
                      onClick={() => {
                        setPen((prev) => !prev);
                        const rowData = document.querySelector(
                          `#${item[0]}${index}date`
                        );
                        const rowWare = document.querySelector(
                          `#${item[0]}${index}`
                        );
                        rowData.disabled = pen ? false : true;
                        rowWare.disabled = pen ? false : true;
                      }}
                      className='cursor-pointer absolute top-[4px] right-[-20px]'
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AddDis;
