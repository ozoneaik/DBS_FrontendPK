const ApproveNowComponent = (props) => (
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
                <td>1</td>
                <td>TICKET</td>
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

export default ApproveNowComponent;