## Hızlı Başlat
1. `npm run dev`  # backend (backend/.env gerekiyor)
2. Local smoke: `npm run api:test`
3. Deploy (Render): Reponuzu bağlayın → env vars ekleyin (MONGO_URI, JWT_SECRET, CORS_ORIGINS, PORT=5000) → deploy.
4. Prod smoke: `postman/caria_prod.postman_environment.json` içindeki base_url'i `https://<BACKEND-DOMAIN>/api` yapın ve `npm run api:test:prod` çalıştırın.

# caria-project