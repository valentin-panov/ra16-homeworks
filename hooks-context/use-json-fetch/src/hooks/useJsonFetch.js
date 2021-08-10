/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';

export default function useJsonFetch(url, opts) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { method = 'GET', content } = opts;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const request = await fetch(url, {
          method: method,
          headers: new Headers({ 'content-type': 'application/json' }),
          body: content ? JSON.stringify({ content }) : null,
        });
        if (!request.ok) {
          throw new Error(request.statusText);
        }
        const response = request.status === 200 ? await request.json() : null;
        setData(response);
        setError(null);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return [data, loading, error];
}
