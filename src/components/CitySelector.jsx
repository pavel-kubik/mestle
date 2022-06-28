import { useCallback, useState } from "react";
import styled from "styled-components";
import useShortcut from "../hooks/useShortcut";

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

  ${({ selected }) => selected && "background-color: lightgray;"}

  &:hover {
    background-color: #f3f3f3;
    cursor: pointer;
  }
`;

const CitySelector = ({
  options = [],
  setSelectedOption = (option) => {
    console.log("[CitySelector] TO BE IMPLEMENTED");
  },
}) => {
  const [localSelected, setLocalSelected] = useState(options[0]?.name);

  const handleClick = useCallback(
    (event) => {
      const cityToSelect =
        event.target?.attributes?.getNamedItem("value")?.value;

      if (cityToSelect) {
        setLocalSelected(cityToSelect);
        setSelectedOption(cityToSelect);
      }
    },
    [setSelectedOption]
  );

  useShortcut(
    "moveOptionUp",
    useCallback(() => {
      const index = options.findIndex(
        (option) => option?.name === localSelected
      );

      if (index <= 0) {
        return;
      }

      setLocalSelected(options[index - 1]?.name);
    }, [options, localSelected])
  );

  useShortcut(
    "moveOptionDown",
    useCallback(() => {
      const index = options.findIndex(
        (option) => option?.name === localSelected
      );

      if (index >= options.length - 1) {
        return;
      }

      setLocalSelected(options[index + 1]?.name);
    }, [options, localSelected])
  );

  useShortcut(
    "selectOption",
    useCallback(() => {
      if (localSelected) {
        setSelectedOption(localSelected);
      }
    }, [localSelected, setSelectedOption])
  );

  return (
    <StyledSelect
      name="cities"
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
