import Complex from 'Complex';

export default class NormalizedComplex {
  constructor(realMag, imMag) {
    this.state = Complex.from(realMag, imMag);
  }

  export() {
    // a + bi
    return this.state.toString();
  }

  prettyString() {
    return this.state.clone().toFixed(3).toString();
  }

  exportLinear() {
    return [this.real(), this.im()];
  }

  normalize(mag) {
    const num = Complex.fromPolar(mag, this.angle());
    return new NormalizedComplex(num.real, num.im);
  }

  setAngle(angle) {
    const num = Complex.fromPolar(this.magnitude(), angle);
    return new NormalizedComplex(num.real, num.im);
  }

  angle() {
    return this.state.angle();
  }

  im() {
    return this.state.im;
  }

  magnitude() {
    return this.state.magnitude();
  }

  real() {
    return this.state.real;
  }
}
