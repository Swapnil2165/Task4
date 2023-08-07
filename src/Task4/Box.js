import React, { useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart';

function App() {
  const [box1Value, setBox1Value] = useState('');
  const [box2Value, setBox2Value] = useState('');
  const [validationMessage1, setValidationMessage1] = useState('');
  const [validationMessage2, setValidationMessage2] = useState('');
  const [showChart, setShowChart] = useState(false);
  const [chartData, setChartData] = useState([]);

  const handleBox1Change = (e) => {
    const value = e.target.value;
    if (value <= 100) {
      setBox1Value(value);
      setBox2Value(100 - value);
      setValidationMessage1('');
    } else {
      setValidationMessage1('Incorrect Value');
      setTimeout(() => {
        setValidationMessage1('');
      }, 2000);
    }
  };

  const handleBox2Change = (e) => {
    const value = e.target.value;
    if (value <= 100) {
      setBox2Value(value);
      setBox1Value(100 - value);
      setValidationMessage2('');
    } else {
      setValidationMessage2('Incorrect Value');
      setTimeout(() => {
        setValidationMessage2('');
      }, 2000);
    }
  };

  const handleChartButtonClick = () => {
    const newData = [
      { title: 'Box 1', value: parseInt(box1Value), color: '#F46300' },
      { title: 'Box 2', value: parseInt(box2Value), color: '#44DE28' },
    ];
    setChartData(newData);
    setShowChart(true);
  };

  return (
    <div className="container mt-5">
       <div className='row'>
          <div className='card center'>
             <div className='card-body center'>
                <div class="row">
                     <div class="form-group col-sm-6">
                          <label for="inputBox">Box 1</label>
                          <input
                             id="inputBox"
                             type="number"
                             value={box1Value}
                             onChange={handleBox1Change}
                             error={validationMessage1 !== ''}
                             helperText={validationMessage1}
                             className="text-field form-control"
                              />
                       </div>
                        <div class="form-group col-sm-6">
                            <label for="inputBox2">Box 2</label>
                            <input
                             id="inputBox2" 
                             type="number"
                             value={box2Value}
                             onChange={handleBox2Change}
                             error={validationMessage2 !== ''}
                             helperText={validationMessage2}
                            className="text-field form-control"
                               />
                       </div>
                       <div className='form-group col-sm-6'>
                         <button variant="primary"  onClick={handleChartButtonClick} className="btn-primary">
                          Create Chart
                          </button>
                      </div>
                </div>
                <div className='row'>
                  <div className='col-sm-4 ml-3'>
                    {showChart && <PieChart data={chartData} className="chart" />}
                  </div>
                </div>
            </div>
         </div>
      </div>
    </div>
  );
}

export default App;