import Content from "../layouts/Content.jsx";
import {Link} from "react-router-dom";

function Rp() {
    return (
        <Content>
            <div className={'card'}>
                <div className={'card-header'}>
                    รายการจองสินค้า
                </div>
                <div className={'card-body'}>
                    <div className={'table-responsive'}>
                        <table className={'table'}>
                            <thead>
                            <tr>
                                <th>รหัสลูกค้า</th>
                                <th>ชื่อลูกค้า</th>
                                <th>สินค้าจอง</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className={'text-decoration-underline'} data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    test
                                </td>
                                <td>klsjflslkfjlsf</td>
                                <td>12646</td>
                            </tr>
                            </tbody>
                        </table>

                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                             aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        ...
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary"
                                                data-bs-dismiss="modal">Close
                                        </button>
                                        <button type="button" className="btn btn-primary">Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </Content>
    );
}

export default Rp;