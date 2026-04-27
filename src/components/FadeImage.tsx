'use client';

import { useState, useEffect, useRef } from 'react';

type Props = React.ImgHTMLAttributes<HTMLImageElement>;

export default function FadeImage({ className, ...props }: Props) {
  const ref = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (ref.current?.complete) setLoaded(true);
  }, []);

  return (
    <img
      ref={ref}
      {...props}
      onLoad={() => setLoaded(true)}
      className={`transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'} ${className ?? ''}`}
    />
  );
}
