// Tatjana Minčika tm23016

let p1, p2, p3, slider;

// uzstāda lietas pirms zīmēšanas
function setup() {
  const size = 800;
  createCanvas(size, size);

  // dināmiski izvēlas sākotnēja vienādmalu trijstūra virsotnes, zīmējot to iekš riņķa līnijas audekļa centrā
  const center = size/2;
  const radius = center - 50;
  p1 = createVector(center + radius * Math.cos(-90 * Math.PI / 180), center + radius * Math.sin(-90 * Math.PI / 180));
  p2 = createVector(center + radius * Math.cos(30 * Math.PI / 180), center + radius * Math.sin(30 * Math.PI / 180));
  p3 = createVector(center + radius * Math.cos(150 * Math.PI / 180), center + radius * Math.sin(150 * Math.PI / 180));

  // izveido slīdni, kas ļauj izmainīt sniegpārslas detalizāciju/dziļumu
  slider = createSlider(0, 6, 3, 1);
  slider.size(size);
}

// rekursīvi zīmē sniegpārslas segmentu (līniju)
// a, b - punkti; depth - dziļums
function drawSegment(a, b, depth) {
  if (depth === 0) {
    line(a.x, a.y, b.x, b.y);
  } else {
    // atrod 1/3 punktu un 2/3 punktu uz nogriežņa starp dotajiem a un b
    let div1 = p5.Vector.lerp(a, b, 1/3);
    let div2 = p5.Vector.lerp(a, b, 2/3);
    // atrod virsotni, kas veido ar div1 un div2 vienādmalu trijstūri -
    // aprēķina vektoru no div1 uz div2, pagriež to  uz -60°, jo vienādmalu trijstūra leņķi ir 60°,
    // un saskaita ar div1
    let peak = p5.Vector.add(div1, p5.Vector.rotate(p5.Vector.sub(div2, div1), radians(-60)));

    // zīmē visas līnijas a->div1->peak->div2->b
    drawSegment(a, div1, depth-1);
    drawSegment(div1, peak, depth-1);
    drawSegment(peak, div2, depth-1);
    drawSegment(div2, b, depth-1);
  }
}

// pastāvīgi zīmē uz audekļa
function draw() {
  background(230); // fona krāsa

  // iegūst pašreizējo detalizācijas/dziļuma vērtību un zīmē atbilstošo sniegpārslu
  let currDepth = slider.value();
  drawSegment(p1, p2, currDepth);
  drawSegment(p2, p3, currDepth);
  drawSegment(p3, p1, currDepth);
}
