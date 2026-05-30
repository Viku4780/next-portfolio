import { Plus } from 'lucide-react'
import React from 'react'

const AdminElementCreationBtn = ({val, setCreateElement}) => {
    return (
        <button onClick={() => setCreateElement(true)} className="flex items-center gap-2 rounded-sm bg-primary  px-3 py-2 sm:px-5 sm:py-3 text-xs sm:text-sm font-medium shadow-lg shadow-pink-500/20 transition hover:scale-105">
            <Plus size={18} />
            Add New {val}
        </button>
    )
}

export default AdminElementCreationBtn
