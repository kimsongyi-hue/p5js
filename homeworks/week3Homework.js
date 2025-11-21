function setup() {
  createCanvas(600, 400);
  frameRate(1);
  noLoop();
}

// 사용자 함수: 색상과 투명도, 선 굵기 포함 원 그리기
function drawFancyCircle(x, y, diameter, fillColor, strokeColor, strokeW, alphaVal = 150) {
  fill(red(fillColor), green(fillColor), blue(fillColor), alphaVal);
  stroke(strokeColor);
  strokeWeight(strokeW);
  circle(x, y, diameter);
}

// 사용자 함수: 색상과 투명도, 선 굵기 포함 사각형 그리기
function drawFancyRect(x, y, w, h, fillColor, strokeColor, strokeW, alphaVal = 130) {
  fill(red(fillColor), green(fillColor), blue(fillColor), alphaVal);
  stroke(strokeColor);
  strokeWeight(strokeW);
  rect(x, y, w, h);
}

// 사용자 함수: 색상과 투명도, 선 굵기 포함 4각형 그리기
function drawFancyQuad(x1, y1, x2, y2, x3, y3, x4, y4, fillColor, strokeColor, strokeW, alphaVal = 140) {
  fill(red(fillColor), green(fillColor), blue(fillColor), alphaVal);
  stroke(strokeColor);
  strokeWeight(strokeW);
  quad(x1, y1, x2, y2, x3, y3, x4, y4);
}

// 사용자 함수: 호 그리기 (noFill)
function drawFancyArc(x, y, w, h, start, stop, strokeColor, strokeW) {
  noFill();
  stroke(strokeColor);
  strokeWeight(strokeW);
  arc(x, y, w, h, start, stop);
}

function draw() {
  // 1. 배경 4분할 색 지정 (왼쪽 위, 오른쪽 위, 왼쪽 아래, 오른쪽 아래)
  let colors = [
    color(255, 220, 200), // 왼쪽 위 - 연한 오렌지
    color(200, 220, 255), // 오른쪽 위 - 연한 파랑
    color(220, 255, 200), // 왼쪽 아래 - 연한 초록
    color(255, 200, 255)  // 오른쪽 아래 - 연한 분홍
  ];

  let halfWidth = width / 2;  // 300
  let halfHeight = height / 2; // 200

  noStroke();
  fill(colors[0]);
  rect(0, 0, halfWidth, halfHeight);

  fill(colors[1]);
  rect(halfWidth, 0, halfWidth, halfHeight);

  fill(colors[2]);
  rect(0, halfHeight, halfWidth, halfHeight);

  fill(colors[3]);
  rect(halfWidth, halfHeight, halfWidth, halfHeight);

  stroke(0);
  strokeWeight(4);
  line(halfWidth, 0, halfWidth, height);
  line(0, halfHeight, width, halfHeight);

  // 도형들 (크기 및 위치 조정)

  drawFancyCircle(halfWidth / 2, halfHeight / 2, 90, color(200, 80, 90), color(0), 2, 140); // (150,100)
  drawFancyRect(20, halfHeight - 110, 100, 70, color(220, 220, 80), color(120, 120, 0), 2, 110);

  drawFancyCircle(halfWidth + halfWidth / 2, halfHeight / 2, 100, color(80, 200, 120), color(0), 2, 130);
  drawFancyArc(halfWidth + halfWidth / 2, halfHeight / 2 + 30, 120, 120, PI / 4, PI, color(50, 50, 50), 3);

  drawFancyCircle(halfWidth / 2, halfHeight + halfHeight / 2, 90, color(80, 120, 200), color(0), 2, 120);
  drawFancyQuad(
    30, halfHeight + 140,
    120, halfHeight + 130,
    110, halfHeight + 190,
    20, halfHeight + 200,
    color(80, 180, 220), color(30, 90, 130), 2, 120
  );

  drawFancyRect(halfWidth + 30, halfHeight + 120, 100, 70, color(160, 90, 220), color(80, 30, 130), 3, 100);

  stroke(0);
  strokeWeight(5);
  point(halfWidth + halfWidth / 2, halfHeight + 80);
  point(halfWidth + halfWidth / 2 + 30, halfHeight + 180);
  point(halfWidth + halfWidth / 2 - 30, halfHeight + 170);
  point(halfWidth + halfWidth / 2 + 25, halfHeight + 140);
}
