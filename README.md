# This command will install node_modules 
npm install
# This command will run portal app as standalone
ng serve
# This command will prepare for prod
ng build --prod
# This command build image
docker build -t beer-portal .
# This command will run container
docker run -p 8000:80 --name beer-portal beer-portal

To access Beer UI: http://localhost:8000/

Note: Before last command please make sure that beer-service is up and running 

verify steps if beer-service is up and running or not

Command: docker ps -a
Output: CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                    NAMES
        5502d8347654        beerservice         "java -jar /beer-s..."   2 minutes ago       Up 2 minutes        0.0.0.0:8080->8080/tcp   happy_brahmagupta


