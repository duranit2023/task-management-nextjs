import Link from "next/link"
function Navbar(params) {
    return (
        <>
            <div class="custom-nav">
                <input type="checkbox" id="custom-nav-check" />
                <div class="custom-nav-header">
                    <div class="custom-nav-title">
                        Job Mangement System
                    </div>
                </div>
                <div class="custom-nav-btn">
                    <label for="custom-nav-check">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>

                <div class="custom-nav-links">
                    <Link href="/users">Users</Link>
                    <Link href="/roles">Roles</Link>
                    <Link href="/jobs">Jobs</Link>
                    <a href="#" target="_blank">Logout</a>
                </div>
            </div>
        </>
    )
}
export default Navbar