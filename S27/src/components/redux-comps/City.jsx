import { useRef } from "react";
import cityActionCreator from "../../actions/cityActionCreator";
import { useDispatch } from "react-redux";
function City() {
  let selectRef = useRef();
  const dispatch = useDispatch();

  const getCity = () => {
    dispatch(cityActionCreator(selectRef.current.value));
  };

  return (
    <div style={{ padding: "20px 50px" }}>
      <h2>Select the City</h2>
      <select ref={selectRef} onChange={getCity}>
        <option value="hyderabad">Hyderabad</option>
        <option value="pune">Pune</option>
        <option value="bangalore">Banglore</option>
        <option value="chennai">Chennai</option>
        <option value="mumbai">Mumbai</option>
      </select>
    </div>
  );
}

export default City;
