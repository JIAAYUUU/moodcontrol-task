/******************* 
 * Mmi_Reward Test *
 *******************/

import { PsychoJS } from 'https://pavlovia.org/lib/core-3.2.js';
import * as core from 'https://pavlovia.org/lib/core-3.2.js';
import { TrialHandler } from 'https://pavlovia.org/lib/data-3.2.js';
import { Scheduler } from 'https://pavlovia.org/lib/util-3.2.js';
import * as util from 'https://pavlovia.org/lib/util-3.2.js';
import * as visual from 'https://pavlovia.org/lib/visual-3.2.js';
import { Sound } from 'https://pavlovia.org/lib/sound-3.2.js';

// init psychoJS:
var psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([(- 1), (- 1), (- 1)]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'Mmi_Reward';  // from the Builder filename that created this script
let expInfo = {'participant': ''};

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(initRoutineBegin);
flowScheduler.add(initRoutineEachFrame);
flowScheduler.add(initRoutineEnd);
const instructionLoop1LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(instructionLoop1LoopBegin, instructionLoop1LoopScheduler);
flowScheduler.add(instructionLoop1LoopScheduler);
flowScheduler.add(instructionLoop1LoopEnd);
flowScheduler.add(lifeHappyRoutineBegin);
flowScheduler.add(lifeHappyRoutineEachFrame);
flowScheduler.add(lifeHappyRoutineEnd);
const instructionLoop2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(instructionLoop2LoopBegin, instructionLoop2LoopScheduler);
flowScheduler.add(instructionLoop2LoopScheduler);
flowScheduler.add(instructionLoop2LoopEnd);
const blockLoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(blockLoopLoopBegin, blockLoopLoopScheduler);
flowScheduler.add(blockLoopLoopScheduler);
flowScheduler.add(blockLoopLoopEnd);
const logWinningsLoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(logWinningsLoopLoopBegin, logWinningsLoopLoopScheduler);
flowScheduler.add(logWinningsLoopLoopScheduler);
flowScheduler.add(logWinningsLoopLoopEnd);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({expName, expInfo});

var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '3.2.3';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0/Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0/60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}

