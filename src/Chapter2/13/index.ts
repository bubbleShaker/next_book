// anyと同様にどんな値でもunknownとして代入することができます
const x: unknown = 123
const y: unknown = 'Hello'

// // 関数やプロパティにアクセスした際に、unknown型そのままではコンパイル時にエラーが発生します
// // error TS2339: Property 'toFixed' does not exist on type 'unknown'.
// console.log(x.toFixed(1))
// // error TS2339: Property 'toLowerCase' does not exist on type 'unknown'.
// console.log(y.toLowerCase())

// 型安全な状況下で関数やプロパティにアクセスして実行できます
if (typeof x === 'number') {
  console.log(x.toFixed(1)) // 123.0
}

if (typeof y === 'string') {
  console.log(y.toLowerCase()) // hello
}

// type User = {
//   name: string;
//   gender: string;
// }

// type UserReadonly = Readonly<User>

// let user: User = { name: 'Takuya', gender: 'Male' }
// let userReadonly: UserReadonly = { name: 'Takuya', gender: 'Male' }

// user.name = 'Yoshiki' // OK
// userReadonly.name = 'Yoshiki' // コンパイル時エラーが発生します

// type User = {
//   readonly name: string;
//   readonly gender: string;
// }

// let user: User = { name: 'Takuya', gender: 'Male' }

// // 以下の代入を行った際にコンパイル時エラーが発生します
// user.gender = 'Female'

// // プロパティ名を任意のnumberとして扱う型の定義の例です
// type SupportVersions = {
//   [env: number]: boolean;
// }

// // stringのプロパティに定義した場合エラーが起きます
// let versions: SupportVersions = {
//   102: false,
//   103: false,
//   104: true,
//   // 'v105': true // -> errorになります
// }

// interface User {
//   name: string;
//   age: number;
//   email: string;
// }
// type UserKey = keyof User // 'name' | 'age' | 'email' というUnion型になる

// const key1: UserKey = 'name' // 代入可能です
// // const key2: UserKey = 'phone' // コンパイル時エラーが起こります

// // 第1引数に渡したオブジェクトの型のプロパティ名のUnion型と、第2引数で渡す値の型が一致しない場合型エラーになります
// // T[K]によりキーに対応する型が戻り値の型となります（たとえば上記Userのageをkeyに渡した場合、戻り値の方はnumberになります）
// function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
//   return obj[key]
// }

// const user: User = {
//   name: 'Takuya',
//   age: 36,
//   email: 'test@example.com'
// }

// // nameは型のキーに存在するため正しくstring型の値が返ります
// const userName = getProperty(user, 'name')
// // const userGender = getProperty(user, 'gender')

// // genderはオブジェクトのキーに存在しないため、コンパイル時エラーになります

// // オプショナルプロパティでinfoを定義します
// type User = {
//   info?: {
//     name: string;
//     age: number;
//   }
// }

// let response = {}
// // responseはJSON形式のAPIレスポンスが代入されている想定。Userに型アサーションします
// const user = (response as any) as User
// // オプショナルのプロパティへの型ガードを行う
// if (user.info) {
//   // オプショナルプロパティ配下のプロパティであるuser.info.nameにアクセスしてもエラーが起きません
//   // もしifの条件がない場合は Object is possibly 'undefined'. というエラーが発生します
//   console.log(user.info.name)
// }

// function addOne(value: number | string) {
//   if (typeof value === 'string') {
//     return Number(value) + 1
//   }
//   return value + 1
// }

// console.log(addOne(10)) // 11
// console.log(addOne('20')) // 21

// // nullになり得るsocialというプロパティの型を定義します
// interface User {
//   name: string
//   social?: {
//     facebook: boolean
//     twitter: boolean
//   }
// }

// let user: User

// user = { name: 'Takuya', social: { facebook: true, twitter: true } }
// // trueが出力されます
// console.log(user.social?.facebook)

// user = { name: 'Takuya' }
// // socialが存在しないケースでも以下のコードは実行時エラーになりません
// console.log(user.social?.facebook)

