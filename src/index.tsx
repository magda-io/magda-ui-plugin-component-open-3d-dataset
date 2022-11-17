import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { user, config } from "./defaultData";
import sampleDatasetData from "./sampleDataset.json";
import Open3dDatasetSection from "./Open3dDatasetSection";

ReactDOM.render(
    <BrowserRouter>
        <div>
            <div>
                <h2>Open 3D Dataset Button On Dataset Page:</h2>
                <div>
                    <Open3dDatasetSection
                        isFetchingWhoAmI={false}
                        whoAmIError={null}
                        user={user}
                        config={config}
                        requestSignOut={() => Promise.resolve()}
                        requestWhoAmI={() => Promise.resolve()}
                        fetchContent={() => Promise.resolve()}
                        history={{} as any}
                        location={{} as any}
                        match={{} as any}
                        dataset={sampleDatasetData as any}
                    />
                </div>
            </div>
            <div>
                <h2>
                    Open 3D Dataset Button On Distribution Page With 3D Dataset:
                </h2>
                <div>
                    <Open3dDatasetSection
                        isFetchingWhoAmI={false}
                        whoAmIError={null}
                        user={user}
                        config={config}
                        requestSignOut={() => Promise.resolve()}
                        requestWhoAmI={() => Promise.resolve()}
                        fetchContent={() => Promise.resolve()}
                        history={{} as any}
                        location={{} as any}
                        match={{} as any}
                        dataset={sampleDatasetData as any}
                        distributionId={
                            "dist-nsw-ckan-416d8baf-cd0e-45d7-8797-4fc87fc74ffd"
                        }
                    />
                </div>
            </div>
            <div>
                <h2>
                    Open 3D Dataset Button On Distribution Page Without 3D
                    Dataset:
                </h2>
                <div>
                    <Open3dDatasetSection
                        isFetchingWhoAmI={false}
                        whoAmIError={null}
                        user={user}
                        config={config}
                        requestSignOut={() => Promise.resolve()}
                        requestWhoAmI={() => Promise.resolve()}
                        fetchContent={() => Promise.resolve()}
                        history={{} as any}
                        location={{} as any}
                        match={{} as any}
                        dataset={sampleDatasetData as any}
                        distributionId={
                            "dist-nsw-ckan-dfe942fc-6d8c-45ff-8482-096f75ceb9b7"
                        }
                    />
                </div>
            </div>
        </div>
    </BrowserRouter>,
    document.getElementById("root")
);
