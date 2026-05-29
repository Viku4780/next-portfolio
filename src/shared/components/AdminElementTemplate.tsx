import AdminElementHeaderTemplate from './AdminElementHeaderTemplate';

const AdminElementTemplate = ({metaData,children1, children2}) => {

    return (
        <div className='min-h-screen'>
           <AdminElementHeaderTemplate metaData={metaData}>
            {children1}
           </AdminElementHeaderTemplate>

            <main>
              {children2}
            </main>

        </div>
    )
}

export default AdminElementTemplate
