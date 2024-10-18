'use client';

import { useEffect, useState } from 'react';
import CountUp from 'react-countup';

export function AttendanceCounter() {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    fetch('/api/attendance', {
      method: 'GET',
      cache: 'no-store',
    })
      .then((response) => response.json())
      .then((data) => setCount(data.count))
      .catch((error) =>
        console.error('Error fetching attendance count:', error)
      );
    setIsVisible(true);
  }, []);

  return (
    <div className="mb-8 text-center">
      <p className="text-2xl mb-2">Attendees so far:</p>
      <div className="text-6xl font-bold">
        {isVisible ? <CountUp end={count} duration={2.5} separator="," /> : '0'}
      </div>
    </div>
  );
}
