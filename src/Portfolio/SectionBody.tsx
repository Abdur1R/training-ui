import React, { ReactComponentElement, ReactElement } from "react";

const SectionBody = ({ head, body, subHead, id }: { head: string, body: ReactElement<any, any>, subHead: string, id: string }) => (
    <div className="section" id={id}>
        {head &&
            <div className="head">
                {head}
            </div>
        }
        {subHead &&
            <div className="subHead">
                {subHead}
            </div>
        }
        {body &&
            <div className="body">
                {body}
            </div>
        }
    </div >
);

export default SectionBody;