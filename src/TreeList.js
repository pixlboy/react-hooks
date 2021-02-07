// Demo of useContext hook
import {useTrees} from "./index";

function TreeList() {
    const { trees } = useTrees();
    return (
        <div>
            <ul>
                {trees.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))
                }
            </ul>
        </div>
    )

}

export default TreeList;