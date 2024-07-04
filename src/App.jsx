import './App.css'
import Card from "./components/Card.jsx";
import Commission from "./components/Commission.jsx";
import SalesByCategory from "./components/SalesByCategory.jsx";
import TopTen from "./components/TopTen.jsx";
import Content from "./layouts/Content.jsx";

function  App() {
    const CardTitle = [
        {title: 'เป้าหมาย (ขั้นต่ำ)', color: 'orange', icon: 'fa-chart-line'},
        {title: 'เป้าหมาย (ล่าง)', color: 'orange', icon: 'fa-circle-arrow-down'},
        {title: 'เป้าหมาย (บน)', color: 'orange', icon: 'fa-circle-arrow-up'},
        {title: 'เป้าหมาย (G6)', color: 'orange', icon: 'fa-g'},
        {title: 'ยอดขายรวมสุทธิ', color: 'orange', icon: 'fa-coins'},
        {title: 'จำนวนร้านค้า', color: 'orange', icon: 'fa-shop'},
        {title: 'ยอดขายเฉลี่ย/วัน', color: 'orange', icon: 'fa-dollar-sign'},
        {title: 'จำนวน SKU', color: 'orange', icon: 'fa-basket-shopping'},
    ];
    const headers = Array.from({length: 12}, (_, i) => i + 1);
    const num = ['ยอดขายตามกลุ่มคอมมิชชั่น', 'ยอดขายตามหมวดหมู่', '10 อันดับ'];


    return (
        <>
            App Page
        </>
    )
}

export default App
