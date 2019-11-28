# cypress-test-tiny-failed-stereo-recording

Investigating issue: [#4351](https://github.com/cypress-io/cypress/issues/4351)

> Tiny Cypress E2E test case


## Installation

```bash
npm install
```

## Test the bug

#### The buggy configuration
```bash
docker build . -t sandboxenviron
docker run \
    -v $HOME/.npm:/root/.npm \
    -v $HOME/.cache:/root/.cache \
    -v `pwd`:/myapp -it sandboxenviron /bin/bash -c "cd /myapp && npm run cypress:run"
```


#### The fixed configuration
```bash
docker build . -t sandboxenviron
docker run \
    -v $HOME/.npm:/root/.npm \
    -v $HOME/.cache:/root/.cache \
    -v `pwd`:/myapp -it sandboxenviron /bin/bash -c "cd /myapp && ./fix.sh && npm run cypress:run"
```
