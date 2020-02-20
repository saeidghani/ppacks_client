import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function useFetchData(
  apiEndpoint,
  errMsg = 'The requested data was not found'
) {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState();
  const [error, setError] = useState('');
  let _isMounted = false;

  useEffect(() => {
    _isMounted = true;
    const fetchData = async () => {
      try {
        const { data } = await axios.get(apiEndpoint);
        if (_isMounted) {
          setLoading(false);
          setResult(data.data.data);
        }
      } catch (error) {
        if (_isMounted) {
          setLoading(false);
          setError(error);
        }
        console.log('expected err happened', error);
        if (error.response && error.response.status === 404) {
        }
      }
    };

    fetchData();

    return () => (_isMounted = false);
  }, [apiEndpoint]);

  return {
    loading,
    result,
    error
  };
}
