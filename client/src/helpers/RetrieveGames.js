const RetrieveGames = () => {
  fetch(`/retrieveGames`)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((jsonRes) => jsonRes);
};

export default RetrieveGames;
