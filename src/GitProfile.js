// Demo of useContext hook
import {useFetch} from "./useFetch";

function GitProfile({login}) {
    const { data, loading, error } = useFetch(`http://api.github.com/users/${login}`);

    if (error) {
       return <pre>{JSON.stringify(error, null, 2)}</pre>
    }

    if (loading) {
      return <h2>Loading...</h2>
    }

    return (
        <div>
            <img
                src={data.avatar_url}
                alt={data.login}
            />
            <p>{data.name && <strong>{data.name}</strong> }</p>
            <p>{data.location && <strong>{data.location}</strong> }</p>
        </div>
    )

}

export default GitProfile;