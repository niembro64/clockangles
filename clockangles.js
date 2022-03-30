const p = (a) => {
  console.log(a);
};

const clockAngles = (minutes) => {
  var mAngle = (minutes * 6) % 360;
  var hAngle = ((minutes * 6) / 12) % 360;

  return Math.abs(mAngle - hAngle) % 180;
};

a1 = 60;

p(clockAngles(a1));

// return Math.abs(mAngle - hAngle) > 180
// ? Math.abs(mAngle - hAngle) - 180
// : Math.abs(mAngle - hAngle);