import Navbar from "/components/navbar"


function newRole() {
    return (
        <>
        <Navbar />
        <div className="container mt-5 mb-5">
        <h1>Create New Roles</h1>
            <form action="/api/roles" method="post">
                <div class="form-group col-5">
                    <input type="text" className="form-control" name="name"  placeholder="Role Name" />
                </div>
                <button type="submit" class="btn btn-primary mt-3">Submit</button>
            </form>
        </div>
        </>
    )
}

export default newRole


