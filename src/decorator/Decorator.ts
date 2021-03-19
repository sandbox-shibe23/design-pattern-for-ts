/**
 * Decoratorパターン
 * - 既存の処理を新しい処理でラップする
 * - 新しい処理が既存の処理を微調整する
 * - 関数プログラミングでは、高階関数を利用する
 * - インターフェースが同じであれば別のものをラップできる
 * */

type Calc = (x: number, y: number) => number;

const add: Calc = (x, y) => x + y;

// Decorator
function calcLogger (func: Calc): Calc {
  return (x, y) => {
    const result = func(x, y)
    console.log(`Logged from ${result}`)
    return result
  }
}

// Decorator
function awesomeLogger (func: Calc): Calc {
  return (x, y) => {
    const result = func(x, y)
    console.log(`${result} is awesome number!`)
    return result
  }
}

function main(){
  const logger = calcLogger(add)
  const logger2 = awesomeLogger(add)
  logger(1, 2)
  logger(2, 5)
  logger2(3, 7)
}

main()
