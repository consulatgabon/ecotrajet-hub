
import { useState, useEffect } from 'react';

export const useDashboardData = () => {
  // Mock data for charts
  const [userActivityData, setUserActivityData] = useState([
    { name: 'Jan', Actifs: 4000, Nouveaux: 2400 },
    { name: 'Fév', Actifs: 3000, Nouveaux: 1398 },
    { name: 'Mar', Actifs: 2000, Nouveaux: 9800 },
    { name: 'Avr', Actifs: 2780, Nouveaux: 3908 },
    { name: 'Mai', Actifs: 1890, Nouveaux: 4800 },
    { name: 'Juin', Actifs: 2390, Nouveaux: 3800 },
    { name: 'Juil', Actifs: 3490, Nouveaux: 4300 },
  ]);

  const [emissionsData, setEmissionsData] = useState([
    { name: 'Jan', Économisées: 1200 },
    { name: 'Fév', Économisées: 1900 },
    { name: 'Mar', Économisées: 2400 },
    { name: 'Avr', Économisées: 2700 },
    { name: 'Mai', Économisées: 3500 },
    { name: 'Juin', Économisées: 4100 },
    { name: 'Juil', Économisées: 4900 },
  ]);

  const [tripsByTimeData, setTripsByTimeData] = useState([
    { hour: '6h', trips: 1200 },
    { hour: '8h', trips: 2900 },
    { hour: '10h', trips: 1700 },
    { hour: '12h', trips: 1500 },
    { hour: '14h', trips: 1800 },
    { hour: '16h', trips: 2800 },
    { hour: '18h', trips: 3200 },
    { hour: '20h', trips: 1800 },
    { hour: '22h', trips: 1000 },
  ]);

  const chartConfig = {
    users: {
      label: "Utilisateurs",
      theme: { light: "#10b981", dark: "#10b981" },
    },
    newUsers: {
      label: "Nouveaux",
      theme: { light: "#60a5fa", dark: "#60a5fa" },
    },
    emissions: {
      label: "CO2 (kg)",
      theme: { light: "#22c55e", dark: "#22c55e" },
    },
    trips: {
      label: "Trajets",
      theme: { light: "#f59e0b", dark: "#f59e0b" },
    },
  };

  // Add the refetchData function to simulate data refresh
  const refetchData = async () => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        // Simulate updated data with small variations
        setUserActivityData(prev => 
          prev.map(item => ({
            ...item,
            Actifs: Math.floor(item.Actifs * (1 + (Math.random() * 0.1 - 0.05))),
            Nouveaux: Math.floor(item.Nouveaux * (1 + (Math.random() * 0.1 - 0.05)))
          }))
        );
        
        setEmissionsData(prev => 
          prev.map(item => ({
            ...item,
            Économisées: Math.floor(item.Économisées * (1 + (Math.random() * 0.1 - 0.05)))
          }))
        );
        
        setTripsByTimeData(prev => 
          prev.map(item => ({
            ...item,
            trips: Math.floor(item.trips * (1 + (Math.random() * 0.1 - 0.05)))
          }))
        );
        
        resolve();
      }, 800);
    });
  };

  return {
    userActivityData,
    emissionsData,
    tripsByTimeData,
    chartConfig,
    refetchData
  };
};
