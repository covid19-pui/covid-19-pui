import { useState, useEffect } from 'react';

const EMPTY_STATES = [];
const EMPTY_COUNTIES = [];

async function fetchStates() {
  const res = await fetch('https://api.census.gov/data/2010/dec/sf1?get=NAME&for=state:*');
  return res.json().then(res => res.slice(1));
}

async function fetchCounties(stateId) {
  const res = await fetch(
    `https://api.census.gov/data/2010/dec/sf1?get=NAME&for=county:*&in=state:${stateId}`
  );
  return res.json().then(res => res.slice(1));
}

export function useStates() {
  const [data, setData] = useState({
    loading: true,
    error: null,
    states: EMPTY_STATES,
    stateId: {}
  });

  useEffect(() => {
    fetchStates()
      .then(states => {
        const stateId = states.reduce((map, state) => ({ ...map, [state[0]]: state[1] }), {});
        setData({ loading: false, errors: null, states, stateId });
      })
      .catch(error => setData({ loading: false, error, states: EMPTY_STATES, stateId: {} }));
  }, []);

  return data;
}

export function useCounties(stateId) {
  const [data, setData] = useState({ loading: false, error: null, counties: EMPTY_COUNTIES });

  useEffect(() => {
    if (stateId == null) return;

    setData(data => ({ ...data, loading: true, counties: EMPTY_COUNTIES }));
    fetchCounties(stateId)
      .then(counties => setData({ loading: false, error: null, counties }))
      .catch(error => setData({ loading: false, error, counties: EMPTY_COUNTIES }));
  }, [stateId]);

  return data;
}
