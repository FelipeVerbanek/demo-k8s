


watch -n 1 kubectl get pods -n api
watch -n 1 kubectl get hpa  -n api

ip cluster
minikube ip

teste carga hpa:
ab -c 5 -n 1000 -t 100000 http://192.168.49.2:30001/
watch -n 1 kubectl top pods -n api