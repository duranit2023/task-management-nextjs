import Navbar from "/components/navbar"
import Link from "next/link"

function users(params) {
    return (
        <>
           <Navbar/>
           <button className="btn btn-success"><Link href={'/users/createUser'}>Create New User</Link></button>
           <div className="container mt-5 mb-5">
        <h1>User Management</h1>
        <div className="card-body">
          <table class="rwd-table">
            <tbody>
              <tr>
                <th>UserID</th>
                <th>User Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>

              {
                users.map(user => {
                  return (
                    <tr key={user}>
                      <td>
                        {user.id}
                      </td>
                      <td>
                        {user.name}
                      </td>
                      <td>
                        {user.email}
                      </td>
                      <td>
                        {user.roleId}
                      </td>
                      <td>
                        <button className="btn btn-primary">Edit</button>
                      </td>
                    </tr>

                  )
                })
              }

            </tbody>
          </table>
        </div>
      </div>
        </>
    )
}

export default users


export async function getServerSideProps() {
    const response = await fetch("http://localhost:3000/api/users");
    const users = await response.json();
    return {
      props: {
        users: users
      }
    }
}