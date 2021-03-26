export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json();

    const paths = data.map(rayhan => {
        return {
            params: { id: rayhan.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();

    return {
        props: { shagor: data }
    }
}

const Details = ({ shagor }) => {
    return (
        <div>
            <h1>{shagor.name}</h1>
            <p>{shagor.email}</p>
            <p>{shagor.website}</p>
        </div>
    );
}

export default Details;