import {useState} from "react";
import DocsComponent from "./PutAndKeep/DocsComponent.jsx";
import SearchComponent from "./PutAndKeep/SearchComponent.jsx";
import NotPutDocsComponent from "./PutAndKeep/NotPutDocsComponent.jsx";

export function PutAndKeepComponent() {
    const [tabs, setTabs] = useState(0);
    return (
        <>
            <div className={'d-flex'}>
                <button onClick={() => setTabs(0)}
                        className={`bg-white border border-1 ${tabs === 0 ? 'border-bottom-0 active' : ''}`}>แฟ้มเอกสาร
                </button>
                <button onClick={() => setTabs(1)}
                        className={`bg-white border border-1 ${tabs === 1 ? 'border-bottom-0 active' : ''}`}>ค้นหา
                </button>
                <button onClick={() => setTabs(2)}
                        className={`bg-white border border-1 ${tabs === 2 ? 'border-bottom-0 active' : ''}`}>ยังไม่เข้าแฟ้ม
                </button>
            </div>
            <div className={'row pt-3'}>
                <div className={'col-12'}>
                    {
                        tabs === 0 ? (
                            <DocsComponent/>
                        ) : tabs === 1 ? (
                            <SearchComponent/>
                        ) : (
                            <NotPutDocsComponent/>
                        )
                    } </div>
            </div>
        </>
    )
}