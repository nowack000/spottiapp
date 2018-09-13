# SpottiApp
> Aplikacja pozwala użytkownikowi na dodawanie różnych punktów (markerów) na mapie z opisem każdego z nich, z możliwością późniejszego ich przeglądania przez wszystkich użytkowników.

![alt SpottiApp1](http://nowm.nazwa.pl/spottiapp1.png)
![alt SpottiApp2](http://nowm.nazwa.pl/spottiapp2.png)
![alt SpottiApp3](http://nowm.nazwa.pl/spottiapp3.png)
![alt SpottiApp4](http://nowm.nazwa.pl/spottiapp4.png)

# Live Preview
> Wejdź na https://spottiapp.herokuapp.com używając:
```sh
Login: test@test.com
```
```sh
Hasło: 123456
```
## Opis działania
Użytkownik może zarejestrować/zalogować się do serwisu. W panelu aplikacji może przełączać się między komponentami- może przeglądać jak i dodawać na mapie punkty (Home), edytować swoje dane (Profil), przeszukiwać bazę danych według słów kluczowych opisów już dodanych punktów (Eventy). Dodanie punktu na mapie odbywa się poprzez dwukrotne kliknięcie lewym przyciskiem myszy na mapie w wybranym miejscu. Dodanemu punktowi zostają przypisane koordynaty (długość i szerokość geograficzna) odpowiadające miejscu kliknięcia. Po zalogowaniu użytkownik automatycznie przenoszony jest na mapie do swojego aktualnego położenia (należy mieć włączone udostępnianie połączenia GPS na swoim urządzeniu).

## Użyte rozwiązania
Framework: React

Aplikacja została stworzona przy użyciu Create React App [https://github.com/facebook/create-react-app#create-react-app-] i NodeJS.

Baza danych: Firebase 

Mapy: Mapbox

Stylowanie: CSS, Bootstrap, Mapbox Style

## Oczekiwania/planowane rozwiązania
W aplikacji pracuję już nad:
- umożliwieniem usuwania przez każdego z użytkowników własnych markerów,
- stworzeniem komponentu, który będzie wyświetlał profil użytkownika [dodane w wersji 1.0.0]
- oddzieleniem od siebie inputów logowania i rejestracji,
- kliknięcie na dany event w wyszukiwarce "Eventów" spowoduje wyróżnienie go na mapie,
- możliwością dodania przez użytkownika urządzenia mobilnego markera na mapie poprzez dwukrotne dotknięcie ekranu,
- SpottiApp jako aplikacja mobilna (React Native).

## Historia projektu

* 1.0.0
    * Wydane 13 września 2018
    > dodano możliwość edytowania przez każdego użytkownika swoich danych w komponencie "Profil"
    > poprawione zostało grupowanie poszczególnych danych w bazie danych Firebase (czytelniejsze szufladkowanie)
* 0.1.0
    * Wydane 23 sierpnia 2018
* 0.0.1
    * Wydane 9 lipca 2018 (w repozytorium- "spotti")

## Autor

Mariusz Nowacki
[www.linkedin.com/in/mariusz-nowacki-bbab65142]

<!-- Markdown link & img dfn's -->
[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/datadog-metrics
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics
[wiki]: https://github.com/yourname/yourproject/wiki
