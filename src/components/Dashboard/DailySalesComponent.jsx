import PropTypes from 'prop-types';

export const DailySalesComponent = (props) => {
    const headers = props.headers
    return (
        <div className={'table-responsive'}>
            <table className={'table table-hover'}>
                <thead>
                <tr>
                    <th>เซลล์</th>
                    {headers.map((number, index) => (
                        <th key={index}>{number}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1.ยอดขาย 321,347.23</td>
                    {headers.map((number, index) => (
                        <td key={index}>{Math.floor(Math.random() * 1000)}</td>
                    ))}
                </tr>
                <tr>
                    <td>ร้านที่เปิดขาย</td>
                    {headers.map((number, index) => (
                        <td key={index}>{Math.floor(Math.random() * 1000)}</td>
                    ))}
                </tr>
                <tr>
                    <td>2.ยอด CN</td>
                    {headers.map((number, index) => (
                        <td key={index}>{Math.floor(Math.random() * 1000)}</td>
                    ))}
                </tr>
                <tr>
                    <td>3.ยอด SX</td>
                    {headers.map((number, index) => (
                        <td key={index}>{Math.floor(Math.random() * 1000)}</td>
                    ))}
                </tr>
                <tr>
                    <td>4.ยอดขาย G5+G6</td>
                    {headers.map((number, index) => (
                        <td key={index}>{Math.floor(Math.random() * 1000)}</td>
                    ))}
                </tr>
                <tr>
                    <td>4.1.ยอดขาย EU+PRO</td>
                    {headers.map((number, index) => (
                        <td key={index}>{Math.floor(Math.random() * 1000)}</td>
                    ))}
                </tr>
                <tr>
                    <td>5.ยอดขาย Consign</td>
                    {headers.map((number, index) => (
                        <td key={index}>{Math.floor(Math.random() * 1000)}</td>
                    ))}
                </tr>
                <tr>
                    <td>6.ยอด OT</td>
                    {headers.map((number, index) => (
                        <td key={index}>{Math.floor(Math.random() * 1000)}</td>
                    ))}
                </tr>
                <tr>
                    <td>7.ยอด VOUCHER</td>
                    {headers.map((number, index) => (
                        <td key={index}>{Math.floor(Math.random() * 1000)}</td>
                    ))}
                </tr>
                </tbody>
            </table>
        </div>
    )
}

DailySalesComponent.propTypes = {
    headers: PropTypes.arrayOf(PropTypes.number).isRequired,
};