import { useState, useEffect} from "react";
const Clicker = () => {
    const [clic, setClic] = useState(0);
    
    useEffect(() => {
        document.title = `hiciste ${clic}`;
        }, [clic])
        return(
            <button onClick={() => setClic(clic + 1)}>
            Contador ({clic})
            </button>
        );
}

export default Clicker;