# Deploying in kubernetes manually

## Creating volumes

First of all start by creating the volumes

```sh
kubectl create -f mysql_storage.yaml
```

## Deploy mysql and configuring it

Then deploy the MYSQL deployment

```
kubectl create -f mysql_deployment.yaml
```

Then log into the mysql pod

```sh
kubectl exec -it mysql-pod bash
```

And do the following:

Connect to mysql:

```sh
mysql
```

Execute the following commands to grant privilleges for the backend application to write in the mysql instance:

```sql
GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES;
```

## Deploy the backend

Deploy the backend Spring Boot application pod(s):

```sh
kubectl create -f backend_spring_deployment.yaml
```

## Deploy the frontend

Deploy the Frontend Angular application pod(s):

```sh
kubectl create -f frontend_angular_deployment.yaml
```