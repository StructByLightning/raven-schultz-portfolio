"use client";
import css from "./stars.module.scss";
import { useEffect, useRef, useState } from "react";

/**
 * rotates a point (x, y) about the center of the screen and then moves it towards the center.
 *
 * @param {number} x - The x-coordinate of the point.
 * @param {number} y - The y-coordinate of the point.
 * @param {number} degrees - The number of degrees to rotate.
 * @param {number} gravity - The strength of the gravity pull towards the center. Between 0 (no pull) and 1 (all the way to the center).
 * @param {number} [screenWidth=window.innerWidth] - Optional screen width, defaults to window width.
 * @param {number} [screenHeight=window.innerHeight] - Optional screen height, defaults to window height.
 * @returns {Object} An object with the new x and y coordinates.
 */
function rotateAndApplyGravity(x, y, degrees, gravityConstant, screenWidth = window.innerWidth, screenHeight = window.innerHeight) {
  //convert degrees to radians
  const theta = degrees * (Math.PI / 180);

  //translate the point so the center of the screen is the origin
  const translatedX = x - (screenWidth / 2);
  const translatedY = y - (screenHeight / 2);

  //apply rotation matrix
  const rotatedX = (translatedX * Math.cos(theta)) - (translatedY * Math.sin(theta));
  const rotatedY = (translatedX * Math.sin(theta)) + (translatedY * Math.cos(theta));

  //translate back
  let finalX = rotatedX + (screenWidth / 2);
  let finalY = rotatedY + (screenHeight / 2);

  //calculate distance from center after rotation
  const distance = Math.sqrt(Math.pow(finalX - (screenWidth / 2), 2) + Math.pow(finalY - (screenHeight / 2), 2));

  //calculate gravitational force
  const gravitationalForce = gravityConstant / (((distance - 200) ** 1.5) + 1); //added +1 to prevent division by zero

  //apply gravity towards the center
  finalX += gravitationalForce * ((screenWidth / 2) - finalX);
  finalY += gravitationalForce * ((screenHeight / 2) - finalY);

  return {
    x: finalX,
    y: finalY,
  };
}



/**
 * randomly distributes particles within a circle centered on the screen.
 *
 * @param {number} numParticles - The number of particles.
 * @param {number} radius - The radius of the circle.
 * @param {number} [screenWidth] - screen width.
 * @param {number} [screenHeight] - screen height.
 * @returns {Array} An array of {x, y} representing the positions of the particles.
 */
function positionParticle(radius, screenWidth, screenHeight) {
  const angle = Math.random() * 2 * Math.PI; //random angle in radians

  //random distance from the center, using a square root to ensure a uniform distribution
  const distance = Math.sqrt(Math.random()) * radius;

  //convert polar coordinates to cartesian
  const x = (screenWidth / 2) + (distance * Math.cos(angle));
  const y = (screenHeight / 2) + (distance * Math.sin(angle));

  return { x, y };
}

function isParticleNearCenter(x, y, screenWidth = window.innerWidth, screenHeight = window.innerHeight) {
  const centerX = screenWidth / 2;
  const centerY = screenHeight / 2;

  //calculate the distance of the particle from the center
  const distance = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));

  return distance < 200;
}

export default function Stars() {
  const canvas = useRef();

  useEffect(() => {
    const ctx = canvas.current.getContext("2d");
    const dpr = window.devicePixelRatio || 1;

    canvas.current.width = window.innerWidth * dpr;
    canvas.current.height = window.innerHeight * dpr;

    let maxX = canvas.current.width;
    let maxY = canvas.current.height;

    let particles = [];
    let particleCount = (Math.max(maxX, maxY)) * 3;
    for (let i = 0; i < particleCount; i++){
      let pos = positionParticle(Math.max(maxX, maxY), maxX, maxY);
      particles.push({
        x: pos.x,
        y: pos.y,
        size: Math.random(),
        speed: (Math.random() * 0.15) + 0.05,
      });
    }

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    function redraw(){
      ctx.fillStyle = "rgba(0,0,0,0.1)"; //somewhat clear the context, this way there will be trails behind the stars
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);


      for (let particle of particles){
        let newPosition = rotateAndApplyGravity(particle.x, particle.y, particle.speed, 1, maxX, maxY);
        particle.x = newPosition.x;
        particle.y = newPosition.y;


        if (isParticleNearCenter(particle.x, particle.y, maxX, maxY)){
          let pos = positionParticle(maxX, maxX, maxY);
          particle.x = pos.x;
          particle.y = pos.y;
        }

        ctx.beginPath();
        ctx.fillStyle = "#b895e9";
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      }
      requestAnimationFrame(redraw);
    }
    redraw();
  }, []);

  return <canvas ref={canvas} className={css.stars}/>;
}
