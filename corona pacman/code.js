var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["f91df3f7-f244-43f6-b6d9-49d43108e2a9","b0d81f66-d16f-4c49-ac9e-a4018fe03152","872f5f83-6b5d-4135-bb1e-a6db255a25b4","5364fe5c-305b-417c-8089-1133a55b3f16","113332e5-912c-4350-a500-b1fbdb532e3b","225363e0-b93b-4a11-8557-330704e97551","3b75202e-c2e1-465c-b40e-c0cf437f56e9","4a4425de-d2f1-4639-b96f-9bbce91ca491","1fb737ca-ac02-4617-bf3e-b8327b9db2b2","235ff53d-abcf-4e19-bec1-ea3d76e91a8f","203857e7-7e8c-4b05-90de-52a345fca0da","6489c2f2-4ca1-4b8e-8be8-3ad0a0291de1"],"propsByKey":{"f91df3f7-f244-43f6-b6d9-49d43108e2a9":{"name":"coin","sourceUrl":null,"frameSize":{"x":4,"y":4},"frameCount":1,"looping":true,"frameDelay":12,"version":"WWSZ.LQ0mDb8_CfzWzaAzrifB94bqcQo","loadedFromSource":true,"saved":true,"sourceSize":{"x":4,"y":4},"rootRelativePath":"assets/f91df3f7-f244-43f6-b6d9-49d43108e2a9.png"},"b0d81f66-d16f-4c49-ac9e-a4018fe03152":{"name":"wall","sourceUrl":null,"frameSize":{"x":26,"y":3},"frameCount":1,"looping":true,"frameDelay":12,"version":"7z4qIPF7Yrtj2K2nb1auQ4gN2k32Su1F","loadedFromSource":true,"saved":true,"sourceSize":{"x":26,"y":3},"rootRelativePath":"assets/b0d81f66-d16f-4c49-ac9e-a4018fe03152.png"},"872f5f83-6b5d-4135-bb1e-a6db255a25b4":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":100,"y":3},"frameCount":1,"looping":true,"frameDelay":12,"version":"yMTrvSRy5FPU5OWfjlDZ3fczt3GnpauD","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":3},"rootRelativePath":"assets/872f5f83-6b5d-4135-bb1e-a6db255a25b4.png"},"5364fe5c-305b-417c-8089-1133a55b3f16":{"name":"animation_2","sourceUrl":null,"frameSize":{"x":13,"y":3},"frameCount":1,"looping":true,"frameDelay":12,"version":".DSAAmgiF_D4PuAfkvfpPpoks0I8pTnq","loadedFromSource":true,"saved":true,"sourceSize":{"x":13,"y":3},"rootRelativePath":"assets/5364fe5c-305b-417c-8089-1133a55b3f16.png"},"113332e5-912c-4350-a500-b1fbdb532e3b":{"name":"corona1.jpeg_1","sourceUrl":null,"frameSize":{"x":300,"y":168},"frameCount":3,"looping":true,"frameDelay":12,"version":"yHOG6q2O7h5oC6Kn6cgAVlHZgcfJ5qec","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":504},"rootRelativePath":"assets/113332e5-912c-4350-a500-b1fbdb532e3b.png"},"225363e0-b93b-4a11-8557-330704e97551":{"name":"gameover","sourceUrl":"assets/v3/animations/soNmpe0kCN0udOkBRwFIJ-u5FBYHw_4dl3JJVQ3XHfY/225363e0-b93b-4a11-8557-330704e97551.png","frameSize":{"x":355,"y":142},"frameCount":1,"looping":true,"frameDelay":4,"version":"pvhXE_v4ZRY76LOdAaY1gT7_SqpHSm4l","loadedFromSource":true,"saved":true,"sourceSize":{"x":355,"y":142},"rootRelativePath":"assets/v3/animations/soNmpe0kCN0udOkBRwFIJ-u5FBYHw_4dl3JJVQ3XHfY/225363e0-b93b-4a11-8557-330704e97551.png"},"3b75202e-c2e1-465c-b40e-c0cf437f56e9":{"name":"winner","sourceUrl":"assets/v3/animations/soNmpe0kCN0udOkBRwFIJ-u5FBYHw_4dl3JJVQ3XHfY/3b75202e-c2e1-465c-b40e-c0cf437f56e9.png","frameSize":{"x":192,"y":83},"frameCount":1,"looping":true,"frameDelay":4,"version":"5tzsqX4k0TVyyCq5jgsV1E4W9q114RPM","loadedFromSource":true,"saved":true,"sourceSize":{"x":192,"y":83},"rootRelativePath":"assets/v3/animations/soNmpe0kCN0udOkBRwFIJ-u5FBYHw_4dl3JJVQ3XHfY/3b75202e-c2e1-465c-b40e-c0cf437f56e9.png"},"4a4425de-d2f1-4639-b96f-9bbce91ca491":{"name":"heart","sourceUrl":null,"frameSize":{"x":176,"y":124},"frameCount":1,"looping":true,"frameDelay":12,"version":"r3lvQB8ZHXnFAINejHyGuXUUQIi8GeC7","loadedFromSource":true,"saved":true,"sourceSize":{"x":176,"y":124},"rootRelativePath":"assets/4a4425de-d2f1-4639-b96f-9bbce91ca491.png"},"1fb737ca-ac02-4617-bf3e-b8327b9db2b2":{"name":"Player left","sourceUrl":null,"frameSize":{"x":52,"y":75},"frameCount":2,"looping":true,"frameDelay":12,"version":"3IynyegwKTQ.LpkoUzBXWusNheoQF5q_","loadedFromSource":true,"saved":true,"sourceSize":{"x":104,"y":75},"rootRelativePath":"assets/1fb737ca-ac02-4617-bf3e-b8327b9db2b2.png"},"235ff53d-abcf-4e19-bec1-ea3d76e91a8f":{"name":"Player right","sourceUrl":null,"frameSize":{"x":52,"y":75},"frameCount":2,"looping":true,"frameDelay":12,"version":"ZTbBn8P_uAd6x3hjrQdN1rpEFIAkxP1y","loadedFromSource":true,"saved":true,"sourceSize":{"x":104,"y":75},"rootRelativePath":"assets/235ff53d-abcf-4e19-bec1-ea3d76e91a8f.png"},"203857e7-7e8c-4b05-90de-52a345fca0da":{"name":"Player up","sourceUrl":null,"frameSize":{"x":52,"y":75},"frameCount":2,"looping":true,"frameDelay":12,"version":"CbbGgpZLcGkV_fGP2mz5kAbuORdzCQE4","loadedFromSource":true,"saved":true,"sourceSize":{"x":104,"y":75},"rootRelativePath":"assets/203857e7-7e8c-4b05-90de-52a345fca0da.png"},"6489c2f2-4ca1-4b8e-8be8-3ad0a0291de1":{"name":"Player down","sourceUrl":null,"frameSize":{"x":52,"y":75},"frameCount":2,"looping":true,"frameDelay":12,"version":"EL99C_9ufmNLYQSV7QyXXHfbsCxDQasQ","loadedFromSource":true,"saved":true,"sourceSize":{"x":104,"y":75},"rootRelativePath":"assets/6489c2f2-4ca1-4b8e-8be8-3ad0a0291de1.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var score = 0;
var lives = 3;

var player= createSprite(22,123,20,20);
player.setAnimation("Player right");
player.scale=1/5;
var heart1 = createSprite(115, 350);
heart1.setAnimation("heart");
heart1.scale = 2;
var heart2 = createSprite(200, 350);
heart2.setAnimation("heart");
heart2.scale = 2;
var heart3 = createSprite(285, 350);
heart3.setAnimation("heart");
heart3.scale = 2;


var wall = createSprite(0, 110);
wall.setAnimation("wall");
wall.scale = 3;
var wall2 = createSprite(400, 110);
wall2.setAnimation("wall");
wall2.scale = 3;
var wall3 = createSprite(0, 135);
wall3.setAnimation("wall");
wall3.scale = 3;
var wall4 = createSprite(400, 135);
wall4.setAnimation("wall");
wall4.scale = 3;
var wall5 = createSprite(35, 67);
wall5.setAnimation("wall");
wall5.scale = 3;
wall5.rotation = 90;
var wall6 = createSprite(366, 67);
wall6.setAnimation("wall");
wall6.scale = 3;
wall6.rotation = 90;
var wall7 = createSprite(200, 20);
wall7.setAnimation("animation_1");
wall7.scale = 3.4;
var wall8 = createSprite(65, 82);
wall8.setAnimation("wall");
wall8.scale = 2.7;
wall8.rotation = 90;
var wall9 = createSprite(340, 82);
wall9.setAnimation("wall");
wall9.scale = 2.7;
wall9.rotation = 90;
var wall10 = createSprite(200, 50);
wall10.setAnimation("wall");
wall10.scale = 3;
var wall11 = createSprite(237, 79);
wall11.setAnimation("wall");
wall11.scale = 2.5;
wall11.rotation = 90;
var wall12 = createSprite(193, 135);
wall12.setAnimation("wall");
wall12.scale = 3;
var wall13 = createSprite(205, 135);
wall13.setAnimation("wall");
wall13.scale = 3;
var wall14 = createSprite(200, 100);
wall14.setAnimation("animation_2");
wall14.scale = 4.5;
wall14.rotation = 90;
var wall15 = createSprite(100, 135);
wall15.setAnimation("wall");
wall15.scale = 4;
wall15.rotation = 90;
var wall16 = createSprite(77, 138);
wall16.setAnimation("animation_2");
wall16.scale = 3;
var wall17 = createSprite(300, 135);
wall17.setAnimation("wall");
wall17.scale = 4;
wall17.rotation = 90;
var wall18 = createSprite(325, 137);
wall18.setAnimation("animation_2");
wall18.scale = 3;
var wall19 = createSprite(200, 180);
wall19.setAnimation("wall");
wall19.scale = 3;
var wall20 = createSprite(237, 210);
wall20.setAnimation("wall");
wall20.scale = 2.5;
wall20.rotation = 90;
var wall21 = createSprite(63, 210);
wall21.setAnimation("wall");
wall21.scale = 3;
wall21.rotation = 90;
var wall22 = createSprite(335, 210);
wall22.setAnimation("wall");
wall22.scale = 3;
wall22.rotation = 90;
var wall23 = createSprite(200, 240);
wall23.setAnimation("wall");
wall23.scale = 3;
wall23.rotation = 90;
var wall24 = createSprite(270, 275);
wall24.setAnimation("wall");
wall24.scale = 3;
var wall25 = createSprite(300, 275);
wall25.setAnimation("wall");
wall25.scale = 3;
var wall26 = createSprite(300, 246);
wall26.setAnimation("animation_2");
wall26.scale = 4;
wall26.rotation = 90;
var wall27 = createSprite(95, 275);
wall27.setAnimation("wall");
wall27.scale = 3;
var wall28 = createSprite(125, 275);
wall28.setAnimation("wall");
wall28.scale = 3;
var wall29 = createSprite(100, 246);
wall29.setAnimation("animation_2");
wall29.scale = 4;
wall29.rotation = 90;
var wall30 = createSprite(0, 275);
wall30.setAnimation("wall");
wall30.scale = 3;
var wall31 = createSprite(0, 243);
wall31.setAnimation("wall");
wall31.scale = 3;
var wall32 = createSprite(400, 275);
wall32.setAnimation("wall");
wall32.scale = 3;
var wall33 = createSprite(400, 243);
wall33.setAnimation("wall");
wall33.scale = 3;
var wall34 = createSprite(370, 190);
wall34.setAnimation("wall");
wall34.scale = 3.7;
wall34.rotation = 90;
var wall35 = createSprite(32, 190);
wall35.setAnimation("wall");
wall35.scale = 3.7;
wall35.rotation = 90;
var wall36 = createSprite(200, 300);
wall36.setAnimation("animation_1");
wall36.scale = 3.4;
var wall37 = createSprite(365, 287);
wall37.setAnimation("animation_2");
wall37.scale = 2.5;
wall37.rotation = 90;
var wall38 = createSprite(35, 287);
wall38.setAnimation("animation_2");
wall38.scale = 2.5;
wall38.rotation = 90;
var wall39 = createSprite(165, 79);
wall39.setAnimation("wall");
wall39.scale = 2.5;
wall39.rotation = 90;
var wall40 = createSprite(315, 52);
wall40.setAnimation("animation_2");
wall40.scale = 3.5;
var wall41 = createSprite(85, 47.5);
wall41.setAnimation("animation_2");
wall41.scale = 3.8;
var wall42 = createSprite(165, 210);
wall42.setAnimation("wall");
wall42.scale = 2.5;
wall42.rotation = 90;
var wall43 = createSprite(35, 197);
wall43.setAnimation("wall");
wall43.scale = 2.5;
wall43.rotation = 90;
var wall44 = createSprite(370, 185);
wall44.setAnimation("wall");
wall44.scale = 2.5;
wall44.rotation = 90;


var coin = createSprite(48, 39);
coin.setAnimation("coin");
var coin2 = createSprite(48, 54);
coin2.setAnimation("coin");
var coin3 = createSprite(48, 69);
coin3.setAnimation("coin");
var coin4 = createSprite(48, 84);
coin4.setAnimation("coin");
var coin5 = createSprite(48, 99);
coin5.setAnimation("coin");
var coin6 = createSprite(48, 114);
coin6.setAnimation("coin");
var coin7 = createSprite(48, 129);
coin7.setAnimation("coin");
var coin8 = createSprite(48, 144);
coin8.setAnimation("coin");
var coin9 = createSprite(48, 159);
coin9.setAnimation("coin");
var coin10 = createSprite(48, 174);
coin10.setAnimation("coin");
var coin11 = createSprite(48, 189);
coin11.setAnimation("coin");
var coin12 = createSprite(48, 204);
coin12.setAnimation("coin");
var coin13 = createSprite(48, 219);
coin13.setAnimation("coin");
var coin14 = createSprite(48, 234);
coin14.setAnimation("coin");
var coin15 = createSprite(48, 249);
coin15.setAnimation("coin");
var coin16 = createSprite(48, 264);
coin16.setAnimation("coin");
var coin17 = createSprite(48, 279);
coin17.setAnimation("coin");
var coin18 = createSprite(60, 288);
coin18.setAnimation("coin");
var coin19 = createSprite(75, 288);
coin19.setAnimation("coin");
var coin20 = createSprite(90, 288);
coin20.setAnimation("coin");
var coin21 = createSprite(105, 288);
coin21.setAnimation("coin");
var coin22 = createSprite(120, 288);
coin22.setAnimation("coin");
var coin23 = createSprite(135, 288);
coin23.setAnimation("coin");
var coin24 = createSprite(150, 288);
coin24.setAnimation("coin");
var coin25 = createSprite(165, 288);
coin25.setAnimation("coin");
var coin26 = createSprite(180, 288);
coin26.setAnimation("coin");
var coin27 = createSprite(195, 288);
coin27.setAnimation("coin");
var coin28 = createSprite(210, 288);
coin28.setAnimation("coin");
var coin29 = createSprite(225, 288);
coin29.setAnimation("coin");
var coin30 = createSprite(240, 288);
coin30.setAnimation("coin");
var coin31 = createSprite(255, 288);
coin31.setAnimation("coin");
var coin32 = createSprite(270, 288);
coin32.setAnimation("coin");
var coin33 = createSprite(285, 288);
coin33.setAnimation("coin");
var coin34 = createSprite(300, 288);
coin34.setAnimation("coin");
var coin35 = createSprite(315, 288);
coin35.setAnimation("coin");
var coin36 = createSprite(330, 288);
coin36.setAnimation("coin");
var coin37 = createSprite(345, 288);
coin37.setAnimation("coin");
var coin38 = createSprite(352, 275);
coin38.setAnimation("coin");
var coin39 = createSprite(352, 260);
coin39.setAnimation("coin");
var coin40 = createSprite(352, 245);
coin40.setAnimation("coin");
var coin41 = createSprite(352, 230);
coin41.setAnimation("coin");
var coin42 = createSprite(352, 215);
coin42.setAnimation("coin");
var coin43 = createSprite(352, 200);
coin43.setAnimation("coin");
var coin44 = createSprite(352, 185);
coin44.setAnimation("coin");
var coin45 = createSprite(352, 170);
coin45.setAnimation("coin");
var coin46 = createSprite(352, 155);
coin46.setAnimation("coin");
var coin47 = createSprite(352, 140);
coin47.setAnimation("coin");
var coin48 = createSprite(352, 125);
coin48.setAnimation("coin");
var coin49 = createSprite(352, 110);
coin49.setAnimation("coin");
var coin50 = createSprite(352, 95);
coin50.setAnimation("coin");
var coin51 = createSprite(352, 80);
coin51.setAnimation("coin");
var coin52 = createSprite(352, 65);
coin52.setAnimation("coin");
var coin53 = createSprite(352, 50);
coin53.setAnimation("coin");
var coin54 = createSprite(340, 38);
coin54.setAnimation("coin");
var coin55 = createSprite(325, 38);
coin55.setAnimation("coin");
var coin56 = createSprite(310, 38);
coin56.setAnimation("coin");
var coin57 = createSprite(295, 38);
coin57.setAnimation("coin");
var coin58 = createSprite(280, 38);
coin58.setAnimation("coin");
var coin59 = createSprite(265, 38);
coin59.setAnimation("coin");
var coin60 = createSprite(250, 38);
coin60.setAnimation("coin");
var coin61 = createSprite(235, 38);
coin61.setAnimation("coin");
var coin62 = createSprite(220, 38);
coin62.setAnimation("coin");
var coin63 = createSprite(205, 38);
coin63.setAnimation("coin");
var coin64 = createSprite(190, 38);
coin64.setAnimation("coin");
var coin65 = createSprite(175, 38);
coin65.setAnimation("coin");
var coin66 = createSprite(160, 38);
coin66.setAnimation("coin");
var coin67 = createSprite(145, 38);
coin67.setAnimation("coin");
var coin68 = createSprite(130, 38);
coin68.setAnimation("coin");
var coin69 = createSprite(115, 38);
coin69.setAnimation("coin");
var coin70 = createSprite(100, 38);
coin70.setAnimation("coin");
var coin71 = createSprite(85, 38);
coin71.setAnimation("coin");
var coin72 = createSprite(70, 38);
coin72.setAnimation("coin");
var coin73 = createSprite(80, 70);
coin73.setAnimation("coin");
var coin74 = createSprite(80, 85);
coin74.setAnimation("coin");
var coin75 = createSprite(80, 100);
coin75.setAnimation("coin");
var coin76 = createSprite(80, 115);
coin76.setAnimation("coin");
var coin77 = createSprite(320, 70);
coin77.setAnimation("coin");
var coin78 = createSprite(320, 85);
coin78.setAnimation("coin");
var coin79 = createSprite(320, 100);
coin79.setAnimation("coin");
var coin80 = createSprite(320, 115);
coin80.setAnimation("coin");
var coin81 = createSprite(320, 155);
coin81.setAnimation("coin");
var coin82 = createSprite(320, 170);
coin82.setAnimation("coin");
var coin83 = createSprite(320, 185);
coin83.setAnimation("coin");
var coin84 = createSprite(320, 200);
coin84.setAnimation("coin");
var coin85 = createSprite(320, 215);
coin85.setAnimation("coin");
var coin86 = createSprite(320, 230);
coin86.setAnimation("coin");
var coin87 = createSprite(320, 245);
coin87.setAnimation("coin");
var coin88 = createSprite(320, 260);
coin88.setAnimation("coin");
var coin89 = createSprite(80, 155);
coin89.setAnimation("coin");
var coin90 = createSprite(80, 170);
coin90.setAnimation("coin");
var coin91 = createSprite(80, 185);
coin91.setAnimation("coin");
var coin92 = createSprite(80, 200);
coin92.setAnimation("coin");
var coin93 = createSprite(80, 215);
coin93.setAnimation("coin");
var coin94 = createSprite(80, 230);
coin94.setAnimation("coin");
var coin95 = createSprite(80, 245);
coin95.setAnimation("coin");
var coin96 = createSprite(80, 260);
coin96.setAnimation("coin");
var coin97 = createSprite(122, 53);
coin97.setAnimation("coin");
var coin98 = createSprite(122, 68);
coin98.setAnimation("coin");
var coin99 = createSprite(122, 83);
coin99.setAnimation("coin");
var coin100 = createSprite(122, 98);
coin100.setAnimation("coin");
var coin101 = createSprite(122, 113);
coin101.setAnimation("coin");
var coin102 = createSprite(122, 128);
coin102.setAnimation("coin");
var coin103 = createSprite(122, 143);
coin103.setAnimation("coin");
var coin104 = createSprite(122, 158);
coin104.setAnimation("coin");
var coin105 = createSprite(122, 173);
coin105.setAnimation("coin");
var coin106 = createSprite(122, 188);
coin106.setAnimation("coin");
var coin107 = createSprite(122, 203);
coin107.setAnimation("coin");
var coin108 = createSprite(122, 218);
coin108.setAnimation("coin");
var coin109 = createSprite(122, 233);
coin109.setAnimation("coin");
var coin110 = createSprite(122, 248);
coin110.setAnimation("coin");
var coin111 = createSprite(122, 263);
coin111.setAnimation("coin");
var coin112 = createSprite(148, 53);
coin112.setAnimation("coin");
var coin113 = createSprite(148, 68);
coin113.setAnimation("coin");
var coin114 = createSprite(148, 83);
coin114.setAnimation("coin");
var coin115 = createSprite(148, 98);
coin115.setAnimation("coin");
var coin116 = createSprite(148, 113);
coin116.setAnimation("coin");
var coin117 = createSprite(148, 128);
coin117.setAnimation("coin");
var coin118 = createSprite(148, 143);
coin118.setAnimation("coin");
var coin119 = createSprite(148, 158);
coin119.setAnimation("coin");
var coin120 = createSprite(148, 173);
coin120.setAnimation("coin");
var coin121 = createSprite(148, 188);
coin121.setAnimation("coin");
var coin122 = createSprite(148, 203);
coin122.setAnimation("coin");
var coin123 = createSprite(148, 218);
coin123.setAnimation("coin");
var coin124 = createSprite(148, 233);
coin124.setAnimation("coin");
var coin125 = createSprite(148, 248);
coin125.setAnimation("coin");
var coin126 = createSprite(148, 263);
coin126.setAnimation("coin");
var coin127 = createSprite(252, 53);
coin127.setAnimation("coin");
var coin128 = createSprite(252, 68);
coin128.setAnimation("coin");
var coin129 = createSprite(252, 83);
coin129.setAnimation("coin");
var coin130 = createSprite(252, 98);
coin130.setAnimation("coin");
var coin131 = createSprite(252, 113);
coin131.setAnimation("coin");
var coin132 = createSprite(252, 128);
coin132.setAnimation("coin");
var coin133 = createSprite(252, 143);
coin133.setAnimation("coin");
var coin134 = createSprite(252, 158);
coin134.setAnimation("coin");
var coin135 = createSprite(252, 173);
coin135.setAnimation("coin");
var coin136 = createSprite(252, 188);
coin136.setAnimation("coin");
var coin137 = createSprite(252, 203);
coin137.setAnimation("coin");
var coin138 = createSprite(252, 218);
coin138.setAnimation("coin");
var coin139 = createSprite(252, 233);
coin139.setAnimation("coin");
var coin140 = createSprite(252, 248);
coin140.setAnimation("coin");
var coin141 = createSprite(252, 263);
coin141.setAnimation("coin");
var coin142 = createSprite(280, 53);
coin142.setAnimation("coin");
var coin143 = createSprite(280, 68);
coin143.setAnimation("coin");
var coin144 = createSprite(280, 83);
coin144.setAnimation("coin");
var coin145 = createSprite(280, 98);
coin145.setAnimation("coin");
var coin146 = createSprite(280, 113);
coin146.setAnimation("coin");
var coin147 = createSprite(280, 128);
coin147.setAnimation("coin");
var coin148 = createSprite(280, 143);
coin148.setAnimation("coin");
var coin149 = createSprite(280, 158);
coin149.setAnimation("coin");
var coin150 = createSprite(280, 173);
coin150.setAnimation("coin");
var coin151 = createSprite(280, 188);
coin151.setAnimation("coin");
var coin152 = createSprite(280, 203);
coin152.setAnimation("coin");
var coin153 = createSprite(280, 218);
coin153.setAnimation("coin");
var coin154 = createSprite(280, 233);
coin154.setAnimation("coin");
var coin155 = createSprite(280, 248);
coin155.setAnimation("coin");
var coin156 = createSprite(280, 263);
coin156.setAnimation("coin");
var coin157 = createSprite(179, 66);
coin157.setAnimation("coin");
var coin158 = createSprite(179, 81);
coin158.setAnimation("coin");
var coin159 = createSprite(179, 96);
coin159.setAnimation("coin");
var coin160 = createSprite(179, 111);
coin160.setAnimation("coin");
var coin161 = createSprite(220, 66);
coin161.setAnimation("coin");
var coin162 = createSprite(220, 81);
coin162.setAnimation("coin");
var coin163 = createSprite(220, 96);
coin163.setAnimation("coin");
var coin164 = createSprite(220, 111);
coin164.setAnimation("coin");
var coin165 = createSprite(179, 196);
coin165.setAnimation("coin");
var coin166 = createSprite(179, 211);
coin166.setAnimation("coin");
var coin167 = createSprite(179, 226);
coin167.setAnimation("coin");
var coin168 = createSprite(179, 241);
coin168.setAnimation("coin");
var coin169 = createSprite(179, 256);
coin169.setAnimation("coin");
var coin170 = createSprite(179, 271);
coin170.setAnimation("coin");
var coin171 = createSprite(220, 196);
coin171.setAnimation("coin");
var coin172 = createSprite(220, 211);
coin172.setAnimation("coin");
var coin173 = createSprite(220, 226);
coin173.setAnimation("coin");
var coin174 = createSprite(220, 241);
coin174.setAnimation("coin");
var coin175 = createSprite(220, 256);
coin175.setAnimation("coin");
var coin176 = createSprite(220, 271);
coin176.setAnimation("coin");
var coin177 = createSprite(200, 65);
coin177.setAnimation("coin");
var coin178 = createSprite(200, 195);
coin178.setAnimation("coin");
var coin179 = createSprite(160, 152);
coin179.setAnimation("coin");
var coin180 = createSprite(175, 152);
coin180.setAnimation("coin");
var coin181 = createSprite(190, 152);
coin181.setAnimation("coin");
var coin182 = createSprite(205, 152);
coin182.setAnimation("coin");
var coin183 = createSprite(220, 152);
coin183.setAnimation("coin");
var coin184 = createSprite(235, 152);
coin184.setAnimation("coin");
var coin185 = createSprite(160, 166);
coin185.setAnimation("coin");
var coin186 = createSprite(175, 166);
coin186.setAnimation("coin");
var coin187 = createSprite(190, 166);
coin187.setAnimation("coin");
var coin188 = createSprite(205, 166);
coin188.setAnimation("coin");
var coin189 = createSprite(220, 166);
coin189.setAnimation("coin");
var coin190 = createSprite(235, 166);
coin190.setAnimation("coin");

var ghost1=createSprite(252,190,10,10);
ghost1.setAnimation("corona1.jpeg_1");
ghost1.scale=1/10;
ghost1.velocityX=3;

var ghost2=createSprite(113,102,10,10);
ghost2.setAnimation("corona1.jpeg_1");
ghost2.scale=1/10;
ghost2.velocityY=3;
var ghost3=createSprite(251,267,10,10);
ghost3.setAnimation("corona1.jpeg_1");
ghost3.scale=1/10;
ghost3.velocityY=-3;
var ghost4=createSprite(283,158,10,10);
ghost4.setAnimation("corona1.jpeg_1");
ghost4.scale=1/10;
ghost4.velocityX=3;
var ghost5=createSprite(44,36,10,10);
ghost5.scale=1/10;
ghost5.setAnimation("corona1.jpeg_1");
ghost5.velocityY=3;
var ghost6=createSprite(352,284,10,10);
ghost6.setAnimation("corona1.jpeg_1");
ghost6.scale=1/10;
ghost6.velocityY=-3;
var ghost7=createSprite(278,43,10,10);
ghost7.setAnimation("corona1.jpeg_1");
ghost7.scale=1/10;
ghost7.velocityY=3;
var ghost8=createSprite(150,267,20,20);
ghost8.setAnimation("corona1.jpeg_1");
ghost8.scale=1/10;
ghost8.velocityY=-3;

player.debug = false;

function draw() {
  background("black");
  
  ghost1.bounceOff(wall22);
  ghost1.bounceOff(wall20);
  ghost2.bounceOff(wall28);
  ghost2.bounceOff(wall7);
  ghost3.bounceOff(wall7);
  ghost3.bounceOff(wall24);
  ghost4.bounceOff(wall17);
  ghost4.bounceOff(wall15);
  ghost5.bounceOff(wall7);
  ghost5.bounceOff(wall36);
  ghost6.bounceOff(wall7);
  ghost6.bounceOff(wall36);
  ghost7.bounceOff(wall7);
  ghost7.bounceOff(wall25);
  ghost8.bounceOff(wall7);
  ghost8.bounceOff(wall28);
  playerControls();
  ghostCollide();
  spriteCollide();
  winnerScore();
  loopEnds();
  heartLives();
  coinScore();
  heart1.scale=1/2;
  heart2.scale=1/2;
  heart3.scale=1/2;
  drawSprites();
}

// Create your functions here
function winnerScore() {
  if (score >= 190) {
    var winner = createSprite(200, 200);
    winner.setAnimation("winner");
    winner.scale = 5;
    
    player.y = 400;
    player.x = 400;
  }
}
function coinScore() {
  if (player.isTouching(coin)) {
    coin.visible = false;
    score = score + 1;
    coin.y = 400;
    coin.x = 400;
  }
  if (player.isTouching(coin2)) {
    coin2.visible = false;
    score = score + 1;
    coin2.y = 400;
    coin2.x = 400;
  }
  if (player.isTouching(coin3)) {
    coin3.visible = false;
    score = score + 1;
    coin3.y = 400;
    coin3.x = 400;
  }
  if (player.isTouching(coin4)) {
    coin4.visible = false;
    score = score + 1;
    coin4.y = 400;
    coin4.x = 400;
  }
  if (player.isTouching(coin5)) {
    coin5.visible = false;
    score = score + 1;
    coin5.y = 400;
    coin5.x = 400;
  }
  if (player.isTouching(coin6)) {
    coin6.visible = false;
    score = score + 1;
    coin6.y = 400;
    coin6.x = 400;
  }
  if (player.isTouching(coin7)) {
    coin7.visible = false;
    score = score + 1;
    coin7.y = 400;
    coin7.x = 400;
  }
  if (player.isTouching(coin8)) {
    coin8.visible = false;
    score = score + 1;
    coin8.y = 400;
    coin8.x = 400;
  }
  if (player.isTouching(coin9)) {
    coin9.visible = false;
    score = score + 1;
    coin9.y = 400;
    coin9.x = 400;
  }
  if (player.isTouching(coin10)) {
    coin10.visible = false;
    score = score + 1;
    coin10.y = 400;
    coin10.x = 400;
  }
  if (player.isTouching(coin11)) {
    coin11.visible = false;
    score = score + 1;
    coin11.y = 400;
    coin11.x = 400;
  }
  if (player.isTouching(coin12)) {
    coin12.visible = false;
    score = score + 1;
    coin12.y = 400;
    coin12.x = 400;
  }
  if (player.isTouching(coin13)) {
    coin13.visible = false;
    score = score + 1;
    coin13.y = 400;
    coin13.x = 400;
  }
  if (player.isTouching(coin14)) {
    coin14.visible = false;
    score = score + 1;
    coin14.y = 400;
    coin14.x = 400;
  }
  if (player.isTouching(coin15)) {
    coin15.visible = false;
    score = score + 1;
    coin15.y = 400;
    coin15.x = 400;
  }
  if (player.isTouching(coin16)) {
    coin16.visible = false;
    score = score + 1;
    coin16.y = 400;
    coin16.x = 400;
  }
  if (player.isTouching(coin17)) {
    coin17.visible = false;
    score = score + 1;
    coin17.y = 400;
    coin17.x = 400;
  }
  if (player.isTouching(coin18)) {
    coin18.visible = false;
    score = score + 1;
    coin18.y = 400;
    coin18.x = 400;
  }
  if (player.isTouching(coin19)) {
    coin19.visible = false;
    score = score + 1;
    coin19.y = 400;
    coin19.x = 400;
  }
  if (player.isTouching(coin20)) {
    coin20.visible = false;
    score = score + 1;
    coin20.y = 400;
    coin20.x = 400;
  }
  if (player.isTouching(coin21)) {
    coin21.visible = false;
    score = score + 1;
    coin21.y = 400;
    coin21.x = 400;
  }
  if (player.isTouching(coin22)) {
    coin22.visible = false;
    score = score + 1;
    coin22.y = 400;
    coin22.x = 400;
  }
  if (player.isTouching(coin23)) {
    coin23.visible = false;
    score = score + 1;
    coin23.y = 400;
    coin23.x = 400;
  }
  if (player.isTouching(coin24)) {
    coin24.visible = false;
    score = score + 1;
    coin24.y = 400;
    coin24.x = 400;
  }
  if (player.isTouching(coin25)) {
    coin25.visible = false;
    score = score + 1;
    coin25.y = 400;
    coin25.x = 400;
  }
  if (player.isTouching(coin26)) {
    coin26.visible = false;
    score = score + 1;
    coin26.y = 400;
    coin26.x = 400;
  }
  if (player.isTouching(coin27)) {
    coin27.visible = false;
    score = score + 1;
    coin27.y = 400;
    coin27.x = 400;
  }
  if (player.isTouching(coin28)) {
    coin28.visible = false;
    score = score + 1;
    coin28.y = 400;
    coin28.x = 400;
  }
  if (player.isTouching(coin29)) {
    coin29.visible = false;
    score = score + 1;
    coin29.y = 400;
    coin29.x = 400;
  }
  if (player.isTouching(coin30)) {
    coin30.visible = false;
    score = score + 1;
    coin30.y = 400;
    coin30.x = 400;
  }
  if (player.isTouching(coin31)) {
    coin31.visible = false;
    score = score + 1;
    coin31.y = 400;
    coin31.x = 400;
  }
  if (player.isTouching(coin32)) {
    coin32.visible = false;
    score = score + 1;
    coin32.y = 400;
    coin32.x = 400;
  }
  if (player.isTouching(coin33)) {
    coin33.visible = false;
    score = score + 1;
    coin33.y = 400;
    coin33.x = 400;
  }
  if (player.isTouching(coin34)) {
    coin34.visible = false;
    score = score + 1;
    coin34.y = 400;
    coin34.x = 400;
  }
  if (player.isTouching(coin35)) {
    coin35.visible = false;
    score = score + 1;
    coin35.y = 400;
    coin35.x = 400;
  }
  if (player.isTouching(coin36)) {
    coin36.visible = false;
    score = score + 1;
    coin36.y = 400;
    coin36.x = 400;
  }
  if (player.isTouching(coin37)) {
    coin37.visible = false;
    score = score + 1;
    coin37.y = 400;
    coin37.x = 400;
  }
  if (player.isTouching(coin38)) {
    coin38.visible = false;
    score = score + 1;
    coin38.y = 400;
    coin38.x = 400;
  }
  if (player.isTouching(coin39)) {
    coin39.visible = false;
    score = score + 1;
    coin39.y = 400;
    coin39.x = 400;
  }
  if (player.isTouching(coin40)) {
    coin40.visible = false;
    score = score + 1;
    coin40.y = 400;
    coin40.x = 400;
  }
  if (player.isTouching(coin41)) {
    coin41.visible = false;
    score = score + 1;
    coin41.y = 400;
    coin41.x = 400;
  }
  if (player.isTouching(coin42)) {
    coin42.visible = false;
    score = score + 1;
    coin42.y = 400;
    coin42.x = 400;
  }
  if (player.isTouching(coin43)) {
    coin43.visible = false;
    score = score + 1;
    coin43.y = 400;
    coin43.x = 400;
  }
  if (player.isTouching(coin44)) {
    coin44.visible = false;
    score = score + 1;
    coin44.y = 400;
    coin44.x = 400;
  }
  if (player.isTouching(coin45)) {
    coin45.visible = false;
    score = score + 1;
    coin45.y = 400;
    coin45.x = 400;
  }
  if (player.isTouching(coin46)) {
    coin46.visible = false;
    score = score + 1;
    coin46.y = 400;
    coin46.x = 400;
  }
  if (player.isTouching(coin47)) {
    coin47.visible = false;
    score = score + 1;
    coin47.y = 400;
    coin47.x = 400;
  }
  if (player.isTouching(coin48)) {
    coin48.visible = false;
    score = score + 1;
    coin48.y = 400;
    coin48.x = 400;
  }
  if (player.isTouching(coin49)) {
    coin49.visible = false;
    score = score + 1;
    coin49.y = 400;
    coin49.x = 400;
  }
  if (player.isTouching(coin50)) {
    coin50.visible = false;
    score = score + 1;
    coin50.y = 400;
    coin50.x = 400;
  }
  if (player.isTouching(coin51)) {
    coin51.visible = false;
    score = score + 1;
    coin51.y = 400;
    coin51.x = 400;
  }
  if (player.isTouching(coin52)) {
    coin52.visible = false;
    score = score + 1;
    coin52.y = 400;
    coin52.x = 400;
  }
  if (player.isTouching(coin53)) {
    coin53.visible = false;
    score = score + 1;
    coin53.y = 400;
    coin53.x = 400;
  }
  if (player.isTouching(coin54)) {
    coin54.visible = false;
    score = score + 1;
    coin54.y = 400;
    coin54.x = 400;
  }
  if (player.isTouching(coin55)) {
    coin55.visible = false;
    score = score + 1;
    coin55.y = 400;
    coin55.x = 400;
  }
  if (player.isTouching(coin56)) {
    coin56.visible = false;
    score = score + 1;
    coin56.y = 400;
    coin56.x = 400;
  }
  if (player.isTouching(coin57)) {
    coin57.visible = false;
    score = score + 1;
    coin57.y = 400;
    coin57.x = 400;
  }
  if (player.isTouching(coin58)) {
    coin58.visible = false;
    score = score + 1;
    coin58.y = 400;
    coin58.x = 400;
  }
  if (player.isTouching(coin59)) {
    coin59.visible = false;
    score = score + 1;
    coin59.y = 400;
    coin59.x = 400;
  }
  if (player.isTouching(coin60)) {
    coin60.visible = false;
    score = score + 1;
    coin60.y = 400;
    coin60.x = 400;
  }
  if (player.isTouching(coin61)) {
    coin61.visible = false;
    score = score + 1;
    coin61.y = 400;
    coin61.x = 400;
  }
  if (player.isTouching(coin62)) {
    coin62.visible = false;
    score = score + 1;
    coin62.y = 400;
    coin62.x = 400;
  }
  if (player.isTouching(coin63)) {
    coin63.visible = false;
    score = score + 1;
    coin63.y = 400;
    coin63.x = 400;
  }
  if (player.isTouching(coin64)) {
    coin64.visible = false;
    score = score + 1;
    coin64.y = 400;
    coin64.x = 400;
  }
  if (player.isTouching(coin65)) {
    coin65.visible = false;
    score = score + 1;
    coin65.y = 400;
    coin65.x = 400;
  }
  if (player.isTouching(coin66)) {
    coin66.visible = false;
    score = score + 1;
    coin66.y = 400;
    coin66.x = 400;
  }
  if (player.isTouching(coin67)) {
    coin67.visible = false;
    score = score + 1;
    coin67.y = 400;
    coin67.x = 400;
  }
  if (player.isTouching(coin68)) {
    coin68.visible = false;
    score = score + 1;
    coin68.y = 400;
    coin68.x = 400;
  }
  if (player.isTouching(coin69)) {
    coin69.visible = false;
    score = score + 1;
    coin69.y = 400;
    coin69.x = 400;
  }
  if (player.isTouching(coin70)) {
    coin70.visible = false;
    score = score + 1;
    coin70.y = 400;
    coin70.x = 400;
  }
  if (player.isTouching(coin71)) {
    coin71.visible = false;
    score = score + 1;
    coin71.y = 400;
    coin71.x = 400;
  }
  if (player.isTouching(coin72)) {
    coin72.visible = false;
    score = score + 1;
    coin72.y = 400;
    coin72.x = 400;
  }
  if (player.isTouching(coin73)) {
    coin73.visible = false;
    score = score + 1;
    coin73.y = 400;
    coin73.x = 400;
  }
  if (player.isTouching(coin74)) {
    coin74.visible = false;
    score = score + 1;
    coin74.y = 400;
    coin74.x = 400;
  }
  if (player.isTouching(coin75)) {
    coin75.visible = false;
    score = score + 1;
    coin75.y = 400;
    coin75.x = 400;
  }
  if (player.isTouching(coin76)) {
    coin76.visible = false;
    score = score + 1;
    coin76.y = 400;
    coin76.x = 400;
  }
  if (player.isTouching(coin77)) {
    coin77.visible = false;
    score = score + 1;
    coin77.y = 400;
    coin77.x = 400;
  }
  if (player.isTouching(coin78)) {
    coin78.visible = false;
    score = score + 1;
    coin78.y = 400;
    coin78.x = 400;
  }
  if (player.isTouching(coin79)) {
    coin79.visible = false;
    score = score + 1;
    coin79.y = 400;
    coin79.x = 400;
  }
  if (player.isTouching(coin80)) {
    coin80.visible = false;
    score = score + 1;
    coin80.y = 400;
    coin80.x = 400;
  }
  if (player.isTouching(coin81)) {
    coin81.visible = false;
    score = score + 1;
    coin81.y = 400;
    coin81.x = 400;
  }
  if (player.isTouching(coin82)) {
    coin82.visible = false;
    score = score + 1;
    coin82.y = 400;
    coin82.x = 400;
  }
  if (player.isTouching(coin83)) {
    coin83.visible = false;
    score = score + 1;
    coin83.y = 400;
    coin83.x = 400;
  }
  if (player.isTouching(coin84)) {
    coin84.visible = false;
    score = score + 1;
    coin84.y = 400;
    coin84.x = 400;
  }
  if (player.isTouching(coin85)) {
    coin85.visible = false;
    score = score + 1;
    coin85.y = 400;
    coin85.x = 400;
  }
  if (player.isTouching(coin86)) {
    coin86.visible = false;
    score = score + 1;
    coin86.y = 400;
    coin86.x = 400;
  }
  if (player.isTouching(coin87)) {
    coin87.visible = false;
    score = score + 1;
    coin87.y = 400;
    coin87.x = 400;
  }
  if (player.isTouching(coin88)) {
    coin88.visible = false;
    score = score + 1;
    coin88.y = 400;
    coin88.x = 400;
  }
  if (player.isTouching(coin89)) {
    coin89.visible = false;
    score = score + 1;
    coin89.y = 400;
    coin89.x = 400;
  }
  if (player.isTouching(coin90)) {
    coin90.visible = false;
    score = score + 1;
    coin90.y = 400;
    coin90.x = 400;
  }
  if (player.isTouching(coin91)) {
    coin91.visible = false;
    score = score + 1;
    coin91.y = 400;
    coin91.x = 400;
  }
  if (player.isTouching(coin92)) {
    coin92.visible = false;
    score = score + 1;
    coin92.y = 400;
    coin92.x = 400;
  }
  if (player.isTouching(coin93)) {
    coin93.visible = false;
    score = score + 1;
    coin93.y = 400;
    coin93.x = 400;
  }
  if (player.isTouching(coin94)) {
    coin94.visible = false;
    score = score + 1;
    coin94.y = 400;
    coin94.x = 400;
  }
  if (player.isTouching(coin95)) {
    coin95.visible = false;
    score = score + 1;
    coin95.y = 400;
    coin95.x = 400;
  }
  if (player.isTouching(coin96)) {
    coin96.visible = false;
    score = score + 1;
    coin96.y = 400;
    coin96.x = 400;
  }
  if (player.isTouching(coin97)) {
    coin97.visible = false;
    score = score + 1;
    coin97.y = 400;
    coin97.x = 400;
  }
  if (player.isTouching(coin98)) {
    coin98.visible = false;
    score = score + 1;
    coin98.y = 400;
    coin98.x = 400;
  }
  if (player.isTouching(coin99)) {
    coin99.visible = false;
    score = score + 1;
    coin99.y = 400;
    coin99.x = 400;
  }
  if (player.isTouching(coin100)) {
    coin100.visible = false;
    score = score + 1;
    coin100.y = 400;
    coin100.x = 400;
  }
  if (player.isTouching(coin101)) {
    coin101.visible = false;
    score = score + 1;
    coin101.y = 400;
    coin101.x = 400;
  }
  if (player.isTouching(coin102)) {
    coin102.visible = false;
    score = score + 1;
    coin102.y = 400;
    coin102.x = 400;
  }
  if (player.isTouching(coin103)) {
    coin103.visible = false;
    score = score + 1;
    coin103.y = 400;
    coin103.x = 400;
  }
  if (player.isTouching(coin104)) {
    coin104.visible = false;
    score = score + 1;
    coin104.y = 400;
    coin104.x = 400;
  }
  if (player.isTouching(coin105)) {
    coin105.visible = false;
    score = score + 1;
    coin105.y = 400;
    coin105.x = 400;
  }
  if (player.isTouching(coin106)) {
    coin106.visible = false;
    score = score + 1;
    coin106.y = 400;
    coin106.x = 400;
  }
  if (player.isTouching(coin107)) {
    coin107.visible = false;
    score = score + 1;
    coin107.y = 400;
    coin107.x = 400;
  }
  if (player.isTouching(coin108)) {
    coin108.visible = false;
    score = score + 1;
    coin108.y = 400;
    coin108.x = 400;
  }
  if (player.isTouching(coin109)) {
    coin109.visible = false;
    score = score + 1;
    coin109.y = 400;
    coin109.x = 400;
  }
  if (player.isTouching(coin110)) {
    coin110.visible = false;
    score = score + 1;
    coin110.y = 400;
    coin110.x = 400;
  }
  if (player.isTouching(coin111)) {
    coin111.visible = false;
    score = score + 1;
    coin111.y = 400;
    coin111.x = 400;
  }
  if (player.isTouching(coin112)) {
    coin112.visible = false;
    score = score + 1;
    coin112.y = 400;
    coin112.x = 400;
  }
  if (player.isTouching(coin113)) {
    coin113.visible = false;
    score = score + 1;
    coin113.y = 400;
    coin113.x = 400;
  }
  if (player.isTouching(coin114)) {
    coin114.visible = false;
    score = score + 1;
    coin114.y = 400;
    coin114.x = 400;
  }
  if (player.isTouching(coin115)) {
    coin115.visible = false;
    score = score + 1;
    coin115.y = 400;
    coin115.x = 400;
  }
  if (player.isTouching(coin116)) {
    coin116.visible = false;
    score = score + 1;
    coin116.y = 400;
    coin116.x = 400;
  }
  if (player.isTouching(coin117)) {
    coin117.visible = false;
    score = score + 1;
    coin117.y = 400;
    coin117.x = 400;
  }
  if (player.isTouching(coin118)) {
    coin118.visible = false;
    score = score + 1;
    coin118.y = 400;
    coin118.x = 400;
  }
  if (player.isTouching(coin119)) {
    coin119.visible = false;
    score = score + 1;
    coin119.y = 400;
    coin119.x = 400;
  }
  if (player.isTouching(coin120)) {
    coin120.visible = false;
    score = score + 1;
    coin120.y = 400;
    coin120.x = 400;
  }
  if (player.isTouching(coin121)) {
    coin121.visible = false;
    score = score + 1;
    coin121.y = 400;
    coin121.x = 400;
  }
  if (player.isTouching(coin122)) {
    coin122.visible = false;
    score = score + 1;
    coin122.y = 400;
    coin122.x = 400;
  }
  if (player.isTouching(coin123)) {
    coin123.visible = false;
    score = score + 1;
    coin123.y = 400;
    coin123.x = 400;
  }
  if (player.isTouching(coin124)) {
    coin124.visible = false;
    score = score + 1;
    coin124.y = 400;
    coin124.x = 400;
  }
  if (player.isTouching(coin125)) {
    coin125.visible = false;
    score = score + 1;
    coin125.y = 400;
    coin125.x = 400;
  }
  if (player.isTouching(coin126)) {
    coin126.visible = false;
    score = score + 1;
    coin126.y = 400;
    coin126.x = 400;
  }
  if (player.isTouching(coin127)) {
    coin127.visible = false;
    score = score + 1;
    coin127.y = 400;
    coin127.x = 400;
  }
  if (player.isTouching(coin128)) {
    coin128.visible = false;
    score = score + 1;
    coin128.y = 400;
    coin128.x = 400;
  }
  if (player.isTouching(coin129)) {
    coin129.visible = false;
    score = score + 1;
    coin129.y = 400;
    coin129.x = 400;
  }
  if (player.isTouching(coin130)) {
    coin130.visible = false;
    score = score + 1;
    coin130.y = 400;
    coin130.x = 400;
  }
  if (player.isTouching(coin131)) {
    coin131.visible = false;
    score = score + 1;
    coin131.y = 400;
    coin131.x = 400;
  }
  if (player.isTouching(coin132)) {
    coin132.visible = false;
    score = score + 1;
    coin132.y = 400;
    coin132.x = 400;
  }
  if (player.isTouching(coin133)) {
    coin133.visible = false;
    score = score + 1;
    coin133.y = 400;
    coin133.x = 400;
  }
  if (player.isTouching(coin134)) {
    coin134.visible = false;
    score = score + 1;
    coin134.y = 400;
    coin134.x = 400;
  }
  if (player.isTouching(coin135)) {
    coin135.visible = false;
    score = score + 1;
    coin135.y = 400;
    coin135.x = 400;
  }
  if (player.isTouching(coin136)) {
    coin136.visible = false;
    score = score + 1;
    coin136.y = 400;
    coin136.x = 400;
  }
  if (player.isTouching(coin137)) {
    coin137.visible = false;
    score = score + 1;
    coin137.y = 400;
    coin137.x = 400;
  }
  if (player.isTouching(coin138)) {
    coin138.visible = false;
    score = score + 1;
    coin138.y = 400;
    coin138.x = 400;
  }
  if (player.isTouching(coin139)) {
    coin139.visible = false;
    score = score + 1;
    coin139.y = 400;
    coin139.x = 400;
  }
  if (player.isTouching(coin140)) {
    coin140.visible = false;
    score = score + 1;
    coin140.y = 400;
    coin140.x = 400;
  }
  if (player.isTouching(coin141)) {
    coin141.visible = false;
    score = score + 1;
    coin141.y = 400;
    coin141.x = 400;
  }
  if (player.isTouching(coin142)) {
    coin142.visible = false;
    score = score + 1;
    coin142.y = 400;
    coin142.x = 400;
  }
  if (player.isTouching(coin143)) {
    coin143.visible = false;
    score = score + 1;
    coin143.y = 400;
    coin143.x = 400;
  }
  if (player.isTouching(coin144)) {
    coin144.visible = false;
    score = score + 1;
    coin144.y = 400;
    coin144.x = 400;
  }
  if (player.isTouching(coin145)) {
    coin145.visible = false;
    score = score + 1;
    coin145.y = 400;
    coin145.x = 400;
  }
  if (player.isTouching(coin146)) {
    coin146.visible = false;
    score = score + 1;
    coin146.y = 400;
    coin146.x = 400;
  }
  if (player.isTouching(coin147)) {
    coin147.visible = false;
    score = score + 1;
    coin147.y = 400;
    coin147.x = 400;
  }
  if (player.isTouching(coin148)) {
    coin148.visible = false;
    score = score + 1;
    coin148.y = 400;
    coin148.x = 400;
  }
  if (player.isTouching(coin149)) {
    coin149.visible = false;
    score = score + 1;
    coin149.y = 400;
    coin149.x = 400;
  }
  if (player.isTouching(coin150)) {
    coin150.visible = false;
    score = score + 1;
    coin150.y = 400;
    coin150.x = 400;
  }
  if (player.isTouching(coin151)) {
    coin151.visible = false;
    score = score + 1;
    coin151.y = 400;
    coin151.x = 400;
  }
  if (player.isTouching(coin152)) {
    coin152.visible = false;
    score = score + 1;
    coin152.y = 400;
    coin152.x = 400;
  }
  if (player.isTouching(coin153)) {
    coin153.visible = false;
    score = score + 1;
    coin153.y = 400;
    coin153.x = 400;
  }
  if (player.isTouching(coin154)) {
    coin154.visible = false;
    score = score + 1;
    coin154.y = 400;
    coin154.x = 400;
  }
  if (player.isTouching(coin155)) {
    coin155.visible = false;
    score = score + 1;
    coin155.y = 400;
    coin155.x = 400;
  }
  if (player.isTouching(coin156)) {
    coin156.visible = false;
    score = score + 1;
    coin156.y = 400;
    coin156.x = 400;
  }
  if (player.isTouching(coin157)) {
    coin157.visible = false;
    score = score + 1;
    coin157.y = 400;
    coin157.x = 400;
  }
  if (player.isTouching(coin158)) {
    coin158.visible = false;
    score = score + 1;
    coin158.y = 400;
    coin158.x = 400;
  }
  if (player.isTouching(coin159)) {
    coin159.visible = false;
    score = score + 1;
    coin159.y = 400;
    coin159.x = 400;
  }
  if (player.isTouching(coin160)) {
    coin160.visible = false;
    score = score + 1;
    coin160.y = 400;
    coin160.x = 400;
  }
  if (player.isTouching(coin161)) {
    coin161.visible = false;
    score = score + 1;
    coin161.y = 400;
    coin161.x = 400;
  }
  if (player.isTouching(coin162)) {
    coin162.visible = false;
    score = score + 1;
    coin162.y = 400;
    coin162.x = 400;
  }
  if (player.isTouching(coin163)) {
    coin163.visible = false;
    score = score + 1;
    coin163.y = 400;
    coin163.x = 400;
  }
  if (player.isTouching(coin164)) {
    coin164.visible = false;
    score = score + 1;
    coin164.y = 400;
    coin164.x = 400;
  }
  if (player.isTouching(coin165)) {
    coin165.visible = false;
    score = score + 1;
    coin165.y = 400;
    coin165.x = 400;
  }
  if (player.isTouching(coin166)) {
    coin166.visible = false;
    score = score + 1;
    coin166.y = 400;
    coin166.x = 400;
  }
  if (player.isTouching(coin167)) {
    coin167.visible = false;
    score = score + 1;
    coin167.y = 400;
    coin167.x = 400;
  }
  if (player.isTouching(coin168)) {
    coin168.visible = false;
    score = score + 1;
    coin168.y = 400;
    coin168.x = 400;
  }
  if (player.isTouching(coin169)) {
    coin169.visible = false;
    score = score + 1;
    coin169.y = 400;
    coin169.x = 400;
  }
  if (player.isTouching(coin170)) {
    coin170.visible = false;
    score = score + 1;
    coin170.y = 400;
    coin170.x = 400;
  }
  if (player.isTouching(coin171)) {
    coin171.visible = false;
    score = score + 1;
    coin171.y = 400;
    coin171.x = 400;
  }
  if (player.isTouching(coin172)) {
    coin172.visible = false;
    score = score + 1;
    coin172.y = 400;
    coin172.x = 400;
  }
  if (player.isTouching(coin173)) {
    coin173.visible = false;
    score = score + 1;
    coin173.y = 400;
    coin173.x = 400;
  }
  if (player.isTouching(coin174)) {
    coin174.visible = false;
    score = score + 1;
    coin174.y = 400;
    coin174.x = 400;
  }
  if (player.isTouching(coin175)) {
    coin175.visible = false;
    score = score + 1;
    coin175.y = 400;
    coin175.x = 400;
  }
  if (player.isTouching(coin176)) {
    coin176.visible = false;
    score = score + 1;
    coin176.y = 400;
    coin176.x = 400;
  }
  if (player.isTouching(coin177)) {
    coin177.visible = false;
    score = score + 1;
    coin177.y = 400;
    coin177.x = 400;
  }
  if (player.isTouching(coin178)) {
    coin178.visible = false;
    score = score + 1;
    coin178.y = 400;
    coin178.x = 400;
  }
  if (player.isTouching(coin179)) {
    coin179.visible = false;
    score = score + 1;
    coin179.y = 400;
    coin179.x = 400;
  }
  if (player.isTouching(coin180)) {
    coin180.visible = false;
    score = score + 1;
    coin180.y = 400;
    coin180.x = 400;
  }
  if (player.isTouching(coin181)) {
    coin181.visible = false;
    score = score + 1;
    coin181.y = 400;
    coin181.x = 400;
  }
  if (player.isTouching(coin182)) {
    coin182.visible = false;
    score = score + 1;
    coin182.y = 400;
    coin182.x = 400;
  }
  if (player.isTouching(coin183)) {
    coin183.visible = false;
    score = score + 1;
    coin183.y = 400;
    coin183.x = 400;
  }
  if (player.isTouching(coin184)) {
    coin184.visible = false;
    score = score + 1;
    coin184.y = 400;
    coin184.x = 400;
  }
  if (player.isTouching(coin185)) {
    coin185.visible = false;
    score = score + 1;
    coin185.y = 400;
    coin185.x = 400;
  }
  if (player.isTouching(coin186)) {
    coin186.visible = false;
    score = score + 1;
    coin186.y = 400;
    coin186.x = 400;
  }
  if (player.isTouching(coin187)) {
    coin187.visible = false;
    score = score + 1;
    coin187.y = 400;
    coin187.x = 400;
  }
  if (player.isTouching(coin188)) {
    coin188.visible = false;
    score = score + 1;
    coin188.y = 400;
    coin188.x = 400;
  }
  if (player.isTouching(coin189)) {
    coin189.visible = false;
    score = score + 1;
    coin189.y = 400;
    coin189.x = 400;
  }
  if (player.isTouching(coin190)) {
    coin190.visible = false;
    score = score + 1;
    coin190.y = 400;
    coin190.x = 400;
  }
}
function heartLives() {
  if (lives == 2) {
    heart1.visible = false;
  }
  if (lives == 1) {
    heart2.visible = false;
  }
  if (lives == 0) {
    heart3.visible = false;
    ghost1.visible = false;
    ghost2.visible = false;
    ghost3.visible = false;
    ghost4.visible = false;
    ghost5.visible = false;
    ghost6.visible = false;
    ghost7.visible = false;
    player.visible = false;
    var over = createSprite(200, 200);
    over.setAnimation("gameover");
    over.scale = 1;
  }
    if(score===190){
      var winner = createSprite(200,200);
    winner.setAnimation("winner");
    //winner.scale=1/1.5;
    }
}
function ghostCollide() {
  if (ghost1.isTouching(player)) {
    lives = lives - 1;
    player.x = 20;
    player.y = 122;
    player.velocityX = 0;
    player.velocityY = 0;
  }
  if (ghost2.isTouching(player)) {
    lives = lives - 1;
    player.x = 20;
    player.y = 122;
    player.velocityX = 0;
    player.velocityY = 0;
}
  if (ghost3.isTouching(player)) {
    lives = lives - 1;
    player.x = 20;
    player.y = 122;
    player.velocityX = 0;
    player.velocityY = 0;
}
if (ghost4.isTouching(player)) {
    lives = lives - 1;
    player.x = 20;
    player.y = 122;
    player.velocityX = 0;
    player.velocityY = 0;
}
if (ghost5.isTouching(player)) {
    lives = lives - 1;
    player.x = 20;
    player.y = 122;
    player.velocityX = 0;
    player.velocityY = 0;
} 
if (ghost6.isTouching(player)) {
    lives = lives - 1;
    player.x = 20;
    player.y = 122;
    player.velocityX = 0;
    player.velocityY = 0;
}
if (ghost7.isTouching(player)) {
    lives = lives - 1;
    player.x = 20;
    player.y = 122;
    player.velocityX = 0;
    player.velocityY = 0;
}
if (ghost8.isTouching(player)){
  lives = lives - 1;
  player.x=20;
  player.y=122;
  player.velocityX = 0;
  player.velocityY = 0;
}
}

function loopEnds() {
  if (player.x < 0) {
    player.x = 400;
  }
  if (player.x > 400) {
    player.x = 0;
  }
}

function spriteCollide() {
  player.collide(wall);
  player.collide(wall2);
  player.collide(wall3);
  player.collide(wall4);
  player.collide(wall5);
  player.collide(wall6);
  player.collide(wall7);
  player.collide(wall8);
  player.collide(wall9);
  player.collide(wall10);
  player.collide(wall11);
  player.collide(wall12);
  player.collide(wall13);
  player.collide(wall14);
  player.collide(wall15);
  player.collide(wall16);
  player.collide(wall17);
  player.collide(wall18);
  player.collide(wall19);
  player.collide(wall20);
  player.collide(wall21);
  player.collide(wall22);
  player.collide(wall23);
  player.collide(wall24);
  player.collide(wall25);
  player.collide(wall26);
  player.collide(wall27);
  player.collide(wall28);
  player.collide(wall29);
  player.collide(wall30);
  player.collide(wall31);
  player.collide(wall32);
  player.collide(wall33);
  player.collide(wall34);
  player.collide(wall35);
  player.collide(wall36);
  player.collide(wall37);
  player.collide(wall38);
  player.collide(wall39);
  player.collide(wall40);
  player.collide(wall41);
  player.collide(wall42);
}
function playerControls() {
  if (keyWentDown("right")) {
    player.velocityX = 4;
    player.velocityY = -4;
    player.setAnimation("Player right");
  }
  if (keyWentDown("left")) {
    player.velocityX = -4;
    player.velocityY = 0;
    player.setAnimation("Player left");
  }
  if (keyWentDown("up")) {
    player.velocityY = -4;
    player.velocityX = 0;
    player.setAnimation("Player up");
    
  }
  if (keyWentDown("down")) {
    player.velocityY = 4;
    player.velocityX = 0;
    player.setAnimation("Player down");
    
  }
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
