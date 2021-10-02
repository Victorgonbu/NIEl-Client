import Button from '../atoms/Button';
import {useRef} from 'react';

function Dropdown({children}) {
  const dropdownRef = useRef(null);
  const handleDropdown = () => {
    dropdownRef.current.classList.toggle('hidden')
  };
  return(
    <div className="dropdown">
      <Button styleClass="header-button dropdown-button" icon="fas fa-bars" handleClick={handleDropdown} />
      <ul ref={dropdownRef} className="dropdown-list hidden">
        {children}
      </ul>
    </div>
  )
};

export default Dropdown;