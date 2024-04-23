import { useState } from "react";

const useToogle = () => {
    const [toggle, setToggle] = useState(true);

    const handleToggle = () => {
        setToggle(!toggle);
    }

    return { toggle, setToggle, handleToggle };
};

export default useToogle;