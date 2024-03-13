import { it, expect, describe } from "vitest";

import { takeTurn, DEFAULT_BOARD, Player } from "./index";

describe("takeTurn", () => {
  it("Should allow for playing a piece", () => {
    const player1: Player = 1
    const player2: Player = 2

    let board = DEFAULT_BOARD

    const column = 0

    board = takeTurn(player1, column, board)

    expect(board[5][column]).toEqual(player1)

    board = takeTurn(player2, column, board)

    expect(board[4][column]).toEqual(player2)

    expect(board[3][column]).toEqual(undefined)
  })
})