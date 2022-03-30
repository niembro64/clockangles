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

// const clock = () => {
//   minutes = 0;
//   var mAngle = (minutes * 6) % 360;
//   var hAngle = ((minutes * 6) / 12) % 360;
//   var hh = "";
//   var mm = "";

// //   while (1) {
//     minutes++;
//     mAngle = (minutes * 6) % 360;
//     hAngle = ((minutes * 6) / 12) % 360;
//     p("____");
//     for (var h = 0; h < hAngle; h++) {
//       hh += "|";
//     }
//     p(hh);
//     for (var m = 0; m < mAngle; m++) {
//       mm += "|";
//     }
//     p(mm);
//     p("____");
// //   }
// };

// clock();
