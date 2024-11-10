# MVP Баннер с тарифами

![promo-image](https://github.com/user-attachments/assets/7e3cda87-ebd1-47d7-ab7c-58961c90f03e)

Деплой: [https://pahanchickt.github.io/mvp-tariffs-banner/](https://pahanchickt.github.io/mvp-tariffs-banner/)

## Описание

-   Данный MVP проект представляет собой баннер с тарифами, сверстанный по [макету](https://www.figma.com/design/ruveX9IdUB6BWKT2kR2Crm/%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5?node-id=0-1&t=HaqA82EWgUMHbe9p-1) по Pixel-Perfect. Внешний вид и поведение элементов точно повторены согласно макету.
-   В приложении реализована семантически правильная разметка HTML с использованием атрибутов ARIA, компоненты SASS структурированы, классы названы согласно методологии БЭМ.
-   В приложении реализован таймер. При загрузке страницы таймер показывает актуальное начальное время, с помощью TypeScript реализован обратный отсчет до нуля, после чего соответствующая кнопка "Выбрать" становится неактивной.
-   При нажатии на кнопки "Выбрать" в консоли выводится соответствующее наименование тарифа.
-   Обеспечено корректное отображение на устройствах с шириной экрана от **320px до 2048px**.
-   Код валиден и проходит проверку в ESlint, Prettier и валидаторе W3C без ошибок.

## Особенности

![результаты тестов PageSpeed Insights](https://github.com/user-attachments/assets/844962bf-bc1a-409a-aded-46a6c65f1e49)

Приложение имеет высокие показатели производительности, доступности и SEO (тесты проведены с помощью PageSpeed Insights). Обеспечена возможность навигации и использования функционала с клавиатуры. Контент корректно воспринимается скринридерами для незрячих пользователей.

## Технологический стек

При разработке проекта использовались следующие технологии:

-   **TypeScript** - для разработки;
-   **SASS** - для стилизации;
-   **Webpack** - в качестве сборщика;
-   **ESLint, Prettier и Husky** - для линтинга и форматирования.

## Инструкции по запуску проекта локально

1. Установите Node.js
2. "Форкните" данный репозиторий: https://github.com/PaHaNchickT/mvp-tariffs-banner
3. Склонируйте только что созданный репозиторий: `https://github.com/<%your_github_username%>/mvp-tariffs-banner/`
4. Перейдите в папку `mvp-tariffs-banner`
5. Чтобы установить все зависимости, используйте `npm install`
6. Для запуска локального сервера используйте `npm run dev`
7. Проект запущен успешно!

## Руководство по скриптам

-   `npm run start` запускает локальный сервер;
-   `npm run build` компилирует билд;
-   `npm run lint` запускает линтер для проверки файлов; As a result you will run ESLint checks
-   `npm run lint:format` запускает линтер для проверки файлов; As a result you will run ESLint for automatically problems fixing
-   `npm run ci:format` запускает форматирование файлов; As a result you will run Prettier for code issues checking
-   `npm run format` запускает форматирование файлов; As a result you will run Prettier for auto-formatting
-   `npm run prepare` запускает выполнение локальных хуков husky.

"lint": "eslint --fix \"**/*.{ts,tsx}\"",
        "lint:format": "eslint --ext .ts",
        "format": "prettier src --write",
        "ci:format": "prettier src --check",
