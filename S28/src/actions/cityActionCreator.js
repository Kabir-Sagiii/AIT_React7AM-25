const cityActionCreator = (city) => {
  return {
    type: "CITY",
    payload: city,
  };
};

export default cityActionCreator;
