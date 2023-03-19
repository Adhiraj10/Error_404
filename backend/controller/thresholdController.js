import { createCanvas } from 'canvas';

export const imageController = (req, res, next) => {
    let { count, product } = req.query;
    const canvas = createCanvas(345, 50);
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'red';
    ctx.fillRect(0, 0, 400, 200);
    ctx.font = '18px Arial';
    ctx.fillStyle = 'white';
    ctx.fillText(`Views: ${count}`, 135, 30);

    // Send the image back to the client as a response
    res.set('Content-Type', 'image/png');
    canvas.createPNGStream().pipe(res);
}