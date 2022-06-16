import { useCallback, useState } from "react";
import styled from "styled-components";

const NUMBER_OF_VISIBLE_OPTIONS = 5;

const StyledSelect = styled.select`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 145px; /* TODO make better */

  // Center horizontally
  margin-left: auto;
  margin-right: auto;

  border: 1px solid black;
  width: 250px;
  max-height: 200px;
  height: 100%;
  -webkit-appearance: none;
`;

const StyledOption = styled.option`
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
      size={NUMBER_OF_VISIBLE_OPTIONS}
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
    </StyledSelect>
  );
};

export default CitySelector;
