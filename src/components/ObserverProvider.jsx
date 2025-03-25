"use client";
import { Observer } from "tailwindcss-intersect";
import React from 'react';
import { useEffect } from "react";
 
export default function ObserverProvider({children}) {
  useEffect(() => {
    Observer.start();
  }, []);
 
  return <>{children}</>;
}