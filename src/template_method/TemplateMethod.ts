
/**
 * Template Methodパターン
 * 下記の条件で処理を定型化する
 * - 処理の骨組みを作成する
 * - 呼び出し元が詳細を実装できる
 * */

function display(
  open: () => void,
  close: () => void,
  print:() => void
){
  open()
  print()
  close()
}

const openView = () => {
  console.log("open")
}

const closeView = () => {
  console.log("close")
}

const printConsole = () => {
  console.log("print")
}

const printAlert = () => {
  console.log("alert")
}

display(openView, closeView, printConsole)
display(openView, closeView, printAlert)
