import React, { useState } from "react";
import { BsPencil } from "react-icons/bs";

const AddMove = () => {
  let count = 1;
  const [arr1, setArr1] = useState([["Краснодар0", "2022-03-22", "8:00"]]);
  const [pen, setPen] = useState(true);

  return (
    <>
      <div className='mt-6 flex flex-row'>
        <form className='relative max-w-[60%] pb-[60px]' id='form2'>
          <h2 className='text-black text-lg mb-4'>
            Добавить перемещения вне графика
          </h2>
          <div className='mt-4 flex justify-between'>
            <p className='text-black text-base mr-6 inline-block'>
              Выбериет склад
            </p>
            <select
              name='wareHouse2'
              id='wareHouse2'
              className='cursor-pointer inline-block
              w-[400px] p-3 bg-slate-100 border rounded-md'
            >
              <option value='Краснодар'>Краснодар</option>
              <option value='Ставрополь'>Ставрополь</option>
              <option value='Москва' selected>
                Москва
              </option>
              <option value='Белгород'>Белгород</option>
            </select>
          </div>
          <div className='mt-4 flex justify-between'>
            <p className='text-black text-base mr-6 inline-block'>
              Выбериет дату
            </p>
            <input
              type='date'
              id='date3'
              className='cursor-pointer w-[150px] p-2 border bg-slate-100 rounded-md'
            />
          </div>
          <div className='mt-4 flex justify-between'>
            <p className='text-black text-base mr-6 inline-block'>Волна</p>
            <select
              name='wave'
              id='wave'
              className='cursor-pointer inline-block
              w-[400px] p-3 bg-slate-100 border rounded-md'
            >
              <option value='8:00' selected>
                8:00
              </option>
              <option value='12:00'>12:00</option>
              <option value='16:00'>16:00</option>
              <option value='20:00'>20:00</option>
            </select>
          </div>
          <div
            onClick={(e) => {
              e.preventDefault();
              count++;
              const form2 = document.querySelector("#form2");
              const ware2 = form2.querySelector('[name="wareHouse2"]');
              const date3 = form2.querySelector("#date3");
              const wave = form2.querySelector("#wave");
              ware2.value != "" &&
                setArr1((prev) => [
                  ...prev,
                  [`${ware2.value}${count}`, `${date3.value}`, `${wave.value}`],
                ]);
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
                <th className=' border border-gray-500 p-1'>Дата</th>
                <th className=' border border-gray-500 p-1'>Волна</th>
              </tr>
            </thead>
            <tbody>
              {Array.from(arr1).map((item, index) => (
                <tr key={`${item[0]}${index}`}>
                  <td className='px-3 border border-gray-500'>
                    <input
                      id={`${item[0]}${index}1`}
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
                  <td className='px-3 border border-gray-500'>
                    <input
                      id={`${item[0]}${index}date1`}
                      className='placeholder:text-black'
                      type='text'
                      disabled
                      placeholder={item[1]}
                      onFocus={(e) => (e.target.value = item[1])}
                    />
                  </td>
                  <td className='px-3 border border-gray-500 relative'>
                    <input
                      id={`${item[0]}${index}wave`}
                      className='placeholder:text-black'
                      type='text'
                      disabled
                      placeholder={item[2]}
                      onFocus={(e) => (e.target.value = item[2])}
                    />
                    <BsPencil
                      onClick={() => {
                        setPen((prev) => !prev);
                        const rowData = document.querySelector(
                          `#${item[0]}${index}date1`
                        );
                        const rowWare = document.querySelector(
                          `#${item[0]}${index}1`
                        );
                        const rowWave = document.querySelector(
                          `#${item[0]}${index}wave`
                        );
                        rowData.disabled = pen ? false : true;
                        rowWare.disabled = pen ? false : true;
                        rowWave.disabled = pen ? false : true;
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

export default AddMove;
