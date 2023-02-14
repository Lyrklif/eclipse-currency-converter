# eclipse-currency-converter
https://lyrklif.github.io/eclipse-currency-converter  
  
**Кратко**: мини-приложение для просмотра и конвертации валют на основе JSON данных от ЦБ РФ  
Используются базовые стили и шрифт  
Запускал с node версией **14.20.0**  
**Стек**: Vue3 (Composition API), Pinia, Typescript, Axios   
Вместо WebPack используется *Vite*   



Список валют               |  Конвертер
:-------------------------:|:-------------------------:
![1](https://user-images.githubusercontent.com/41914434/218874361-8aa9d47a-53d5-4444-8810-c8e4fe3106a6.png)  |  ![2](https://user-images.githubusercontent.com/41914434/218874367-5bf6fbf7-6445-4816-b675-ac69083ae860.png)

## Описание задания
Используя Vue 3 (composition api) + Pinia сделать мини-приложение для просмотра и конвертации валют на основе JSON данных от ЦБ РФ.  
https://www.cbr-xml-daily.ru/  
https://www.cbr-xml-daily.ru/daily_json.js  

В приложении будет две вкладки
1. Список валют
2. Конвертер  


### 1. Список валют
   Посмотреть весь список пар валют с переключением основной валюты.
   Переключение:
   
   Например, EUR - RUB
   \
   1 EUR - 92.0669 RUB
   \
   1 RUB - 0.0109 EUR

Экран будет содержать поле поиска и весь список валютных пар. Поле поиска должно фильтровать список по названию валюты или её коду.

Так же показывать на сколько выросла/упала валюта от предыдущего значения (поле "Previous"). Сделать индикацию цветом (выросла-зеленый, упала-красный) и стрелочкой (вверх и вниз соответственно)

### 2. Конвертер
Конвертер валют (перевод из одной валюты в другую через базовую RUB)

Слева - базовый блок, справа - для которого рассчитывается значение
Стрелка между ними меняет содержимое блоков друг с другом
Смена валюты в любом из блоков заставляет пересчитывать правый блок. Числовое значение можно редактировать только в левом блоке


## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
yarn install
```

### Compile and Hot-Reload for Development

```sh
yarn run dev
```

### Type-Check, Compile and Minify for Production

```sh
yarn run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
yarn run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
yarn run lint
```

