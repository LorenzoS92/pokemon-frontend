start:
	@echo 'Starting pokemon frontend'
	docker-compose up -d

force-start:
	@echo 'Starting pokemon frontend'
	docker-compose up -d --force-recreate

validate:
	@echo 'Show and validate docker compose configuration'
	docker-compose config
