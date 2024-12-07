import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface GameObject {
  x: number;
  y: number;
  width: number;
  height: number;
  type: 'ship' | 'obstacle' | 'powerup';
  speed?: number;
}

interface LeaderboardEntry {
  username: string;
  score: number;
  timestamp: number;
}

const GAME_HEIGHT = 300;
const GAME_WIDTH = 800;
const GRAVITY = 0.6;
const JUMP_FORCE = -12;
const INITIAL_SPEED = 4;
const SPEED_INCREMENT = 0.0001;
const SCORE_INCREMENT = 0.1;
const POWERUP_BONUS = 50;
const OBSTACLE_FREQUENCY = 240;
const SHIP_SIZE = 60;

const FleetCommander: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [username, setUsername] = useState('');
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [isSubmittingScore, setIsSubmittingScore] = useState(false);
  const requestRef = useRef<number>();
  const previousTimeRef = useRef<number>();

  // Game state refs for animation frame
  const gameStateRef = useRef({
    ship: { x: 50, y: GAME_HEIGHT - 80, width: SHIP_SIZE, height: SHIP_SIZE, velocity: 0, type: 'ship' as const },
    obstacles: [] as GameObject[],
    powerups: [] as GameObject[],
    speed: INITIAL_SPEED,
    frameCount: 0,
    score: 0
  });

  // Load username from localStorage
  useEffect(() => {
    const savedUsername = localStorage.getItem('fleetCommanderUsername');
    if (savedUsername) {
      setUsername(savedUsername);
    }
  }, []);

  // Fetch leaderboard data
  const fetchLeaderboard = async () => {
    try {
      const response = await fetch('/api/leaderboard');
      if (response.ok) {
        const data = await response.json();
        setLeaderboard(data);
      }
    } catch (error) {
      console.error('Error fetching leaderboard:', error);
    }
  };

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  const submitScore = async () => {
    if (!username || isSubmittingScore) return;
    
    setIsSubmittingScore(true);
    try {
      const response = await fetch('/api/submit-score', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          score: Math.floor(score),
          timestamp: Date.now(),
        }),
      });

      if (response.ok) {
        await fetchLeaderboard();
      }
    } catch (error) {
      console.error('Error submitting score:', error);
    } finally {
      setIsSubmittingScore(false);
    }
  };

  const startGame = () => {
    if (requestRef.current) {
      cancelAnimationFrame(requestRef.current);
    }
    gameStateRef.current = {
      ship: { x: 50, y: GAME_HEIGHT - 80, width: SHIP_SIZE, height: SHIP_SIZE, velocity: 0, type: 'ship' },
      obstacles: [],
      powerups: [],
      speed: INITIAL_SPEED,
      frameCount: 0,
      score: 0
    };
    setScore(0);
    setGameOver(false);
    setIsPlaying(true);
    previousTimeRef.current = undefined;
  };

  const jump = useCallback(() => {
    if (gameStateRef.current.ship.y >= GAME_HEIGHT - 85) {
      gameStateRef.current.ship.velocity = JUMP_FORCE;
    }
  }, []);

  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    if (event.code === 'Space' || event.code === 'ArrowUp') {
      event.preventDefault();
      if (!isPlaying && !gameOver) {
        startGame();
      } else if (isPlaying) {
        jump();
      }
    }
  }, [isPlaying, gameOver, jump]);

  const checkCollision = (obj1: GameObject, obj2: GameObject) => {
    const padding = 5;
    return (
      obj1.x + padding < obj2.x + obj2.width &&
      obj1.x + obj1.width - padding > obj2.x &&
      obj1.y + padding < obj2.y + obj2.height &&
      obj1.y + obj1.height - padding > obj2.y
    );
  };

  const drawEmoji = (ctx: CanvasRenderingContext2D, emoji: string, x: number, y: number, size: number, mirror: boolean = false) => {
    ctx.save();
    ctx.font = `${size}px Arial`;
    if (mirror) {
      // Mirror horizontally by scaling x by -1
      ctx.scale(-1, 1);
      // Adjust x position for mirrored drawing and compensate for larger size
      ctx.fillText(emoji, -x - size, y + size);
    } else {
      ctx.fillText(emoji, x, y + size);
    }
    ctx.restore();
  };

  const animate = useCallback((timestamp: number) => {
    if (!canvasRef.current || !isPlaying) return;

    if (previousTimeRef.current === undefined) {
      previousTimeRef.current = timestamp;
    }
    const deltaTime = timestamp - previousTimeRef.current;
    previousTimeRef.current = timestamp;

    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    const gameState = gameStateRef.current;
    
    // Clear canvas
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

    // Update ship position with delta time
    gameState.ship.velocity += GRAVITY * (deltaTime / 16);
    gameState.ship.y += gameState.ship.velocity * (deltaTime / 16);

    // Keep ship within bounds
    if (gameState.ship.y > GAME_HEIGHT - 80) {
      gameState.ship.y = GAME_HEIGHT - 80;
      gameState.ship.velocity = 0;
    }

    // Generate obstacles with more space between them
    if (gameState.frameCount % OBSTACLE_FREQUENCY === 0) {
      const obstacleHeight = 40 + Math.random() * 30;
      gameState.obstacles.push({
        x: GAME_WIDTH,
        y: GAME_HEIGHT - obstacleHeight,
        width: 30,
        height: obstacleHeight,
        type: 'obstacle'
      });

      // Occasionally generate powerups with more spacing
      if (Math.random() < 0.2) {
        gameState.powerups.push({
          x: GAME_WIDTH + 150, // Increased from 100 for more spacing
          y: GAME_HEIGHT - 100 - Math.random() * 80,
          width: 30,
          height: 30,
          type: 'powerup'
        });
      }
    }

    // Draw water background
    const gradient = ctx.createLinearGradient(0, 0, 0, GAME_HEIGHT);
    gradient.addColorStop(0, '#001F3F');
    gradient.addColorStop(1, '#0095D9');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

    // Draw waves
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.beginPath();
    for (let i = 0; i < GAME_WIDTH; i += 30) {
      ctx.moveTo(i, GAME_HEIGHT - 20 + Math.sin(i / 30 + gameState.frameCount / 20) * 5);
      ctx.lineTo(i + 15, GAME_HEIGHT - 20 + Math.cos(i / 30 + gameState.frameCount / 20) * 5);
    }
    ctx.stroke();

    // Update and draw obstacles
    ctx.fillStyle = '#FF4444';
    gameState.obstacles = gameState.obstacles.filter(obstacle => {
      obstacle.x -= gameState.speed * (deltaTime / 16);
      if (checkCollision(gameState.ship, obstacle)) {
        setGameOver(true);
        setIsPlaying(false);
        if (gameState.score > highScore) {
          setHighScore(gameState.score);
        }
        return false;
      }
      if (obstacle.x + obstacle.width < 0) return false;
      
      // Draw obstacle with gradient
      const obstacleGradient = ctx.createLinearGradient(
        obstacle.x, 0, obstacle.x + obstacle.width, 0
      );
      obstacleGradient.addColorStop(0, '#FF4444');
      obstacleGradient.addColorStop(1, '#FF6666');
      ctx.fillStyle = obstacleGradient;
      ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
      return true;
    });

    // Update and draw powerups
    gameState.powerups = gameState.powerups.filter(powerup => {
      powerup.x -= gameState.speed * (deltaTime / 16);
      if (checkCollision(gameState.ship, powerup)) {
        gameState.score += POWERUP_BONUS;
        return false;
      }
      if (powerup.x + powerup.width < 0) return false;
      
      // Draw powerup emoji (⭐)
      ctx.shadowColor = '#FFD700';
      ctx.shadowBlur = 10;
      drawEmoji(ctx, '⭐', powerup.x, powerup.y, 30);
      ctx.shadowBlur = 0;
      return true;
    });

    // Draw ship emoji (🚢) with mirroring
    drawEmoji(ctx, '🚢', gameState.ship.x, gameState.ship.y, SHIP_SIZE, true);

    // Draw ship wake
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.beginPath();
    ctx.moveTo(gameState.ship.x, gameState.ship.y + SHIP_SIZE);
    ctx.lineTo(gameState.ship.x - 20, gameState.ship.y + SHIP_SIZE + 5);
    ctx.stroke();

    // Update score and speed
    gameState.score += SCORE_INCREMENT;
    setScore(Math.floor(gameState.score));
    gameState.speed += SPEED_INCREMENT * (deltaTime / 16);
    gameState.frameCount++;

    // Continue game loop
    requestRef.current = requestAnimationFrame(animate);
  }, [isPlaying, highScore]);

  // Add touch event handlers and mobile optimizations
  const handleTouchStart = useCallback((e: TouchEvent) => {
    if (gameOver) return; // Don't handle touch events when game over modal is shown
    e.preventDefault(); // Prevent scrolling while playing
    if (!isPlaying && !gameOver) {
      startGame();
    } else if (isPlaying) {
      jump();
    }
  }, [isPlaying, gameOver, jump]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.addEventListener('touchstart', handleTouchStart, { passive: false });
    }
    window.addEventListener('keydown', handleKeyPress);
    
    return () => {
      if (canvas) {
        canvas.removeEventListener('touchstart', handleTouchStart);
      }
      window.removeEventListener('keydown', handleKeyPress);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [handleKeyPress, handleTouchStart]);

  useEffect(() => {
    if (isPlaying) {
      requestRef.current = requestAnimationFrame(animate);
    }
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [isPlaying, animate]);

  // Update tweet functionality with new format
  const createTweetURL = (score: number) => {
    const tweetText = `🚢 I just scored ${Math.floor(score)} points in Fleet Commander
        Made by: @XRPNAVY 
🎮Play now at: xrpnavy.com
#NAVY #XRP $XRPNAVY`;
    return `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
  };

  return (
    <div className="min-h-screen bg-ripple-blue py-6 md:py-12">
      <div className="max-w-4xl mx-auto px-2 md:px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-4 md:mb-8"
        >
          <Link to="/games" className="text-gold hover:text-white mb-2 md:mb-4 inline-block text-sm md:text-base">
            ← Back to Games
          </Link>
          <h1 className="text-3xl md:text-4xl font-military font-bold text-white mb-2 md:mb-4">
            Fleet Commander
          </h1>
          <div className="text-lg md:text-xl text-white mb-1 md:mb-2">Score: {Math.floor(score)}</div>
          <div className="text-base md:text-lg text-gold mb-2 md:mb-4">High Score: {Math.floor(highScore)}</div>
          {!isPlaying && !gameOver && (
            <div className="mb-4">
              <input
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => {
                  const newUsername = e.target.value.slice(0, 15);
                  setUsername(newUsername);
                  localStorage.setItem('fleetCommanderUsername', newUsername);
                }}
                className="px-4 py-2 rounded-lg bg-navy-blue border-2 border-gold text-white focus:outline-none focus:border-white"
                maxLength={15}
              />
            </div>
          )}
          <button
            onClick={() => setShowLeaderboard(!showLeaderboard)}
            className="text-gold hover:text-white text-sm md:text-base underline"
          >
            {showLeaderboard ? 'Hide Leaderboard' : 'Show Leaderboard'}
          </button>
        </motion.div>

        {showLeaderboard && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 bg-navy-blue rounded-lg p-4 border-2 border-gold"
          >
            <h2 className="text-2xl font-military text-white mb-4">Top 10 Commanders</h2>
            <div className="space-y-2">
              {leaderboard.map((entry, index) => (
                <div key={index} className="flex justify-between items-center text-white">
                  <span className="font-military">
                    {index + 1}. {entry.username}
                  </span>
                  <span className="text-gold">{Math.floor(entry.score)}</span>
                </div>
              ))}
              {leaderboard.length === 0 && (
                <div className="text-white text-center">No scores yet. Be the first!</div>
              )}
            </div>
          </motion.div>
        )}

        <div className="flex justify-center mb-2 md:mb-4">
          <canvas
            ref={canvasRef}
            width={GAME_WIDTH}
            height={GAME_HEIGHT}
            className="border-2 border-gold bg-navy-blue rounded-lg shadow-lg max-w-full"
            style={{ touchAction: 'none' }}
          />
        </div>

        <div className="text-center text-white">
          {!isPlaying && !gameOver && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-2 md:mb-4 text-sm md:text-base"
            >
              {username ? 'Tap screen or press SPACE to start' : 'Enter your username to play'}
            </motion.div>
          )}
          <div className="text-xs md:text-sm text-gray-400 mt-2 md:mt-4">
            {window.matchMedia('(pointer: coarse)').matches ? 
              'Tap anywhere to jump' : 
              'Use SPACE or UP ARROW to jump'
            }
          </div>
        </div>

        {gameOver && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100]"
          >
            <div 
              className="bg-navy-blue p-6 md:p-8 rounded-lg border-2 border-gold w-full max-w-sm mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-xl md:text-2xl font-military text-white mb-3 md:mb-4 text-center">
                Game Over!
              </h2>
              <p className="text-lg md:text-xl text-gold mb-4 md:mb-6 text-center">
                Final Score: {Math.floor(score)}
              </p>
              <div className="flex flex-col gap-3 md:gap-4">
                {!isSubmittingScore ? (
                  <>
                    <button
                      type="button"
                      disabled={!username}
                      onClick={submitScore}
                      className="bg-green-500 text-white font-military font-bold px-6 md:px-8 py-3 md:py-4 rounded-lg text-sm md:text-base active:scale-95 transition-transform disabled:opacity-50"
                    >
                      Submit Score
                    </button>
                    <button
                      type="button"
                      onTouchEnd={(e) => {
                        e.preventDefault();
                        window.open(createTweetURL(score), '_blank', 'noopener,noreferrer');
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        window.open(createTweetURL(score), '_blank', 'noopener,noreferrer');
                      }}
                      className="bg-[#1DA1F2] text-white font-military font-bold px-6 md:px-8 py-3 md:py-4 rounded-lg text-center flex items-center justify-center gap-2 text-sm md:text-base active:scale-95 transition-transform"
                    >
                      <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                      Tweet Score
                    </button>
                    <button
                      type="button"
                      onTouchEnd={(e) => {
                        e.preventDefault();
                        startGame();
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        startGame();
                      }}
                      className="bg-gold text-black font-military font-bold px-6 md:px-8 py-3 md:py-4 rounded-lg text-sm md:text-base active:scale-95 transition-transform"
                    >
                      Play Again
                    </button>
                  </>
                ) : (
                  <div className="text-white text-center">Submitting score...</div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default FleetCommander; 