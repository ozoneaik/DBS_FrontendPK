import Content from "../layouts/Content.jsx";
import {useState} from "react";

function Ar() {
    const [tabs, setTabs] = useState(0);
    return (
        <Content>
            <div className={'card'}>
                <div className={'card-header'}>
                    <button className={`btn ${tabs === 0 ? 'active' : ''}`} onClick={()=>setTabs(0)}>เก็บบิล และบิล</button>
                    <button className={`btn ${tabs === 1 ? 'active' : ''}`} onClick={()=>setTabs(1)}>ค้นหา</button>
                    <button className={`btn ${tabs === 2 ? 'active' : ''}`} onClick={()=>setTabs(2)}>ดูบิลเบิก</button>
                </div>
                <div className={'card-body'}>
                    {
                        tabs === 0 ? (
                            <div className={''}>
                                test 0
                            </div>
                        ) : tabs === 1 ? (
                            <div className={''}>
                                test 1
                            </div>
                        ) : (
                            <div className={''}>
                                test 2
                            </div>
                        )
                    }
                </div>
            </div>
        </Content>
    );
}

export default Ar;