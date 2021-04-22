export default function drawCursors(cursors) {
  return {
    type: 'DRAW_CURSORS',
    payload: cursors,
  }
}
