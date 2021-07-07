import React from "react";
import { ExtraVisualisationSectionComponentType } from "./externalComponents";

const MagdaPluginComponentExtraVisualisationSection: ExtraVisualisationSectionComponentType =
    (props) => {
        return (
            <div>
                <div>
                    <h1>Footer Component</h1>
                </div>
                <div>
                    isFetchingWhoAmI :{" "}
                    {props.isFetchingWhoAmI ? "true" : "false"}
                </div>
                <div>
                    User: {props.user ? JSON.stringify(props.user) : "N/A"}
                </div>
                <div>
                    Magda Config:{" "}
                    {props.config ? JSON.stringify(props.config) : "N/A"}
                </div>
            </div>
        );
    };

export default MagdaPluginComponentExtraVisualisationSection;
