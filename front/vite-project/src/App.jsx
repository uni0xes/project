import { useState } from 'react' //для хранения состояния объекта
import { useEffect } from 'react' //для выполнения запроса к серверу
import axios from 'axios' //библиотека http запросов

function App() {

  const [tableText, setTabletext] = useState('') //tableText - отображается на странице, setTabletext - функция для изменения tableText, useState('') - начальное значение пустая строка

  useEffect(() => {
    axios.get('http://localhost:5000/api/adress') //отправка гет запроса
    .then(res => { //если запрос проходит, то выполняется 
      setTabletext(res.data.tableText);
    }
  )
  .catch(err => //если запрос не проходит, в консоль выходит ошибка
    console.log(err)
  )
  }, []) // [] - ставится, чтобы код выполнялся один раз после первого рендера

  return (
    <>
      <p>{tableText}</p> 
    </>
  )
}

export default App
