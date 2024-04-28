import { useState } from "react";

const useToogle = () => {
    const [toggle, setToggle] = useState(true);

    const handleToggle = () => {
        setToggle(!toggle);
    }

    return { toggle, handleToggle };
};

export default useToogle;