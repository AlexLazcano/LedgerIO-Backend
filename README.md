# LedgerIO-Backend - Kubernetes YAMLs

## Description
This repository contains YAML files for configuring various resources in Kubernetes clusters. Specifically, it's organized to manage microservices related to user management and transaction processing. The repository structure includes configurations for deployments, services, and ingress rules tailored to these specific functionalities.

## Contents

- **Ingress:**
  - **ingress.yaml:** YAML file for setting up Kubernetes ingress rules to manage external access to services within the cluster.
- **User:**
  - **Service:**
    - **user-service.yaml:** YAML file for creating a Kubernetes service to expose the user management deployment within the cluster or externally.
  - **Deployment:**
    - **user-deployment.yaml:** YAML file for defining a Kubernetes deployment for the user management microservice, including specifications for pods, containers, volumes, and more.
- **Transactions:**
  - **Service:**
    - **transactions-service.yaml:** YAML file for creating a Kubernetes service to expose the transaction processing deployment within the cluster or externally.
  - **Deployment:**
    - **transactions-deployment.yaml:** YAML file for defining a Kubernetes deployment for the transaction processing microservice, including specifications for pods, containers, volumes, and more.
