import { useEffect, useState } from 'react';

const useCharacters = () => {

  const [pageNumber, setPageNumber] = useState(1);
  const [characterResult, setCharacterResult] = useState([]);
  const { info, results } = characterResult;
  const api = `https://rickandmortyapi.com/api/character/?=${pageNumber}`;

  useEffect(() => {
    (async function () {
      const data = await fetch(api).then(res => res.json())
      setCharacterResult(data);

      return data;
    })();
  }, [api])

  return { info, results };
}

export default useCharacters;