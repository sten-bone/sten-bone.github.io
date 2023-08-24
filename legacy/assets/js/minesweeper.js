// holds the possible game states
const gs = {
  MENU: 1,
  PLAYING: 2,
  LOST: 3,
  WIN: 4,
  PAUSE: 5,
  OPTIONS: 6
};

// default values for game initialization
var tileSize = 32,
  numTilesHeight = 10,
  numTilesWidth = 10,
  numBombs = 5;
// the current game state
var gameState = gs.MENU;
var numFlagged = 0;
var allRevealed = false;
// stores all the tiles
var board;

// keeps track of whether or not a game is currently being played (allows for game to be resumed)
var isGameInProgress = false;

// buttons
// menu buttons
const menuButtons = { play: undefined, resume: undefined, options: undefined };

// pause buttons
var pauseToMenu = undefined;

// end of game buttons
var endToMenu = undefined;
var playAgain = undefined;

// selector panels on the options menu
const optionsSelectors = {
  tileSize: undefined,
  size: undefined,
  difficulty: undefined
};
// button to go back to main menu from options menu
var optionsToMenu = undefined;

// selection options for tile size
const small = { tileSize: 20, text: "Small" };
const med = { tileSize: 32, text: "Medium" };
const large = { tileSize: 50, text: "Large" };
const tileSizes = [small, med, large];

// selection options for board size
const tenbyten = { tilesWidth: 10, tilesHeight: 10, text: "10 x 10" };
const twentybytwenty = { tilesWidth: 20, tilesHeight: 20, text: "20 x 20" };
const thirtybythirty = { tilesWidth: 30, tilesHeight: 30, text: "30 x 30" };
const fiftybythirty = { tilesWidth: 50, tilesHeight: 30, text: "50 x 30" };
const sizes = [tenbyten, twentybytwenty, thirtybythirty, fiftybythirty];

// selection options for difficulty, based on the board size
var easy = {
  bombs: Math.floor(numTilesHeight * numTilesWidth * 0.05),
  text: ""
};
easy.text = "Easy (" + easy.bombs + " Bombs)";
var medium = {
  bombs: Math.floor(numTilesHeight * numTilesWidth * 0.12),
  text: ""
};
medium.text = "Medium (" + medium.bombs + " Bombs)";
var hard = {
  bombs: Math.floor(numTilesHeight * numTilesWidth * 0.2),
  text: ""
};
hard.text = "Hard (" + hard.bombs + " Bombs)";
var impossible = {
  bombs: Math.floor(numTilesHeight * numTilesWidth * 0.25),
  text: ""
};
impossible.text = "Impossible (" + impossible.bombs + " Bombs)";
var masochist = {
  bombs: Math.floor(numTilesHeight * numTilesWidth * 0.3),
  text: ""
};
masochist.text = "Masochist (" + masochist.bombs + " Bombs)";

// updates values for difficulties based on board size
function updateBombs() {
  easy.bombs = Math.floor(numTilesHeight * numTilesWidth * 0.05);
  medium.bombs = Math.floor(numTilesHeight * numTilesWidth * 0.12);
  hard.bombs = Math.floor(numTilesHeight * numTilesWidth * 0.2);
  impossible.bombs = Math.floor(numTilesHeight * numTilesWidth * 0.25);
  masochist.bombs = Math.floor(numTilesHeight * numTilesWidth * 0.3);

  easy.text = "Easy (" + easy.bombs + " Bombs)";
  medium.text = "Medium (" + medium.bombs + " Bombs)";
  hard.text = "Hard (" + hard.bombs + " Bombs)";
  impossible.text = "Impossible (" + impossible.bombs + " Bombs)";
  masochist.text = "Masochist (" + masochist.bombs + " Bombs)";

  optionsSelectors.difficulty.assignFunction();
}

const difficulties = [easy, medium, hard, impossible, masochist];

// sets up the canvas for playing
function settings() {
  let canvas = createCanvas(
    tileSize * numTilesWidth,
    tileSize * (numTilesHeight + 1)
  );
  canvas.parent("canvas");
}

