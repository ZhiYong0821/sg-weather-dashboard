"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CloudSun
} from "lucide-react"
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  return (
    <div className="bg-primary h-screen w-screen flex">
      <Card className="flex flex-col w-1/3 h-1/3 m-4">
        <div className="border border-4 bg-primary text-secondary rounded-2xl text-2xl m-6 p-4 text-center">
              Singapore
        </div>
        <div className="text-center text-xl font-extrabold ">
              10:16:30 PM
        </div>
        <div className="text-center text-xl m-6">
              03/11/2024
        </div>
      </Card>
      <Card className="flex flex-col w-1/3 h-1/3 m-4">
        <div className="text-2xl m-6 p-4 flex items-center justify-center">
              <div className="mr-4">
                Today's Weather
              </div>
              <CloudSun className="h-10 w-10"></CloudSun>
        </div>
        <div className="text-center text-xl ">
              Condition: Clouds
        </div>
        <div className="text-center text-xl m-6">
              Description: broken clouds
        </div>
      </Card>
      <Card className="flex flex-col w-1/3 h-1/3 m-4">
        <div className="text-2xl m-6 p-4 text-center">
              Today's Temperature
        </div>
        <div className="text-center text-xl ">
              Temperature: 27 
        </div>
        <div className="text-center text-xl m-6">
              Temperature Minimum: 22
        </div>
        <div className="text-center text-xl m-6">
              Temperature Maximum: 30
        </div>
        <div className="text-center text-xl m-6">
              Feels Like: 50
        </div>
      </Card>
    </div>
  );
}
