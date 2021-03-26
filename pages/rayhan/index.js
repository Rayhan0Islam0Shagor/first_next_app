import styles from '../../styles/Rayhan.module.css';
import Link from 'next/link';

export const getStaticProps = async () => {

    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    return {
        props: { rayhan: data }
    }
}

const Rayhan = ({ rayhan }) => {
    return (
        <div>
            <h1>All Route</h1>
            {
                rayhan.map(shagor => (
                    <Link href={`/rayhan/${shagor.id}`} key={shagor.id}>
                        <a className={styles.single}>
                            <h3>{shagor.name}</h3>
                        </a>
                    </Link>
                ))
            }
        </div>
    );
}

export default Rayhan;