import React, {useState} from 'react';

const App = () => {
  const [plan, setPlan] = useState('lite');

  const handleLiteChange = () => {
    setPlan('lite');
  };

  const handleProChange = () => {
    setPlan('pro');
  };
  const handleUltimateChange = () => {
    setPlan('ultimate');
  };
  const handle24hrsChange = () => {
    setPlan('24hrs');
  };

  return (
    <>
    <div className="border border-3 border-sky w-[900px] py-4 px-5
        text-GREEN-_100 text-lg font-semibold">
      <RadioButton
        label="Lite"
        value={plan === 'lite'}
        onChange={handleLiteChange}
      />
    </div>
    <div className="border border-3 border-sky w-[900px] py-4 px-5
        text-GREEN-_100 text-lg font-semibold mt-4">
         <RadioButton
        label="Pro"
        value={plan === 'pro'}
        onChange={handleProChange}
      />
    </div>
    <div className="border border-3 border-sky w-[900px] py-4 px-5
        text-GREEN-_100 text-lg font-semibold mt-4">
         <RadioButton
        label="Ultimate"
        value={plan === 'ultimate'}
        onChange={handleUltimateChange}
      />
    </div>
    <div className="border border-3 border-sky w-[900px] py-4 px-5
        text-GREEN-_100 text-lg font-semibold mt-4">
         <RadioButton
        label="24-Hours Plan"
        value={plan === '24hrs'}
        onChange={handle24hrsChange}
      />
    </div>
    </>
  );
};

const RadioButton = ({label, value, onChange }) => {
  return (
    <label >
      <input type="radio" checked={value} onChange={onChange}
      className="planAd"
       />
      {label}
    </label>
  );
};

export default App;