import Content from "../layouts/Content.jsx";
import {PutAndKeepComponent} from "../components/Ar/PutAndKeepComponent.jsx";
import {useState} from "react";
import {SendComponent} from "../components/Ar/PutAndKeep/SendComponent.jsx";
import {BillComponent} from "../components/Ar/BillComponent.jsx";

function Ar() {
    const [tabs, setTabs] = useState(0);
    return (
        <Content>
            <div className={'card'}>
                <div className={'card-header'}>
                    <button className={`btn ${tabs === 0 ? 'active' : ''}`} onClick={()=>setTabs(0)}>เก็บบิล และ วางบิล</button>
                    <button className={`btn ${tabs === 1 ? 'active' : ''}`} onClick={()=>setTabs(1)}>ส่งบิล</button>
                    <button className={`btn ${tabs === 2 ? 'active' : ''}`} onClick={()=>setTabs(2)}>ดูบิลเบิก</button>
                </div>
                <div className={'card-body'}>
                    {
                        tabs === 0 ? (
                            <div className={''}>
                                <PutAndKeepComponent/>
                            </div>
                        ) : tabs === 1 ? (
                            <div className={''}>
                                <SendComponent/>
                            </div>
                        ) : (
                            <div className={''}>
                                <BillComponent/>
                            </div>
                        )
                    }
                </div>
            </div>
        </Content>
    );
}

export default Ar;