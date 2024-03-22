import { cn } from "@/lib"
import { string } from "prop-types"

const Divide = ({ className }) => {
    return <div className={cn("w-full h-0.5 bg-zinc-900/20 my-5", className)} />
}

Divide.propTypes = {
    className: string,
}

export { Divide }
