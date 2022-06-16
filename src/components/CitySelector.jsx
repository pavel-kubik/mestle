import { useCallback, useState } from "react";
import styled from "styled-components";

const StyledSelect = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 145px; /* TODO make better */
  overflow-y: auto;

  // Center horizontally
  margin-left: auto;
  margin-right: auto;

  border: 1px solid black;
  width: 250px;
  max-height: 200px;
`;

const StyledOption = styled.div`
  text-align: center;
  font-weight: bold;
  padding: 5px;
  font-size: 16px;
`;

const CitySelector = ({
  options = [],
  setSelectedOption = (option) => {
    console.log("[CitySelector] TO BE IMPLEMENTED");
  },
}) => {
  const [localSelected, setLocalSelected] = useState(options[0]?.name);

  const handleChange = useCallback(
    (event) => setLocalSelected(event.target.value),
    []
  );

  const handleKeyUp = useCallback(
    (event) => {
      const keyPressed = event.keyCode || event.which;
      const isEnterKeyPressed = keyPressed === 13;
      if (isEnterKeyPressed && localSelected) {
        setSelectedOption(localSelected);
      }
    },
    [localSelected, setSelectedOption]
  );

  const handleClick = useCallback(() => {
    if (localSelected) {
      setSelectedOption(localSelected);
    }
  }, [localSelected, setSelectedOption]);

  return (
    <StyledSelect
      name="cities"
      onChange={handleChange}
      onKeyUp={handleKeyUp}
      onClick={handleClick}
      onDoubleClick={handleClick}
    >
      {options.map(({ name }) => (
        <StyledOption value={name} key={name} selected={name === localSelected}>
          {name}
        </StyledOption>
      ))}
      <optgroup label=""></optgroup>
    </StyledSelect>
  );
};

export default CitySelector;
