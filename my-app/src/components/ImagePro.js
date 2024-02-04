import React from 'react';
import p5 from 'p5';

class ImageProcessing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: null,
      boxBlurSliderValue: 0,
      sharpenSliderValue: 0,
    };

    
    
  }

  updateBoxBlur = (event) => {
    this.setState({ boxBlurSliderValue: event.target.value });
  }

  updateSharpen = (event) => {
    this.setState({ sharpenSliderValue: event.target.value });
  }

  preload(p) {
    this.setState({ img: p.loadImage('images/barbie.jpg') });
  }



  setup(p) {
    p.createCanvas(400, 400);
    p.boxBlurSlider = p.createSlider(0, 20, 0);
    p.boxBlurSlider.position(20, 20);
    p.sharpenSlider = p.createSlider(0, 4, 0);
    p.sharpenSlider.position(160, 20);
  }


  draw(p) {
    p.background(220);
    p.image(this.state.img, 0, 0, 400, 200);
    p.loadPixels();
    this.boxBlur(p, p.boxBlurSlider.value());
    this.sharpen(p, p.sharpenSlider.value());
  }

  updateBoxBlur(event) {
    this.setState({ boxBlurSliderValue: event.target.value });
  }

  updateSharpen(event) {
    this.setState({ sharpenSliderValue: event.target.value });
  }

  boxBlur(p, input) {
    let matrixSize = (input * 2) + 1;
    let kernel = [];
    let avg = 1.0 / (matrixSize * matrixSize);

    for (let x = 0; x < matrixSize; x++) {
      kernel[x] = [];
      for (let y = 0; y < matrixSize; y++) {
        kernel[x][y] = avg;
      }
    }

    if (input > 0) {
      this.kernelMultiply(p, kernel, input);
    }
  }

  kernelMultiply(p, kernel, offset) {
    let d = p.pixelDensity();

    if (offset !== 0) {
      for (let y = offset; y < (p.height * d) - offset; y++) {
        for (let x = offset; x < (p.width * d) - offset; x++) {
          let sumRed = 0;
          let sumGreen = 0;
          let sumBlue = 0;
          let sumAlpha = 0;

          for (let ky = -1 * offset; ky <= offset; ky++) {
            for (let kx = -1 * offset; kx <= offset; kx++) {
              let pos = 4 * (y + ky) * (p.width * d) + (x + kx);

              let valRed = p.pixels[pos];
              sumRed += kernel[ky + offset][kx + offset] * valRed;

              let valGreen = p.pixels[pos + 1];
              sumGreen += kernel[ky + offset][kx + offset] * valGreen;

              let valBlue = p.pixels[pos + 2];
              sumBlue += kernel[ky + offset][kx + offset] * valBlue;

              let valAlpha = p.pixels[pos + 3];
              sumAlpha += kernel[ky + offset][kx + offset] * valAlpha;
            }
          }

          sumRed = p.constrain(Math.abs(sumRed), 0, 255);
          sumGreen = p.constrain(Math.abs(sumGreen), 0, 255);
          sumBlue = p.constrain(Math.abs(sumBlue), 0, 255);
          sumAlpha = p.constrain(Math.abs(sumAlpha), 0, 255);

          let pos = 4 * ((d * y * p.width) + x);

          p.pixels[pos] = sumRed;
          p.pixels[pos + 1] = sumGreen;
          p.pixels[pos + 2] = sumBlue;
          p.pixels[pos + 3] = sumAlpha;
        }
      }
    }

    p.updatePixels();
  }

    sharpen(p, input) {
        let intervals = [1, 5, 9, 13, 17];
        let sharpVal = intervals[input];

        let scaling = sharpVal / 4;
        let kernel = [
            [0, -1 * scaling, 0],
            [-1 * scaling, sharpVal, -1 * scaling],
            [0, -1 * scaling, 0],
        ];

        this.kernelMultiply(p, kernel, 1);
    }


  componentDidMount() {
    this.myP5 = new p5(this.sketch);
  }

  render() {
    return (
      <div id="image-processing-container">
        <label>Box Blur:</label>
        <input
          type="range"
          min="0"
          max="20"
          value={this.state.boxBlurSliderValue}
          onChange={this.updateBoxBlur}
        />

        <label>Sharpen:</label>
        <input
          type="range"
          min="0"
          max="4"
          value={this.state.sharpenSliderValue}
          onChange={this.updateSharpen}
        />
      </div>
    );
  }
}

export default ImageProcessing;
