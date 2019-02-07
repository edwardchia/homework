class Turtle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.history = [[x, y]]; // records all the movements.
    this.direction = "east"; // this is starting position.
  }

  forward(steps) {
    let start = this.history[this.history.length - 1];

    switch (this.direction) {
      case "east":
        for (let i = 0; i < steps; i += 1)
          this.history.push([start[0] + i, start[1]]);
        break;

      case "west":
        for (let i = 0; i < steps; i += 1)
          this.history.push([start[0] - i, start[1]]);
        break;

      case "south":
        for (let i = 0; i < steps; i += 1)
          this.history.push([start[0], start[1] + i]);
        break;

      case "north":
        for (let i = 0; i < steps; i += 1)
          this.history.push([start[0], start[1] - i]);
        break;
    }
    return this;
  }
  left() {
    switch (this.direction) {
      case "east":
        this.direction = "north";
        break;

      case "north":
        this.direction = "west";
        break;

      case "west":
        this.direction = "south";
        break;

      case "south":
        this.direction = "east";
        break;
    }
    return this;
  }
  right() {
    switch (this.direction) {
      case "east":
        this.direction = "south";
        break;

      case "north":
        this.direction = "east";
        break;

      case "west":
        this.direction = "north";
        break;

      case "south":
        this.direction = "west";
        break;
    }
    return this;
  }
  allpoints() {
    return this.history;
  }
  print() {
    const xPoints = [];
    for (let i = 0; i < this.history.length; i++) {
      xPoints.push(this.history[i][0]);
    }
    console.log(xPoints);

    const yPoints = [];
    for (let y = 0; y < this.history.length; y++) {
      yPoints.push(this.history[y][1]);
    }
    console.log(yPoints);

    const xMax = Math.max(...xPoints);
    console.log(xMax);

    const yMax = Math.max(...yPoints);
    console.log(yMax);

    const coordinates = this.allpoints();

    const coordinateStrings = coordinates.map(c => c.toString());

    let grid = "";

    for (let b = 0; b <= yMax; b++) {
      for (let a = 0; a <= xMax; a++) {
        if (coordinateStrings.includes(`${a},${b}`)) {
          grid += "\u25A0";
        } else {
          grid += "\u25A1";
        }
      }
      grid += "\n";
    }
    console.log(grid);
  }
}

const flash = new Turtle(0, 4)
  .forward(3)
  .left()
  .forward(3)
  .right()
  .forward(5)
  .right()
  .forward(8)
  .right()
  .forward(5)
  .right()
  .forward(3)
  .left()
  .forward(3)
  .print();