build:
	docker-compose up -d --build

up:
	docker-compose up -d

stop:
	docker-compose stop

front:
	docker-compose exec frontend bash

back:
	docker-compose exec backend bash

down:
	docker-compsoe down -v
