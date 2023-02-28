import Navbar from "/components/navbar"
import Link from "next/link"

function roles({ roles }) {
  return (
    <>
      <Navbar />
      <div className="container mt-5 mb-5">
        <h1>Manege User Roles</h1>
        <div className="card-body">
          <button className="btn btn-success"><Link href={'/roles/createRole'}>Create New Role</Link></button>
          <table class="rwd-table">
            <tbody>
              <tr>
                <th>RoleID</th>
                <th>Role Name</th>
                <th>Action</th>
              </tr>

              {
                roles.map(role => {
                  return (
                    <tr key={role}>
                      <td>
                        {role.id}
                      </td>
                      <td>
                        {role.name}
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

export default roles


export async function getServerSideProps() {
  const response = await fetch("http://localhost:3000/api/roles");
  const roles = await response.json();
  return {
    props: {
      roles: roles
    }
  }
}