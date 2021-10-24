//-----------------(1)----------------------------
function tournamentOfChristmas(arg) {
  let gameDays = +arg.shift()
  let [win, lose, countWin, countLose] = ['', '', 0, 0]
  let money = 0

  for (let i = 1; i <= gameDays; i++) {
    let indexFinish = arg.indexOf('Finish')
    let result = arg.splice(0, indexFinish + 1)

    try {
      win = result.toString().match(/win/g).length
      lose = result.toString().match(/lose/g).length

    } catch (error) {
      lose--

    } finally {
      if (win > lose) {
        money += win * 20 * 1.10
        countWin += win
      } else {
        money += win * 20
        countLose += lose
      }

      [win, lose] = [0, 0]

    }
  }

  if (countWin > countLose) {
    money *= 1.2
    console.log(`You won the tournament! Total raised money: ${money.toFixed(2)}`)
  } else {
    console.log(`You lost the tournament! Total raised money: ${money.toFixed(2)}`)
  }
}

// tournamentOfChristmas(2,
//   'volleyball',
//   'win',
//   'football',
//   'lose',
//   'basketball',
//   'win',
//   'Finish',
//   'golf',
//   'win',
//   'tennis',
//   'win',
//   'badminton',
//   'win',
//   'Finish')


// tournamentOfChristmas(
//   3,
//   'darts',
//   'lose',
//   'handball  ',
//   'lose',
//   'judo',
//   'win',
//   'Finish',
//   'snooker',
//   'lose',
//   'swimming',
//   'lose',
//   'squash',
//   'lose',
//   'table tennis',
//   'win',
//   'Finish',
//   'volleyball',
//   'win',
//   'basketball',
//   'win',
//   'Finish')



//---------------------------------------------------(2)--------------------------------------------------

// function tournamentOfChristmas(arg) {
//   let day = arg.shift()

//   let win = 0
//   let lose = 0
//   let allPro = 0

//   for (let i = 1; i <= day; i++) {
//     let countWinGames = 0
//     let countLoseGames = 0
//     let dayPro = 0

//     while (true) {
//       let input = arg.shift()

//       if (input == "Finish") break;

//       let result = arg.shift()

//       if (result === "win") {
//         countWinGames++;
//         dayPro += 20;
//       } else if (result === "lose") {
//         countLoseGames++;
//       }
//     }

//     if (countWinGames > countLoseGames) {
//       dayPro *= 1.1;
//       win++;
//     } else {
//       lose++;
//     }
//     allPro += dayPro;
//   }

//   if (win > lose) {
//     allPro *= 1.2;
//    console.log(`You won the tournament! Total raised money: ${allPro.toFixed(2)}`)
//   } else {
//   console.log(`You lost the tournament! Total raised money: ${allPro.toFixed(2)}`)
//   }
// }




//-------------------------------------------------(3)-----------------------------------------

// function tournamentOfChristmas(arg) {

//   let days = arg.shift()
//   let all_money = 0
//   let current_money = 0
//   let current_win_games = 0
//   let current_lost_games = 0
//   let win_games = 0
//   let lost_games = 0


//   for (let i = 0; i < days; i++) {

//     while (true) {
//       let  game = arg.shift() 


//     if (game === 'Finish') {
//       if (current_win_games > current_lost_games) {
//         current_money = current_money * 1.10
//         all_money += current_money
//       } else {
//         all_money += current_money
//       }

//       current_money = 0
//       current_win_games = 0
//       current_lost_games = 0
//       break
//     }

//     let  win_or_lose = arg.shift()

//     if (win_or_lose === 'win') {
//       current_money += 20
//       current_win_games += 1
//       win_games += 1
//     } else {
//       current_lost_games += 1
//       lost_games += 1
//     }
//    }
//   }

//   if (win_games > lost_games) {
//     console.log(`You won the tournament! Total raised money: ${(all_money * 1.20).toFixed(2)}`)
//   } else {
//     console.log(`You lost the tournament! Total raised money: ${all_money.toFixed(2)}`)
//   }

// }

// tournamentOfChristmas([2,
//   'volleyball',
//   'win',
//   'football',
//   'lose',
//   'basketball',
//   'win',
//   'Finish',
//   'golf',
//   'win',
//   'tennis',
//   'win',
//   'badminton',
//   'win',
//   'Finish'])



// tournamentOfChristmas(
// 3, 
// 'darts',
// 'lose',
// 'handball  ',
// 'lose',
// 'judo',
// 'win',
// 'Finish',
// 'snooker',
// 'lose',
// 'swimming',
// 'lose',
// 'squash',
// 'lose',
// 'table tennis',
// 'win',
// 'Finish',
// 'volleyball',
// 'win',
// 'basketball',
// 'win',
// 'Finish')