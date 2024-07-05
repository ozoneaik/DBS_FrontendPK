export const SendComponent = () => {
    return (
        <div className={'row'}>
            <div className={'col-md-4'}>
                <div className={'border rounded-1 p-3'}>
                    <p>รายการเอกสาร</p>
                    <ul className={'m-0'}>
                        <li>
                            <button className={'btn'}>รายการเอกสารที่ 1</button>
                        </li>
                        <li>
                            <button className={'btn'}>รายการเอกสารที่ 1</button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={'col-md-8'}>
                <div className={'border rounded-1 p-3'}>
                    <p>เลขที่เอกสาร : </p>
                    <div className={'table-responsive'}>
                        <table className={'table table-bordered'}>
                            <thead>
                            <tr>
                                <th>ชื่อร้าน</th>
                                <th>เลขที่ใบวางบิล</th>
                                <th>จำนวนบิล</th>
                                <th>ยอดเงินรวม</th>
                                <th>ดูข้อมูล</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td colSpan={5}>ไม่มีข้อมูล</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}