var initClock;
var getAnswerDur;
var showChoiceDur;
var showResultDur;
var isiDur;
var moodQuestionDur;
var moodRatingDur;
var itiDur;
var nTrialsPerBlock;
var pRating;
var lastHappyRating;
var rpeHighMax;
var rpeLowMax;
var pCongruent;
var maxIncongInARow;
var blockCond;
var trialCond;
var randomChoice;
var step;
var holdDur;
var releaseDur;
var speed;
var tPressed;
var tLast;
var keyLast;
var startPoint;
var leftKey;
var rightKey;
var lockKey;
var currentSlider;
var instructionClock;
var instrImage;
var instrText;
var instrContinueText;
var instrKeyResp;
var lifeHappyClock;
var lifeHappyText;
var lifeHappySlider;
var lifeHappyResp;
var instruction_2Clock;
var instrImage_2;
var instrText_2;
var instrContinueText_2;
var instrKeyResp_2;
var blockHappyClock;
var blockHappyText;
var blockHappySlider;
var blockHappyResp;
var blankClock;
var blankText;
var getAnswerClock;
var currentWinnings;
var certainStr;
var outcome1Str;
var outcome2Str;
var fixCross;
var certainBox;
var outcome1Box;
var outcome2Box;
var certainText;
var outcome1Text;
var outcome2Text;
var choiceKey;
var trialHappyReps;
var iTrial;
var showChoiceClock;
var fixCross_2;
var certainBox_2;
var outcome1Box_2;
var outcome2Box_2;
var certainText_2;
var outcome1Text_2;
var outcome2Text_2;
var showResultClock;
var fixCross_3;
var certainBox_3;
var outcome1Box_3;
var outcome2Box_3;
var certainText_3;
var outcome1Text_3;
var outcome2Text_3;
var ISIClock;
var fixCross_ISI;
var trialHappyClock;
var happyText;
var happySlider;
var happyResp;
var ITIClock;
var fixCross_ITI;
var blockRestClock;
var endOfBlockText;
var restKeyResp;
var showWinningsClock;
var finalWinningsStr;
var goodbyeText;
var finalWinningsText;
var spaceToContinue;
var goodbyeKeyResp_2;
var showHashClock;
var hashStr;
var doNotCloseText;
var enterHashText;
var hashText;
var spaceToExit;
var goodbyeKeyResp;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "init"
  initClock = new util.Clock();
  // Set constants 
  getAnswerDur = 3.0;
  showChoiceDur = 6.0;
  showResultDur = 1.0;
  isiDur = 1.0;
  moodQuestionDur = 3.0;
  moodRatingDur = 4.0;
  itiDur = 2.0;
  nTrialsPerBlock = 20; 
  
  // declare rating constants
  pRating = 0.41;
  lastHappyRating = 0.5;
  
  // declare RPE constants
  rpeHighMax = 14.0;
  rpeLowMax = 1.5;
  
  // declare congruency constants
  pCongruent = 0.7; // probability of congruent trial
  maxIncongInARow = 3; // max number of incongruent trials in a row
  
  // declare conditions
  blockCond = "Blocks_3block.xlsx";
  trialCond = "HighAmounts_reward.xlsx";
  
  // Make function to randomly shuffle trial order
  randomChoice = function (maxInt, nChoose) {
      
      // Make list
      var bucket = [];
      for (var i=0;i<maxInt;i++) {
          bucket.push(i);
      }
      
      // Pick nChoose elements at random
      var output = [];
      for (var i=0;i<nChoose;i++) {
         var randomIndex = Math.floor(Math.random()*bucket.length);
         output.push(bucket.splice(randomIndex, 1)[0]);
      }
      
      // Return result
      return output
  }
  // Declare constants
  step = 0.01; // distance for short press
  holdDur = 50; // ms before considered "held"
  releaseDur = 100; // ms before considered "released"
  speed = 0.0004; // distance per ms
  
  // Initialize variables
  tPressed = 0;
  tLast = 0;
  keyLast = 0;
  startPoint = 0.5;
  
  // Declare keys
  leftKey = 37; // left arrow
  rightKey = 39; // right arrow
  lockKey = 32; // spacebar
  
  // Set KeyHold function to run whenever key is currently pressed
  document.onkeydown = KeyHold;
  currentSlider = null;
  
  // Declare key-hold function for slider
  function KeyHold(){
      // if currentSlider is inactive, do not continue
      if ((currentSlider === null) || (currentSlider.getAutoDraw() == false)) {
          return;
      }
      
      // Get ID of key pressed
      var KeyID = event.keyCode;
      
      // get current time
      var d = new Date();
      var tNow = d.getTime(); // in ms
      //console.log("tNow-tLast = " + (tNow-tLast));
      // If it has been too long or key has changed, consider this a new press and update tPressed
      if ((tNow-tLast)>releaseDur || KeyID != keyLast) {
          tPressed = tNow;
          startPoint = currentSlider.markerPos;
      }
      // Update tLast/keyLast
      tLast = tNow;
      keyLast = KeyID;
      
      // Update press duration
      var pressDur = Math.max(tNow-tPressed-holdDur,0);
      
      // Move slider
      if (KeyID==leftKey) { //left
          // move slider left
          currentSlider.markerPos = startPoint - step - pressDur*speed;
      } else if (KeyID==rightKey) { //right
          // move slider right
          currentSlider.markerPos = startPoint + step + pressDur*speed;
      } else if (KeyID==lockKey) { //space
          // lock in choice 
          var RT = currentSlider._responseClock.getTime() - currentSlider.tStart;
          currentSlider._recordRating(currentSlider.markerPos,RT);
          //console.log("rating = " + currentSlider.getRating() + ", RT = " + RT);
      }
      
      // Enforce limits on rating
      if (currentSlider.markerPos < 0) {
          currentSlider.markerPos = 0.0;
      } else if (currentSlider.markerPos > 1) {
          currentSlider.markerPos = 1.0;
      }
  }
  
  
  // Initialize components for Routine "instruction"
  instructionClock = new util.Clock();
  instrImage = new visual.ImageStim({
    win : psychoJS.window,
    name : 'instrImage', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0.2], size : [0.814, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  instrText = new visual.TextStim({
    win: psychoJS.window,
    name: 'instrText',
    text: 'default text',
    font: 'Arial',
    units : 'height', 
    pos: [0, 0], height: 0.05,  wrapWidth: 1.2, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  instrContinueText = new visual.TextStim({
    win: psychoJS.window,
    name: 'instrContinueText',
    text: 'Drücken Sie die LEERTASTE, um fortzufahren.',
    font: 'Arial',
    units : 'height', 
    pos: [0, (- 0.45)], height: 0.05,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  instrKeyResp = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "lifeHappy"
  lifeHappyClock = new util.Clock();
  lifeHappyText = new visual.TextStim({
    win: psychoJS.window,
    name: 'lifeHappyText',
    text: 'Alles in allem,\nwie zufrieden sind Sie derzeit mit Ihrem Leben?',
    font: 'Arial',
    units : 'height', 
    pos: [0, 0.4], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  lifeHappySlider = new visual.Slider({
    win: psychoJS.window, name: 'lifeHappySlider',
    size: [1.0, 0.05], pos: [0, 0], units: 'height',
    labels: ['frustriert', 'glücklich'], ticks: [0.0, 1.0],
    granularity: 0.01, style: [visual.Slider.Style.RATING],
    color: new util.Color('LightGray'), 
    fontFamily: 'HelveticaBold', bold: true, italic: false, 
    flip: false,
  });
  
  lifeHappyResp = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instruction_2"
  instruction_2Clock = new util.Clock();
  instrImage_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'instrImage_2', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0.2], size : [0.814, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  instrText_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instrText_2',
    text: 'default text',
    font: 'Arial',
    units : 'height', 
    pos: [0, 0], height: 0.05,  wrapWidth: 1.2, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  instrContinueText_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instrContinueText_2',
    text: 'Drücken Sie die LEERTASTE, um fortzufahren.',
    font: 'Arial',
    units : 'height', 
    pos: [0, (- 0.45)], height: 0.05,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  instrKeyResp_2 = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "blockHappy"
  blockHappyClock = new util.Clock();
  blockHappyText = new visual.TextStim({
    win: psychoJS.window,
    name: 'blockHappyText',
    text: 'Wie glücklich bist du in diesem Moment?',
    font: 'Arial',
    units : 'height', 
    pos: [0, 0.4], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  blockHappySlider = new visual.Slider({
    win: psychoJS.window, name: 'blockHappySlider',
    size: [1.0, 0.05], pos: [0, 0], units: 'height',
    labels: ['frustriert', 'glücklich'], ticks: [0.0, 1.0],
    granularity: 0.01, style: [visual.Slider.Style.RATING],
    color: new util.Color('LightGray'), 
    fontFamily: 'HelveticaBold', bold: true, italic: false, 
    flip: false,
  });
  
  blockHappyResp = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "blank"
  blankClock = new util.Clock();
  blankText = new visual.TextStim({
    win: psychoJS.window,
    name: 'blankText',
    text: '',
    font: 'Arial',
    units : 'height', 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "getAnswer"
  getAnswerClock = new util.Clock();
  // Initialize current winnings
  currentWinnings = 0.0;
  
  // initialize strings
  certainStr="0.00";
  outcome1Str="0.00";
  outcome2Str="0.00";
  fixCross = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixCross',
    text: '+',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.2,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  certainBox = new visual.Rect ({
    win: psychoJS.window, name: 'certainBox', units : 'height', 
    width: [0.5, 0.25][0], height: [0.5, 0.25][1],
    ori: 0, pos: [(- 0.5), 0],
    lineWidth: 0, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  outcome1Box = new visual.Rect ({
    win: psychoJS.window, name: 'outcome1Box', units : 'height', 
    width: [0.5, 0.25][0], height: [0.5, 0.25][1],
    ori: 0, pos: [0.5, 0.2],
    lineWidth: 0, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -3, interpolate: true,
  });
  
  outcome2Box = new visual.Rect ({
    win: psychoJS.window, name: 'outcome2Box', units : 'height', 
    width: [0.5, 0.25][0], height: [0.5, 0.25][1],
    ori: 0, pos: [0.5, (- 0.2)],
    lineWidth: 0, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -4, interpolate: true,
  });
  
  certainText = new visual.TextStim({
    win: psychoJS.window,
    name: 'certainText',
    text: 'default text',
    font: 'Arial',
    units : 'height', 
    pos: [(- 0.5), 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -5.0 
  });
  
  outcome1Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'outcome1Text',
    text: 'default text',
    font: 'Arial',
    units : 'height', 
    pos: [0.5, 0.2], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -6.0 
  });
  
  outcome2Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'outcome2Text',
    text: 'default text',
    font: 'Arial',
    units : 'height', 
    pos: [0.5, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -7.0 
  });
  
  choiceKey = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // initialize variables
  //doRating = 'No';
  trialHappyReps = 0;
  iTrial = 0;
  // Initialize components for Routine "showChoice"
  showChoiceClock = new util.Clock();
  fixCross_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixCross_2',
    text: '+',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.2,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  certainBox_2 = new visual.Rect ({
    win: psychoJS.window, name: 'certainBox_2', units : 'height', 
    width: [0.5, 0.25][0], height: [0.5, 0.25][1],
    ori: 0, pos: [(- 0.5), 0],
    lineWidth: 0, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  outcome1Box_2 = new visual.Rect ({
    win: psychoJS.window, name: 'outcome1Box_2', units : 'height', 
    width: [0.5, 0.25][0], height: [0.5, 0.25][1],
    ori: 0, pos: [0.5, 0.2],
    lineWidth: 0, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  outcome2Box_2 = new visual.Rect ({
    win: psychoJS.window, name: 'outcome2Box_2', units : 'height', 
    width: [0.5, 0.25][0], height: [0.5, 0.25][1],
    ori: 0, pos: [0.5, (- 0.2)],
    lineWidth: 0, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -3, interpolate: true,
  });
  
  certainText_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'certainText_2',
    text: 'default text',
    font: 'Arial',
    units : 'height', 
    pos: [(- 0.5), 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -4.0 
  });
  
  outcome1Text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'outcome1Text_2',
    text: 'default text',
    font: 'Arial',
    units : 'height', 
    pos: [0.5, 0.2], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -5.0 
  });
  
  outcome2Text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'outcome2Text_2',
    text: 'default text',
    font: 'Arial',
    units : 'height', 
    pos: [0.5, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -6.0 
  });
  
  // Initialize components for Routine "showResult"
  showResultClock = new util.Clock();
  fixCross_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixCross_3',
    text: '+',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.2,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  certainBox_3 = new visual.Rect ({
    win: psychoJS.window, name: 'certainBox_3', units : 'height', 
    width: [0.5, 0.25][0], height: [0.5, 0.25][1],
    ori: 0, pos: [(- 0.5), 0],
    lineWidth: 0, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  outcome1Box_3 = new visual.Rect ({
    win: psychoJS.window, name: 'outcome1Box_3', units : 'height', 
    width: [0.5, 0.25][0], height: [0.5, 0.25][1],
    ori: 0, pos: [0.5, 0.2],
    lineWidth: 0, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  outcome2Box_3 = new visual.Rect ({
    win: psychoJS.window, name: 'outcome2Box_3', units : 'height', 
    width: [0.5, 0.25][0], height: [0.5, 0.25][1],
    ori: 0, pos: [0.5, (- 0.2)],
    lineWidth: 0, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -3, interpolate: true,
  });
  
  certainText_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'certainText_3',
    text: 'default text',
    font: 'Arial',
    units : 'height', 
    pos: [(- 0.5), 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -4.0 
  });
  
  outcome1Text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'outcome1Text_3',
    text: 'default text',
    font: 'Arial',
    units : 'height', 
    pos: [0.5, 0.2], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -5.0 
  });
  
  outcome2Text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'outcome2Text_3',
    text: 'default text',
    font: 'Arial',
    units : 'height', 
    pos: [0.5, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -6.0 
  });
  
  // Initialize components for Routine "ISI"
  ISIClock = new util.Clock();
  fixCross_ISI = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixCross_ISI',
    text: '+',
    font: 'Arial',
    units : 'height', 
    pos: [0, 0], height: 0.2,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "trialHappy"
  trialHappyClock = new util.Clock();
  happyText = new visual.TextStim({
    win: psychoJS.window,
    name: 'happyText',
    text: 'Wie glücklich bist du in diesem Moment?',
    font: 'Arial',
    units : 'height', 
    pos: [0, 0.4], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  happySlider = new visual.Slider({
    win: psychoJS.window, name: 'happySlider',
    size: [1.0, 0.05], pos: [0, 0], units: 'height',
    labels: ['frustriert', 'glücklich'], ticks: [0.0, 1.0],
    granularity: 0.01, style: [visual.Slider.Style.RATING],
    color: new util.Color('LightGray'), 
    fontFamily: 'HelveticaBold', bold: true, italic: false, 
    flip: false,
  });
  
  happyResp = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ITI"
  ITIClock = new util.Clock();
  fixCross_ITI = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixCross_ITI',
    text: '+',
    font: 'Arial',
    units : 'height', 
    pos: [0, 0], height: 0.2,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "blockRest"
  blockRestClock = new util.Clock();
  endOfBlockText = new visual.TextStim({
    win: psychoJS.window,
    name: 'endOfBlockText',
    text: 'Dies ist das Ende dieses Blocks.\n\nWenn Sie bereit sind fortzufahren, drücken Sie die LEERTASTE.',
    font: 'Arial',
    units : 'height', 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  restKeyResp = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "showWinnings"
  showWinningsClock = new util.Clock();
  finalWinningsStr="0 points = $0.00 bonus";
  goodbyeText = new visual.TextStim({
    win: psychoJS.window,
    name: 'goodbyeText',
    text: 'Das ist das Ende des Experiments!\nVielen Dank für Ihre Teilnahme.\n\nIhr Gesamtgewinn beträgt:\n',
    font: 'Arial',
    units : 'height', 
    pos: [0, 0.25], height: 0.05,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  finalWinningsText = new visual.TextStim({
    win: psychoJS.window,
    name: 'finalWinningsText',
    text: 'default text',
    font: 'Arial',
    units : 'height', 
    pos: [0, (- 0.15)], height: 0.06,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  spaceToContinue = new visual.TextStim({
    win: psychoJS.window,
    name: 'spaceToContinue',
    text: 'Drücken Sie die LEERTASTE, um fortzufahren.',
    font: 'Arial',
    units : 'height', 
    pos: [0, (- 0.4)], height: 0.05,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  goodbyeKeyResp_2 = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "showHash"
  showHashClock = new util.Clock();
  hashStr = "00000";
  doNotCloseText = new visual.TextStim({
    win: psychoJS.window,
    name: 'doNotCloseText',
    text: 'DO NOT CLOSE THIS WINDOW until you press Space and wait for a message saying "The data have been saved."',
    font: 'Courier',
    units : 'height', 
    pos: [0, 0.25], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  enterHashText = new visual.TextStim({
    win: psychoJS.window,
    name: 'enterHashText',
    text: 'IMPORTANT!!!\nYou must enter this code into your MTurk HIT to receive credit.',
    font: 'Arial',
    units : 'height', 
    pos: [0, 0], height: 0.08,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('red'),  opacity: 1,
    depth: -2.0 
  });
  
  hashText = new visual.TextStim({
    win: psychoJS.window,
    name: 'hashText',
    text: 'default text',
    font: 'Arial',
    units : 'height', 
    pos: [0, (- 0.25)], height: 0.15,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  spaceToExit = new visual.TextStim({
    win: psychoJS.window,
    name: 'spaceToExit',
    text: 'Press SPACE to exit.',
    font: 'Courier',
    units : 'height', 
    pos: [0, (- 0.4)], height: 0.05,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  goodbyeKeyResp = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}

var t;
var frameN;
var initComponents;
function initRoutineBegin() {
  //------Prepare to start Routine 'init'-------
  t = 0;
  initClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  // keep track of which components have finished
  initComponents = [];
  
  for (const thisComponent of initComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}

var continueRoutine;
function initRoutineEachFrame() {
  //------Loop for each frame of Routine 'init'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = initClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  for (const thisComponent of initComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function initRoutineEnd() {
  //------Ending Routine 'init'-------
  for (const thisComponent of initComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  // the Routine "init" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var instructionLoop1;
var currentLoop;
function instructionLoop1LoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  instructionLoop1 = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'Instructions_reward_part1.xlsx',
    seed: undefined, name: 'instructionLoop1'});
  psychoJS.experiment.addLoop(instructionLoop1); // add the loop to the experiment
  currentLoop = instructionLoop1;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisInstructionLoop1 of instructionLoop1) {
    thisScheduler.add(importConditions(instructionLoop1));
    thisScheduler.add(instructionRoutineBegin);
    thisScheduler.add(instructionRoutineEachFrame);
    thisScheduler.add(instructionRoutineEnd);
    thisScheduler.add(endLoopIteration({thisScheduler, isTrials : true}));
  }

  return Scheduler.Event.NEXT;
}


function instructionLoop1LoopEnd() {
  psychoJS.experiment.removeLoop(instructionLoop1);

  return Scheduler.Event.NEXT;
}

var instructionLoop2;
function instructionLoop2LoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  instructionLoop2 = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'Instructions_reward_part2.xlsx',
    seed: undefined, name: 'instructionLoop2'});
  psychoJS.experiment.addLoop(instructionLoop2); // add the loop to the experiment
  currentLoop = instructionLoop2;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisInstructionLoop2 of instructionLoop2) {
    thisScheduler.add(importConditions(instructionLoop2));
    thisScheduler.add(instruction_2RoutineBegin);
    thisScheduler.add(instruction_2RoutineEachFrame);
    thisScheduler.add(instruction_2RoutineEnd);
    thisScheduler.add(endLoopIteration({thisScheduler, isTrials : true}));
  }

  return Scheduler.Event.NEXT;
}


function instructionLoop2LoopEnd() {
  psychoJS.experiment.removeLoop(instructionLoop2);

  return Scheduler.Event.NEXT;
}

var blockLoop;
function blockLoopLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  blockLoop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: blockCond,
    seed: undefined, name: 'blockLoop'});
  psychoJS.experiment.addLoop(blockLoop); // add the loop to the experiment
  currentLoop = blockLoop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisBlockLoop of blockLoop) {
    thisScheduler.add(importConditions(blockLoop));
    thisScheduler.add(blockHappyRoutineBegin);
    thisScheduler.add(blockHappyRoutineEachFrame);
    thisScheduler.add(blockHappyRoutineEnd);
    thisScheduler.add(blankRoutineBegin);
    thisScheduler.add(blankRoutineEachFrame);
    thisScheduler.add(blankRoutineEnd);
    const trialLoopLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(trialLoopLoopBegin, trialLoopLoopScheduler);
    thisScheduler.add(trialLoopLoopScheduler);
    thisScheduler.add(trialLoopLoopEnd);
    thisScheduler.add(blockRestRoutineBegin);
    thisScheduler.add(blockRestRoutineEachFrame);
    thisScheduler.add(blockRestRoutineEnd);
    thisScheduler.add(endLoopIteration({thisScheduler, isTrials : false}));
  }

  return Scheduler.Event.NEXT;
}

var trialLoop;
function trialLoopLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trialLoop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: TrialHandler.importConditions(psychoJS.serverManager, trialCond, blockTrials),
    seed: undefined, name: 'trialLoop'});
  psychoJS.experiment.addLoop(trialLoop); // add the loop to the experiment
  currentLoop = trialLoop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTrialLoop of trialLoop) {
    thisScheduler.add(importConditions(trialLoop));
    const doRatingLoopLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(doRatingLoopLoopBegin, doRatingLoopLoopScheduler);
    thisScheduler.add(doRatingLoopLoopScheduler);
    thisScheduler.add(doRatingLoopLoopEnd);
    thisScheduler.add(ITIRoutineBegin);
    thisScheduler.add(ITIRoutineEachFrame);
    thisScheduler.add(ITIRoutineEnd);
    thisScheduler.add(endLoopIteration({thisScheduler, isTrials : true}));
  }

  return Scheduler.Event.NEXT;
}

var doRatingLoop;
function doRatingLoopLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  doRatingLoop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: TrialHandler.importConditions(psychoJS.serverManager, 'doRatingConditions.xlsx', [iTrial]),
    seed: undefined, name: 'doRatingLoop'});
  psychoJS.experiment.addLoop(doRatingLoop); // add the loop to the experiment
  currentLoop = doRatingLoop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisDoRatingLoop of doRatingLoop) {
    thisScheduler.add(importConditions(doRatingLoop));
    thisScheduler.add(getAnswerRoutineBegin);
    thisScheduler.add(getAnswerRoutineEachFrame);
    thisScheduler.add(getAnswerRoutineEnd);
    thisScheduler.add(showChoiceRoutineBegin);
    thisScheduler.add(showChoiceRoutineEachFrame);
    thisScheduler.add(showChoiceRoutineEnd);
    thisScheduler.add(showResultRoutineBegin);
    thisScheduler.add(showResultRoutineEachFrame);
    thisScheduler.add(showResultRoutineEnd);
    const trialHappyLoopLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(trialHappyLoopLoopBegin, trialHappyLoopLoopScheduler);
    thisScheduler.add(trialHappyLoopLoopScheduler);
    thisScheduler.add(trialHappyLoopLoopEnd);
    thisScheduler.add(endLoopIteration({thisScheduler, isTrials : false}));
  }

  return Scheduler.Event.NEXT;
}

var trialHappyLoop;
function trialHappyLoopLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trialHappyLoop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: trialHappyReps, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'trialHappyLoop'});
  psychoJS.experiment.addLoop(trialHappyLoop); // add the loop to the experiment
  currentLoop = trialHappyLoop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTrialHappyLoop of trialHappyLoop) {
    thisScheduler.add(importConditions(trialHappyLoop));
    thisScheduler.add(ISIRoutineBegin);
    thisScheduler.add(ISIRoutineEachFrame);
    thisScheduler.add(ISIRoutineEnd);
    thisScheduler.add(trialHappyRoutineBegin);
    thisScheduler.add(trialHappyRoutineEachFrame);
    thisScheduler.add(trialHappyRoutineEnd);
    thisScheduler.add(endLoopIteration({thisScheduler, isTrials : false}));
  }

  return Scheduler.Event.NEXT;
}


function trialHappyLoopLoopEnd() {
  psychoJS.experiment.removeLoop(trialHappyLoop);

  return Scheduler.Event.NEXT;
}


function doRatingLoopLoopEnd() {
  psychoJS.experiment.removeLoop(doRatingLoop);

  return Scheduler.Event.NEXT;
}


function trialLoopLoopEnd() {
  psychoJS.experiment.removeLoop(trialLoop);

  return Scheduler.Event.NEXT;
}


function blockLoopLoopEnd() {
  psychoJS.experiment.removeLoop(blockLoop);

  return Scheduler.Event.NEXT;
}

var logWinningsLoop;
function logWinningsLoopLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  logWinningsLoop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'logWinningsLoop'});
  psychoJS.experiment.addLoop(logWinningsLoop); // add the loop to the experiment
  currentLoop = logWinningsLoop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisLogWinningsLoop of logWinningsLoop) {
    thisScheduler.add(importConditions(logWinningsLoop));
    thisScheduler.add(showWinningsRoutineBegin);
    thisScheduler.add(showWinningsRoutineEachFrame);
    thisScheduler.add(showWinningsRoutineEnd);
    thisScheduler.add(showHashRoutineBegin);
    thisScheduler.add(showHashRoutineEachFrame);
    thisScheduler.add(showHashRoutineEnd);
    thisScheduler.add(endLoopIteration({thisScheduler, isTrials : true}));
  }

  return Scheduler.Event.NEXT;
}


function logWinningsLoopLoopEnd() {
  psychoJS.experiment.removeLoop(logWinningsLoop);

  return Scheduler.Event.NEXT;
}

var instrPos;
var instructionComponents;
function instructionRoutineBegin() {
  //------Prepare to start Routine 'instruction'-------
  t = 0;
  instructionClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  // if there is no image, move the text to the center of the screen
  console.log('currImage = ' + currImage);
  console.log('currText = ' + currText);
  if (currImage == 'black.png') {
      instrPos = [0,0];
  } else { // otherwise put it below the image
      instrPos = [0,-0.25];
  }
  instrImage.setImage(currImage);
  instrText.setPos(instrPos);
  instrText.setText(currText);
  instrKeyResp.keys = undefined;
  instrKeyResp.rt = undefined;
  // keep track of which components have finished
  instructionComponents = [];
  instructionComponents.push(instrImage);
  instructionComponents.push(instrText);
  instructionComponents.push(instrContinueText);
  instructionComponents.push(instrKeyResp);
  
  for (const thisComponent of instructionComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function instructionRoutineEachFrame() {
  //------Loop for each frame of Routine 'instruction'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = instructionClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *instrImage* updates
  if (t >= 0.0 && instrImage.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    instrImage.tStart = t;  // (not accounting for frame time here)
    instrImage.frameNStart = frameN;  // exact frame index
    instrImage.setAutoDraw(true);
  }

  
  // *instrText* updates
  if (t >= 0.0 && instrText.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    instrText.tStart = t;  // (not accounting for frame time here)
    instrText.frameNStart = frameN;  // exact frame index
    instrText.setAutoDraw(true);
  }

  
  // *instrContinueText* updates
  if (t >= 0.0 && instrContinueText.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    instrContinueText.tStart = t;  // (not accounting for frame time here)
    instrContinueText.frameNStart = frameN;  // exact frame index
    instrContinueText.setAutoDraw(true);
  }

  
  // *instrKeyResp* updates
  if (t >= 0.0 && instrKeyResp.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    instrKeyResp.tStart = t;  // (not accounting for frame time here)
    instrKeyResp.frameNStart = frameN;  // exact frame index
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { instrKeyResp.clock.reset(); });  // t=0 on next screen flip
    psychoJS.window.callOnFlip(function() { instrKeyResp.start(); }); // start on screen flip
    psychoJS.window.callOnFlip(function() { instrKeyResp.clearEvents(); });
  }

  if (instrKeyResp.status === PsychoJS.Status.STARTED) {
    let theseKeys = instrKeyResp.getKeys({keyList: ['space'], waitRelease: false});
    
    // check for quit:
    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      instrKeyResp.keys = theseKeys[0].name;  // just the last key pressed
      instrKeyResp.rt = theseKeys[0].rt;
      // a response ends the routine
      continueRoutine = false;
    }
  }
  
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  for (const thisComponent of instructionComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function instructionRoutineEnd() {
  //------Ending Routine 'instruction'-------
  for (const thisComponent of instructionComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  psychoJS.experiment.addData('instrKeyResp.keys', instrKeyResp.keys);
  if (typeof instrKeyResp.keys !== undefined) {  // we had a response
      psychoJS.experiment.addData('instrKeyResp.rt', instrKeyResp.rt);
      routineTimer.reset();
      }
  
  instrKeyResp.stop();
  // the Routine "instruction" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var lifeHappyComponents;
function lifeHappyRoutineBegin() {
  //------Prepare to start Routine 'lifeHappy'-------
  t = 0;
  lifeHappyClock.reset(); // clock
  frameN = -1;
  routineTimer.add(10.500000);
  // update component parameters for each repeat
  lifeHappySlider.reset()
  // initialize position
  lifeHappySlider.markerPos = 0.5;
  
  // Make KeyHold function apply to this slider
  currentSlider = lifeHappySlider;
  lifeHappyResp.keys = undefined;
  lifeHappyResp.rt = undefined;
  // keep track of which components have finished
  lifeHappyComponents = [];
  lifeHappyComponents.push(lifeHappyText);
  lifeHappyComponents.push(lifeHappySlider);
  lifeHappyComponents.push(lifeHappyResp);
  
  for (const thisComponent of lifeHappyComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}

var frameRemains;
function lifeHappyRoutineEachFrame() {
  //------Loop for each frame of Routine 'lifeHappy'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = lifeHappyClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *lifeHappyText* updates
  if (t >= 0.0 && lifeHappyText.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    lifeHappyText.tStart = t;  // (not accounting for frame time here)
    lifeHappyText.frameNStart = frameN;  // exact frame index
    lifeHappyText.setAutoDraw(true);
  }

  frameRemains = 0.0 + 10.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (lifeHappyText.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    lifeHappyText.setAutoDraw(false);
  }
  
  // *lifeHappySlider* updates
  if (t >= 4 && lifeHappySlider.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    lifeHappySlider.tStart = t;  // (not accounting for frame time here)
    lifeHappySlider.frameNStart = frameN;  // exact frame index
    lifeHappySlider.setAutoDraw(true);
  }

  frameRemains = 4 + 6.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (lifeHappySlider.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    lifeHappySlider.setAutoDraw(false);
  }
  
  // *lifeHappyResp* updates
  if (t >= 4 && lifeHappyResp.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    lifeHappyResp.tStart = t;  // (not accounting for frame time here)
    lifeHappyResp.frameNStart = frameN;  // exact frame index
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { lifeHappyResp.clock.reset(); });  // t=0 on next screen flip
    psychoJS.window.callOnFlip(function() { lifeHappyResp.start(); }); // start on screen flip
    psychoJS.window.callOnFlip(function() { lifeHappyResp.clearEvents(); });
  }

  frameRemains = 4 + 6.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (lifeHappyResp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    lifeHappyResp.status = PsychoJS.Status.FINISHED;
  }

  if (lifeHappyResp.status === PsychoJS.Status.STARTED) {
    let theseKeys = lifeHappyResp.getKeys({keyList: ['space'], waitRelease: false});
    
    // check for quit:
    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      lifeHappyResp.keys = theseKeys[0].name;  // just the last key pressed
      lifeHappyResp.rt = theseKeys[0].rt;
      // a response ends the routine
      continueRoutine = false;
    }
  }
  
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  for (const thisComponent of lifeHappyComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // refresh the screen if continuing
  if (continueRoutine && routineTimer.getTime() > 0) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function lifeHappyRoutineEnd() {
  //------Ending Routine 'lifeHappy'-------
  for (const thisComponent of lifeHappyComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  // Log result
  if (currentSlider.getRating() === undefined) {
      currentSlider._recordRating(currentSlider.markerPos,null);
  }
  psychoJS.experiment.addData('lifeHappySlider.response', lifeHappySlider.getRating());
  psychoJS.experiment.addData('lifeHappySlider.rt', lifeHappySlider.getRT());
  // Make KeyHold function no longer apply to this slider
  currentSlider = null;
  
  psychoJS.experiment.addData('lifeHappyResp.keys', lifeHappyResp.keys);
  if (typeof lifeHappyResp.keys !== undefined) {  // we had a response
      psychoJS.experiment.addData('lifeHappyResp.rt', lifeHappyResp.rt);
      routineTimer.reset();
      }
  
  lifeHappyResp.stop();
  return Scheduler.Event.NEXT;
}

var instruction_2Components;
function instruction_2RoutineBegin() {
  //------Prepare to start Routine 'instruction_2'-------
  t = 0;
  instruction_2Clock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  // if there is no image, move the text to the center of the screen
  console.log('currImage = ' + currImage);
  console.log('currText = ' + currText);
  if (currImage == 'black.png') {
      instrPos = [0,0];
  } else { // otherwise put it below the image
      instrPos = [0,-0.25];
  }
  instrImage_2.setImage(currImage);
  instrText_2.setPos(instrPos);
  instrText_2.setText(currText);
  instrKeyResp_2.keys = undefined;
  instrKeyResp_2.rt = undefined;
  // keep track of which components have finished
  instruction_2Components = [];
  instruction_2Components.push(instrImage_2);
  instruction_2Components.push(instrText_2);
  instruction_2Components.push(instrContinueText_2);
  instruction_2Components.push(instrKeyResp_2);
  
  for (const thisComponent of instruction_2Components)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function instruction_2RoutineEachFrame() {
  //------Loop for each frame of Routine 'instruction_2'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = instruction_2Clock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *instrImage_2* updates
  if (t >= 0.0 && instrImage_2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    instrImage_2.tStart = t;  // (not accounting for frame time here)
    instrImage_2.frameNStart = frameN;  // exact frame index
    instrImage_2.setAutoDraw(true);
  }

  
  // *instrText_2* updates
  if (t >= 0.0 && instrText_2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    instrText_2.tStart = t;  // (not accounting for frame time here)
    instrText_2.frameNStart = frameN;  // exact frame index
    instrText_2.setAutoDraw(true);
  }

  
  // *instrContinueText_2* updates
  if (t >= 0.0 && instrContinueText_2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    instrContinueText_2.tStart = t;  // (not accounting for frame time here)
    instrContinueText_2.frameNStart = frameN;  // exact frame index
    instrContinueText_2.setAutoDraw(true);
  }

  
  // *instrKeyResp_2* updates
  if (t >= 0.0 && instrKeyResp_2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    instrKeyResp_2.tStart = t;  // (not accounting for frame time here)
    instrKeyResp_2.frameNStart = frameN;  // exact frame index
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { instrKeyResp_2.clock.reset(); });  // t=0 on next screen flip
    psychoJS.window.callOnFlip(function() { instrKeyResp_2.start(); }); // start on screen flip
    psychoJS.window.callOnFlip(function() { instrKeyResp_2.clearEvents(); });
  }

  if (instrKeyResp_2.status === PsychoJS.Status.STARTED) {
    let theseKeys = instrKeyResp_2.getKeys({keyList: ['space'], waitRelease: false});
    
    // check for quit:
    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      instrKeyResp_2.keys = theseKeys[0].name;  // just the last key pressed
      instrKeyResp_2.rt = theseKeys[0].rt;
      // a response ends the routine
      continueRoutine = false;
    }
  }
  
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  for (const thisComponent of instruction_2Components)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function instruction_2RoutineEnd() {
  //------Ending Routine 'instruction_2'-------
  for (const thisComponent of instruction_2Components) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  psychoJS.experiment.addData('instrKeyResp_2.keys', instrKeyResp_2.keys);
  if (typeof instrKeyResp_2.keys !== undefined) {  // we had a response
      psychoJS.experiment.addData('instrKeyResp_2.rt', instrKeyResp_2.rt);
      routineTimer.reset();
      }
  
  instrKeyResp_2.stop();
  // the Routine "instruction_2" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var sumDiff;
var incongCounter;
var blockTrials;
var blockHappyComponents;
function blockHappyRoutineBegin() {
  //------Prepare to start Routine 'blockHappy'-------
  t = 0;
  blockHappyClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  blockHappySlider.reset()
  // Reset block sums & counters
  sumDiff = 0.0;
  incongCounter = 0;
  // Randomly choose next batch of trials
  blockTrials = randomChoice(78,nTrialsPerBlock);
  // initialize position
  blockHappySlider.markerPos = 0.5;
  
  // Make KeyHold function apply to this slider
  currentSlider = blockHappySlider;
  blockHappyResp.keys = undefined;
  blockHappyResp.rt = undefined;
  // keep track of which components have finished
  blockHappyComponents = [];
  blockHappyComponents.push(blockHappyText);
  blockHappyComponents.push(blockHappySlider);
  blockHappyComponents.push(blockHappyResp);
  
  for (const thisComponent of blockHappyComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function blockHappyRoutineEachFrame() {
  //------Loop for each frame of Routine 'blockHappy'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = blockHappyClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *blockHappyText* updates
  if (t >= 0.0 && blockHappyText.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    blockHappyText.tStart = t;  // (not accounting for frame time here)
    blockHappyText.frameNStart = frameN;  // exact frame index
    blockHappyText.setAutoDraw(true);
  }

  frameRemains = 0.0 + (moodQuestionDur + moodRatingDur) - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (blockHappyText.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    blockHappyText.setAutoDraw(false);
  }
  
  // *blockHappySlider* updates
  if (t >= moodQuestionDur && blockHappySlider.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    blockHappySlider.tStart = t;  // (not accounting for frame time here)
    blockHappySlider.frameNStart = frameN;  // exact frame index
    blockHappySlider.setAutoDraw(true);
  }

  frameRemains = moodQuestionDur + moodRatingDur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (blockHappySlider.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    blockHappySlider.setAutoDraw(false);
  }
  
  // *blockHappyResp* updates
  if (t >= moodQuestionDur && blockHappyResp.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    blockHappyResp.tStart = t;  // (not accounting for frame time here)
    blockHappyResp.frameNStart = frameN;  // exact frame index
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { blockHappyResp.clock.reset(); });  // t=0 on next screen flip
    psychoJS.window.callOnFlip(function() { blockHappyResp.start(); }); // start on screen flip
    psychoJS.window.callOnFlip(function() { blockHappyResp.clearEvents(); });
  }

  frameRemains = moodQuestionDur + moodRatingDur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (blockHappyResp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    blockHappyResp.status = PsychoJS.Status.FINISHED;
  }

  if (blockHappyResp.status === PsychoJS.Status.STARTED) {
    let theseKeys = blockHappyResp.getKeys({keyList: ['space'], waitRelease: false});
    
    // check for quit:
    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      blockHappyResp.keys = theseKeys[0].name;  // just the last key pressed
      blockHappyResp.rt = theseKeys[0].rt;
      // a response ends the routine
      continueRoutine = false;
    }
  }
  
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  for (const thisComponent of blockHappyComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}

var thisHappyRating;
function blockHappyRoutineEnd() {
  //------Ending Routine 'blockHappy'-------
  for (const thisComponent of blockHappyComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  // Log result
  if (currentSlider.getRating() === undefined) {
      currentSlider._recordRating(currentSlider.markerPos,null);
  }
  psychoJS.experiment.addData('blockHappySlider.response', blockHappySlider.getRating());
  psychoJS.experiment.addData('blockHappySlider.rt', blockHappySlider.getRT());
  // store latest happiness rating in a variable
  thisHappyRating = blockHappySlider.getRating();
  // set default happiness
  if (typeof thisHappyRating != 'undefined') {
      lastHappyRating = thisHappyRating; 
  }
  // Make KeyHold function no longer apply to this slider
  currentSlider = null;
  
  psychoJS.experiment.addData('blockHappyResp.keys', blockHappyResp.keys);
  if (typeof blockHappyResp.keys !== undefined) {  // we had a response
      psychoJS.experiment.addData('blockHappyResp.rt', blockHappyResp.rt);
      routineTimer.reset();
      }
  
  blockHappyResp.stop();
  // the Routine "blockHappy" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var blankComponents;
function blankRoutineBegin() {
  //------Prepare to start Routine 'blank'-------
  t = 0;
  blankClock.reset(); // clock
  frameN = -1;
  routineTimer.add(3.000000);
  // update component parameters for each repeat
  // keep track of which components have finished
  blankComponents = [];
  blankComponents.push(blankText);
  
  for (const thisComponent of blankComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function blankRoutineEachFrame() {
  //------Loop for each frame of Routine 'blank'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = blankClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *blankText* updates
  if (t >= 0.0 && blankText.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    blankText.tStart = t;  // (not accounting for frame time here)
    blankText.frameNStart = frameN;  // exact frame index
    blankText.setAutoDraw(true);
  }

  frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (blankText.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    blankText.setAutoDraw(false);
  }
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  for (const thisComponent of blankComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // refresh the screen if continuing
  if (continueRoutine && routineTimer.getTime() > 0) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function blankRoutineEnd() {
  //------Ending Routine 'blank'-------
  for (const thisComponent of blankComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  return Scheduler.Event.NEXT;
}

var diff;
var isCongruent;
var isHappyBlock;
var outcome;
var RPE;
var loseAmount;
var winAmount;
var certainAmount;
var isWinOnTop;
var outcome1Amount;
var outcome2Amount;
var getAnswerComponents;
function getAnswerRoutineBegin() {
  //------Prepare to start Routine 'getAnswer'-------
  t = 0;
  getAnswerClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  // get distance to target
  diff = lastHappyRating - targetHappiness;
  sumDiff = sumDiff + diff; 
  
  // Set congruency randomly
  isCongruent = (Math.random()<pCongruent);
  // Make sure there are not three incongruent trials in a row
  if (isCongruent) {
      incongCounter = 0; // reset counter
  } else {
      incongCounter = incongCounter+1; // increment counter
      // if it has been too long, make it congruent
      if (incongCounter>maxIncongInARow) { 
          isCongruent = true;
          incongCounter = 0;
      }
  }
  
  // Determine outcome based on happiness & congruency
  isHappyBlock = (targetHappiness==1);
  if (isCongruent == isHappyBlock) {
      outcome = 'win';
  } else {
      outcome = 'lose';
  }
  
  // Use congruency to set RPE
  if (isCongruent) {
      RPE = -(rpeHighMax * diff + sumDiff);
  } else {
      RPE = (rpeHighMax * diff + sumDiff/3.0)/4.0;
  }
  // Ensure |RPE| is at least 3 cents (min where win, lose, and certain are all different)
  if (Math.abs(RPE)<0.03) {
      if (outcome=='win') {
          RPE = 0.03;
      } else {
          RPE = -0.03;
      }
  }
  
  // Use highAmount & congruency to set gamble outcomes
  if (isHappyBlock) {
      // Set incongruent gamble outcome
      if (isCongruent) {
          loseAmount = highAmount;
      } else {
          loseAmount = highAmount/2.0;
      }
      // Set congruent gamble outcome using RPE
      winAmount = loseAmount + Math.abs(RPE);
  } else {
      // Set incongruent gamble outcome
      if (isCongruent) {
          winAmount = highAmount;
      } else {
          winAmount = highAmount/2.0;
      }
      // Set congruent gamble outcome using RPE
      loseAmount = winAmount - Math.abs(RPE);
  }
  
  // Determine certain value
  certainAmount = (winAmount + loseAmount*2.0)/3.0; // weighted mean of win & lose values
  
  // set position of win & loss randomly
  isWinOnTop = (Math.random()>0.5);
  if (isWinOnTop) {
      outcome1Amount = winAmount;
      outcome2Amount = loseAmount;
  } else {
      outcome1Amount = loseAmount;
      outcome2Amount = winAmount;
  }
  // set strings with 2 decimal places
  certainStr = certainAmount.toFixed(2);
  outcome1Str = outcome1Amount.toFixed(2);
  outcome2Str = outcome2Amount.toFixed(2);
  certainText.setText(certainStr);
  outcome1Text.setText(outcome1Str);
  outcome2Text.setText(outcome2Str);
  choiceKey.keys = undefined;
  choiceKey.rt = undefined;
  // set reps based on doRating
  // doRating = (Math.random()<pRating);
  if (doRating.startsWith("Y")) {
      trialHappyReps = 1;
  } else {
      trialHappyReps = 0;
  }
  // advance trial
  iTrial = iTrial + 1;
  console.log("doRating: " + doRating + ", trialHappyReps: " + trialHappyReps + ", iTrial: " + iTrial);
  // keep track of which components have finished
  getAnswerComponents = [];
  getAnswerComponents.push(fixCross);
  getAnswerComponents.push(certainBox);
  getAnswerComponents.push(outcome1Box);
  getAnswerComponents.push(outcome2Box);
  getAnswerComponents.push(certainText);
  getAnswerComponents.push(outcome1Text);
  getAnswerComponents.push(outcome2Text);
  getAnswerComponents.push(choiceKey);
  
  for (const thisComponent of getAnswerComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function getAnswerRoutineEachFrame() {
  //------Loop for each frame of Routine 'getAnswer'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = getAnswerClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *fixCross* updates
  if (t >= 0.0 && fixCross.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    fixCross.tStart = t;  // (not accounting for frame time here)
    fixCross.frameNStart = frameN;  // exact frame index
    fixCross.setAutoDraw(true);
  }

  frameRemains = 0.0 + getAnswerDur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (fixCross.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    fixCross.setAutoDraw(false);
  }
  
  // *certainBox* updates
  if (t >= 0.0 && certainBox.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    certainBox.tStart = t;  // (not accounting for frame time here)
    certainBox.frameNStart = frameN;  // exact frame index
    certainBox.setAutoDraw(true);
  }

  frameRemains = 0.0 + getAnswerDur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (certainBox.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    certainBox.setAutoDraw(false);
  }
  
  // *outcome1Box* updates
  if (t >= 0.0 && outcome1Box.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    outcome1Box.tStart = t;  // (not accounting for frame time here)
    outcome1Box.frameNStart = frameN;  // exact frame index
    outcome1Box.setAutoDraw(true);
  }

  frameRemains = 0.0 + getAnswerDur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (outcome1Box.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    outcome1Box.setAutoDraw(false);
  }
  
  // *outcome2Box* updates
  if (t >= 0.0 && outcome2Box.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    outcome2Box.tStart = t;  // (not accounting for frame time here)
    outcome2Box.frameNStart = frameN;  // exact frame index
    outcome2Box.setAutoDraw(true);
  }

  frameRemains = 0.0 + getAnswerDur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (outcome2Box.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    outcome2Box.setAutoDraw(false);
  }
  
  // *certainText* updates
  if (t >= 0.0 && certainText.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    certainText.tStart = t;  // (not accounting for frame time here)
    certainText.frameNStart = frameN;  // exact frame index
    certainText.setAutoDraw(true);
  }

  frameRemains = 0.0 + getAnswerDur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (certainText.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    certainText.setAutoDraw(false);
  }
  
  // *outcome1Text* updates
  if (t >= 0.0 && outcome1Text.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    outcome1Text.tStart = t;  // (not accounting for frame time here)
    outcome1Text.frameNStart = frameN;  // exact frame index
    outcome1Text.setAutoDraw(true);
  }

  frameRemains = 0.0 + getAnswerDur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (outcome1Text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    outcome1Text.setAutoDraw(false);
  }
  
  // *outcome2Text* updates
  if (t >= 0.0 && outcome2Text.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    outcome2Text.tStart = t;  // (not accounting for frame time here)
    outcome2Text.frameNStart = frameN;  // exact frame index
    outcome2Text.setAutoDraw(true);
  }

  frameRemains = 0.0 + getAnswerDur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (outcome2Text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    outcome2Text.setAutoDraw(false);
  }
  
  // *choiceKey* updates
  if (t >= 0.0 && choiceKey.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    choiceKey.tStart = t;  // (not accounting for frame time here)
    choiceKey.frameNStart = frameN;  // exact frame index
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { choiceKey.clock.reset(); });  // t=0 on next screen flip
    psychoJS.window.callOnFlip(function() { choiceKey.start(); }); // start on screen flip
    psychoJS.window.callOnFlip(function() { choiceKey.clearEvents(); });
  }

  frameRemains = 0.0 + getAnswerDur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (choiceKey.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    choiceKey.status = PsychoJS.Status.FINISHED;
  }

  if (choiceKey.status === PsychoJS.Status.STARTED) {
    let theseKeys = choiceKey.getKeys({keyList: ['left', 'right'], waitRelease: false});
    
    // check for quit:
    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      if (choiceKey.keys === undefined) {  // then this was the first keypress
        choiceKey.keys = theseKeys[0].name;  // just the first key pressed
        choiceKey.rt = theseKeys[0].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
  }
  
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  for (const thisComponent of getAnswerComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}

var choice;
var outcomeAmount;
function getAnswerRoutineEnd() {
  //------Ending Routine 'getAnswer'-------
  for (const thisComponent of getAnswerComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  // if no response, gamble
  if ((typeof(choiceKey.keys)==='undefined') || (choiceKey.keys.length==0) || (choiceKey.keys == null)) {
      choice = 'gamble';
  // otherwise, response determines choice
  } else if (choiceKey.keys=='left') {
      choice = 'certain';
  } else if (choiceKey.keys=='right') {
      choice = 'gamble';
  } else {
      throw('choiceCode: key ' + choiceKey.keys + ' not recognized!');
  }
  
  // change opacity based on choice
  if (choice=='certain') {
      // set outcome
      outcome='certain';
      // set choice/outcome opacity
      certainBox_2.opacity = 1;
      certainBox_3.opacity = 1;
      outcome1Box_2.opacity = 0;
      outcome2Box_2.opacity = 0;
      outcome1Box_3.opacity = 0;
      outcome2Box_3.opacity = 0;
      
  } else if (choice=='gamble') {
      // set choice opacity 
      certainBox_2.opacity = 0;
      certainBox_3.opacity = 0;
      outcome1Box_2.opacity = 1;
      outcome2Box_2.opacity = 1;
      // set outcome opacity
      if ((outcome=='win') == isWinOnTop) { //win trial with win on top or lose trial with lose on top
          // show only top box
          outcome1Box_3.opacity = 1;
          outcome2Box_3.opacity = 0;
      } else {
          // show only bottom box
          outcome1Box_3.opacity = 0
          outcome2Box_3.opacity = 1
      }
  } else {
      throw('choiceCode: choice ' + choice + ' not recognized!');
  }
  
  // update current winnings
  if (outcome == 'win') {
      outcomeAmount = winAmount;
  } else if (outcome=='lose') {
      outcomeAmount = loseAmount;
  } else { // outcome==certain
      outcomeAmount = certainAmount;
  }
  currentWinnings = currentWinnings + outcomeAmount;
  
  // update log
  psychoJS.experiment.addData('isHappyBlock',isHappyBlock);
  psychoJS.experiment.addData('isCongruent',isCongruent);
  psychoJS.experiment.addData('isWinOnTop',isWinOnTop);
  psychoJS.experiment.addData('lastHappyRating',lastHappyRating);
  psychoJS.experiment.addData('diff',diff);
  psychoJS.experiment.addData('sumDiff',sumDiff);
  psychoJS.experiment.addData('RPE',RPE);
  // log options
  psychoJS.experiment.addData('winAmount',winAmount);
  psychoJS.experiment.addData('loseAmount',loseAmount);
  psychoJS.experiment.addData('certainAmount',certainAmount);
  // log outcomes
  psychoJS.experiment.addData('choice',choice);
  psychoJS.experiment.addData('outcome',outcome);
  psychoJS.experiment.addData('outcomeAmount',outcomeAmount);
  psychoJS.experiment.addData('currentWinnings',currentWinnings);
  // log parameters
  psychoJS.experiment.addData('blockNum',blockNum);
  psychoJS.experiment.addData('targetHappiness',targetHappiness);
  psychoJS.experiment.addData('highAmount',highAmount);
  
  psychoJS.experiment.addData('choiceKey.keys', choiceKey.keys);
  if (typeof choiceKey.keys !== undefined) {  // we had a response
      psychoJS.experiment.addData('choiceKey.rt', choiceKey.rt);
      routineTimer.reset();
      }
  
  choiceKey.stop();
  // the Routine "getAnswer" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var showChoiceComponents;
function showChoiceRoutineBegin() {
  //------Prepare to start Routine 'showChoice'-------
  t = 0;
  showChoiceClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  certainText_2.setText(certainStr);
  outcome1Text_2.setText(outcome1Str);
  outcome2Text_2.setText(outcome2Str);
  // keep track of which components have finished
  showChoiceComponents = [];
  showChoiceComponents.push(fixCross_2);
  showChoiceComponents.push(certainBox_2);
  showChoiceComponents.push(outcome1Box_2);
  showChoiceComponents.push(outcome2Box_2);
  showChoiceComponents.push(certainText_2);
  showChoiceComponents.push(outcome1Text_2);
  showChoiceComponents.push(outcome2Text_2);
  
  for (const thisComponent of showChoiceComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function showChoiceRoutineEachFrame() {
  //------Loop for each frame of Routine 'showChoice'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = showChoiceClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *fixCross_2* updates
  if (t >= 0.0 && fixCross_2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    fixCross_2.tStart = t;  // (not accounting for frame time here)
    fixCross_2.frameNStart = frameN;  // exact frame index
    fixCross_2.setAutoDraw(true);
  }

  frameRemains = 0.0 + showChoiceDur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (fixCross_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    fixCross_2.setAutoDraw(false);
  }
  
  // *certainBox_2* updates
  if (t >= 0.0 && certainBox_2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    certainBox_2.tStart = t;  // (not accounting for frame time here)
    certainBox_2.frameNStart = frameN;  // exact frame index
    certainBox_2.setAutoDraw(true);
  }

  frameRemains = 0.0 + showChoiceDur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (certainBox_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    certainBox_2.setAutoDraw(false);
  }
  
  // *outcome1Box_2* updates
  if (t >= 0.0 && outcome1Box_2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    outcome1Box_2.tStart = t;  // (not accounting for frame time here)
    outcome1Box_2.frameNStart = frameN;  // exact frame index
    outcome1Box_2.setAutoDraw(true);
  }

  frameRemains = 0.0 + showChoiceDur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (outcome1Box_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    outcome1Box_2.setAutoDraw(false);
  }
  
  // *outcome2Box_2* updates
  if (t >= 0.0 && outcome2Box_2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    outcome2Box_2.tStart = t;  // (not accounting for frame time here)
    outcome2Box_2.frameNStart = frameN;  // exact frame index
    outcome2Box_2.setAutoDraw(true);
  }

  frameRemains = 0.0 + showChoiceDur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (outcome2Box_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    outcome2Box_2.setAutoDraw(false);
  }
  
  // *certainText_2* updates
  if (t >= 0.0 && certainText_2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    certainText_2.tStart = t;  // (not accounting for frame time here)
    certainText_2.frameNStart = frameN;  // exact frame index
    certainText_2.setAutoDraw(true);
  }

  frameRemains = 0.0 + showChoiceDur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (certainText_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    certainText_2.setAutoDraw(false);
  }
  
  // *outcome1Text_2* updates
  if (t >= 0.0 && outcome1Text_2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    outcome1Text_2.tStart = t;  // (not accounting for frame time here)
    outcome1Text_2.frameNStart = frameN;  // exact frame index
    outcome1Text_2.setAutoDraw(true);
  }

  frameRemains = 0.0 + showChoiceDur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (outcome1Text_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    outcome1Text_2.setAutoDraw(false);
  }
  
  // *outcome2Text_2* updates
  if (t >= 0.0 && outcome2Text_2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    outcome2Text_2.tStart = t;  // (not accounting for frame time here)
    outcome2Text_2.frameNStart = frameN;  // exact frame index
    outcome2Text_2.setAutoDraw(true);
  }

  frameRemains = 0.0 + showChoiceDur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (outcome2Text_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    outcome2Text_2.setAutoDraw(false);
  }
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  for (const thisComponent of showChoiceComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function showChoiceRoutineEnd() {
  //------Ending Routine 'showChoice'-------
  for (const thisComponent of showChoiceComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  // the Routine "showChoice" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var showResultComponents;
function showResultRoutineBegin() {
  //------Prepare to start Routine 'showResult'-------
  t = 0;
  showResultClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  certainText_3.setText(certainStr);
  outcome1Text_3.setText(outcome1Str);
  outcome2Text_3.setText(outcome2Str);
  // keep track of which components have finished
  showResultComponents = [];
  showResultComponents.push(fixCross_3);
  showResultComponents.push(certainBox_3);
  showResultComponents.push(outcome1Box_3);
  showResultComponents.push(outcome2Box_3);
  showResultComponents.push(certainText_3);
  showResultComponents.push(outcome1Text_3);
  showResultComponents.push(outcome2Text_3);
  
  for (const thisComponent of showResultComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function showResultRoutineEachFrame() {
  //------Loop for each frame of Routine 'showResult'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = showResultClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *fixCross_3* updates
  if (t >= 0.0 && fixCross_3.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    fixCross_3.tStart = t;  // (not accounting for frame time here)
    fixCross_3.frameNStart = frameN;  // exact frame index
    fixCross_3.setAutoDraw(true);
  }

  frameRemains = 0.0 + showResultDur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (fixCross_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    fixCross_3.setAutoDraw(false);
  }
  
  // *certainBox_3* updates
  if (t >= 0.0 && certainBox_3.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    certainBox_3.tStart = t;  // (not accounting for frame time here)
    certainBox_3.frameNStart = frameN;  // exact frame index
    certainBox_3.setAutoDraw(true);
  }

  frameRemains = 0.0 + showResultDur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (certainBox_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    certainBox_3.setAutoDraw(false);
  }
  
  // *outcome1Box_3* updates
  if (t >= 0.0 && outcome1Box_3.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    outcome1Box_3.tStart = t;  // (not accounting for frame time here)
    outcome1Box_3.frameNStart = frameN;  // exact frame index
    outcome1Box_3.setAutoDraw(true);
  }

  frameRemains = 0.0 + showResultDur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (outcome1Box_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    outcome1Box_3.setAutoDraw(false);
  }
  
  // *outcome2Box_3* updates
  if (t >= 0.0 && outcome2Box_3.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    outcome2Box_3.tStart = t;  // (not accounting for frame time here)
    outcome2Box_3.frameNStart = frameN;  // exact frame index
    outcome2Box_3.setAutoDraw(true);
  }

  frameRemains = 0.0 + showResultDur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (outcome2Box_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    outcome2Box_3.setAutoDraw(false);
  }
  
  // *certainText_3* updates
  if (t >= 0.0 && certainText_3.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    certainText_3.tStart = t;  // (not accounting for frame time here)
    certainText_3.frameNStart = frameN;  // exact frame index
    certainText_3.setAutoDraw(true);
  }

  frameRemains = 0.0 + showResultDur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (certainText_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    certainText_3.setAutoDraw(false);
  }
  
  // *outcome1Text_3* updates
  if (t >= 0.0 && outcome1Text_3.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    outcome1Text_3.tStart = t;  // (not accounting for frame time here)
    outcome1Text_3.frameNStart = frameN;  // exact frame index
    outcome1Text_3.setAutoDraw(true);
  }

  frameRemains = 0.0 + showResultDur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (outcome1Text_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    outcome1Text_3.setAutoDraw(false);
  }
  
  // *outcome2Text_3* updates
  if (t >= 0.0 && outcome2Text_3.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    outcome2Text_3.tStart = t;  // (not accounting for frame time here)
    outcome2Text_3.frameNStart = frameN;  // exact frame index
    outcome2Text_3.setAutoDraw(true);
  }

  frameRemains = 0.0 + showResultDur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (outcome2Text_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    outcome2Text_3.setAutoDraw(false);
  }
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  for (const thisComponent of showResultComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function showResultRoutineEnd() {
  //------Ending Routine 'showResult'-------
  for (const thisComponent of showResultComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  // the Routine "showResult" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var ISIComponents;
function ISIRoutineBegin() {
  //------Prepare to start Routine 'ISI'-------
  t = 0;
  ISIClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  // keep track of which components have finished
  ISIComponents = [];
  ISIComponents.push(fixCross_ISI);
  
  for (const thisComponent of ISIComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function ISIRoutineEachFrame() {
  //------Loop for each frame of Routine 'ISI'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = ISIClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *fixCross_ISI* updates
  if (t >= 0.0 && fixCross_ISI.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    fixCross_ISI.tStart = t;  // (not accounting for frame time here)
    fixCross_ISI.frameNStart = frameN;  // exact frame index
    fixCross_ISI.setAutoDraw(true);
  }

  frameRemains = 0.0 + isiDur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (fixCross_ISI.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    fixCross_ISI.setAutoDraw(false);
  }
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  for (const thisComponent of ISIComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function ISIRoutineEnd() {
  //------Ending Routine 'ISI'-------
  for (const thisComponent of ISIComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  // the Routine "ISI" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var trialHappyComponents;
function trialHappyRoutineBegin() {
  //------Prepare to start Routine 'trialHappy'-------
  t = 0;
  trialHappyClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  happySlider.reset()
  // initialize position
  happySlider.markerPos = 0.5;
  
  // Make KeyHold function apply to this slider
  currentSlider = happySlider;
  happyResp.keys = undefined;
  happyResp.rt = undefined;
  // keep track of which components have finished
  trialHappyComponents = [];
  trialHappyComponents.push(happyText);
  trialHappyComponents.push(happySlider);
  trialHappyComponents.push(happyResp);
  
  for (const thisComponent of trialHappyComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function trialHappyRoutineEachFrame() {
  //------Loop for each frame of Routine 'trialHappy'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = trialHappyClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *happyText* updates
  if (t >= 0.0 && happyText.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    happyText.tStart = t;  // (not accounting for frame time here)
    happyText.frameNStart = frameN;  // exact frame index
    happyText.setAutoDraw(true);
  }

  frameRemains = 0.0 + (moodQuestionDur + moodRatingDur) - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (happyText.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    happyText.setAutoDraw(false);
  }
  
  // *happySlider* updates
  if (t >= moodQuestionDur && happySlider.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    happySlider.tStart = t;  // (not accounting for frame time here)
    happySlider.frameNStart = frameN;  // exact frame index
    happySlider.setAutoDraw(true);
  }

  frameRemains = moodQuestionDur + moodRatingDur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (happySlider.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    happySlider.setAutoDraw(false);
  }
  
  // *happyResp* updates
  if (t >= moodQuestionDur && happyResp.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    happyResp.tStart = t;  // (not accounting for frame time here)
    happyResp.frameNStart = frameN;  // exact frame index
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { happyResp.clock.reset(); });  // t=0 on next screen flip
    psychoJS.window.callOnFlip(function() { happyResp.start(); }); // start on screen flip
    psychoJS.window.callOnFlip(function() { happyResp.clearEvents(); });
  }

  frameRemains = moodQuestionDur + moodRatingDur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (happyResp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    happyResp.status = PsychoJS.Status.FINISHED;
  }

  if (happyResp.status === PsychoJS.Status.STARTED) {
    let theseKeys = happyResp.getKeys({keyList: ['space'], waitRelease: false});
    
    // check for quit:
    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      happyResp.keys = theseKeys[0].name;  // just the last key pressed
      happyResp.rt = theseKeys[0].rt;
      // a response ends the routine
      continueRoutine = false;
    }
  }
  
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  for (const thisComponent of trialHappyComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function trialHappyRoutineEnd() {
  //------Ending Routine 'trialHappy'-------
  for (const thisComponent of trialHappyComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  // Log result
  if (currentSlider.getRating() === undefined) {
      currentSlider._recordRating(currentSlider.markerPos,null);
  }
  psychoJS.experiment.addData('happySlider.response', happySlider.getRating());
  psychoJS.experiment.addData('happySlider.rt', happySlider.getRT());
  // store latest happiness rating in a variable
  thisHappyRating = happySlider.getRating();
  // set default happiness
  if (typeof thisHappyRating != 'undefined') {
      lastHappyRating = thisHappyRating; 
  }
  // Make KeyHold function no longer apply to this slider
  currentSlider = null;
  
  psychoJS.experiment.addData('happyResp.keys', happyResp.keys);
  if (typeof happyResp.keys !== undefined) {  // we had a response
      psychoJS.experiment.addData('happyResp.rt', happyResp.rt);
      routineTimer.reset();
      }
  
  happyResp.stop();
  // the Routine "trialHappy" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var ITIComponents;
function ITIRoutineBegin() {
  //------Prepare to start Routine 'ITI'-------
  t = 0;
  ITIClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  // keep track of which components have finished
  ITIComponents = [];
  ITIComponents.push(fixCross_ITI);
  
  for (const thisComponent of ITIComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function ITIRoutineEachFrame() {
  //------Loop for each frame of Routine 'ITI'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = ITIClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *fixCross_ITI* updates
  if (t >= 0.0 && fixCross_ITI.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    fixCross_ITI.tStart = t;  // (not accounting for frame time here)
    fixCross_ITI.frameNStart = frameN;  // exact frame index
    fixCross_ITI.setAutoDraw(true);
  }

  frameRemains = 0.0 + itiDur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (fixCross_ITI.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    fixCross_ITI.setAutoDraw(false);
  }
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  for (const thisComponent of ITIComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function ITIRoutineEnd() {
  //------Ending Routine 'ITI'-------
  for (const thisComponent of ITIComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  // the Routine "ITI" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var blockRestComponents;
function blockRestRoutineBegin() {
  //------Prepare to start Routine 'blockRest'-------
  t = 0;
  blockRestClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  restKeyResp.keys = undefined;
  restKeyResp.rt = undefined;
  // keep track of which components have finished
  blockRestComponents = [];
  blockRestComponents.push(endOfBlockText);
  blockRestComponents.push(restKeyResp);
  
  for (const thisComponent of blockRestComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function blockRestRoutineEachFrame() {
  //------Loop for each frame of Routine 'blockRest'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = blockRestClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *endOfBlockText* updates
  if (t >= 0.0 && endOfBlockText.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    endOfBlockText.tStart = t;  // (not accounting for frame time here)
    endOfBlockText.frameNStart = frameN;  // exact frame index
    endOfBlockText.setAutoDraw(true);
  }

  
  // *restKeyResp* updates
  if (t >= 0.0 && restKeyResp.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    restKeyResp.tStart = t;  // (not accounting for frame time here)
    restKeyResp.frameNStart = frameN;  // exact frame index
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { restKeyResp.clock.reset(); });  // t=0 on next screen flip
    psychoJS.window.callOnFlip(function() { restKeyResp.start(); }); // start on screen flip
    psychoJS.window.callOnFlip(function() { restKeyResp.clearEvents(); });
  }

  if (restKeyResp.status === PsychoJS.Status.STARTED) {
    let theseKeys = restKeyResp.getKeys({keyList: ['space'], waitRelease: false});
    
    // check for quit:
    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      restKeyResp.keys = theseKeys[0].name;  // just the last key pressed
      restKeyResp.rt = theseKeys[0].rt;
      // a response ends the routine
      continueRoutine = false;
    }
  }
  
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  for (const thisComponent of blockRestComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function blockRestRoutineEnd() {
  //------Ending Routine 'blockRest'-------
  for (const thisComponent of blockRestComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  psychoJS.experiment.addData('restKeyResp.keys', restKeyResp.keys);
  if (typeof restKeyResp.keys !== undefined) {  // we had a response
      psychoJS.experiment.addData('restKeyResp.rt', restKeyResp.rt);
      routineTimer.reset();
      }
  
  restKeyResp.stop();
  // the Routine "blockRest" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var cashBonus;
var showWinningsComponents;
function showWinningsRoutineBegin() {
  //------Prepare to start Routine 'showWinnings'-------
  t = 0;
  showWinningsClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  // enforce limits on winnings
  if (currentWinnings<0) {
      cashBonus = 1;
  } else if (currentWinnings<250) {
      cashBonus = 2;
  } else if (currentWinnings<500) {
      cashBonus = 3;
  } else if (currentWinnings<750) {
      cashBonus = 4;
  } else if (currentWinnings<1000) {
      cashBonus = 5;
  } else {
      cashBonus = 6;
  }
  // format winnings for currency
  finalWinningsStr = currentWinnings.toFixed(2) + " points = $" + cashBonus.toFixed(2) + " bonus";
  
  // update log
  psychoJS.experiment.addData('finalWinnings',currentWinnings);
  psychoJS.experiment.addData('cashBonus',cashBonus);
  
  finalWinningsText.setText(finalWinningsStr);
  goodbyeKeyResp_2.keys = undefined;
  goodbyeKeyResp_2.rt = undefined;
  // keep track of which components have finished
  showWinningsComponents = [];
  showWinningsComponents.push(goodbyeText);
  showWinningsComponents.push(finalWinningsText);
  showWinningsComponents.push(spaceToContinue);
  showWinningsComponents.push(goodbyeKeyResp_2);
  
  for (const thisComponent of showWinningsComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function showWinningsRoutineEachFrame() {
  //------Loop for each frame of Routine 'showWinnings'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = showWinningsClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *goodbyeText* updates
  if (t >= 0.0 && goodbyeText.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    goodbyeText.tStart = t;  // (not accounting for frame time here)
    goodbyeText.frameNStart = frameN;  // exact frame index
    goodbyeText.setAutoDraw(true);
  }

  
  // *finalWinningsText* updates
  if (t >= 0.0 && finalWinningsText.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    finalWinningsText.tStart = t;  // (not accounting for frame time here)
    finalWinningsText.frameNStart = frameN;  // exact frame index
    finalWinningsText.setAutoDraw(true);
  }

  
  // *spaceToContinue* updates
  if (t >= 0.0 && spaceToContinue.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    spaceToContinue.tStart = t;  // (not accounting for frame time here)
    spaceToContinue.frameNStart = frameN;  // exact frame index
    spaceToContinue.setAutoDraw(true);
  }

  
  // *goodbyeKeyResp_2* updates
  if (t >= 0.0 && goodbyeKeyResp_2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    goodbyeKeyResp_2.tStart = t;  // (not accounting for frame time here)
    goodbyeKeyResp_2.frameNStart = frameN;  // exact frame index
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { goodbyeKeyResp_2.clock.reset(); });  // t=0 on next screen flip
    psychoJS.window.callOnFlip(function() { goodbyeKeyResp_2.start(); }); // start on screen flip
    psychoJS.window.callOnFlip(function() { goodbyeKeyResp_2.clearEvents(); });
  }

  if (goodbyeKeyResp_2.status === PsychoJS.Status.STARTED) {
    let theseKeys = goodbyeKeyResp_2.getKeys({keyList: ['space'], waitRelease: false});
    
    // check for quit:
    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      goodbyeKeyResp_2.keys = theseKeys[0].name;  // just the last key pressed
      goodbyeKeyResp_2.rt = theseKeys[0].rt;
      // a response ends the routine
      continueRoutine = false;
    }
  }
  
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  for (const thisComponent of showWinningsComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function showWinningsRoutineEnd() {
  //------Ending Routine 'showWinnings'-------
  for (const thisComponent of showWinningsComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  psychoJS.experiment.addData('goodbyeKeyResp_2.keys', goodbyeKeyResp_2.keys);
  if (typeof goodbyeKeyResp_2.keys !== undefined) {  // we had a response
      psychoJS.experiment.addData('goodbyeKeyResp_2.rt', goodbyeKeyResp_2.rt);
      routineTimer.reset();
      }
  
  goodbyeKeyResp_2.stop();
  // the Routine "showWinnings" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var hashCode;
var showHashComponents;
function showHashRoutineBegin() {
  //------Prepare to start Routine 'showHash'-------
  t = 0;
  showHashClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  // generate hash code
  hashCode = (Number(expInfo['participant'])*77069) % (10**5);
  
  // format code
  hashStr= ("00000" + hashCode).slice(-5);
  
  // update log
  psychoJS.experiment.addData('hashCode',hashStr);
  
  hashText.setText(hashStr);
  goodbyeKeyResp.keys = undefined;
  goodbyeKeyResp.rt = undefined;
  // keep track of which components have finished
  showHashComponents = [];
  showHashComponents.push(doNotCloseText);
  showHashComponents.push(enterHashText);
  showHashComponents.push(hashText);
  showHashComponents.push(spaceToExit);
  showHashComponents.push(goodbyeKeyResp);
  
  for (const thisComponent of showHashComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function showHashRoutineEachFrame() {
  //------Loop for each frame of Routine 'showHash'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = showHashClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *doNotCloseText* updates
  if (t >= 0 && doNotCloseText.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    doNotCloseText.tStart = t;  // (not accounting for frame time here)
    doNotCloseText.frameNStart = frameN;  // exact frame index
    doNotCloseText.setAutoDraw(true);
  }

  
  // *enterHashText* updates
  if (t >= 0.0 && enterHashText.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    enterHashText.tStart = t;  // (not accounting for frame time here)
    enterHashText.frameNStart = frameN;  // exact frame index
    enterHashText.setAutoDraw(true);
  }

  
  // *hashText* updates
  if (t >= 0.0 && hashText.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    hashText.tStart = t;  // (not accounting for frame time here)
    hashText.frameNStart = frameN;  // exact frame index
    hashText.setAutoDraw(true);
  }

  
  // *spaceToExit* updates
  if (t >= 3 && spaceToExit.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    spaceToExit.tStart = t;  // (not accounting for frame time here)
    spaceToExit.frameNStart = frameN;  // exact frame index
    spaceToExit.setAutoDraw(true);
  }

  
  // *goodbyeKeyResp* updates
  if (t >= 3 && goodbyeKeyResp.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    goodbyeKeyResp.tStart = t;  // (not accounting for frame time here)
    goodbyeKeyResp.frameNStart = frameN;  // exact frame index
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { goodbyeKeyResp.clock.reset(); });  // t=0 on next screen flip
    psychoJS.window.callOnFlip(function() { goodbyeKeyResp.start(); }); // start on screen flip
    psychoJS.window.callOnFlip(function() { goodbyeKeyResp.clearEvents(); });
  }

  if (goodbyeKeyResp.status === PsychoJS.Status.STARTED) {
    let theseKeys = goodbyeKeyResp.getKeys({keyList: ['space'], waitRelease: false});
    
    // check for quit:
    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      goodbyeKeyResp.keys = theseKeys[0].name;  // just the last key pressed
      goodbyeKeyResp.rt = theseKeys[0].rt;
      // a response ends the routine
      continueRoutine = false;
    }
  }
  
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  for (const thisComponent of showHashComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function showHashRoutineEnd() {
  //------Ending Routine 'showHash'-------
  for (const thisComponent of showHashComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  psychoJS.experiment.addData('goodbyeKeyResp.keys', goodbyeKeyResp.keys);
  if (typeof goodbyeKeyResp.keys !== undefined) {  // we had a response
      psychoJS.experiment.addData('goodbyeKeyResp.rt', goodbyeKeyResp.rt);
      routineTimer.reset();
      }
  
  goodbyeKeyResp.stop();
  // the Routine "showHash" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}


function endLoopIteration({thisScheduler, isTrials=true}) {
  // ------Prepare for next entry------
  return function () {
    // ------Check if user ended loop early------
    if (currentLoop.finished) {
      // Check for and save orphaned data
      if (Object.keys(psychoJS.experiment._thisEntry).length > 0) {
        psychoJS.experiment.nextEntry();
      }
      thisScheduler.stop();
    } else if (isTrials) {
      psychoJS.experiment.nextEntry();
    }
  return Scheduler.Event.NEXT;
  };
}


function importConditions(loop) {
  const trialIndex = loop.getTrialIndex();
  return function () {
    loop.setTrialIndex(trialIndex);
    psychoJS.importAttributes(loop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (Object.keys(psychoJS.experiment._thisEntry).length > 0) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});

  return Scheduler.Event.QUIT;
}