// sets up menu and new game
function setup() {
  // set up canvas for the menu
  if (gameState == gs.MENU) {
    let canvas = createCanvas(600, 600);
    canvas.parent("canvas");
    // set up game to be played
  } else {
    // create the play canvas
    settings();
    // instantiate the board
    board = new Array(numTilesHeight);
    for (let i = 0; i < numTilesHeight; i++) {
      board[i] = new Array(numTilesWidth);
    }
    for (let y = 0; y <= numTilesHeight - 1; y++) {
      for (let x = 0; x <= numTilesWidth - 1; x++) {
        board[y][x] = new Tile(x, y);
      }
    }
    // set/reset beginning variables
    numFlagged = 0;
    allRevealed = false;
    // create and count the bombs
    createBombs(numBombs);
    countBombs();
    // start the game in progress
    isGameInProgress = true;
  }
  // begin game loop
  draw();
}

// the main game loop, handles the drawing logic based on gamestate
function draw() {
  if (gameState == gs.MENU) {
    drawMainMenu();
  } else if (gameState == gs.OPTIONS) {
    drawOptionsMenu();
  } else if (gameState == gs.PLAYING) {
    drawPlaying();
  } else if (gameState == gs.PAUSE) {
    drawPauseMenu();
  } else if (gameState == gs.WIN || gameState == gs.LOST) {
    drawWinLose();
  }
}

// draws the main menu
function drawMainMenu() {
  // creates the floating minesweeper text using sin wave
  textAlign(CENTER);
  // shadow
  textSize(height / 8 + sin((millis() * Math.PI) / 2160));
  background(100);
  fill(30);
  stroke(30);
  strokeWeight(5);
  text("MINESWEEPER", width / 2, height / 3.5 + 30);

  // main text
  textSize(height / 8);
  fill(230);
  stroke(0);
  strokeWeight(5);
  text(
    "MINESWEEPER",
    width / 2,
    height / 3.5 + sin((millis() * Math.PI) / 2160) * 3
  );

  // spacing and padding for each button
  let spacing = floor(width / 5);
  let padding = floor(spacing / 10);
  let vertical = floor(height / 1.8);
  // instantiate buttons if not done so yet
  if (menuButtons.play === undefined) {
    menuButtons.play = new Button(
      "Play",
      spacing + padding,
      vertical,
      spacing - padding,
      floor(vertical / 5),
      () => {
        gameState = gs.PLAYING;
        setup();
      },
      color(120, 120, 120),
      color(200, 120, 120),
      color(255, 255, 255)
    );
  }
  if (menuButtons.resume === undefined) {
    menuButtons.resume = new Button(
      "Resume",
      2 * spacing + padding,
      vertical,
      spacing - padding,
      floor(vertical / 5),
      () => {
        gameState = gs.PLAYING;
        settings();
        draw();
      },
      color(120, 120, 120),
      color(200, 120, 120),
      color(255, 255, 255)
    );
    // set to not be visible by default
    menuButtons.resume.toggleVisibility();
  }
  if (menuButtons.options === undefined) {
    menuButtons.options = new Button(
      "Options",
      3 * spacing + padding,
      vertical,
      spacing - padding,
      floor(vertical / 5),
      () => {
        gameState = gs.OPTIONS;
        draw();
      },
      color(120, 120, 120),
      color(200, 120, 120),
      color(255, 255, 255)
    );
  }
  // show each button, and only resume if there is a game in progress
  menuButtons.play.show();
  menuButtons.options.show();
  if (isGameInProgress) {
    menuButtons.resume.isVisible = true;
    menuButtons.resume.show();
  }
}

