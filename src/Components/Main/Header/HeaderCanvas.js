import React from 'react';
import * as S from './HeaderCanvasStyle';

const HeaderCanvas = () => {

    const canvas = document.getElementById("canvas1")
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particlesArray;

    let mouse = {
        x: null,
        y: null,
        redius: (canvas.height/80) * (canvas.width/80)
    }
    
    window.addEventListener('mousemove',
    function(event){
        mouse.x = event.x;
        mouse.y = event.y;
    })

    class Particle{
        constructor(x,y,directionX, directionY, size, color){
            this.x = x;
            this.y = y;
            this.directionX = directionX;
            this.directionY = directionY;
            this.size = size;
            this.color = color;
        }

        draw(){
            ctx.begionPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
            ctx.fillStyle = '#0000000';
            ctx.fill();
        }
        
    }

    return (
        <>
            <S.Canvas1 id="canvas1"></S.Canvas1>
        </>
    )
}

export default HeaderCanvas;