import PropTypes from 'prop-types';
export const ProductNewComponents = (props) => {
    const data = props.data;
    return (
        <div className={'table-responsive'}>
            <table className={'table table-hover'}>
                <thead>
                <tr>
                    <th style={{minWidth: 200}}>เดือน</th>
                    <th colSpan={2}>มกราคม</th>
                    <th colSpan={2}>กุมภาพันธ์</th>
                    <th colSpan={2}>มีนาคม</th>
                    <th colSpan={2}>เมาษยน</th>
                    <th colSpan={2}>พฤษภาคม</th>
                    <th colSpan={2}>มิถุนายน</th>
                    <th colSpan={2}>กรกฎาคม</th>
                    <th colSpan={2}>สิงหาคม</th>
                    <th colSpan={2}>กันยายน</th>
                    <th colSpan={2}>ตุลาคม</th>
                    <th colSpan={2}>พฤศจิกายน</th>
                    <th colSpan={2}>ธันวาคม</th>
                </tr>
                <tr>
                    <th className={''}>ปี</th>
                    {
                        data.map((item, index) => (
                            <th key={index} className={''}>{index % 2 === 0 ? '2023' : '2024'}</th>
                        ))
                    }
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className={''}>ยอดขายรวม</td>
                    {
                        data.map((item, index) => (
                            <td className={''} key={index}>{Math.floor(Math.random() * (2000000 - 100 + 1)) + 100}{index}</td>
                        ))
                    }
                </tr>
                <tr>
                    <td className={''}>สินค้าใหม่</td>
                    {
                        data.map((item, index) => (
                            <td className={''} key={index}>{Math.floor(Math.random() * (2000000 - 100 + 1)) + 100}</td>
                        ))
                    }
                </tr>
                <tr>
                    <td className={''}>คิดเป็น%</td>
                    {
                        data.map((item, index) => (
                            <td className={''} key={index}>{Math.floor(Math.random() * (2000000 - 100 + 1)) + 100}</td>
                        ))
                    }
                </tr>
                </tbody>
            </table>
        </div>
    )
}
ProductNewComponents.propTypes = {
    data: PropTypes.arrayOf(PropTypes.number).isRequired,
};