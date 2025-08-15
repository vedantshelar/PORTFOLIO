import styles from "./Greet.module.css";

function Greet() {
    return ( 
        <div id={styles.greetSection}>
            <p id={styles.greet1}>Thank you for exploring my portfolio!</p>
            <p id={styles.greet2}>I truly appreciate your time and interest in my work</p>
        </div>
     );
}

export default Greet;