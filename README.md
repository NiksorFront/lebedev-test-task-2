Тествое задание в студию Артемия Лебедева на позицию Фронтендера-стажёра
 
Само задание: https://www.artlebedev.ru/job/form/?uid=BC8E9D39-EB09-409D-AE0A-F7F9C162D2E9
В качестве дизайна и стилей ипользовал CSS, который писал для моего крайнего проекта: art-kor.ru

Интрукция по запуску:
Открыть терминал и по очереди запускать следаующие команды:
```
git clone https://github.com/NiksorFront/lebedev-test-task-2.git

cd ./lebedev-test-task-2

docker build -t test-task-by-niksor .

docker run -p 5173:5173 test-task-by-niksor
```
Теперь перейдите на http://localhost:5173/ и увидите итоговую релизацию