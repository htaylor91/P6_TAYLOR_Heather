//Sharp npm image resizer
//To resize images, update photographerId, dimensions, and path
/*
const directorySmall = `./assets/media/930/small_images`;
fs.readdirSync(directory).forEach(file => {
    sharp(`${directory}/${file}`)
        .resize(350, 300, {
            fit: "cover"
        }) // width, height
        .toFile(`${directorySmall}/${file}-small.jpg`);
});*/
//Run "node app" in the terminal
//https://web.dev/serve-responsive-images/
//https://sharp.pixelplumbing.com/api-resize
//https://web.dev/uses-webp-images/?utm_source=lighthouse&utm_medium=devtools

import sharp from "sharp";
import * as fs from "fs";

// eslint-disable-next-line quotes
const directory = `./assets/media/243/images`;

// eslint-disable-next-line quotes
const directoryAvif = `./assets/media/243/avif`;

fs.readdirSync(directory).forEach(file => {
    sharp(`${directory}/${file}`)
        .toFormat("avif")
        .toFile(`${directoryAvif}/${file}.avif`);
});