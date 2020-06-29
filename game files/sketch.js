let width, height, wave, playing, pi;

function preload() {
    pi = loadStrings("pi.txt");
}

function setup() {
    width = innerWidth;
    height = innerHeight - 4;
    let cnv = createCanvas(width, height);
    wave = new p5.Oscillator('sine');
    cnv.mousePressed(() => {
        wave.start();
        playing = true;
    });
    playing = false;
    pi = pi[0];
    index = 0;
}

function draw() {
    textSize(64);
    fill(255);
    background(0);
    text('Sound of π', width / 2 - 150, 150)
    if (playing) {
        textSize(128);
        fill(255);
        text(pi[index], width / 2 - 32, height / 2);
        wave.freq(600 + pi[index] * 50, 0.1);
        wave.amp(0.3, 0.1);
        if(frameCount % 20 == 0) 
            index++;
    }
    textSize(32);
    text(pi.substring(0, index + 1), 10, height - 100, 100, height);
}

function mouseReleased() {
    wave.amp(0, 0.5);
    playing = false;
}