// draws the options menu
function drawOptionsMenu() {
  background(100);
  textAlign(CENTER);
  textSize(height / 12);
  fill(230);
  text("OPTIONS", width / 2, height / 12);
  // instantiate back button if not yet done so
  if (optionsToMenu === undefined) {
    optionsToMenu = new Button(
      "Back",
      height / 8 - height / 10,
      height - floor(height / 8),
      width / 5,
      floor(height / 10),
      () => {
        gameState = gs.MENU;
        draw();
      },
      color(120, 120, 120),
      color(200, 120, 120),
      color(255, 255, 255)
    );
  }
  // instantiate item selectors if not yet done so
  if (optionsSelectors.tileSize === undefined) {
    optionsSelectors.tileSize = new Selector(
      tileSizes,
      width / 2.5,
      (1 * height) / 5,
      height / 10,
      () => {}
    );
    optionsSelectors.tileSize.assignFunction = () => {
      tileSize =
        optionsSelectors.tileSize.items[optionsSelectors.tileSize.currentItem]
          .tileSize;
      pauseToMenu = undefined;
      endToMenu = undefined;
      playAgain = undefined;
    };
    optionsSelectors.tileSize.currentItem = 1;
    optionsSelectors.tileSize.assignFunction();
  }
  if (optionsSelectors.difficulty === undefined) {
    optionsSelectors.difficulty = new Selector(
      difficulties,
      width / 2.5,
      (3 * height) / 5,
      height / 10,
      () => {}
    );
    optionsSelectors.difficulty.assignFunction = () => {
      numBombs =
        optionsSelectors.difficulty.items[
          optionsSelectors.difficulty.currentItem
        ].bombs;
      isGameInProgress = false;
    };
    optionsSelectors.difficulty.assignFunction();
  }
  if (optionsSelectors.size === undefined) {
    optionsSelectors.size = new Selector(
      sizes,
      width / 2.5,
      (2 * height) / 5,
      height / 10,
      () => {}
    );
    optionsSelectors.size.assignFunction = () => {
      numTilesWidth =
        optionsSelectors.size.items[optionsSelectors.size.currentItem]
          .tilesWidth;
      numTilesHeight =
        optionsSelectors.size.items[optionsSelectors.size.currentItem]
          .tilesHeight;
      updateBombs();
      isGameInProgress = false;
      optionsSelectors.difficulty.resetWidth();
    };
    optionsSelectors.size.assignFunction();
  }
  // show each selector and button
  Object.values(optionsSelectors).forEach(selector => {
    selector.show();
  });
  fill(0);
  textAlign(LEFT);
  textSize(32);
  noStroke();
  text("Tile Size: ", width / 10, (1 * height) / 5 + tileSize * 1.5);
  text("Board Size: ", width / 10, (2 * height) / 5 + tileSize * 1.5);
  text("Difficulty: ", width / 10, (3 * height) / 5 + tileSize * 1.5);
  optionsToMenu.show();
}

// draws the board while playing
function drawPlaying() {
  // checks for a win if enough flags are down
  if (numFlagged == numBombs) {
    if (checkWin()) {
      gameState = gs.WIN;
      draw();
    }
  }
  // draw the board
  drawTiles();
}

// draws the board and flag information
function drawTiles() {
  background(51);
  // show each tile
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      board[i][j].show();
    }
  }
  // write remaining flags at the bottom of the canvas
  fill(255);
  textAlign(LEFT);
  textSize(tileSize / 2);
  noStroke();
  text(
    "Flags Remaining: " + (numBombs - numFlagged),
    width / 32,
    height - tileSize / 2.3
  );
}

// draws the pause menu
function drawPauseMenu() {
  // draw the tiles for correct transparency
  drawTiles();
  fill(0, 0, 0, 100);
  rect(0, 0, width, height);
  textAlign(CENTER);
  textSize(height / 8);
  fill(230);
  text("PAUSED", width / 2, height / 8);
  textSize((height / 2 - height / 8) / 3);
  // set up back to menu button if not done so
  if (pauseToMenu === undefined) {
    pauseToMenu = new Button(
      "Back to Main Menu",
      width / 4,
      height / 2 - height / 8,
      width / 2,
      height / 8,
      () => {
        gameState = gs.MENU;
        setup();
      },
      color(0, 0, 0, 100),
      color(200, 120, 120, 100),
      color(255, 255, 255)
    );
  }
  // show back to menu button
  pauseToMenu.show();
}

