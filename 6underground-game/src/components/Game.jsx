import React, { useState, useEffect } from "react";
import Player from "./Player";
import Enemy from "./Enemy";
import Bullet from "./Bullet";
import Explosion from "./Explosion";

const WIDTH = 600;
const HEIGHT = 400;

function Game() {
  const [player, setPlayer] = useState({ x: WIDTH / 2 - 25, y: HEIGHT - 60 });
  const [bullets, setBullets] = useState([]);
  const [enemies, setEnemies] = useState([]);
  const [explosions, setExplosions] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  // Player movement & shooting
  useEffect(() => {
    const handleKey = (e) => {
      if (gameOver) return;
      if (e.key === "ArrowLeft") setPlayer((p) => ({ ...p, x: Math.max(p.x - 20, 0) }));
      if (e.key === "ArrowRight") setPlayer((p) => ({ ...p, x: Math.min(p.x + 20, WIDTH - 50) }));
      if (e.key === "ArrowUp") setPlayer((p) => ({ ...p, y: Math.max(p.y - 20, 0) }));
      if (e.key === "ArrowDown") setPlayer((p) => ({ ...p, y: Math.min(p.y + 20, HEIGHT - 50) }));
      if (e.key === " ") setBullets((prev) => [...prev, { x: player.x, y: player.y }]);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [player, gameOver]);

  // Game loop
  useEffect(() => {
    if (gameOver) return;

    const interval = setInterval(() => {
      // Move bullets
      setBullets((prev) => prev.map((b) => ({ ...b, y: b.y - 15 })).filter((b) => b.y > 0));

      // Move enemies
      setEnemies((prev) => prev.map((e) => ({ ...e, y: e.y + 5 })));

      // Spawn enemies
      if (Math.random() < 0.05) setEnemies((prev) => [...prev, { x: Math.random() * (WIDTH - 50), y: -50 }]);

      // Check collisions
      bullets.forEach((b) => {
        enemies.forEach((e, idx) => {
          if (b.x < e.x + 50 && b.x + 10 > e.x && b.y < e.y + 50 && b.y + 20 > e.y) {
            setEnemies((prev) => prev.filter((_, i) => i !== idx));
            setBullets((prev) => prev.filter((bullet) => bullet !== b));
            setExplosions((prev) => [...prev, { x: e.x, y: e.y }]);
            setScore((s) => s + 1);
          }
        });
      });

      // Remove explosions after short time
      setExplosions((prev) => prev.slice(-5));

      // Check game over
      enemies.forEach((e) => {
        if (
          e.y + 50 > player.y &&
          e.x < player.x + 50 &&
          e.x + 50 > player.x
        ) setGameOver(true);
      });
    }, 50);

    return () => clearInterval(interval);
  }, [bullets, enemies, player, gameOver]);

  return (
    <div style={{ width: WIDTH, height: HEIGHT, background: "#111", position: "relative", overflow: "hidden" }}>
      <h2 style={{ color: "#fff" }}>Score: {score}</h2>
      {gameOver && <h1 style={{ color: "red" }}>GAME OVER</h1>}
      <Player x={player.x} y={player.y} />
      {bullets.map((b, idx) => <Bullet key={idx} x={b.x} y={b.y} />)}
      {enemies.map((e, idx) => <Enemy key={idx} x={e.x} y={e.y} />)}
      {explosions.map((ex, idx) => <Explosion key={idx} x={ex.x} y={ex.y} />)}
    </div>
  );
}

export default Game;
