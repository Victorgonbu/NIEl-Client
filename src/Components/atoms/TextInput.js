function TextInput({placeholder, handleChange, hideText, value}) {
  return(
    <input
    value={value}
    placeholder={placeholder} 
    type={hideText ? "password" : "text"} 
    onChange={(e) => {handleChange(e.value)}}
    />
  );
};

export default TextInput;