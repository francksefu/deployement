import '../App.css';
import { PropTypes } from 'prop-types';
import { useState } from 'react';
import calculate from '../logic/calculate';

function Calculator() {
  const [result, setResult] = useState({});
  const handleClick = (e) => {
    setResult(calculate(result, e.target.textContent));
  };
  const myStyle = {
    marginTop: '3%',
    textAlign: 'center',
    padding: '10px',
  };
  return (
    <>
      <section>
        <h2>Calculator</h2>
        <p style={myStyle}>Let&apos; do some math : </p>
        <div className="tableau">{result.next === null ? result.total : result.next}</div>
        <div className="ligne">
          <Span classons="aucun" valeur="AC" cliquons={handleClick} />
          <Span classons="aucun" valeur="+/-" cliquons={handleClick} />
          <Span classons="aucun" valeur="%" cliquons={handleClick} />
          <Span classons="orange" valeur="÷" cliquons={handleClick} />
        </div>
        <div className="ligne">
          <Span classons="aucun" valeur="7" cliquons={handleClick} />
          <Span classons="aucun" valeur="8" cliquons={handleClick} />
          <Span classons="aucun" valeur="9" cliquons={handleClick} />
          <Span classons="orange" valeur="x" cliquons={handleClick} />
        </div>
        <div className="ligne">
          <Span classons="aucun" valeur="4" cliquons={handleClick} />
          <Span classons="aucun" valeur="5" cliquons={handleClick} />
          <Span classons="aucun" valeur="6" cliquons={handleClick} />
          <Span classons="orange" valeur="-" cliquons={handleClick} />
        </div>
        <div className="ligne">
          <Span classons="aucun" valeur="1" cliquons={handleClick} />
          <Span classons="aucun" valeur="2" cliquons={handleClick} />
          <Span classons="aucun" valeur="3" cliquons={handleClick} />
          <Span classons="orange" valeur="+" cliquons={handleClick} />
        </div>
        <div className="ligne">
          <Span classons="deux" valeur="0" cliquons={handleClick} />
          <Span classons="dernier" valeur="." cliquons={handleClick} />
          <Span classons="dernier orange" valeur="=" cliquons={handleClick} />
        </div>
      </section>

    </>
  );
}

const Span = ({ classons, cliquons, valeur }) => (
  <button type="button" className={classons} onClick={cliquons}>
    {valeur}
  </button>
);

Span.propTypes = {
  classons: PropTypes.string.isRequired,
  cliquons: PropTypes.func.isRequired,
  valeur: PropTypes.string.isRequired,
};

export default Calculator;