// // 将来的にも定数が追加されるの可能性のあるenum型を定義します
// enum PageType {
//   ViewProfile,
//   EditProfile,
//   ChangePassword,
// }

// const getTitleText = (type: PageType) => {
//   switch (type) {
//     case PageType.ViewProfile:
//       return 'Setting'
//     case PageType.EditProfile:
//       return 'Edit Profile'
//     case PageType.ChangePassword:
//       return 'Change Password'
//     default:
//       // 決して起きないことをコンパイラに伝えるnever型に代入を行います
//       // これによって仮に将来PageTypeのenum型に定数が新規で追加された際に
//       // コンパイル時にエラーが起きるためバグを未然に防ぐ対応を行うことができます
//       const wrongType: never = type
//       throw new Error(`${wrongType} is not in PageType`)
//   }
// }

// // エラーが常に返るような関数で決して値が正常に返らない場合にnever型を指定します
// function error(message: string): never {
//   throw new Error(message)
// }

// function foo(x: string | number | number[]): boolean {
//   if (typeof x === 'string') {
//     return true
//   } else if (typeof x === 'number') {
//     return false
//   }
//   // neverを利用することで明示的に値が返らないことをコンパイラに伝えることができます
//   // neverを使用しないとTypeScriptはコンパイルエラーになります
//   return error('Never happens')
// }
// console.log(foo('a'))
// console.log(foo(1))
// console.log(foo([1,2]))

// // 先述のIdentityとContactを定義
// type Identity = {
//   id: number | string;
//   name: string;
// }

// type Contact = {
//   name: string;
//   email: string;
//   phone: string;
// }
//  // 積集合による新たなIntersection型の定義をします
//  // IdentityとContactの両方のすべてのプロパティがマージされた型として扱います
//  type Employee = Identity & Contact

//  // OK
//  const employee: Employee = {
//   id: '111',
//   name: 'Takuya',
//   email: 'test@example.com',
//   phone: '012345678'
// }

// // エラー: Contact情報のみでの変数定義はできません。idが必要です
// const employeeContact: Employee = {
//   name: 'Takuya',
//   email: 'test@example.com',
//   phone: '012345678'
// }

// // 和集合による新たなUnion型の定義をします
// // IdentityもしくはContactの型を受けることが可能です
// type IdentityOrContact = Identity | Contact

// // OK
// const id: IdentityOrContact = {
//   id: '111',
//   name: 'Takuya'
// }

// // OK
// const contact: IdentityOrContact = {
//   name: 'Takuya' ,
//   email: 'test@example.com',
//   phone: '012345678'
// }

// type Id = number | string

//  function printId(id: Id) {
//    console.log(id)
//  }

// // 変数や引数の宣言時にUnion型を指定して、numberもしくはstringを受け付けることができます
// function printId(id: number | string) {
//   console.log(id)
// }
// // numberでも正常に動作します
// printId(11)
// // stringでも正常に動作します
// printId('22')

// // Tはクラス内で利用する仮の型の名前です
// class Queue<T> {
//   // 内部にTの型の配列を初期化します
//   private array: T[] = []

//   // Tの型の値を配列に追加します
//   push(item: T) {
//     this.array.push(item)
//   }
//   // Tの型の配列最初の値を取り出します
//   pop(): T | undefined {
//     return this.array.shift()
//   }
// }

// const queue = new Queue<number>() // 数値型を扱うキュー生成します
// queue.push(111)
// queue.push(112)
// console.log(queue.pop())
// console.log(queue.pop())
// console.log(queue.pop())
// // queue.push('hoge') // number型ではないのでコンパイル時エラーになります

// // let str = 'fuga'
// // str = queue.pop() // strはnumber型ではないのでコンパイル時エラーになります

// enum Direction {
//   Up = 'UP',
//   Down = 'DOWN',
//   Left = 'LEFT',
//   Right = 'RIGHT'
// }

// // たとえばAPIのパラメータとして文字列が渡されたケースを想定します
// const value = 'DOWN'
// // 文字列からEnum型に変換します
// const enumValue = value as Direction

