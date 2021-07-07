# magda-ui-plugin-component-open-3d-dataset

A Magda UI Plugin Component that allows users to open 3D datasets from DT instances.

More about Magda UI Plugin Component see: https://github.com/magda-io/magda-plugin-ui-component-examples

## How to Run Locally

```bash
yarn start
```

Access: http://localhost:8080/

## How to Deploy with Magda / Config

1> Build the bundle

```bash
yarn build
```

2> Upload files in `dist` folder to your own web service.

3> Config Magda Web Server Module

```yaml
web-server:
  externalUIComponents:
    - "https://exmaple.com/assets/libs/MagdaPluginComponentExtraVisualisationSection.js"
  extraConfigData:
    "3dDatasetDigitalTwinInstances":
    - sourceDataDomain: "xxx.xx.xx"
      url: "https://my.digitaltwin.com.au/"
```

You also need to configure Magda Gateway module `CSP` config accordingly to make sure scripts from `exmaple.com` are allowed. e.g.:

```yaml
gateway:
  csp:
    browserSniff: false
    directives:
      scriptSrc:
      - "'self'"
      - "'unsafe-inline'"
      - exmaple.com
      - exmaple.com
      - "blob:"
      objectSrc:
      - "'none'"
      workerSrc:
      - "'self'"
      - "blob:"
```

For more information, please refer to this issue:

https://github.com/magda-io/magda/issues/3099


