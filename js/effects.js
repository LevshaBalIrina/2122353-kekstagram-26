
const DEFAULT_SCALE_VALUE = 100;
const DEFAULT_SCALE_VALUE_STEP = 25;
const MAX_SCALE_VALUE = 100;
const MIN_SCALE_VALUE = 25;

const effects = [
  'none',
  'chrome',
  'sepia',
  'marvin',
  'phobos',
  'heat',
];

const setScaleValue = (value) => {
  document.querySelector('.scale__control--value').value = value;
};

const setScaleDefaultValue = () => {
  setScaleValue(`${DEFAULT_SCALE_VALUE}%`);
};

const getScaleCurrentValue = () => {
  const currentValue = document.querySelector('.scale__control--value').value;
  return Number(currentValue.slice(0, -1));
};
const setPictureTransform = (scale) => {
  document.querySelector('.img-upload__preview').style.transform = `scale(${scale})`;
};

const changeScaleValue = (lower = true) => {
  const currentValue = getScaleCurrentValue();
  let value = currentValue;
  if (lower === true) {
    if (currentValue > MIN_SCALE_VALUE) {
      value = currentValue - DEFAULT_SCALE_VALUE_STEP;
    }
  } else {
    if (currentValue < MAX_SCALE_VALUE) {
      value = currentValue + DEFAULT_SCALE_VALUE_STEP;
    }
  }

  setScaleValue(`${value}%`);
  setPictureTransform(value / 100);
};

const changeFilter = (effect) => {
  if (!effects.includes(effect)) {
    return;
  }
  const preview = document.querySelector('.img-upload__preview');
  const picture = preview.querySelector('img');
  effects.forEach((item) => picture.classList.remove(`effects__preview--${item}`));
  picture.classList.add(`effects__preview--${effect}`);
};

export { setScaleDefaultValue, changeScaleValue, changeFilter };
