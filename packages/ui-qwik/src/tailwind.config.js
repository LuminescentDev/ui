function getBlobKeyFrame() {
  const translateXPercentages = [0, 19, 38, 57, 76];
  const translateYPercentages = [0, 12, 25, 38, 50];
  const scaleValues = [0.8, 1, 1.2, 1.4];

  const translateX0Key = Math.floor(
    Math.random() * translateXPercentages.length,
  );
  const translateX0 = translateXPercentages[translateX0Key];
  translateXPercentages.splice(translateX0Key, 1);
  const translateX1Key = Math.floor(
    Math.random() * translateXPercentages.length,
  );
  const translateX1 = translateXPercentages[translateX1Key];
  translateXPercentages.splice(translateX1Key, 1);
  const translateX2Key = Math.floor(
    Math.random() * translateXPercentages.length,
  );
  const translateX2 = translateXPercentages[translateX2Key];
  translateXPercentages.splice(translateX2Key, 1);
  const translateX3Key = Math.floor(
    Math.random() * translateXPercentages.length,
  );
  const translateX3 = translateXPercentages[translateX3Key];
  translateXPercentages.splice(translateX3Key, 1);

  const translateY0Key = Math.floor(
    Math.random() * translateYPercentages.length,
  );
  const translateY0 = translateYPercentages[translateY0Key];
  translateYPercentages.splice(translateY0Key, 1);
  const translateY1Key = Math.floor(
    Math.random() * translateYPercentages.length,
  );
  const translateY1 = translateYPercentages[translateY1Key];
  translateYPercentages.splice(translateY1Key, 1);
  const translateY2Key = Math.floor(
    Math.random() * translateYPercentages.length,
  );
  const translateY2 = translateYPercentages[translateY2Key];
  translateYPercentages.splice(translateY2Key, 1);
  const translateY3Key = Math.floor(
    Math.random() * translateYPercentages.length,
  );
  const translateY3 = translateYPercentages[translateY3Key];
  translateYPercentages.splice(translateY3Key, 1);

  const scale0 = scaleValues[Math.floor(Math.random() * scaleValues.length)];
  const scale1 = scaleValues[Math.floor(Math.random() * scaleValues.length)];
  const scale2 = scaleValues[Math.floor(Math.random() * scaleValues.length)];
  const scale3 = scaleValues[Math.floor(Math.random() * scaleValues.length)];

  const keyframe = {
    '0%, 100%': {
      transform: `translate(${translateX0}cqw, ${translateY0}cqh) scale(${scale0})`,
    },
    '25%': {
      transform: `translate(${translateX1}cqw, ${translateY1}cqh) scale(${scale1})`,
    },
    '50%': {
      transform: `translate(${translateX2}cqw, ${translateY2}cqh) scale(${scale2})`,
    },
    '75%': {
      transform: `translate(${translateX3}cqw, ${translateY3}cqh) scale(${scale3})`,
    },
  };

  return keyframe;
}

const luminescent = {
  50: 'hsl(286deg, 65%, 97%)',
  100: 'hsl(286deg, 60%, 95%)',
  200: 'hsl(286deg, 55%, 90%)',
  300: 'hsl(286deg, 50%, 82%)',
  400: 'hsl(286deg, 45%, 75%)',
  500: 'hsl(286deg, 40%, 60%)',
  600: 'hsl(286deg, 35%, 51%)',
  700: 'hsl(286deg, 30%, 42%)',
  800: 'hsl(286deg, 25%, 35%)',
  900: 'hsl(286deg, 20%, 30%)',
  950: 'hsl(286deg, 15%, 17%)',
};

module.exports = {
  content: ['./node_modules/@luminescent/ui-qwik/**/*.{mjs,cjs}'],
  theme: {
    extend: {
      colors: { luminescent },
      animation: {
        blob: 'blob 15s infinite',
        blob1: 'blob1 15s infinite',
        blob2: 'blob2 15s infinite',
        blob3: 'blob3 15s infinite',
        blob4: 'blob4 15s infinite',
        blob5: 'blob5 15s infinite',
        blob6: 'blob6 15s infinite',
      },
      keyframes: {
        blob: getBlobKeyFrame(),
        blob1: getBlobKeyFrame(),
        blob2: getBlobKeyFrame(),
        blob3: getBlobKeyFrame(),
        blob4: getBlobKeyFrame(),
        blob5: getBlobKeyFrame(),
        blob6: getBlobKeyFrame(),
      },
    },
  },
};
