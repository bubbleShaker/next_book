import React from 'react'
 
// Titleを渡すためのContextを作成します
const TitleContext = React.createContext('')

// Titleコンポーネントの中でContextの値を参照します
const Title = () => {
// Consumerを使って、Contextの値を参照します
  return (
    <TitleContext.Consumer>
      {/* Consumer直下に関数を置いて、Contextの値を参照します */}
      {(title) => {
        return <h1>{title}</h1>
      }}
    </TitleContext.Consumer>
  )
}

const Header = () => {
  return (
    <div>
      {/* HeaderからTitleへは何もデータを渡しません */}
      <Title />
    </div>
  )
}
 
// Pageコンポーネントの中でContextに値を渡します
const Page = () => {
  const title = 'React Book'
 
  // Providerを使いContextに値をセットします。
  // Provider以下のコンポーネントから値を参照できます
  return (
    <TitleContext.Provider value={title}>
      <Header />
    </TitleContext.Provider>
  )
}
 
export default Page






// import React from 'react'
 
//  // Containerのpropsの型を定義します
// type ContainerProps = {
//   title: string
//   children: React.ReactNode
// }
 
// const Container = (props: ContainerProps): JSX.Element => {
//   const { title, children } = props
 
//   return (
//     <div style={{ background: 'red' }}>
//       <span>{title}</span>
//       {/* propsのchildrenを埋め込むと、このコンポーネントの開始タグと閉じタグで囲んだ要素を表示します */}
//       <div>{children}</div>
//     </div>
//   )
// }
 
// const Parent = (): JSX.Element => {
//   return (
//     // Containerを使用する際に、他の要素を囲って使用する
//     <Container>
//       <p>ここの部分が背景色で囲まれます</p>
//     </Container>
//   )
// }
 
// export default Parent






// import React from 'react'
 
//  // Containerのpropsの型を定義します
// type ContainerProps = {
//   title: string
//   children: React.ReactNode
// }
 
// const Container = (props: ContainerProps): JSX.Element => {
//   const { title, children } = props
 
//   return (
//     <div style={{ background: 'red' }}>
//       <span>{title}</span>
//       {/* propsのchildrenを埋め込むと、このコンポーネントの開始タグと閉じタグで囲んだ要素を表示します */}
//       <div>{children}</div>
//     </div>
//   )
// }
 
// const Parent = (): JSX.Element => {
//   return (
//     // Containerを使用する際に、他の要素を囲って使用する
//     <Container title="Hello">
//       <p>ここの部分が背景色で囲まれます</p>
//     </Container>
//   )
// }
 
// export default Parent






// import React from 'react'
// // Containerは赤背景のボックスの中にタイトルと子要素を表示します
// const Container = (props: { title: string; children: React.ReactElement }) => {
//   const { title, children } = props
 
//   return (
//     <div style={{ background: 'red' }}>
//       <span>{title}</span>
//       {/* propsのchildrenを埋め込むと、このコンポーネントの開始タグと閉じタグで囲んだ要素を表示します */}
//       <div>{children}</div>
//     </div>
//   )
// }
 
// const Parent = () => {
//   return (
//     // Containerを使用する際に、他の要素を囲って使用する
//     <Container title="Hello">
//       <p>ここの部分が背景色で囲まれます</p>
//     </Container>
//   )
// }
 
//  export default Parent