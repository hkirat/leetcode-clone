
export const Card = ({children}: {children: React.ReactNode}) => {
    return <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow-sm ">
        {children}
    </div>
}