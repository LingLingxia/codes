
## no params

- tasks.yaml
```
apiVersion: tekton.dev/v1beta1
kind: Task
metadata:
  name: hello-world
spec:
  steps:
    - name: echo
      image: alpine:3
      command: [/bin/echo]
      args: ["hello world!"]


```

- pipeline.yaml
```

apiVersion: tekton.dev/v1beta1
kind: Pipeline
metadata:  
  name: hello-pipeline
spec:
  tasks:
     - name: hello 
       taskRef:
          name: hello-world
```


- run directive

```
kubectl apply -f tasks.yaml
kubectl apply -f pipeline.yaml
tkn pipeline start --showlog hello-pipeline
```

- output
```
PipelineRun started: hello-pipeline-run-9vkbb
Waiting for logs to be available...
[hello : echo] Hello World!
```

## with params


- tasks.yaml
```
apiVersion: tekton.dev/v1beta1
kind: Task
metadata:
  name: echo
spec:
  params:
    - name: message
      description: The message to echo
      type: string
  steps:
    - name: echo-message
      image: alpine:3
      command: [/bin/echo]
      args: ["$(params.message)"]

```

- pipeline.yaml
```

apiVersion: tekton.dev/v1beta1
kind: Pipeline
metadata:  
  name: hello-pipeline
spec:
  params:
    - name: message
  tasks:
     - name: hello 
       taskRef:
          name: echo
       params:
          - name: message
            value: "$(params.message)"


```


- run directive

```
kubectl apply -f tasks.yaml
kubectl apply -f pipeline.yaml
tkn pipeline start hello-pipeline \
    --showlog  \
    -p message="Hello Tekton!"
```

- output
```
PipelineRun started: hello-pipeline-run-9qf42
Waiting for logs to be available...
[hello : echo-message] Hello Tekton!
```


## checkout branch



- tasks.yaml
```

apiVersion: tekton.dev/v1beta1
kind: Task
metadata:
  name: checkout
spec:
  params:
    - name: repo-url
      description: The URL of the git repo to clone
      type: string
    - name: branch
      description: The branch to clone
      type: string
  steps:
    - name: checkout
      image: bitnami/git:latest
      command: [git]
      args: ["clone","--branch", "$(params.branch)" , "$(params.repo-url)"]

```

- pipeline.yaml
```

apiVersion: tekton.dev/v1beta1
kind: Pipeline
metadata:
  name: cd-pipeline
spec:
  params:
    - name: repo-url
    - name: branch
      default: "master"
  tasks:
    - name: clone
      taskRef:
        name: checkout
      params:
      - name: repo-url
        value: "$(params.repo-url)"
      - name: branch
        value: "$(params.branch)"




```


- run directive

```
tkn pipeline start cd-pipeline \
    --showlog \
    -p repo-url="your git link" \
    -p branch="main"
```

- output
```
PipelineRun started: cd-pipeline-run-rf6zp
Waiting for logs to be available...
[clone : checkout] Cloning into 'your project name'...
```

## multitasks
```
apiVersion: tekton.dev/v1beta1
kind: Pipeline
metadata:
  name: cd-pipeline
spec:
  params:
    - name: repo-url
    - name: branch
      default: "master"
  tasks:
    - name: clone
      taskRef:
        name: checkout
      params:
      - name: repo-url
        value: "$(params.repo-url)"
      - name: branch
        value: "$(params.branch)"

    - name: lint
      taskRef:
        name: echo
      params:
      - name: message
        value: "Calling Flake8 linter..."
      runAfter:
        - clone

    - name: tests
      taskRef:
        name: echo
      params:
      - name: message
        value: "Running unit tests with PyUnit..."
      runAfter:
        - lint

    - name: build
      taskRef:
        name: echo
      params:
      - name: message
        value: "Building image for $(params.repo-url) ..."
      runAfter:
        - tests

    - name: deploy
      taskRef:
        name: echo
      params:
      - name: message
        value: "Deploying $(params.branch) branch of $(params.repo-url) ..."
      runAfter:
        - build
    ```