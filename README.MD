## Instaling

* Clone the repo

  ```[bash]
    git clone https://github.com/9Jend/sampleScriptWithRedis 
  ```

* Copy env file

  ```[bash]
    cp .env.example .env
  ```

* Change port from .env if needed (default 80 for app and 6379 for redis)

* Run docker container

  ```[bash]
    docker compose up -d
  ```