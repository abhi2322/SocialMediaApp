# Social Media App

## Database setup

```shell
$ mysql -u root -p
```
```mysql
$ CREATE DATABASE socialmediadb;

$ CREATE USER socialuser IDENTIFIED WITH mysql_native_password BY 'socialpass';

$ GRANT ALL PRIVILEGES on socialmediadb.* to socialuser;

$ FLUSH PRIVILEGES;
```

## Project Structure

```Tree
src
├───controllers   # functions to connect routes to db operations
├───db            # db connections and model defination
├───public        # html/js/css files for static part of website
└───routes        # express middelwares(route wise)
```





