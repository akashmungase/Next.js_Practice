'use client'
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {

  const getData = (data) => {
    alert(data)
  }
  return (
    <div>
      <h1 className="heading">Home Page</h1>
      {/* <h3 style={{fontFamily: 'Roboto', fontWeight: 100}}>Font with link tag in Next.js</h3> */}
      <h3>Basic Routing</h3>
      <Link href="/login" className={styles.navLink}>Login</Link>
      <Link href="/about" className={styles.navLink}>About</Link>
      {/* <Link href="/productList" className={styles.navLink}>Product List</Link> */}
      <Link href="/productsList" className={styles.navLink}>Products List</Link>
      <Link href="/image" className={styles.navLink}>Image Component</Link>
      <Link href="/fontFamily" className={styles.navLink}>Font Family</Link>
      {/* <User name="Akash"/> */}
      {/* <h3>Events</h3> */}
      {/* <button onClick={()=>alert('hello next.js')}>click me</button> */}
      {/* <button onClick={()=>getData('Hi next.js')}>click me</button> */}
    </div>
  );
}


// const User = (props) => {
//   return(
//     <h3>User Name : {props.name}</h3>
//   )
// }