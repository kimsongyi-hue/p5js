let blink = 1;       // 눈 크기
let blinkSpeed = 0.1;

let headSwing = 0;   // 머리 흔들림
let swingDir = 1;

let breathe = 0;     // 위아래 움직임

let blushAlpha = 150;
let blushDir = 1;

let recording = false;

function setup() {
  createCanvas(600, 400);
  frameRate(30);
}

function draw() {
  background(255);

  // 자동 인터랙션 -----------------------------
  blinkAnimation();
  swingAnimation();
  breatheAnimation();
  blushAnimation();

  push();
  translate(width / 2 - 200 + headSwing, height / 2 - 250 + breathe);
  drawCharacter();
  pop();

  // GIF 기록 중이면 자동 캡처
  if (recording) captureGifFrame();
}

// --------------------------------------------------
// GIF 저장 시작
// --------------------------------------------------
function keyPressed() {
  if (key === 's' || key === 'S') {
    startGifRecording();
  }
}

function startGifRecording() {
  if (recording) return;

  recording = true;
  saveGif('interactionCaricature.gif', 2, { delay: 0, units: 'seconds' });

  setTimeout(() => {
    recording = false;
  }, 2000);
}

// --------------------------------------------------
// 인터랙션 애니메이션
// --------------------------------------------------
function blinkAnimation() {
  blink += blinkSpeed;
  if (blink > 1 || blink < 0.1) blinkSpeed *= -1;
}

function swingAnimation() {
  headSwing += 0.3 * swingDir;
  if (headSwing > 5 || headSwing < -5) swingDir *= -1;
}

function breatheAnimation() {
  breathe = sin(frameCount * 0.05) * 3; 
}

function blushAnimation() {
  blushAlpha += blushDir * 1.5;
  if (blushAlpha > 200 || blushAlpha < 100) blushDir *= -1;
}

// --------------------------------------------------
// 캐릭터 그리기 (귀/목 선 제거 완료)
// --------------------------------------------------
function drawCharacter() {

  // 기본적으로 모든 파트는 noStroke() 상태에서 시작
  noStroke();

  // 머리 뒤쪽
  fill(0);
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

  // 귀 (stroke 없는 버전)
  ellipse(130, 250, 25, 40);
  ellipse(270, 250, 25, 40);

  // 목 (stroke 없음)
  rect(180, 320, 40, 50, 10);

  // 앞머리
  fill(0);
  beginShape();
  vertex(140, 150);
  vertex(260, 150);
  vertex(260, 180);
  vertex(140, 180);
  endShape(CLOSE);

  // *** 눈 ***
  fill(255);
  ellipse(160, 240, 36, 36 * blink);
  ellipse(240, 240, 36, 36 * blink);

  if (blink > 0.3) {
    // 눈동자
    fill(80, 50, 30);
    ellipse(160, 240, 20, 20 * blink);
    ellipse(240, 240, 20, 20 * blink);

    fill(0);
    ellipse(160, 240, 10, 10 * blink);
    ellipse(240, 240, 10, 10 * blink);

    fill(255);
    ellipse(155, 235, 4, 4 * blink);
    ellipse(235, 235, 4, 4 * blink);
  }

  // 눈썹 – stroke 켜기
  stroke(0);
  strokeWeight(3);
  line(145, 215, 175, 220);
  line(225, 220, 255, 215);

  // 코
  stroke(120, 80, 80);
  strokeWeight(2);
  point(200, 260);

  // 볼터치 – stroke 끄기
  noStroke();
  fill(255, 180, 180, blushAlpha);
  ellipse(150, 265, 20, 10);
  ellipse(250, 265, 20, 10);

  // 입 – stroke 켜기
  noFill();
  stroke(150, 50, 50);
  strokeWeight(2);
  arc(200, 280, 30, 15, 0, PI);

  // 옷 – stroke 없음
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
