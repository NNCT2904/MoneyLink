const bonApetit = (members, bills) => {
  var result = [];

  var A = Array(members.length)
    .fill(0)
    .map((x) => Array(members.length).fill(0));

  // Init matrix
  for (let i = 0; i < members.length; i++) {
    A[i][0] = 0;
    A[0][i] = 0;
  }

  // Fill matrix
  for (let i = 0; i < bills.length; i++) {
    const { user, amount } = bills[i];

    const expenses = amount / members.length;

    x = members.map((u) => u.username).indexOf(user.username);

    for (let j = 0; j < members.length; j++) {
      if (x === j) {
        A[x][x] = 0;
      } else {
        A[x][j] += expenses;
      }
    }
  }

  var y, x, v1, v2, diff;
  for (let i = 0; i != members.length - 1; i++) {
    x = i;
    for (let j = i + 1; j < members.length; j++) {
      y = j;
      v1 = A[x][y];
      v2 = A[y][x];
      diff = v2 - v1;

      if (diff === 0) {
        result.push(`${members[x].username} and ${members[y].username} are equall`);
      } else if (diff > 0) {
        result.push(`${members[x].username} owes ${members[y].username}: ${diff}`);
      } else {
        result.push(`${members[y].username} owes ${members[x].username}: ${diff}`);
      }
    }
  }
  return result;
};

module.exports = bonApetit;