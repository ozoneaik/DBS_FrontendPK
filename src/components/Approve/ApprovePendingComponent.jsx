const ApprovePendingComponent = () => (
    <div className={'table-responsive'}>
        <table className={'table table-bordered table-hover table-striped'}>
            <thead>
            <tr>
                <th colSpan={8}>รายการรออนุมัติตอนนี้</th>
            </tr>
            <tr>
                <th>#</th>
                <th>TICKET</th>
                <th>ร้านค้า</th>
                <th>อาการ</th>
                <th>อะไหล่ที่รอ</th>
                <th>พักงานซ่อม</th>
                <th>สถานะ</th>
                <th>QU</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className={'p-3'}>
                    <button className={'btn btn-sm btn-success w-100'}>อนุมัติ</button>
                    <br/>
                    <button className={'btn btn-sm btn-danger my-2 w-100'}>ยกเลิกซ่อม (ไม่ส่งคืน)</button>
                    <br/>
                    <button className={'btn btn-sm btn-danger w-100'}>ยกเลิกซ่อม (ส่งคืน)</button>
                </td>
                <td>
                    <p>ASS-24060800</p>
                    <p>2024/02/6</p>
                </td>
                <td>ร้านค้า</td>
                <td>อาการ</td>
                <td>อะไหล่ที่รอ</td>
                <td>พักงานซ่อม</td>
                <td>สถานะ</td>
                <td>QU</td>
            </tr>
            </tbody>
        </table>
    </div>
);

export default ApprovePendingComponent;