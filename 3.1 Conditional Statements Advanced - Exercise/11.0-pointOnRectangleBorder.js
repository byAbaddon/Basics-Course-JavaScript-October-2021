function pointOnRectangleBorder(...arg) {
  const [x1, y1, x2, y2, x, y] = [ +arg[0], +arg[1], +arg[2], +arg[3], +arg[4], +arg[5] ]
  inside = (x == x1 || x == x2) && (y >= y1 && y <= y2)
  outside = (y == y1 || y == y2) && (x >= x1 && x <= x2)
  console.log(inside || outside ? 'Border' : 'Inside / Outside');
}

//pointOnRectangleBorder(2, -3, 12, 3, 12, -1)