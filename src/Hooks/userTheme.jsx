import { useEffect, useState } from "react";

const useTheme = () => {
    const [theme, setTheme] = useState('dark')
    useEffect(() => {
    }, [theme])
    return [theme, setTheme]
}
export default useTheme