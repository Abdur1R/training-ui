import { ReactElement } from "react";

const SectionBody = ({ head, body, subHead, id, darkMode }: { head: string, body: ReactElement<any, any>, subHead: string, id: string, darkMode: boolean }) => (
    <div className="section" id={id}>
        {head &&
            <div className={darkMode ? "head darkMode" : "head"}>
                {head}
            </div>
        }
        {subHead &&
            <div className={darkMode ? "subHead darkMode" : "subHead"}>
                {subHead}
            </div>
        }
        {body &&
            <div className={darkMode ? "body darkMode" : "body"}>
                {body}
            </div>
        }
    </div >
);

export default SectionBody;