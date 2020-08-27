// utilities
function getLength(x0, y0, x1, y1) {
  // returns the length of a line segment
  const x = x1 - x0;
  const y = y1 - y0;
  return Math.sqrt(x * x + y * y);
}

function getDegAngle(x0, y0, x1, y1) {
  const y = y1 - y0;
  const x = x1 - x0;
  return Math.atan2(y, x) * (180 / Math.PI);
}

// some constants
const DECAY = 4; // confetti decay in seconds
const SPREAD = 60; // degrees to spread from the angle of the cannon
const GRAVITY = 1200;

class ConfettiCannon {
  constructor() {
    // setup a canvas
    this.canvas = document.getElementById('canvas');
    this.dpr = window.devicePixelRatio || 1;
    this.ctx = this.canvas.getContext('2d');
    this.ctx.scale(this.dpr, this.dpr);

    this.confettiSpriteIds = [];
    this.confettiSprites = {};

    // vector line representing the firing angle
    this.drawVector = false;
    this.vector = [{
      x: window.innerWidth,
      y: window.innerHeight * 1.25 },
    {
      x: window.innerWidth,
      y: window.innerHeight * 2 }];


    this.pointer = {};

    // bind methods
    this.render = this.render.bind(this);
    this.handleMousedown = this.handleMousedown.bind(this);
    this.setCanvasSize = this.setCanvasSize.bind(this);

    this.setupListeners();
    this.setCanvasSize();

    // fire off for a demo
    this.timer = setTimeout(this.handleMouseup, 1000);
  }

  setupListeners() {
    // Use TweenLite tick event for the render loop
    TweenLite.ticker.addEventListener('tick', this.render);

    // bind events
    window.addEventListener('mousedown', this.handleMousedown);
    window.addEventListener('resize', this.setCanvasSize);
  }

  setCanvasSize() {
    this.canvas.width = window.innerWidth * this.dpr;
    this.canvas.height = window.innerHeight * this.dpr;
    this.canvas.style.width = window.innerWidth + 'px';
    this.canvas.style.height = window.innerHeight + 'px';
  }

  handleMousedown(event) {
    clearTimeout(this.timer);
    let power = 400;
    let deg = _.random(20, 160);

    const particles = power / 5 + 5;
    const angle = deg + 180.0;
    const velocity = power * 10;
    const x = event.clientX * this.dpr;
    const y = event.clientY * this.dpr;

    this.addConfettiParticles(particles, angle, velocity, x, y);
  }

  addConfettiParticles(amount, angle, velocity, x, y) {
    let i = 0;
    while (i < amount) {
      // sprite
      const r = _.random(4, 6) * this.dpr;
      const d = _.random(15, 25) * this.dpr;

      const cr = _.random(180, 255);
      const cg = _.random(180, 200);
      const cb = _.random(200, 255);
      // const color = `rgb(${cr}, ${cg}, ${cb})`;
      const color = `rgb(${cr}, ${cg}, ${cb})`;

      const tilt = _.random(10, -10);
      const tiltAngleIncremental = _.random(0.07, 0.05);
      const tiltAngle = 0;

      const id = _.uniqueId();
      const sprite = {
        [id]: {
          angle,
          velocity,
          x,
          y,
          r,
          d,
          color,
          tilt,
          tiltAngleIncremental,
          tiltAngle } };



      Object.assign(this.confettiSprites, sprite);
      this.confettiSpriteIds.push(id);
      this.tweenConfettiParticle(id);
      i++;
    }
  }

  tweenConfettiParticle(id) {
    const minAngle = this.confettiSprites[id].angle - SPREAD / 2;
    const maxAngle = this.confettiSprites[id].angle + SPREAD / 2;

    const minVelocity = this.confettiSprites[id].velocity / 4;
    const maxVelocity = this.confettiSprites[id].velocity;

    // Physics Props
    const velocity = _.random(minVelocity, maxVelocity);
    const angle = _.random(minAngle, maxAngle);
    const gravity = GRAVITY;
    const friction = _.random(0.1, 0.25);
    const d = 0;

    TweenLite.to(this.confettiSprites[id], DECAY, {
      physics2D: {
        velocity,
        angle,
        gravity,
        friction },

      d,
      ease: Power4.easeIn,
      onComplete: () => {
        // remove confetti sprite and id
        _.pull(this.confettiSpriteIds, id);
        delete this.confettiSprites[id];
      } });

  }

  updateConfettiParticle(id) {
    const sprite = this.confettiSprites[id];
    const tiltAngle = 0.0005 * sprite.d;

    sprite.angle += 0.01;
    sprite.tiltAngle += tiltAngle;
    sprite.tiltAngle += sprite.tiltAngleIncremental;
    sprite.tilt = Math.sin(sprite.tiltAngle - sprite.r / 2) * sprite.r * 2;
    sprite.y += Math.sin(sprite.angle + sprite.r / 2) * 2;
    sprite.x += Math.cos(sprite.angle) / 2;
  }

  drawConfetti() {
    this.confettiSpriteIds.map(id => {
      const sprite = this.confettiSprites[id];

      this.ctx.beginPath();
      this.ctx.lineWidth = sprite.d / 2;
      this.ctx.strokeStyle = sprite.color;
      this.ctx.moveTo(sprite.x + sprite.tilt + sprite.r, sprite.y);
      this.ctx.lineTo(sprite.x + sprite.tilt, sprite.y + sprite.tilt + sprite.r);
      this.ctx.stroke();

      this.updateConfettiParticle(id);
    });
  }

  render() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawConfetti();
  }}


const confetti = new ConfettiCannon();
$(window).scroll(function () {
  var scrolledY = $(window).scrollTop();

  if (scrolledY > 10) {
    $("#nav").css("background-color", "rgba(white, 0.6)");
    $("#nav").css("background-color", "rgba(white, 0.6)");
    if ($(window).scrollTop() + $(window).height() == $(document).height()) {
      $("#nav").css("background-color", "rgba(white, 0.6)");
    }
  }
  if (scrolledY < 10) {
    $("#nav").css("background-color", "transparent");
  }

});
var width = $(window).width();
$(window).on("resize", function () {
  if ($(this).width() > 1000) {
    $("#navtoggle").css("display", "none");
    $("#myNavbar").removeClass("collapse");
    $("#myNavbar").addClass("toggle");
    // $('#myNavbar').removeClass('.navbar-collapse');
  } else {
    $("#navtoggle").css("display", "block");
    $("#myNavbar").addClass("collapse");
    $("#myNavbar").removeClass("toggle");
    // $('#myNavbar').addClass('.navbar-collapse');
  }
});

var s = skrollr.init();