"use client"
import React from "react"
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import Herohack from "./Herohack";
export default function HeroSection() {
  return(
    <ParallaxProvider>
      <Component />
    </ParallaxProvider>
  )
}
const Component = () => {
  return (<div>
    <ParallaxBanner
      layers={[
        { image: './images/below.svg', speed: 0 },
        {
          speed: -70,
          children: (
            <div className="absolute inset-0 flex items-center justify-center md:-top-28 sm:-top-48 -top-96 -mt-24 lg:mt-2 max-[500px]:-mt-20 max-[400px]:-mt-32 max-[600px]:-mt-8 max-[640px]:-mt-0 max-[350px]:-mt-48">
              <Herohack />
            </div>
          ),
        },
        { image: './images/Top.svg', speed: 0 },
      ]}
      className="aspect-[2/1] bg-auto bg-bottom w-full"
    />
    <div>
      <h1>Hellov kv s</h1>
      <h1>Hellov kv s</h1>
      <h1>Hellov kv s</h1>
      <h1>Hellov kv s</h1>
      <h1>Hellov kv s</h1>
      <h1>Hellov kv s</h1>
      <h1>Hellov kv s</h1>
      <h1>Hellov kv s</h1>
      <h1>Hellov kv s</h1>
      <h1>Hellov kv s</h1>
      <h1>Hellov kv s</h1>
      <h1>Hellov kv s</h1>
      <h1>Hellov kv s</h1>
      <h1>Hellov kv s</h1>
      <h1>Hellov kv s</h1>
      <h1>Hellov kv s</h1>
      <h1>Hellov kv s</h1>
      <h1>Hellov kv s</h1>
      <h1>Hellov kv s</h1>
      <h1>Hellov kv s</h1>
      <h1>Hellov kv s</h1>
      <h1>Hellov kv s</h1>
      <h1>Hellov kv s</h1>
      <h1>Hellov kv s</h1>
      <h1>Hellov kv s</h1>
      <h1>Hellov kv s</h1>
    </div>
    
 </div> );
};