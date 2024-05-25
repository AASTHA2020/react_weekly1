import React, { useState } from 'react';

const App = () => {
  // State variables
  const [length, setLength] = useState(8); // Password length
  const [includeUppercase, setIncludeUppercase] = useState(false); // Include uppercase letters
  const [includeNumbers, setIncludeNumbers] = useState(false); // Include numbers
  const [includeSymbols, setIncludeSymbols] = useState(false); // Include symbols
  const [password, setPassword] = useState(''); // Generated password

  // Function to generate password
  const generatePassword = () => {
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz'; // Lowercase letters
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // Uppercase letters
    const numbers = '0123456789'; // Numbers
    const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-='; // Symbols
    let characters = lowerCase; // Start with lowercase letters

    // Add other character sets based on user selection
    if (includeUppercase) characters += upperCase;
    if (includeNumbers) characters += numbers;
    if (includeSymbols) characters += symbols;

    let generatedPassword = ''; // Initialize an empty string for the password
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length); // Get a random index
      generatedPassword += characters[randomIndex]; // Add the character at the random index to the password
    }

    setPassword(generatedPassword); // Update the password state with the generated password
  };

  // Function to copy password to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(password); // Copy the password to clipboard
    alert('Password copied to clipboard!'); // Alert the user
  };

  return (
    <div className="container">
      <h1>Password Generator</h1>
      <div>
        <label>
          Length:
          <input 
            type="number" 
            value={length} 
            onChange={(e) => setLength(e.target.value)} // Update length state
            min="4" 
            max="20" 
          />
        </label>
      </div>
      <div>
        <label>
          <input 
            type="checkbox" 
            checked={includeUppercase} 
            onChange={(e) => setIncludeUppercase(e.target.checked)} // Update includeUppercase state
          />
          Include Uppercase
        </label>
      </div>
      <div>
        <label>
          <input 
            type="checkbox" 
            checked={includeNumbers} 
            onChange={(e) => setIncludeNumbers(e.target.checked)} // Update includeNumbers state
          />
          Include Numbers
        </label>
      </div>
      <div>
        <label>
          <input 
            type="checkbox" 
            checked={includeSymbols} 
            onChange={(e) => setIncludeSymbols(e.target.checked)} // Update includeSymbols state
          />
          Include Symbols
        </label>
      </div>
      <button onClick={generatePassword}>Generate Password</button>
      {password && (
        <div>
          <p>{password}</p>
          <button onClick={copyToClipboard}>Copy</button>
        </div>
      )}
    </div>
  );
};

export default App;
