import Utils from './Utils.js';

const Particle = function (x, y, size) {
   this.x = x;
   this.y = y;
   this.size = size;
   this.color = Utils.random_rgba();
   this.speed = {
      x: Utils.randomNumber(1, 4),
      y: Utils.randomNumber(1, 4)
   };
   this.direction = {
      x: 1,
      y: 1
   }
}

Particle.prototype.draw = function (ctx) {
   ctx.fillStyle = this.color;
   ctx.fillRect(this.x, this.y, this.size, this.size);
}

Particle.prototype.checkCollision = function (ctx) {
   if (this.x < 0 || this.x > canvas.width) {
      this.direction.x = this.direction.x * -1;
   }
   if (this.y < 0 || this.y > canvas.height) {
      this.direction.y = this.direction.y * -1;
   }
}

Particle.prototype.enableCollider = function (isEnabled) {
   this.isColliderEnabled = isEnabled;
}


Particle.prototype.animate = function (ctx, isColliderEnabled) {
   if (!isColliderEnabled) {
      this.checkCollision();
   }
   this.x = this.x + (this.speed.x * this.direction.x);
   this.y = this.y + (this.speed.y * this.direction.y);
   this.draw(ctx)
}

export default Particle;