# Full-stack application (Angular/Spring Boot) with Kubernetes deployment

## Frontend

To run the Angular application:

```sh
cd Frontend/;
npm run build;
ng serve
```

## Backend

```sh
mvn spring-boot:run
```

## Deployment in Kubernetes

### Using kubectl

You can deploy the application by following instructions in the Kubernetes configuration folder.

### ArgoCD

Deploy a CD Pipeline using ArgoCD

After successfully deploying ArgoCD in your cluster using the guide [Argo CD - Declarative GitOps CD for Kubernetes](https://argo-cd.readthedocs.io/en/stable/getting_started/)

Execute the following command

```sh
kubectl apply -f application.yaml
```