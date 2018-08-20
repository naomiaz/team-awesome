const getEntries = () => fetch('http://localhost:3001/api/time-entries')
  .then((response) => response.json());

export default getEntries;
