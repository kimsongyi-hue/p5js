let duration;

function setup() {
  createCanvas(300, 200); // 해상도 작게 → 용량 절약
  frameRate(25);          // FPS 증가 → 부드럽게
  colorMode(HSB, 360, 100, 100, 100);

  duration = random(7000, 9000); // 루프 7~9초
  startTime = millis();
}

// ---------- 도형 함수 ----------
function drawFancyCircle(x, y, diameter, fillColor, strokeColor, strokeW, alphaVal = 150) {
  fill(red(fillColor), green(fillColor), blue(fillColor), alphaVal);
  stroke(strokeColor);
  strokeWeight(strokeW);
  circle(x, y, diameter);
}

function drawFancyRect(x, y, w, h, fillColor, strokeColor, strokeW, alphaVal = 130) {
  fill(red(fillColor), green(fillColor), blue(fillColor), alphaVal);
  stroke(strokeColor);
  strokeWeight(strokeW);
  rect(x, y, w, h);
}

function drawFancyQuad(x1, y1, x2, y2, x3, y3, x4, y4, fillColor, strokeColor, strokeW, alphaVal = 140) {
  fill(red(fillColor), green(fillColor), blue(fillColor), alphaVal);
  stroke(strokeColor);
  strokeWeight(strokeW);
  quad(x1, y1, x2, y2, x3, y3, x4, y4);
}

function drawFancyArc(x, y, w, h, start, stop, strokeColor, strokeW) {
  noFill();
  stroke(strokeColor);
  strokeWeight(strokeW);
  arc(x, y, w, h, start, stop);
}

// ---------- draw ----------
function draw() {
  let loopT = (millis() % duration) / duration;  // 0~1 루프
  let t = loopT * TWO_PI * 1.5;                 // 속도 1.5배

  let halfWidth = width / 2;
  let halfHeight = height / 2;

  // 배경 4분할
  let colors = [
    color(255, 220, 200),
    color(200, 220, 255),
    color(220, 255, 200),
    color(255, 200, 255)
  ];
  noStroke();
  fill(colors[0]); rect(0, 0, halfWidth, halfHeight);
  fill(colors[1]); rect(halfWidth, 0, halfWidth, halfHeight);
  fill(colors[2]); rect(0, halfHeight, halfWidth, halfHeight);
  fill(colors[3]); rect(halfWidth, halfHeight, halfWidth, halfHeight);

  // 중앙 십자선
  stroke(0);
  strokeWeight(4);
  line(halfWidth, 0, halfWidth, height);
  line(0, halfHeight, width, halfHeight);

  // 애니메이션 변수
  let pulse = map(sin(t * 2), -1, 1, 0.6, 1.4);   // 크기 변동
  let shakeX = sin(t * 3) * 8;                     // 좌우 흔들림
  let shakeY = cos(t * 2.5) * 8;                   // 상하 흔들림
  let hueShift = (loopT * 480) % 360;             // 색상 변화
  let dynamicColor = color((hueShift + 50) % 360, 80, 100);

  // 도형
  drawFancyCircle(halfWidth / 2 + shakeX, halfHeight / 2 + shakeY, 45 * pulse, dynamicColor, color(0), 2, 140);
  drawFancyRect(10 + shakeX, halfHeight - 55 + shakeY, 50 * pulse, 35 * pulse, dynamicColor, color(120, 120, 0), 2, 110);
  drawFancyCircle(halfWidth + halfWidth / 2 + sin(t * 3) * 7, halfHeight / 2 + cos(t * 2) * 7, 50 * pulse, dynamicColor, color(0), 2, 130);
  drawFancyArc(halfWidth + halfWidth / 2, halfHeight / 2 + 15, 60 * pulse, 60 * pulse,
               PI / 4 + sin(t*1.2), PI + sin(t*0.6), color(50,50,50), 3);
  drawFancyCircle(halfWidth / 2 + shakeX, halfHeight + halfHeight / 2 + shakeY, 45 * pulse, dynamicColor, color(0), 2, 120);
  drawFancyQuad(15 + sin(t*1.5)*3, halfHeight + 70 + cos(t*1.3)*3,
                60 + sin(t*1.2)*3, halfHeight + 65 + cos(t*1.5)*3,
                55 + sin(t*1.1)*3, halfHeight + 95 + cos(t*1.2)*3,
                10 + sin(t*1.4)*3, halfHeight + 100 + cos(t*1.1)*3,
                dynamicColor, color(30,90,130), 2, 120);
  drawFancyRect(halfWidth + 15 + shakeX, halfHeight + 60 + shakeY, 50 * pulse, 35 * pulse, dynamicColor, color(80,30,130), 3, 100);

  // 점 움직임
  stroke(0);
  strokeWeight(3);
  point(halfWidth + halfWidth / 2 + sin(t*5)*10 + random(-2,2), halfHeight + 40 + random(-2,2));
  point(halfWidth + halfWidth / 2 + 15, halfHeight + 90 + cos(t*4)*10 + random(-2,2));
  point(halfWidth + halfWidth / 2 - 15, halfHeight + 85 + sin(t*6)*10 + random(-2,2));
  point(halfWidth + halfWidth / 2 + 12, halfHeight + 70 + sin(t*2)*7 + random(-2,2));
}

// ---------- GIF 저장 ----------
function keyPressed() {
  if (key === 's') {
    saveGif('homework.gif', duration / 1000); // 루프 길이에 맞춰 저장
  }
}
