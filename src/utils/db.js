import React, { useEffect, useReducer } from 'react';
import { RealtimeClient } from '@supabase/realtime-js';
import { createClient } from '@supabase/supabase-js';

const realtimeClient = new RealtimeClient('wss://ajgdwfuugrundkwyfofw.supabase.co/realtime/v1');

const supabaseUrl = 'https://ajgdwfuugrundkwyfofw.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFqZ2R3ZnV1Z3J1bmRrd3lmb2Z3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDc4MTQwMzMsImV4cCI6MTk2MzM5MDAzM30.hpZlynNFHmObJ84nVjTAju6VmvuHkm5Jum4Odd6YvzI'
const supabase = createClient(supabaseUrl, supabaseKey)

const initialDBState = {
  isSocketOpened: false,
  isBombed: false,
  airAlerts: [],
  numberOfBombs: 1200,
  peopleDisplaced: 10000000,
  civiliansKilled: 3000,
  childrenKilled: 160,
  russiansSupportWar: 71,
  oilMoney: 21,
  refugeesCount: 5000000,
  peopleKidnapped: 50000,
  clinicsDestroyed: 700,
  economyDamage: 1
};

const reducer = (state, action) => {
  console.log({ action });
  switch (action.type) {
    case 'toggleIsBombed':
      return {
        ...state,
        isBombed: !state.isBombed,
      };
      break;
    case 'onSetAirAlerts':
      return {
        ...state,
        airAlerts: action.airAlerts,
      }
      break;
    case 'onUpdateAirAlerts':
      return {
        ...state,
        airAlerts: [...state.airAlerts, action.airAlert],
      }
      break;
    case 'onSocketOpened':
      return {
        ...state,
        isSocketOpened: true,
      }
      break;
    case 'onSocketClosed':
      return {
        ...state,
        isSocketOpened: false,
      }
      break;
    case 'setState':
      return {
        isBombed: state.isBombed,
        ...action.stats,
      };
      break;
    default:
      break;
  }
}

export const useData = () => {
  const [state, dispatch] = useReducer(reducer, initialDBState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const date = new Date()
        const dayAgo = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate() - 1}`;

        const { data: airAlerts, error } = await supabase
          .from('air_alerts')
          .select('*')
          .gte('created_at', dayAgo);

        if (!error) {
          dispatch({
            type: 'onSetAirAlerts',
            airAlerts: airAlerts,
          })
        }

        supabase
          .from('air_alerts')
          .on('INSERT', payload => {
            if (!payload.errors) {
              dispatch({
                type: 'onUpdateAirAlerts',
                airAlert: payload.new,
              })
              console.log('Insert received!', payload)
            }
          })
          .subscribe()
      } catch (er) {
        console.warn("Failed to fetch data", er);
      }
    }

    fetchData();   
    
    return () => supabase.removeAllSubscriptions();
  }, []);

  const allAirAlerts = (state.airAlerts || []).filter(alert => alert.isBombed);
  const totalAirAlerts = allAirAlerts.length;
  const uniqueTags = allAirAlerts.map(alert => alert.areaTag).filter((tag, index, self) => self.indexOf(tag) === index);

  const timeOffset = new Date().getTime() - 8 * 60 * 60 * 1000;
  const currentlyBombedRegions = {};
  
  (state.airAlerts || []).filter(alert => {
    return new Date(alert.created_at).getTime() > timeOffset;
  }).forEach(alert => {
    if (!alert.areaTag) {
      return;
    }

    if (alert.isBombed) {
      currentlyBombedRegions[alert.areaTag] = alert;
    }
    else {
      delete currentlyBombedRegions[alert.areaTag];
    }
  });

  const isBombed = Object.keys(currentlyBombedRegions).length > 0;

  const result = {
    state,
    totalAirAlerts,
    uniqueTags,
    currentlyBombedRegions,
    isBombed,
  }

  console.log({ result });

  return result;
}
