import { useState, useCallback, useEffect, useRef } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllow, setNumberAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");
  const [buttonText, setButtonText] = useState("Copy")

  // use ref hook
  const passwordRef = useRef(null);

  // button handel 
  const handelButtonClick = () => {
    copyPasswordToClipboard();
    changeText();
  }

  const changeText = () => {
    setButtonText("Copied!")
  }


  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllow) {
      str += "0123456789";
    }
    if (charAllow) {
      str += "!@#$%^&*(){}[]+=";
    }

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    // 
    setPassword(pass);

  }, [length, numberAllow, charAllow, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select(),
      passwordRef.current?.setSelectionRange(0, 50)
    window.navigator.clipboard.writeText(password);
  }, [password])

  useEffect(() => { passwordGenerator() }, [length, numberAllow, charAllow, passwordGenerator])

  return (
    <>
      <h1 className='text-center text-xl text-white mt-5'>Password Generator</h1>
      {/* You would add your input fields and display here */}
      <div className='w-full relative max-w-md mx-auto shadow-md rounded-2xl py-5 px-4 my-8 text-red-500 bg-gray-300'>
        <div className="flex shadow-md relative  rounded-lg overflow-hidden mb-4 mt-5">
          <input type="text"
            value={password}
            className='outline-none w-full py-2 px-3 bg-gray-100 '
            placeholder='Password'
            readOnly
            ref={passwordRef} />
          <button
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 cursor-pointer active:'
            onClick={handelButtonClick}
          >
            {buttonText}
          </button>
        </div>
        <div className='flex text-sm gap-x-2 '>
          <div className='flex items-center gap-x-1'>
            <input type="range" name="" id=""
              min={0}
              max={50}
              value={length}
              className='cursor-pointer '
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label htmlFor="LengthInput">Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" name=""
              defaultChecked={numberAllow}
              id="numberInput"
              onChange={() => {
                setNumberAllow((prev) => !prev);
              }} />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" name=""
              defaultChecked={charAllow}
              id="charInput"
              onChange={() => {
                setCharAllow((prev) => !prev);
              }} />
            <label htmlFor="charInput">Charctor</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;