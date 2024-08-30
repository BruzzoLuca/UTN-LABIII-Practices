import React from 'react';
import PropTypes from 'prop-types';


const Table = ({netIncomes}) => {
  
    return (
    <table>
      <thead>
        <tr>
          <th>Marca</th>
          <th>Ingreso neto</th>
        </tr>
      </thead>
      
      <tbody>
        {netIncomes.map((item,i) => (
          <tr key={i}>
            <td>{item.brand}</td>
            <td>{item.income}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  netIncomes: PropTypes.arrayOf(
    PropTypes.shape({
      brand: PropTypes.string.isRequired, // Validamos que item.brand sea un string y obligatorio
      income: PropTypes.number.isRequired, // Validamos que item.income sea un número y obligatorio
    })
  ).isRequired,
};

export default Table;