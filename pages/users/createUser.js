import Navbar from "/components/navbar"
function UserCreate(params) {
    return (
        <>
        <Navbar />
        <div className="container mt-5 mb-5">
        <h1>Create New User</h1>
            <form action="/api/users" method="post">
                <div class="form-group col-6 mb-3">
                    <label htmlFor="username" class="form-label">User Name</label>
                    <input type="text" className="form-control" name="username"  placeholder="User Name" />
                </div>
                <div class="form-group col-6 mb-3">
                    <label htmlFor="email" class="form-label">Email</label>
                    <input type="email" className="form-control" name="email"  placeholder="Email" />
                </div>
                <div class="form-group col-6 mb-3">
                    <label htmlFor="roleId" class="form-label">Role</label>
                    <input type="text" className="form-control" name="roleId"  placeholder="Role" />
                </div>
                <div class="form-group col-6 mb-3">
                    <label htmlFor="password" class="form-label">Password</label>
                    <input type="password" className="form-control" name="password"  placeholder="********" />
                </div>
                <button type="submit" class="btn btn-primary mt-3">Submit</button>
            </form>
        </div>
        </>
    )
}

export default UserCreate