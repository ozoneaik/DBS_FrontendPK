import Card from "../components/Card.jsx";
import Content from "../layouts/Content.jsx";
import {CompareDailySalesComponent} from "../components/Dashboard/CompareDailySalesComponent.jsx";
import {ProductNewComponents} from "../components/Dashboard/ProductNewComponents.jsx";
import {DailySalesComponent} from "../components/Dashboard/DailySalesComponent.jsx";
import {MoreComponent} from "../components/Dashboard/MoreComponent.jsx";

export default function Dashboard() {
    const CardTitle = [
        {title: 'ยอดขายรวมสุทธิ', color: 'orange', icon: 'fa-coins'},
        {title: 'เป้าหมาย (ขั้นต่ำ)', color: 'orange', icon: 'fa-chart-line'},
        {title: 'เป้าหมาย (ล่าง)', color: 'orange', icon: 'fa-circle-arrow-down'},
        {title: 'เป้าหมาย (บน)', color: 'orange', icon: 'fa-circle-arrow-up'},
        {title: 'เป้าหมาย (G6)', color: 'orange', icon: 'fa-g'},
        {title: 'จำนวนร้านค้า', color: 'orange', icon: 'fa-shop'},
        {title: 'ยอดขายเฉลี่ย/วัน', color: 'orange', icon: 'fa-dollar-sign'},
        {title: 'จำนวน SKU', color: 'orange', icon: 'fa-basket-shopping'},
    ];
    const headers = Array.from({length: 31}, (_, i) => i + 1);
    const data = Array.from({length: 24}, (_, i) => i + 1);


    return (
        <>
            <Content>
                <div className="d-flex justify-content-center align-items-center mb-3">
                    <div className="text-center d-flex">
                        <input type="month" className={'form-control me-2'} placeholder={'select month'}/>
                        <button className="btn btn-orange bg-orange text-light">ค้นหา</button>
                    </div>
                </div>
                <div className={'row'}>
                    {
                        CardTitle.map((item, index) => (
                            <div key={index} className={'col-lg-3 col-md-4 col-sm-4'}>
                                <Card Bcolor={item.color} title={item.title} icon={item.icon}/>
                            </div>
                        ))
                    }
                </div>
                <div className={'row'}>
                    <div className={'col-12'}><h4> ตารางเทียบยอดขายรายวัน</h4></div>
                    <div className={'col-12'}>
                        <div className={'card'}>
                            <div className={'card-body'}>
                                <CompareDailySalesComponent headers={headers}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'row'}>
                    <div className={'col-12'}><h4>ตารางยอดขายรายวัน</h4></div>
                    <div className={'col-12'}>
                        <div className={'card'}>
                            <div className={'card-body'}>
                                <DailySalesComponent headers={headers}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'row'}>
                    <div className={'col-12'}><h4>สินค้าขายเข้าร้านใหม่</h4></div>
                    <div className={'col-12'}>
                        <div className={'card'}>
                            <div className={'card-body'}>
                                <ProductNewComponents data={data}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'row'}>
                    <div className={'col-12'}><h4>สินค้าขายเข้าร้านใหม่</h4></div>
                    <div className={'col-12'}>
                        <div className={'card'}>
                            <div className={'card-body'}>
                                <MoreComponent/>
                            </div>
                        </div>
                    </div>
                </div>
            </Content>
        </>
    )
}