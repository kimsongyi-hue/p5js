function setup() {
  createCanvas(600, 400);
  background(255);
  noLoop();
}

function draw() {
  background(255);
  translate(width / 2 - 200, height / 2 - 250);

  // 머리 뒤쪽
  fill(0);
  noStroke();
  beginShape();
  vertex(120, 150);
  bezierVertex(100, 270, 90, 420, 140, 480);
  vertex(260, 480);
  bezierVertex(310, 420, 300, 270, 280, 150);
  bezierVertex(270, 90, 130, 90, 120, 150);
  endShape(CLOSE);

  // 얼굴
  fill(255, 220, 200);
  ellipse(200, 250, 150, 190);

  // 귀
  fill(255, 220, 200);
  ellipse(130, 250, 25, 40);
  ellipse(270, 250, 25, 40);

  // 목
  rect(180, 320, 40, 50, 10);

  // 앞머리 (일자형)
  fill(0);
  noStroke();
  beginShape();
  vertex(140, 150);
  vertex(260, 150);
  vertex(260, 180);
  vertex(140, 180);
  endShape(CLOSE);

  // 눈
  fill(255);
  ellipse(160, 240, 36, 36);
  fill(80, 50, 30);
  ellipse(160, 240, 20, 20);
  fill(0);
  ellipse(160, 240, 10, 10);
  fill(255);
  ellipse(155, 235, 4, 4);

  fill(255);
  ellipse(240, 240, 36, 36);
  fill(80, 50, 30);
  ellipse(240, 240, 20, 20);
  fill(0);
  ellipse(240, 240, 10, 10);
  fill(255);
  ellipse(235, 235, 4, 4);

  // 눈썹
  stroke(0);
  strokeWeight(3);
  line(145, 215, 175, 220);
  line(225, 220, 255, 215);

  // 코
  stroke(120, 80, 80);
  strokeWeight(2);
  point(200, 260);

  // 볼터치
  noStroke();
  fill(255, 180, 180, 150);
  ellipse(150, 265, 20, 10);
  ellipse(250, 265, 20, 10);

  // 입
  noFill();
  stroke(150, 50, 50);
  strokeWeight(2);
  arc(200, 280, 30, 15, 0, PI);

  // 옷 (V넥 네이비)
  noStroke();
  fill(20, 40, 80);
  beginShape();
  vertex(130, 370);
  vertex(270, 370);
  vertex(310, 500);
  vertex(90, 500);
  endShape(CLOSE);

  // 흰색 이너
  fill(255);
  triangle(170, 370, 230, 370, 200, 420);
}