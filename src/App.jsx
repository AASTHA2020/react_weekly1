import React, { useState } from 'react';

const App =() => {
  const[length, setLength] = useState(8);
  const[includeUppercase, setIncludeUppercase] = useState(false);
  const[includeNumbers, setIncludeNumbers] = useState(false);
  const[includeSymbols, setIncludeSymbols] = useState(false);
  const[password, setPassword] = useState('');


  const generatePassword =() => {
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz'; // Lowercase characters
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // Uppercase characters
    const numbers = '0123456789'; // Numerical characters
    const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-='; // Symbol characters
    let characters = lowerCase;


    if(includeUppercase)characters += upperCase;
    if(includeNumbers)characters += numbers;
    if(includeSymbols)characters += symbols;

    let generatePassword = '';
    for(let i =0; i< length; i++){
      const randomIndex = Math.floor(Math.random() * characters.length);
      generatePassword += characters[randomIndex];
    }
    setPassword(generatePassword);

  };
   
  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert('Password copied to clipboard!');

  };

  return(
    <div className="container">
     <h1>Password Generator⚙️</h1>
     <div>
      <label >
        Length:
        <input type="number"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              min="4"
              max = "20"
        />
      </label>
     </div>
     <div>
      <label>
        <input type="checkbox"
        checked ={includeUppercase}
        onChange={(e) => setIncludeUppercase(e.target.checked)}

        />
        Include Uppercase
      </label>
     </div>
    <div>
      <label >
        <input type="checkbox"
        checked= {includeNumbers}
        onChange={(e)=>setIncludeNumbers(e.target.checked)}
         />
         Include Numbers
      </label>
    </div>
    <div>
      <label >
        <input type="checkbox"
        checked= {includeSymbols}
        onChange={(e)=>setIncludeSymbols(e.target.checked)}
         />
         Include Symbols
      </label>
    </div>
      <button onClick={generatePassword}>Generate Password</button>
       
       <p>{password}</p>
       <button onClick = {copyToClipboard}>Copy</button>
    </div>
  );

};

export default App;


