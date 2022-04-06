const five = 5;

const fetchAPI = async (token, timeAsks = five) => {
  const url = `https://opentdb.com/api.php?amount=${timeAsks}&token=${token}`;
  const response = await fetch(url);
  const data = response.json();

  return response.ok ? Promise.resolve(data) : Promise.reject(data);
};

export default fetchAPI;

// https://opentdb.com/api.php?amount=${quantidade-de-perguntas-retornadas}&token=${seu-token-aqui}

// Recomendação
// https://opentdb.com/api.php?amount=5&token=${seu-token-aqui}
