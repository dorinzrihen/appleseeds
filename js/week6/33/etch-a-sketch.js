
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakebutton = document.querySelector('.shake');

//משתנה גלובאלי שמאפיין לנו גם את המהירות וגם את הגודל של העיגול
const MOVE_AMOUNT = 20;

// להכניס 2 משתנים בבת אחת
const { width, height } = canvas;

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);
// create random x and y starting points on the canvas

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;

let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
// ההגדרות ההתחלתיות של הקנבס, נצטרך להשתמש בהם שוב מפני שהם לא מתעדכנים אוטומטית
ctx.beginPath(); 
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

//{key} דרך לקבל רק את הערך של key 
// ככה לא נצטרך להתחיל להפריד את הKEY VALUE
function draw({ key }) {
  // כדי שהצבע ישתנה
  hue += 5;
  console.log(hue);
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  console.log(key);

  ctx.beginPath();
  ctx.moveTo(x, y);

  switch (key) {
    case 'ArrowUp':
      y -= MOVE_AMOUNT;
      break;
    case 'ArrowRight':
      x += MOVE_AMOUNT;
      break;
    case 'ArrowDown':
      y += MOVE_AMOUNT;
      break;
    case 'ArrowLeft':
      x -= MOVE_AMOUNT;
      break;
    default:
      break;
  }
  ctx.lineTo(x, y);
  ctx.stroke();
}


function handleKey(e) {
  if (e.key.includes('Arrow')) {
    //נועד בשביל שאם נלחץ על החצים זה יזיז לנו את כל המסך ולא רק על הקנבס
    e.preventDefault();
    draw({ key: e.key });
  }
}
// clear /shke function
function clearCanvas() {
  canvas.classList.add('shake');
  ctx.clearRect(0, 0, width, height);
  canvas.addEventListener(
    'animationend',
    function() {
      console.log('Done the shake!');
      canvas.classList.remove('shake');
    },
    //אחרי פעם אחת האיוונט יעלם ובכך לא ישוכפל
    { once: true }
  );
}

// listen for arrow keys
window.addEventListener('keydown', handleKey);
shakebutton.addEventListener('click', clearCanvas);