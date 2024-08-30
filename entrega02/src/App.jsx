import './App.css'
import React from 'react';
import Table from './components/table/Table';

const netIncomes = [
  { brand: 'McDonalds', income: 1291283 },
  { brand: 'Burger King', income: 1927361 },
  { brand: 'KFC', income: 1098463 }
];


function App () {

  const totalIncome = netIncomes.reduce((acc, brand) => acc + brand.income, 0); //Uso del método reduce para sacar sacar la suma de los promedios 
  
  const averageIncome = totalIncome / netIncomes.length;                      

  return (
    <div>
      <h2>Tabla de ingresos netos</h2>
      <Table netIncomes={netIncomes} />
      <p> Promedio de ingreso neto: {averageIncome} </p>
    </div>
  );
};

export default App;