import {Link} from "react-router-dom";

function Login() {
    return (
        <section className="container-fluid vh-100 d-flex align-items-center justify-content-center">
            <div className={'row'}>
                <div className={'col-12'}>
                    <div className="card">
                        <div className="card-body">
                            <form className="form-container">
                                <div className="form-group mb-3">
                                    <h4 className="text-center font-weight-bold">เข้าสู่ระบบ</h4>
                                    <label htmlFor="Inputuser1">ชื่อผู้ใช้</label>
                                    <input type="text" className="form-control" id="Inputuser1"
                                           placeholder="กรอกชื่อผู้ใช้"/>
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="InputPassword1">รหัสผ่าน</label>
                                    <input type="password" className="form-control" id="InputPassword1"
                                           placeholder="กรอกรหัสผ่าน"/>
                                </div>
                                {/*<button type="submit" className="btn btn-primary w-100 btn-block">เข้าสู่ระบบ</button>*/}
                                <Link className={'btn btn-primary w-100'} to="/dashboard">เข้าสู่ระบบ</Link>
                                <div className="form-footer">
                                    <p className={'m-0'}>
                                        <span>Don&apos;t Have an account?</span>
                                        <Link to="/dashboard">Sign Up</Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Login;
