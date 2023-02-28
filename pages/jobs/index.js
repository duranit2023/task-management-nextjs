import Navbar from "/components/navbar"
import Link from "next/link"

function jobs({jobs}) {
    return (
        <>
          <Navbar/>
          <div className="container mt-5 mb-5">
        <h1>Manege Jobs</h1>
        <div className="card-body">
          <button className="btn btn-success"><Link href={'/jobs/createJob'}>Create New Job</Link></button>
          <table class="rwd-table">
            <tbody>
              <tr>
                <th>JobID</th>
                <th>Job title</th>
                <th>Description</th>
                <th>Status</th>
                <th>Job Type</th>
                <th>Assigned to</th>
                <th>Action</th>
              </tr>

              {
                jobs.map(job => {
                  return (
                    <tr key={job}>
                      <td>
                        {job.job_title}
                      </td>
                      <td>
                        {job.description}
                      </td>
                      <td>
                        {job.status}
                      </td>
                      <td>
                        {job.job_type}
                      </td>
                      <td>
                        {job.assigned_to}
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

export default jobs

export async function getServerSideProps() {
  const response = await fetch("http://localhost:3000/api/jobs");
  const jobs = await response.json();
  return {
    props: {
      jobs: jobs
    }
  }
}