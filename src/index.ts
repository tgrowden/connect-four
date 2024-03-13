// 7 columns; six rows
// 2 players
// alternating turns

export type Player = 1 | 2;

/**
 * A space in the board
 */
export type Space = Player | undefined;



export type GameBoard = [
  [Space, Space, Space, Space, Space, Space, Space],
  [Space, Space, Space, Space, Space, Space, Space],
  [Space, Space, Space, Space, Space, Space, Space],
  [Space, Space, Space, Space, Space, Space, Space],
  [Space, Space, Space, Space, Space, Space, Space],
  [Space, Space, Space, Space, Space, Space, Space]
]

export const DEFAULT_BOARD: GameBoard = [
  [undefined, undefined, undefined, undefined, undefined, undefined, undefined ],
  [undefined, undefined, undefined, undefined, undefined, undefined, undefined ],
  [undefined, undefined, undefined, undefined, undefined, undefined, undefined ],
  [undefined, undefined, undefined, undefined, undefined, undefined, undefined ],
  [undefined, undefined, undefined, undefined, undefined, undefined, undefined ],
  [undefined, undefined, undefined, undefined, undefined, undefined, undefined ]
]

/**
 * Take a turn on the board
 *
 * @TODO: test
 */
export function takeTurn(
  player: Player,

  /**
   * 0-indexed
   */
  column: number,
  board: GameBoard): GameBoard {
    // throw error if exceeding spaces in column
  if (board[0][column]) {
    throw new Error("The column is full")
  }


  let position: Player | undefined;

  while (position === undefined) {
    for (let i = board.length - 1; i >= 0; i--) {
      // todo: jump out sooner; this is inefficient
      if (position || board[i][column]) {
        continue
      }

      board[i][column] = player

      position = player
    }
  }

  return board
}

function checkBoard(board: GameBoard) {
  // iterate through; check up, down, left, right
  // keep track of those checked spaces
}

export default function run() {
  let board = DEFAULT_BOARD


}

