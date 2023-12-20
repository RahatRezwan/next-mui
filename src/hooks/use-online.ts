import { useState, useEffect } from 'react';

export function useOnlineStatus() {
   const [isOnline, setNetwork] = useState(navigator.onLine);
   useEffect(() => {
      window.addEventListener('offline', () => setNetwork(navigator.onLine));
      window.addEventListener('online', () => setNetwork(navigator.onLine));
   });
   return isOnline;
}
