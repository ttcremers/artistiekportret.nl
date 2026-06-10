.DEFAULT_GOAL := help

.PHONY: help dev build

help:
	@echo "Targets:"
	@echo "  make dev    Start the Hugo development server in Docker"
	@echo "  make build  Build the site in Docker"

dev:
	docker compose up --remove-orphans

build:
	docker compose run --rm hugo hugo
