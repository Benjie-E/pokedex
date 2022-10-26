import { typeOptions } from "../api/pokedex-api";

type TypeProps = {
  type: typeOptions;
};

const TypeObject: React.FC<TypeProps> = ({ type }) => {
  return (<span className={"type " + `${type}`}/>);
};

export default TypeObject;