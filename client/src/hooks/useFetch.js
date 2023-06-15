import { useState, useEffect } from 'react';
import { request } from '../request';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await request.get(url);
        setData(res.data.data);
        setIsLoading(false);
        
      } catch (error) {
        setError(error.message);
      }
      
    };
    fetchData();
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