// draws the screen for both a win or lose
function drawWinLose() {
  // draw the tiles for correct transparency
  drawTiles();
  let fillColor;
  let content;
  // set color and text based on a win or lose
  if (gameState == gs.LOST) {
    fillColor = color(0, 0, 0, 150);

    content = "GAME OVER";
  } else {
    fillColor = color(21, 191, 28, 70);
    content = "YOU WON!";
  }
  // draw the canvas content
  fill(fillColor);
  rect(0, 0, width, height);
  textSize(tileSize);
  stroke(0);
  strokeWeight(1);
  fill(255);
  textAlign(CENTER);
  text(content, width / 2, height / 8);

  // set up button if not yet done so
  if (playAgain === undefined) {
    playAgain = new Button(
      "Play Again",
      width / 4,
      height / 2 - height / 8,
      width / 2,
      height / 8,
      () => {
        gameState = gs.PLAYING;
        setup();
      },
      fillColor,
      color(200, 120, 120, 100),
      color(255, 255, 255)
    );
  }
  if (endToMenu === undefined) {
    endToMenu = new Button(
      "Back to Main Menu",
      width / 4,
      height / 2 + height / 8,
      width / 2,
      height / 8,
      () => {
        gameState = gs.MENU;
        isGameInProgress = false;
        setup();
      },
      fillColor,
      color(200, 120, 120, 100),
      color(255, 255, 255)
    );
  }
  // reset fill color for already created buttons
  playAgain.startColor = fillColor;
  endToMenu.startColor = fillColor;
  // show each button
  playAgain.show();
  endToMenu.show();
}

// creates n bombs in random positions on the board
function createBombs(n) {
  let count = 0;
  // place bombs in random positions
  while (count < n) {
    let i = floor(random(0, board.length));
    let j = floor(random(0, board[0].length));
    if (!board[i][j].isBomb()) {
      board[i][j].makeBomb();
      count++;
    }
  }
}

// checks to see if every flagged tile is also a bomb, resulting in a win
function checkWin() {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j].isBomb() && !board[i][j].flagged) {
        return false;
      }
    }
  }
  return true;
}

// counts the number of bombs for each tile to create the correct tile number
function countBombs() {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      let count = 0;
      //West
      if (col - 1 >= 0) {
        if (board[row][col - 1].isBomb()) count++;
      }
      //Northwest
      if (col - 1 >= 0 && row - 1 >= 0) {
        if (board[row - 1][col - 1].isBomb()) count++;
      }
      //North
      if (row - 1 >= 0) {
        if (board[row - 1][col].isBomb()) count++;
      }
      //NorthEast
      if (row - 1 >= 0 && col < board[0].length - 1) {
        if (board[row - 1][col + 1].isBomb()) count++;
      }
      //East
      if (col < board[0].length - 1) {
        if (board[row][col + 1].isBomb()) count++;
      }
      //Southeast
      if (col < board[0].length - 1 && row < board.length - 1) {
        if (board[row + 1][col + 1].isBomb()) count++;
      }
      //South
      if (row < board.length - 1) {
        if (board[row + 1][col].isBomb()) count++;
      }
      //Southwest
      if (col - 1 >= 0 && row < board.length - 1) {
        if (board[row + 1][col - 1].isBomb()) count++;
      }
      board[row][col].setSurroundingBombs(count);
    }
  }
}

// reveals all blank tiles and one numbered tile recursively from the tile clicked
function revealAll(row, col, click) {
  if (click == true) board[row][col].revealClick();
  else board[row][col].reveal();
  if (!board[row][col].isBomb() && board[row][col].surroundingBombs == 0) {
    //West
    if (col - 1 >= 0) {
      if (
        board[row][col - 1].surroundingBombs == 0 &&
        !board[row][col - 1].revealed
      ) {
        revealAll(row, col - 1, false);
      } else board[row][col - 1].reveal();
    }
    //Northwest
    if (col - 1 >= 0 && row - 1 >= 0) {
      if (
        board[row - 1][col - 1].surroundingBombs == 0 &&
        !board[row - 1][col - 1].revealed
      ) {
        revealAll(row - 1, col - 1, false);
      } else board[row - 1][col - 1].reveal();
    }
    //North
    if (row - 1 >= 0) {
      if (
        board[row - 1][col].surroundingBombs == 0 &&
        !board[row - 1][col].revealed
      ) {
        revealAll(row - 1, col, false);
      } else board[row - 1][col].reveal();
    }
    //NorthEast
    if (row - 1 >= 0 && col < board[0].length - 1) {
      if (
        board[row - 1][col + 1].surroundingBombs == 0 &&
        !board[row - 1][col + 1].revealed
      ) {
        revealAll(row - 1, col + 1, false);
      } else board[row - 1][col + 1].reveal();
    }
    //East
    if (col < board[0].length - 1) {
      if (
        board[row][col + 1].surroundingBombs == 0 &&
        !board[row][col + 1].revealed
      ) {
        revealAll(row, col + 1, false);
      } else board[row][col + 1].reveal();
    }
    //Southeast
    if (col < board[0].length - 1 && row < board.length - 1) {
      if (
        board[row + 1][col + 1].surroundingBombs == 0 &&
        !board[row + 1][col + 1].revealed
      ) {
        revealAll(row + 1, col + 1, false);
      } else board[row + 1][col + 1].reveal();
    }
    //South
    if (row < board.length - 1) {
      if (
        board[row + 1][col].surroundingBombs == 0 &&
        !board[row + 1][col].revealed
      ) {
        revealAll(row + 1, col, false);
      } else board[row + 1][col].reveal();
    }
    //Southwest
    if (col - 1 >= 0 && row < board.length - 1) {
      if (
        board[row + 1][col - 1].surroundingBombs == 0 &&
        !board[row + 1][col - 1].revealed
      ) {
        revealAll(row + 1, col - 1, false);
      } else board[row + 1][col - 1].reveal();
    }
  }
}

