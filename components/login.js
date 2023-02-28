function login() {
    return (
        <>
        <div className="form-body">
            <div className="login-page">
                <div className="form">
                    <form  className="register-form">
                    <input type="text" placeholder="name"/>
                    <input type="password" placeholder="password"/>
                    <input type="text" placeholder="email address"/>
                    <button>create</button>
                    <p className="message">Already registered? <a>Sign In</a></p>
                    </form>
                    <form action="/api/auth/[..nextauth]" className="login-form" method="post">
                    <input type="text" placeholder="username"/>
                    <input type="password" placeholder="password"/>
                    <button>login</button>
                    <p className="message">Not registered? <a>Create an account</a></p>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default login