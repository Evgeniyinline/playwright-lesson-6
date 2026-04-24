# Что используем как образ эталонный
FROM mcr.microsoft.com/playwright:v1.58.2-noble
# Копируем все файлы в контейнер
COPY . .
RUN npm ci
# Запускаем автотесты
CMD ["npm", "t"]
