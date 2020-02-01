// eslint-disable-next-line strict
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 30;
var GAP_HIAST = 6;
var FONT_GAP = 15;
var BAR_HEIGHT = 20;
var GIST_HEIGHT = 120;
var GIST_WIGHT = 40;
var GIST_INTERVAL = 50;


var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (array) {
  var maxElement = array[0];

  for (var i = 0; i < array.length; i++) {
    if (maxElement < array[i]) {
      maxElement = array[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {

  var maxTime = getMaxElement(times);
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0 , 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  ctx.fillStyle = '#000';
  ctx.font = 'PT Mono 16px';
  ctx.fillStyle = 'black';
  ctx.fillText('Ура вы победили!', CLOUD_X + FONT_GAP, CLOUD_Y + FONT_GAP * 2);
  ctx.fillText('Список результатов:', CLOUD_X + FONT_GAP, CLOUD_Y + FONT_GAP * 3);

  for (var i = 0; i < names.length; i++) {
    if (name === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(210, 60%, ' + Math.floor(Math.random() * 50) + '%)';
    }

    ctx.fillRect(CLOUD_X + GAP_HIAST + (i * (GIST_INTERVAL + GIST_WIGHT)), CLOUD_Y + GIST_HEIGHT - times[i] * BAR_HEIGHT / maxTime, GIST_WIGHT, CLOUD_Y + GIST_HEIGHT + (times[i] * BAR_HEIGHT / maxTime));
    ctx.font = 'PT Mono 16px';
    ctx.fillStyle = 'black';
    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP_HIAST + (i * (GIST_INTERVAL + GIST_WIGHT)), CLOUD_Y - GAP_HIAST + GIST_HEIGHT - times[i] * BAR_HEIGHT / maxTime);
    ctx.fillText(names[i], CLOUD_X + GAP_HIAST + (i * (GIST_INTERVAL + GIST_WIGHT)), CLOUD_Y + GAP_HIAST + GIST_HEIGHT + CLOUD_Y + GAP_HIAST + GIST_HEIGHT);
  }
};