// if (enumValue === Direction.Down) {
//   console.log('Down is selected')
// }

// enum Direction {
//   Up,
//   Down,
//   Left,
//   Right
// }

// // enum Directionを参照
// let direction: Direction = Direction.Left
// // 2という数字が出力されます
// console.log(direction)
// direction=3
// console.log(direction)

// class BasePoint3D {
//   public x: number;
//   private y: number;
//   protected z: number;
// }

// // // インスタンス化を行った場合のアクセス制御の例です
// // const basePoint = new BasePoint3D()
// // basePoint.x // OK
// // basePoint.y // コンパイル時エラーが起きます。privateであるためアクセスできません
// // basePoint.z // コンパイル時エラーが起きます。protectedもアクセスできません

// // クラスを継承した際のアクセス制御
// class ChildPoint extends BasePoint3D {
//   constructor() {
//     super()
//     this.x // OK
//     // this.y // コンパイル時エラーが起きます。privateであるためアクセスできません
//     this.z // protectedは問題なくアクセスできます
//   }
// }

// // 頭のIはインタフェースであることを示すためのもの
// interface IUser {
//   name: string;
//   age: number;
//   sayHello: () => string; // 引数なしで文字列を返す
// }

// class User implements IUser {
//   name: string;
//   age: number;

//   constructor() {
//     this.name = ''
//     this.age = 0
//   }
//   // インタフェースに定義されているメソッドを実装しない場合、コンパイル時エラーになります
//   sayHello(): string {
//     return `こんにちは、私は${this.name}、${this.age}歳です。`
//   }
// }
// const user = new User()
// user.name = 'Takuya'
// user.age = 36
// console.log(user.sayHello()) // 'こんにちは、私はTakuya、36歳です。'

// class Point {
//   x: number;
//   y: number;

//   // 引数がない場合の初期値を指定します
//   constructor(x: number = 0, y: number = 0) {
//     this.x = x
//     this.y = y
//   }

//   // 戻り値がない関数を定義するためにvoidを指定します
//   moveX(n: number): void {
//     this.x += n
//   }

//   moveY(n: number): void {
//     this.y += n
//   }
// }

// class Point3D extends Point {
//   z: number;

//   constructor(x: number = 0, y: number = 0, z: number = 0) {
//     // 継承元のコンストラクタを呼び出す
//     super(x, y)
//     this.z = z
//   }

//   moveZ(n: number): void {
//     this.z += n
//   }
// }

// const point3D = new Point3D()
// // 継承元のメソッドを呼び出すことができます
// point3D.moveX(10)
// point3D.moveZ(20)
// console.log(`${point3D.x}, ${point3D.y}, ${point3D.z}`) // 10, 0, 20

// const point = new Point()
// point.moveX(10)
// console.log(`${point.x}, ${point.y}`) // 10, 0

// interface Colorful {
//   color: string;
// }

// interface Circle {
//   radius: number;
// }

// // 複数のインタフェースを継承して新たなインタフェースを定義できます
// interface ColorfulCircle extends Colorful, Circle {}

// const cc: ColorfulCircle = {
//   color: '赤',
//   radius: 10
// }

// interface Point {
//   x: number;
//   y: number;
//   z?: number;
// }

// // エラーは発生しません
// class MyPoint implements Point {
//   x: number;
//   y: number;
// }

// interface Point {
//   x: number;
//   y: number;
//   z: number;
// }
// // クラスがインタフェースをimplementsした際に、zが存在しないためコンパイル時エラーになります
// class MyPoint implements Point {
//   x: number;
//   y: number;
// }

// interface Point{
//   x:number;
//   y:number;
// }

// function printPoint(point: Point) {
//   console.log(`x座標は${point.x}です`)
//   console.log(`y座標は${point.y}です`)
//   console.log(`z座標は${point.z}です`)
// }

// interface Point {
//   z: number;
// }

// // // 引数のオブジェクトにzが存在しないためコンパイル時にエラーになります
// // printPoint({ x: 100, y: 100 })

// // 問題なく動作します
// printPoint({ x: 100, y: 100, z: 200 })
