import AdminElementHeaderTemplate from './AdminElementHeaderTemplate';

const AdminElementTemplate = ({metaData,children1, children2}) => {

    return (
        <div className='min-h-screen '>
           <AdminElementHeaderTemplate metaData={metaData}>
            {children1}
           </AdminElementHeaderTemplate>

            <main className='max-w-7xl p-4 mx-auto'>
              {children2}
            </main>

        </div>
    )
}

export default AdminElementTemplate
