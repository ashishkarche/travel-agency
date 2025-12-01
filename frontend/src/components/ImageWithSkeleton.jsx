// components/ImageWithSkeleton.jsx
import { useState } from "react";
import Skeleton from "./Skeleton";

export default function ImageWithSkeleton({ src, alt, className }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative ${className}`}>
      {!loaded && <Skeleton className="absolute inset-0 w-full h-full" />}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  );
}
