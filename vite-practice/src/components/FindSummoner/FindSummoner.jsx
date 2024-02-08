import React, { useEffect, useState } from "react";

const delay = (ms) => {
  return new Promise((res) => {
    setTimeout(() => {
      res();
    }, ms);
  });
};

export const FindSummoner = () => {
  const [summonerNameInput, setSummonerInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [summonerData, setSummonerData] = useState([]);

  console.log("FindSummoner", isLoading);

  const handleSummonerSearch = async () => {
    if (isLoading) return;

    const API_KEY = "RGAPI-a69ff3d5-41c8-4006-a547-6fc50c069673";

    try {
      setIsLoading(true);
      console.log(summonerNameInput);
      const summonerResponse = await fetch(
        `https://eun1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerNameInput}?api_key=${API_KEY}`
      );

      // await delay(2222)

      if (summonerResponse.ok) {
        const data = await summonerResponse.json();

        setSummonerData(data);
      }
    } catch (err) {
      console.log(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (event) => setSummonerInput(event.target.value);

  if (isLoading) return <>Loading... </>;

  return (
    <div>
      <input
        type="text"
        onChange={handleInputChange}
        value={summonerNameInput}
      />
      <button onClick={handleSummonerSearch}>SEARCH</button>
      <div>{summonerData.summonerLevel}</div>
    </div>
  );
};
