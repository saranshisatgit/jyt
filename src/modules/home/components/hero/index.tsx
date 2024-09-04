import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
import React from "react"

const Hero = () => {
  return (
    <div className="h-[75vh] w-full relative overflow-hidden bg-ui-bg-subtle">
      {/* Animated Gradient Grid Background with Different Lighter Colors */}
      <div className="absolute inset-0 z-0 grid grid-cols-4 grid-rows-4 gap-4 animate-flowingGradient">
        {[
          "from-pink-300",
          "from-blue-300",
          "from-green-300",
          "from-purple-300",
          "from-yellow-300",
          "from-orange-300",
          "from-teal-300",
          "from-indigo-300",
          "from-red-300",
          "from-rose-300",
          "from-lime-300",
          "from-cyan-300",
          "from-violet-300",
          "from-fuchsia-300",
          "from-amber-300",
          "from-emerald-300",
        ].map((color, i) => (
          <div
            key={i}
            className={`w-full h-full bg-gradient-to-br ${color} to-white opacity-80 animate-moveFlow`}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center p-8 gap-6">
        <Heading
          level="h1"
          className="text-5xl leading-tight text-black font-bold"
        >
          Shop Your Dream Clothes Sustainably
        </Heading>
        <Heading
          level="h2"
          className="text-3xl leading-snug text-black font-medium"
        >
          Create!- Cici Label helps you customise in just 1 minute.
        </Heading>
        <a
          href="https://github.com/medusajs/nextjs-starter-medusa"
          target="_blank"
        >
          <Button variant="secondary" className="bg-white text-black">
            View on GitHub
            <Github />
          </Button>
        </a>
      </div>
    </div>
  )
}

export default Hero
