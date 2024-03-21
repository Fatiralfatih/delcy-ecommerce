import { Skeleton } from "@/components/ui"

const SkeletonCategoryMobile = () => {
    return (
        <div className="flex gap-3 w-full overflow-auto scrollbar-hide md:hidden">
            {Array(6).fill().map((item, index) => (
                <Skeleton
                    key={index}
                    className="w-20 h-10 "
                />
            ))}
        </div>
    )
}

export { SkeletonCategoryMobile }
