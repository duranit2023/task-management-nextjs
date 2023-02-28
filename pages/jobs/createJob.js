import Navbar from "/components/navbar"


function newJob() {
    return (
        <>
        <Navbar />
        <div className="container mt-5 mb-5">
        <h1>Create New Job</h1>
            <form action="/api/jobs" method="post">

                <div class="form-group col-6 mb-2">
                    <label htmlFor="job_title" class="form-label">Job Title</label>
                    <input type="text" className="form-control" name="jobtitle"  required />
                </div>
                <div class="form-group col-6 mb-2">
                <label htmlFor="description" class="form-label">Job Description</label>
                    <input type="text" className="form-control" name="description"  required />
                </div>
                <div class="form-group col-6 mb-2">
                <label htmlFor="status" class="form-label">Job Status</label>
                    <input type="text" className="form-control" name="status"  required />
                </div>
                <div class="form-group col-6 mb-2">
                <label htmlFor="job_type" class="form-label">Job Type</label>
                    <input type="text" className="form-control" name="jobtype"  required />
                </div>
                <div class="form-group col-6 mb-2">
                <label htmlFor="assigned_to" class="form-label">Job Assigned to</label>
                    <input type="text" className="form-control" name="assigned_to"  required />
                </div>
              
                <button type="submit" class="btn btn-primary mt-3">Submit</button>
            </form>
        </div>
        </>
    )
}

export default newJob


