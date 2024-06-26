import React, { useState, useCallback } from 'react'
 
type ButtonProps = {
  onClick: () => void
}

// DecrementButtonは通常の関数コンポーネントでボタンを表示する
const DecrementButton = (props: ButtonProps) => {
  const { onClick } = props

  console.log('DecrementButtonが再描画されました')

  return <button onClick={onClick}>Decrement</button>
}

// IncrementButtonはメモ化した関数コンポーネントでボタンを表示する
const IncrementButton = React.memo((props: ButtonProps) => {
  const { onClick } = props

  console.log('IncrementButtonが再描画されました')

  return <button onClick={onClick}>Increment</button>
})

// DoubleButtonはメモ化した関数コンポーネントでボタンを表示する
const DoubleButton = React.memo((props: ButtonProps) => {
  const { onClick } = props

  console.log('DoubleButtonが再描画されました')

  return <button onClick={onClick}>Double</button>
})

export const Parent = () => {
  const [count, setCount] = useState(0)

  const decrement = () => {
    setCount((c) => c - 1)
  }
  const increment = () => {
    setCount((c) => c + 1)
  }
  // useCallbackを使って関数をメモ化する
  const double = useCallback(() => {
    setCount((c) => c * 2)
    // 第2引数は空配列なので、useCallbackは常に同じ関数を返す
  }, [])

  return (
    <div>
      <p>Count: {count}</p>
      {/* コンポーネントに関数を渡す */}
      <DecrementButton onClick={decrement} />
      {/* メモ化コンポーネントに関数を渡す */}
      <IncrementButton onClick={increment} />
      {/* メモ化コンポーネントにメモ化した関数を渡す */}
      <DoubleButton onClick={double} />
    </div>
  )
}





// import React, { memo, useState } from 'react'
 
// type FizzProps = {
//   isFizz: boolean
// }

// // Fizzは通常の関数コンポーネント
// // isFizzがtrueの場合はFizzと表示し、それ以外は何も表示しない
// // isFizzの変化に関わらず、親が再描画されるとFizzも再描画される
// const Fizz = (props: FizzProps) => {
//   const { isFizz } = props
//   console.log(`Fizzが再描画されました, isFizz=${isFizz}`)
//   return <span>{isFizz ? 'Fizz' : ''}</span>
// }

// // 先のコード例のtype BuzzProps以降を編集
// type BuzzProps = {
//   isBuzz: boolean
//   // propsにonClickを追加
//   onClick: () => void
// }

// const Buzz = memo<BuzzProps>((props) => {
//   const { isBuzz, onClick } = props
//   console.log(`Buzzが再描画されました, izBuzz=${isBuzz}`)
//   return (
//     <span onClick={onClick}>
//       {isBuzz ? 'Buzz' : ''}
//     </span>
//   )
// })

// export const Parent = () => {
//   const [count, setCount] = useState(1)
//   const isFizz = count % 3 === 0
//   const isBuzz = count % 5 === 0

//   // この関数はParentの再描画の度に作成される
//   const onBuzzClick = () => {
//     console.log(`Buzzがクリックされました isBuzz=${isBuzz}`)
//   }
//   console.log(`Parentが再描画されました, count=${count}`)

//   return (
//     <div>
//       <button onClick={() => setCount((c) => c + 1)}>+1</button>
//       <p>{`現在のカウント: ${count}`}</p>
//       <p>
//         <Fizz isFizz={isFizz} />
//         <Buzz isBuzz={isBuzz} onClick={onBuzzClick} />
//       </p>
//     </div>
//     )
// }






// type BuzzProps = {
//   isBuzz: boolean
// }
 
// // Buzzはメモ化した関数コンポーネント
// // isBuzzがtrueの場合はBuzzと表示し、それ以外は何も表示しない
// // 親コンポーネントが再描画されても、isBuzzが変化しない限りはBuzzは再描画しない
// const Buzz = memo<BuzzProps>((props) => {
//   const { isBuzz } = props
//   console.log(`Buzzが再描画されました, izBuzz=${isBuzz}`)
//   return (
//     <span>
//     {isBuzz ? 'Buzz' : ''}
//     </span>
//   )
// })
 
// // この形式でexportしたときはimport { Parent } from ... で読み込む
// export const Parent = () => {
//   const [count, setCount] = useState(1)
//   const isFizz = count % 3 === 0
//   const isBuzz = count % 5 === 0
 
//   console.log(`Parentが再描画されました, count=${count}`)
//   return (
//     <div>
//       <button onClick={() => setCount((c) => c+1)}>+1</button>
//       <p>{`現在のカウント: ${count}`}</p>
//       <p>
//         <Fizz isFizz={isFizz} />
//         <Buzz isBuzz={isBuzz} />
//       </p>
//     </div>
//   )
// }