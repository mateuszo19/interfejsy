# ✈️ Aircraft Club Manager

**Aircraft Club Manager** to kompleksowa aplikacja do zarządzania flotą lotniczą, klientami i operacjami lotniczymi. Projekt został zaprojektowany z myślą o małych i średnich aeroklubach, szkołach lotniczych i prywatnych właścicielach floty. Aplikacja upraszcza codzienne obowiązki administracyjne i pozwala skupić się na tym, co najważniejsze — lataniu.

## 🌟 Główne funkcje

- **Zarządzanie lotniskami** – Przeglądaj i zarządzaj listą obsługiwanych lotnisk.
- **Ewidencja klientów** – Przechowuj informacje o klientach, ich licencjach i uprawnieniach.
- **Zarządzanie flotą** – Rejestruj i aktualizuj stan samolotów (w tym usterki).
- **Warunki lotu** – Pobieraj w czasie rzeczywistym dane pogodowe dla każdego lotniska.
- **Historia lotów** – Śledź wypożyczenia i aktywności związane z flotą.

### Api pogodowe

Aplikacja w ekranie "Warunki lotu" pobieraza pomocą api ```geocoding-api``` dane pogodowe dla każdego lotniska na którym znajduje się akualnie samolot. Mamy również pole do samodzielnego wyszukania pogody.

### Mapa leaflet

Aplikacja wykorzystuje mapy Leaflet.
---

## 📁 Struktura komponentów

### `Airports.tsx`
Wyświetla **listę dostępnych lotnisk**, na których stacjonują samoloty. Każde lotnisko posiada unikalny kod ICAO, nazwę oraz współrzędne geograficzne. Może służyć jako punkt odniesienia dla warunków pogodowych i historii wypożyczeń.

### `Clients.tsx`
Sekcja poświęcona **klientom** – rejestrowanym użytkownikom aplikacji, którzy mogą wypożyczać samoloty. Zawiera formularz do dodawania nowych klientów z informacjami takimi jak:
- dane osobowe,
- numer dowodu,
- licencja pilota (z krajem wydania),
- szczegółowe uprawnienia (PPL, CPL, IR, ATPL, NVFR),
- narodowość.

### `Planes.tsx`
Moduł do zarządzania **samolotami** znajdującymi się we flocie. Pozwala na:
- przeglądanie dostępnych samolotów,
- kontrolowanie ich statusu (np. „sprawny”, „uszkodzony”),
- przypisanie samolotu do konkretnego lotniska.

### `FlightConditions.tsx`
Pobiera i wyświetla **aktualne warunki pogodowe** dla wszystkich dostępnych lotnisk. Wykorzystuje zewnętrzne API pogodowe, aby dostarczyć:
- temperaturę,
- ciśnienie,
- prędkość i kierunek wiatru,
- warunki wizualne (np. „słonecznie”, „zachmurzenie”).

### `History.tsx`
Panel przedstawiający **historię wypożyczeń samolotów**. Zawiera informacje o:
- użytkownikach, którzy wypożyczyli dany samolot,
- czasie i dacie wypożyczenia,
- miejscu odlotu i przylotu.

---

## 💡 Dlaczego ten projekt?

Aplikacja powstała z myślą o realnych potrzebach aeroklubów i właścicieli floty samolotów lekkich. Wiele organizacji korzysta z przestarzałych arkuszy kalkulacyjnych lub ręcznych rejestrów — Aircraft Club Manager to krok w stronę cyfrowej i efektywnej przyszłości.

---

## 🛠️ Technologie

- **React + TypeScript** – interfejs użytkownika
- **React-Bootstrap / Tailwind CSS** – estetyczny i responsywny design
- **Next.js** – SSR i routing
- **Axios** – obsługa żądań HTTP
- **OpenWeather API (lub inne)** – integracja z pogodą

---

## 🚀 Uruchomienie lokalne

```bash
git clone https://github.com/mateuszo19/interfejsy.git
cd interfejsy
npm install
npm run dev