// handles loss of the game
function gameOver() {
  gameState = gs.LOST;
  if (!allRevealed) {
    revealAllLost();
  }
}

// reveals all tiles to user when game is lost
function revealAllLost() {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      board[i][j].revealed = true;
      board[i][j].show();
    }
  }
  allRevealed = true;
}

// handles mouse input and button presses
function mousePressed() {
  if (mouseX >= 0 && mouseX < width && mouseY >= 0 && mouseY < height) {
    if (gameState == gs.MENU) {
      Object.values(menuButtons).forEach(button => {
        if (button.isHoveredOver()) {
          button.clickAction();
        }
      });
    } else if (gameState == gs.PLAYING) {
      //flags this tile
      let mouse_X = floor(mouseX / tileSize);
      let mouse_Y = floor(mouseY / tileSize);
      if (keyIsDown(SHIFT)) {
        board[mouse_Y][mouse_X].changeFlagged();
      }
      //reveals this tile and all surrounding tiles if they are empty
      else if (!board[mouse_Y][mouse_X].flagged)
        revealAll(mouse_Y, mouse_X, true);
    } else if (gameState == gs.WIN || gameState == gs.LOST) {
      if (endToMenu.isHoveredOver()) {
        endToMenu.clickAction();
      }
      if (playAgain.isHoveredOver()) {
        playAgain.clickAction();
      }
    } else if (gameState == gs.OPTIONS) {
      Object.values(optionsSelectors).forEach(selector => {
        if (selector.isOnPreviousArrow()) {
          selector.previousItem();
        } else if (selector.isOnNextArrow()) {
          selector.nextItem();
        }
      });
      if (optionsToMenu.isHoveredOver()) {
        optionsToMenu.clickAction();
      }
    } else if (gameState == gs.PAUSE) {
      if (pauseToMenu.isHoveredOver()) {
        pauseToMenu.clickAction();
      }
    }
  }
}

// handles key pressed
function keyPressed() {
  // toggles pause menu when p is pressed
  if (keyCode === 80) {
    if (gameState == gs.PLAYING) {
      gameState = gs.PAUSE;
      draw();
    } else if (gameState == gs.PAUSE) {
      gameState = gs.PLAYING;
      draw();
    }
  }
}

// the Tile class holds all location and personal information for a single Tile on the board
class Tile {
  // takes coordinates of upper-left corner
  constructor(x, y) {
    this.flagged = false;
    this.bomb = false;
    this.bombClickedOn = false;
    this.revealed = false;
    //x and y coords of upper-left corner of tile

    this.x = x;
    this.y = y;
    // handy variables for drawing a bomb
    this.ts2 = tileSize / 2;
    this.ts4 = tileSize / 4;
    this.ts8 = tileSize / 8;
  }

  //changes state of flagged to either flag or unflag tile
  changeFlagged() {
    if (!this.revealed) {
      if (this.flagged) {
        this.flagged = false;
        numFlagged--;
      } else {
        this.flagged = true;
        numFlagged++;
      }
    }
  }

