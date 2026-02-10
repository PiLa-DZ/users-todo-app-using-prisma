# In this project we have 
1. Users
    - Name
2. Tasks
    - Title
    - Complated

# API EndPoints
## Users EndPoints
1. Create One User
```Bash
http post localhost:3000/api/v1/users/create-one-user \
name=Amin
```
2. Get All User
```Bash
http get localhost:3000/api/v1/users/get-all-users
```
3. Get One User
```Bash
http get localhost:3000/api/v1/users/get-one-user/:id
```
4. Update One User By ID
```Bash
http put localhost:3000/api/v1/users/update-one-user-by-id/:id \
name=Amin
```
4. Delete One User By ID
```Bash
http delete localhost:3000/api/v1/users/delete-one-user-by-id/:id
```
## Tasks EndPoints
1. Create New Task By User ID
```Bash
http post localhost:3000/api/v1/tasks/create-one-task-by-user-id/:user-id \
title="Learn JavaScript"
complated=false
```
2. Update One Task By User ID And Task ID
```Bash
http put localhost:3000/api/v1/tasks/update-one-task-by-user-id-and-task-id/:user-id/:task-id \
title="Learn JavaScript"
complated:=false
```
3. Delete One Task By User ID And Task ID
```Bash
http delete localhost:3000/api/v1/tasks/update-one-task-by-user-id-and-task-id/:user-id/:task-id
```


# Project Requirement
JavaScript
NodeJS
NPM
Express
Dotenv
Nodemon
Prisma@6
Prisma/Client@6
Git
