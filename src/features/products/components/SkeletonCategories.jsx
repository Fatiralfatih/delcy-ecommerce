import { Skeleton } from "@/components/ui"


export const SkeletonCategories = () => {
    return (
        <div className="flex flex-col gap-8">
            {Array(3).fill().map((_, index) => (
                <div key={index}>
                    <div className="flex flex-col gap-2">
                        <Skeleton
                            className="w-full h-5"
                        />
                        <Skeleton 
                        className="w-28 h-3"
                        />
                        <Skeleton 
                        className="w-28 h-3"
                        />
                        <Skeleton 
                        className="w-28 h-3"
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}