  //@return true if this tile contains a bomb
  isBomb() {
    return this.bomb;
  }

  //turns this tile into a hidden bomb
  makeBomb() {
    this.bomb = true;
  }

  //sets number of bombs around this tile
  setSurroundingBombs(n) {
    this.surroundingBombs = n;
  }

  //displays this tile object to the screen
  show() {
    if (!this.revealed) {
      fill(196);
      stroke(100);
      strokeWeight(4);
      rect(this.x * tileSize, this.y * tileSize, tileSize, tileSize);
      // draw a flag
      if (this.flagged) {
        fill(0);
        noStroke();
        rect(
          this.x * tileSize + this.ts2 - this.ts8,
          this.y * tileSize + this.ts4,
          this.ts8,
          this.ts2
        );
        fill(255, 0, 0);
        triangle(
          this.x * tileSize + this.ts2,
          this.y * tileSize + this.ts4,
          this.x * tileSize + this.ts2,
          this.y * tileSize + this.ts2,
          this.x * tileSize + tileSize - this.ts4,
          this.y * tileSize + this.ts2
        );
      }
    } else {
      if (this.bomb && this.bombClickedOn) {
        this.showClickedBomb();
      } else {
        fill(225);
        stroke(0);
        strokeWeight(1);
        rect(this.x * tileSize, this.y * tileSize, tileSize, tileSize);
        if (this.bomb) {
          Tile.showBomb(
            this.x * tileSize,
            this.y * tileSize,
            tileSize,
            this.ts2,
            this.ts4,
            this.ts8
          );
        } else {
          textSize(tileSize / 2);
          textAlign(CENTER, CENTER);
          if (this.surroundingBombs > 0) {
            switch (this.surroundingBombs) {
              case 1:
                fill(229, 30, 30);
                break;
              case 2:
                fill(25, 153, 178);
                break;
              case 3:
                fill(20, 137, 12);
                break;
              case 4:
                fill(146, 43, 222);
                break;
              case 5:
                fill(203, 181, 10);
                break;
              case 6:
                fill(22, 78, 240);
                break;
              case 7:
                fill(232, 135, 7);
                break;
              case 8:
                fill(246, 85, 255);
                break;
            }
            text(
              this.surroundingBombs,
              this.x * tileSize + this.ts2,
              this.y * tileSize + this.ts2
            );
          }
        }
      }
    }
  }

  //reveals this tile by click
  revealClick() {
    if (this.bomb) {
      this.revealed = true;
      this.bombClickedOn = true;
      gameOver();
    } else this.revealed = true;
  }

  //used for general reveal domino effect
  reveal() {
    if (this.bomb) {
    } else this.revealed = true;
  }

  //reveals bomb as red tile if clicked on
  showClickedBomb() {
    fill(225, 0, 0);
    noStroke();
    rect(this.x * tileSize, this.y * tileSize, tileSize, tileSize);
    fill(0);
    Tile.showBomb(
      this.x * tileSize,
      this.y * tileSize,
      tileSize,
      this.ts2,
      this.ts4,
      this.ts8
    );
  }

  //separate method specifically for drawing bomb
  static showBomb(x, y, tileSize, ts2, ts4, ts8) {
    fill(0);
    ellipse(x + ts2, y + ts2, ts2, ts2);
    stroke(0);
    strokeWeight(tileSize / 16);
    line(x + ts2, y + ts2, x + ts4, y + ts4);
    line(x + ts2, y + ts2, x + ts4, y + tileSize - ts4);
    line(x + ts2, y + ts2, x + tileSize - ts4, y + tileSize - ts4);
    line(x + ts2, y + ts2, x + tileSize - ts4, y + ts4);

    line(x + ts2, y + ts2, x + ts8, y + ts2);
    line(x + ts2, y + ts2, x + ts2, y + ts8);
    line(x + ts2, y + ts2, x + tileSize - ts8, y + ts2);
    line(x + ts2, y + ts2, x + ts2, y + tileSize - ts8);
  }
}

// a Button is clicked on by the user to cause some function, and can change color when hovered over
class Button {
  constructor(
    text,
    x,
    y,
    width,
    height,
    clickAction,
    startColor,
    hoverColor,
    textColor
  ) {
    this.text = text;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.clickAction = clickAction;
    this.startColor = startColor;
    this.hoverColor = hoverColor;
    this.textColor = textColor;

    this.isVisible = true;
  }

