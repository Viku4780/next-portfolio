import React from 'react'

const AdminElementCreationTemplate = ({children1, children2}: {children1: React.ReactNode, children2: React.ReactNode}) => {
    return (
        <div className="mx-auto min-h-screen mt-4 text-white rounded-lg  max-w-5xl border border-gray-800">
            {/* <ProjectCreationHeader /> */}
           
            {children1}

            {/* Main Card */}
           
            {children2}

        </div>
    )
}

export default AdminElementCreationTemplate
