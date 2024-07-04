import PropTypes from 'prop-types';
export const CompareDailySalesComponent = (props) => {
    const headers = props.headers;
    return (
        <div className={'table-responsive'}>
            <table className={'table table-hover'}>
                <thead>
                <tr style={{backgroundColor: "red"}}>
                    <th>ปี</th>
                    <th>ยอดยวมสุทธิ</th>
                    {headers.map((number,index) => (
                        <th key={index}>{number}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>2024</td>
                    <td>300000</td>
                    {headers.map((number,index) => (
                        <td key={index}>{Math.floor(Math.random() * 1000)}</td>
                    ))}
                </tr>
                <tr>
                    <td>2023</td>
                    <td>300000</td>
                    {headers.map((number,index) => (
                        <td key={index}>{Math.floor(Math.random() * 1000)}</td>
                    ))}
                </tr>
                </tbody>
            </table>
        </div>
    )
}

CompareDailySalesComponent.propTypes = {
    headers: PropTypes.arrayOf(PropTypes.number).isRequired,
};