function setup() {
    canvas = createCanvas(1000, 1000);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
  }

  function draw() {
    image(video, 350, 50, 300, 300);
    fill(0, 0, 255)
    stroke(0, 0, 255)
    circle(200, 30, 60)
    circle(800, 30, 60)
    circle(200, 370, 60)
    circle(800, 370, 60)

    fill(255, 0, 255)
    stroke(255, 0, 255)
    rect(231,25,539,10)
    rect(231,365,539,10)
    rect(195,60,10,280)
    rect(795,60,10,280)

  }

  function snap() {
      save("picture.png")
  }