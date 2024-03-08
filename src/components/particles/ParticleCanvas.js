import "styles/components/particles/particlecanvas.scss"
import { useEffect, useRef } from "react";

class Particle {
    constructor(canvasElement) {
        this.canvasElement = canvasElement;
        this.ctx = canvasElement.getContext('2d');

        this.maxSpeed = 0.5;
        this.minSpeed = -0.5;
        this.maxOpacity = 0.4;

        this.maxLifeSpan = 10000;
        this.minLifeSpan = 4000;

        this.maxFadeInDuration = 2000;
        this.minFadeInDuration = 500;

        this.maxFadeOutDuration = 2000;
        this.minFadeOutDuration = 500;
    }

    getCanvasRect() {
        return this.canvasElement.getBoundingClientRect();
    }

    randomPositionNearEdges(rectWidth, rectHeight, edgeDistance) {
        // Randomly choose which edge to place the point on
        let edge = Math.floor(Math.random() * 4); // 0, 1, 2, or 3 for each edge
        let randomX, randomY;

        switch (edge) {
            case 0: // Top edge
                randomX = Math.random() * rectWidth;
                randomY = Math.random() * edgeDistance;
                break;
            case 1: // Right edge
                randomX = rectWidth - (Math.random() * edgeDistance);
                randomY = Math.random() * rectHeight;
                break;
            case 2: // Bottom edge
                randomX = Math.random() * rectWidth;
                randomY = rectHeight - (Math.random() * edgeDistance);
                break;
            case 3: // Left edge
                randomX = Math.random() * edgeDistance;
                randomY = Math.random() * rectHeight;
                break;
            default:
                randomX = Math.random() * rectWidth;
                randomY = Math.random() * rectHeight;
                break;
        }

        return { x: randomX, y: randomY };
    }


    resetCallback() {
        let canvasRect = this.getCanvasRect();
        let randomPosition = this.randomPositionNearEdges(canvasRect.width, canvasRect.height, 200);
        this.x = randomPosition.x
        this.y = randomPosition.y

        this.speedX = Math.min(Math.max(this.minSpeed, (Math.random() - 0.5) * 1), this.maxSpeed);
        this.speedY = Math.min(Math.max(this.minSpeed, (Math.random() - 0.5) * 1), this.maxSpeed);

        this.alpha = this.maxOpacity;

        // Randomize fade outs
        this.lifeSpan = Math.max(this.minLifeSpan, Math.random() * this.maxLifeSpan);
        this.fadeInDuration = Math.max(this.minFadeInDuration, Math.random() * this.maxFadeInDuration);
        this.fadeOutDuration = Math.max(this.maxFadeOutDuration, Math.random() * this.minFadeOutDuration);

        // Randomize color
        let randomColorList = [
            { r: 224, g: 200, b: 135 },
            { r: 172, g: 217, b: 223 },
            { r: 145, g: 165, b: 231 },
            { r: 219, g: 125, b: 96 }
        ]
        this.color = randomColorList[Math.floor(Math.random() * randomColorList.length)];

        this.startTime = Date.now()
    }

    deathCallback() {
        this.resetCallback();
    }

    update() {
        const elapsedTime = Date.now() - this.startTime;
        let fadeOutStartTime = this.fadeInDuration + this.lifeSpan;

        if (elapsedTime < this.fadeInDuration) {
            this.alpha = Math.min(this.maxOpacity, elapsedTime / this.fadeInDuration);
        } else if (elapsedTime > fadeOutStartTime) {
            const fadeOutPercentage = Math.min(1, (elapsedTime - this.fadeInDuration - this.lifeSpan) / this.fadeOutDuration);
            this.alpha = Math.max(0, this.maxOpacity * (1 - fadeOutPercentage));
        }

        this.x += this.speedX;
        this.y += this.speedY;
    }

    draw() { }
}

class SquareParticle extends Particle {
    constructor(canvasElement) {
        super(canvasElement);

        this.minWidth = 50;
        this.maxWidth = 90;

        this.minHeight = this.minWidth;
        this.maxHeight = this.maxWidth;

        this.radius = 5;
    }

    resetCallback() {
        super.resetCallback();

        this.width = Math.max(this.minWidth, Math.random() * this.maxWidth);
        this.height = this.width;
    }

    draw() {
        this.ctx.strokeStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.alpha})`;
        this.ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.alpha})`;
        this.ctx.beginPath();
        this.ctx.roundRect(this.x, this.y, this.width, this.height, this.radius);
        this.ctx.fill();
    }
}

class CircleParticle extends Particle {
    constructor(canvasElement) {
        super(canvasElement);

        this.minRadius = 30;
        this.maxRadius = 60;
    }

    resetCallback() {
        super.resetCallback();

        this.radius = Math.max(this.minRadius, Math.random() * this.maxRadius);
    }

    draw() {
        this.ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.alpha})`;

        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        this.ctx.fill();
    }
}

class DoughnutParticle extends CircleParticle {
    constructor(canvasElement) {
        super(canvasElement);

        this.minThickness = 10;
        this.maxThickness = 20;
    }

    resetCallback() {
        super.resetCallback();

        this.thickness = Math.max(this.minThickness, Math.random() * this.maxThickness);
    }

    draw() {
        let circle = new Path2D();
        circle.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);

        this.ctx.lineWidth = this.thickness;
        this.ctx.strokeStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.alpha})`;
        this.ctx.stroke(circle);
    }
}

const ParticleCanvas = (props) => {
    let canvasRef = useRef();

    useEffect(() => {
        if (!canvasRef) {
            return;
        }

        const offscreenCanvas = document.createElement('canvas');
        const offscreenCtx = offscreenCanvas.getContext('2d');

        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        offscreenCanvas.width = window.innerWidth;
        offscreenCanvas.height = window.innerHeight;

        let ctx = canvasRef.current.getContext("2d");
        let canvasRect = canvasRef.current.getBoundingClientRect();

        let particles = [];

        for (let i = 0; i < 200; i++) {
            let particle = new SquareParticle(offscreenCanvas);
            particle.resetCallback();
            particles.push(particle)

            particle = new CircleParticle(offscreenCanvas);
            particle.resetCallback();
            particles.push(particle)

            particle = new DoughnutParticle(offscreenCanvas);
            particle.resetCallback();
            particles.push(particle)

        }

        const resizeCanvas = () => {
            canvasRef.current.width = window.innerWidth;
            canvasRef.current.height = window.innerHeight;
            offscreenCanvas.width = window.innerWidth;
            offscreenCanvas.height = window.innerHeight;
            particleDrawLoop()
        }

        const particleUpdateLoop = () => {
            for (let particle of particles) {
                particle.update();

                if (particle.alpha <= 0.0001) {
                    particle.deathCallback();
                }
            }
        }

        const particleDrawLoop = () => {
            offscreenCtx.clearRect(0, 0, canvasRect.width, canvasRect.height);

            for (let particle of particles) {
                particle.draw();
            }

            ctx.clearRect(0, 0, canvasRect.width, canvasRect.height);
            ctx.drawImage(offscreenCanvas, 0, 0)
        }

        setTimeout(() =>
            setInterval(() => {
                particleUpdateLoop();
            }, 1000 / 20)
            , props.startDelay)

        setTimeout(() =>
            setInterval(() => {
                particleDrawLoop();
            }, 1000 / 20)
            , props.startDelay)

        // resize the canvas to fill browser window dynamically
        window.addEventListener('resize', resizeCanvas, false);


    }, [canvasRef, props.startDelay])

    return (
        <canvas ref={canvasRef} className={"particle-canvas " + props.className}></canvas>
    )
}

export default ParticleCanvas;