import { useEffect, useState } from 'react'

export default function TypeWriter({text,speed=20}:{text:string, speed?:number}) {
    const [displayText, setDisplayText] = useState<string>('');
  
    useEffect(() => {
      let i = 0;
      const typingInterval = setInterval(() => {
        if (i < text.length) {
          setDisplayText(prevText => prevText + text.charAt(i));
          i++;
        } else {
          clearInterval(typingInterval);
        }
      }, speed);
  
      return () => {
        clearInterval(typingInterval);
      };
    }, [text, speed]);
  
    return <span className="">{displayText}</span>;
}