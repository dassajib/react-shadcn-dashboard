const Skeleton = () => {
    return (
        <div className="p-6 animate-pulse space-y-6">
            {/* header */}
            <div className="flex justify-between items-center mb-6">
                <div className="h-8 w-1/3 bg-gray-200 dark:bg-gray-700 rounded"></div>
                <div className="h-8 w-20 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>

            {/* statictics card */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {Array.from({ length: 4 }).map((_, idx) => (
                    <div
                        key={idx}
                        className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg space-y-2"
                    >
                        <div className="h-4 w-1/3 bg-gray-200 dark:bg-gray-700 rounded"></div>
                        <div className="h-8 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
                        <div className="h-3 w-1/2 bg-gray-200 dark:bg-gray-700 rounded"></div>
                    </div>
                ))}
            </div>

            {/* overview and sales */}
            <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 mt-6">
                <div className="col-span-1 lg:col-span-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg h-64"></div>
                <div className="col-span-1 lg:col-span-3 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg h-64"></div>
            </div>
        </div>
    )
}

export default Skeleton