  // shows the button
  show() {
    if (this.isVisible) {
      if (this.isHoveredOver()) {
        fill(this.hoverColor);
      } else {
        fill(this.startColor);
      }
      stroke(0);
      strokeWeight(5);
      rect(this.x, this.y, this.width, this.height);

      textSize(this.height / 3);
      textAlign(CENTER);
      stroke(0);
      strokeWeight(1);
      fill(this.textColor);
      text(this.text, this.x + this.width / 2, this.y + this.height / 1.7);
    }
  }

  // checks if the mouse is hovering over the button
  isHoveredOver() {
    return (
      mouseX >= this.x &&
      mouseX < this.x + this.width &&
      mouseY >= this.y &&
      mouseY < this.y + this.height
    );
  }

  // changes the visibility of this button
  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }
}

// a panel used for selecting between a range of different options using left and right arrows
class Selector {
  constructor(items, x, y, height, assignFunction) {
    this.items = items;
    this.x = x;
    this.y = y;
    this.height = height;
    this.assignFunction = assignFunction;
    this.currentItem = 0;
    this.resetWidth();
  }

  // sets the width of the Selector based on the widest set of words in items
  resetWidth() {
    textSize(this.height / 3);
    let maxWidth = 0;
    this.items.forEach(item => {
      if (textWidth(item.text) > maxWidth) {
        maxWidth = textWidth(item.text);
      }
    });
    this.width = maxWidth + 2 * this.height + this.height / 6;
  }

  // checks if mouse is on the lefthand arrow
  isOnPreviousArrow() {
    return (
      mouseX >= this.x &&
      mouseX <= this.x + this.height &&
      mouseY >= this.y &&
      mouseY <= this.y + this.height
    );
  }

  // checks if mouse is on the righthand arrow
  isOnNextArrow() {
    return (
      mouseX >= this.x + this.width - this.height &&
      mouseX <= this.x + this.width &&
      mouseY >= this.y &&
      mouseY <= this.y + this.height
    );
  }

  // handles when the user clicks on Selector
  click() {
    if (this.isOnPreviousArrow()) {
      this.previousItem();
    } else if (this.isOnNextArrow()) {
      this.nextItem();
    }
  }

  // gets the next item in items, or loops back to the beginning
  nextItem() {
    this.currentItem++;
    if (this.currentItem >= this.items.length) {
      this.currentItem = 0;
    }
    this.assignFunction();
  }

  // gets the previous item in items, or loops back to the end
  previousItem() {
    this.currentItem--;
    if (this.currentItem < 0) {
      this.currentItem = this.items.length - 1;
    }
    this.assignFunction();
  }

  // shows the Selector
  show() {
    fill(230);
    stroke(0);
    strokeWeight(5);
    rect(
      this.x + this.height,
      this.y,
      this.width - 2 * this.height,
      this.height
    );

    textSize(this.height / 3);
    textAlign(CENTER);
    stroke(0);
    strokeWeight(1);
    fill(0);
    text(
      this.items[this.currentItem].text,
      this.x + this.width / 2,
      this.y + this.height / 1.7
    );

    stroke(0);
    strokeWeight(5);
    if (this.isOnPreviousArrow()) {
      fill(200, 120, 120);
    } else {
      fill(120);
    }
    rect(this.x, this.y, this.height, this.height);
    if (this.isOnNextArrow()) {
      fill(200, 120, 120);
    } else {
      fill(120);
    }
    rect(this.x + this.width - this.height, this.y, this.height, this.height);

    fill(230);
    noStroke();
    let grid = this.height / 10;
    triangle(
      this.x + 3 * grid,
      this.y + 5 * grid,
      this.x + 7 * grid,
      this.y + 3 * grid,
      this.x + 7 * grid,
      this.y + 7 * grid
    );
    triangle(
      this.x + this.width - this.height + 3 * grid,
      this.y + 3 * grid,
      this.x + this.width - this.height + 3 * grid,
      this.y + 7 * grid,
      this.x + this.width - this.height + 7 * grid,
      this.y + 5 * grid
    );
  }
}
