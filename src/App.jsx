import './App.css'
import Content from "./layouts/Content.jsx";
import Card from "./components/Card.jsx";
import Commission from "./components/Commission.jsx";
import SalesByCategory from "./components/SalesByCategory.jsx";
import TopTen from "./components/TopTen.jsx";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'

function App() {
    const CardTitle = [
        {title: 'เป้าหมาย (ขั้นต่ำ)', color: 'primary', icon: 'fa-chart-line'},
        {title: 'เป้าหมาย (ล่าง)', color: 'info', icon: 'fa-circle-arrow-down'},
        {title: 'เป้าหมาย (บน)', color: 'warning', icon: 'fa-circle-arrow-up'},
        {title: 'เป้าหมาย (G6)', color: 'danger', icon: 'fa-g'},
        {title: 'ยอดขายรวมสุทธิ', color: 'pink', icon: 'fa-coins'},
        {title: 'จำนวนร้านค้า', color: 'dark', icon: 'fa-shop'},
        {title: 'ยอดขายเฉลี่ย/วัน', color: 'success', icon: 'fa-dollar-sign'},
        {title: 'จำนวน SKU', color: 'secondary', icon: 'fa-basket-shopping'},
    ];
    const headers = Array.from({length: 12}, (_, i) => i + 1);
    const num = ['ยอดขายตามกลุ่มคอมมิชชั่น', 'ยอดขายตามหมวดหมู่', '10 อันดับ'];


    const renderMonthContent = (month, shortMonth, longMonth, day) => {
        const fullYear = new Date(day).getFullYear();
        const tooltipText = `Tooltip for month: ${longMonth} ${fullYear}`;
        return <span title={tooltipText}>{shortMonth}</span>;
    };


    return (
        <>
            <Content>
                <div className="d-flex justify-content-center align-items-center mb-3">
                    <div className="text-center d-flex">
                        <DatePicker className={'form-control me-3'}
                            selected={new Date()}
                            renderMonthContent={renderMonthContent}
                            showMonthYearPicker
                            dateFormat="MM/yyyy"
                         />
                        <button className="btn btn-orange bg-orange text-light">ค้นหา</button>
                    </div>
                </div>


                <div className={'row'}>
                    {
                        CardTitle.map((item, index) => (
                            <div key={index} className={'col-lg-3 col-md-6 col-sm-12'}>
                                <Card Bcolor={item.color} title={item.title} icon={item.icon}/>
                            </div>
                        ))
                    }
                </div>
                <div className={'row'}>
                    <div className={'col-12'}>
                        <h4>ยอดขายแจกแจงรายวัน</h4>
                    </div>
                    <div className={'col-12'}>
                        <table className={'table'}>
                            <thead>
                            <tr style={{backgroundColor: "red"}}>
                                <th>ปี</th>
                                <th>ยอดยวมสุทธิ</th>
                                {headers.map(number => (
                                    <th key={number}>{number}</th>
                                ))}
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>2024</td>
                                <td>300000</td>
                                {headers.map(number => (
                                    <td key={number}>{Math.floor(Math.random() * 1000)}</td>
                                ))}
                            </tr>
                            <tr>
                                <td>2023</td>
                                <td>300000</td>
                                {headers.map(number => (
                                    <td key={number}>{Math.floor(Math.random() * 1000)}</td>
                                ))}
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className={'row mt-3'}>
                    {
                        num.map((item, index) => (
                            <div key={index} className={'col-lg-4 col-sm-12'}>
                                <h4>{item}</h4>
                                <div className={'card border-0'}>
                                    <div className={'card-body'}>
                                        {index === 0 ? <Commission/> : index === 1 ? <SalesByCategory/> : <TopTen/>}
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </Content>
        </>
    )
}

export default App