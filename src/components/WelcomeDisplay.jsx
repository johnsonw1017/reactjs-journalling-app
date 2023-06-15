import { useState, useEffect } from 'react';

export default function WelcomeDisplay() {
    const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    const [timeOfDay, setTimeOfDay] = useState('');
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        const currentTime = new Date();
        setTime(currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
  
        const hour = currentTime.getHours();
        let timeOfDay = hour < 12 && hour >= 3 ? "Morning" : hour < 18 ? "Afternoon" : "Evening";
        setTimeOfDay(timeOfDay);
      }, 1000);
  
      return () => {
        clearInterval(intervalId);
      };
    }, []);
  
    return (
      <div>
        <h1>{time}</h1>
        <p>Good {timeOfDay}!</p>
      </div>
    );
  }