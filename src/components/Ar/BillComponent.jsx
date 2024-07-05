export const BillComponent = () => {
    return (
        <div className={'table-responsive'}>
            <table className={'table table-bordered table-striped table-hover'}>
                <thead>
                <tr>
                    <th>#</th>
                    <th>เลขที่เอกสาร</th>
                    <th>เซลล์</th>
                    <th>จำนวนบิล</th>
                    <th>มูลค่ารวม</th>
                    <th>วันที่เบิกบิล</th>
                    <th>สถานะ</th>
                    <th>actions</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>
                        <span className={'text-decoration-underline'} onClick={()=>alert('hello')}>WB-240700130</span>
                    </td>
                    <td>70030</td>
                    <td>19</td>
                    <td>12545212</td>
                    <td>06-07-2567</td>
                    <td>รอเบิก</td>
                    <td>
                        <button className={'btn btn-sm btn-danger'}>ลบ</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}