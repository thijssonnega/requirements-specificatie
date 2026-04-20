# Requirements Specificatie - Chocobooost Online Bestelplatform

## 1. Organisatorische Context

In dit hoofdstuk beschrijven we wie Cacoadroom is, waar het bedrijf voor staat en wat we willen bereiken. Dit is belangrijk om straks goed te begrijpen waarom we een softwaresysteem laten ontwikkelen en wat dat systeem moet bijdragen.

### 1.1 Missie

Bij Cacoadroom draait alles om chocolade maken met echte aandacht. We willen mensen laten genieten van chocolade die goed smaakt, goed voelt en goed gemaakt is. Met eerlijke ingrediënten, ambachtelijke recepten en een luxe uitstraling proberen we een stukje verwennerij te bieden dat mensen niet snel vergeten.

Kort samengevat: we maken premium chocolade die voor iedereen een mini-luxe-moment kan zijn.

### 1.2 Visie

We willen uitgroeien tot een chocolademerk waar kwaliteit, smaak en eerlijkheid samenkomen. Niet alleen lekker, maar ook verantwoord. We willen blijven vernieuwen met nieuwe smaken en producten, en tegelijk zorgen dat onze cacao op een eerlijke manier wordt geproduceerd. Het doel is dat Cacoadroom een vaste plek krijgt in het leven van mensen — als verwenmoment, als cadeau of gewoon als iets lekkers tussendoor.

We groeien niet alleen in omzet, maar ook in hoe verantwoord en herkenbaar ons merk is.

### 1.3 Strategie

Cacoadroom kiest bewust voor het premiumsegment. Dat betekent dat we niet de goedkoopste zijn, maar wel de beste ervaring bieden. We focussen op een klein aantal kernproducten zodat we daarin echt goed kunnen worden. Onze groeistrategie heeft vier richtingen:

- **Marktpenetratie** — Meer mensen bereiken via Instagram, TikTok en samenwerkingen met influencers
- **Productontwikkeling** — Nieuwe smaken ontwikkelen, ook veganistisch en suikerarm
- **Marktontwikkeling** — Uitbreiden naar nieuwe doelgroepen zoals gezinnen en bewuste kopers
- **Diversificatie** — Giftboxen, kerstpakketten en samenwerking met andere premium merken

### 1.4 Doelstellingen

Onze doelstellingen zijn verdeeld over korte en lange termijn. We meten ze aan de hand van concrete KPI's zodat we ook echt kunnen zien of we op de goede weg zitten.

| Termijn | Doelstelling | KPI |
|---|---|---|
| Kort (< 1 jaar) | Naamsbekendheid opbouwen via social media en de webshop | Websitebezoek, volgersaantal |
| Kort (< 1 jaar) | Stabiele productkwaliteit leveren | Klachten onder de 2% |
| Middellang (1-3 jr) | Sterkere positie bij retailpartners | Aantal verkooppunten |
| Middellang (1-3 jr) | Winstmarge verbeteren | Brutomarge minimaal 40% |
| Lang (3-5 jr) | Bekend premium chocolademerk worden | Marktaandeel in premiumsegment |
| Lang (3-5 jr) | Volledig duurzame cacaoketen | 100% gecertificeerde cacao |

### 1.5 Organogram

Cacoadroom heeft een platte organisatiestructuur met een klein leiderschapsteam. Elke directeur heeft een duidelijk eigen gebied:

| Functie | Verantwoordelijkheid |
|---|---|
| CEO (Algemeen Directeur) | Eindverantwoordelijk voor strategie en de hele bedrijfsvoering |
| CFO (Financieel Directeur) | Financieel beleid, budgetten en financiële rapportages |
| COO (Operationeel Directeur) | Productie, logistiek en voorraadbeheer |
| CMO (Marketing Directeur) | Merkstrategie, campagnes en klantsegmentatie |
| CHMO (HR & Marketing Officer) | Personeelszaken en het werkgeversmerk |
| Productiemedewerkers | Chocoladeproductie en kwaliteitscontrole |
| Verkoopmedewerkers | Klantcontact, orders en retail relaties |

### 1.6 Stakeholderanalyse

Dit zijn de mensen en partijen die betrokken zijn bij of invloed hebben op het te bouwen systeem:

| Stakeholder | Belang | Invloed | Hoe we ermee omgaan |
|---|---|---|---|
| Klanten (B2C) | Hoog | Hoog | Betrekken via feedback en goede UX |
| Retailpartners | Hoog | Hoog | Eigen bestelomgeving aanbieden |
| Cacaoleveranciers | Middel | Middel | Transparant communiceren over inkoopwensen |
| Medewerkers | Hoog | Middel | Meenemen in systeeminrichting en training |
| CEO / Management | Hoog | Hoog | Regelmatig rapporteren over KPI's |
| Overheid / toezicht | Laag | Middel | AVG-compliance en voedselveiligheid borgen |
| Ontwikkelteam | Middel | Hoog | Heldere user stories aanleveren |

---

## 2. Actoren van het Systeem

In dit hoofdstuk beschrijf ik welke rollen er zijn binnen het online bestelplatform. Elke actor heeft andere rechten en andere taken in het systeem.

| Actor | Type | Wat doet deze persoon in het systeem? |
|---|---|---|
| Klant | Extern | Bekijkt producten, plaatst bestellingen, beheert zijn account en spaart punten |
| Retailpartner | Extern | Plaatst groothandelsbestellingen en bekijkt leveringsinfo en facturen |
| Beheerder | Intern | Beheert producten, orders en gebruikers; bekijkt rapportages |
| Magazijnmedewerker | Intern | Verwerkt orders fysiek, past de voorraad aan en bevestigt picks |
| Marketingmedewerker | Intern | Maakt acties en kortingen aan, beheert content en het loyaltyprogramma |
| Extern systeem | Systeem | Betaalprovider, e-mailservice en ERP-koppeling voor voorraadsync |

---

## 3. Bedrijfsprocesanalyse

In dit hoofdstuk kijk ik naar hoe het verkoopproces nu werkt, hoe we willen dat het gaat werken en wat er ontbreekt. Ik gebruik daarvoor de Ist-Soll-methode aangevuld met een SIPOC en een knelpuntenanalyse.

### 3.1 Huidig Proces (Ist)

Op dit moment heeft Cacoadroom geen online bestelplatform. Klanten bestellen via Instagram DMs, e-mail of telefoon. Dit levert een hoop handmatig werk op:

1. Klant stuurt bericht via Instagram, e-mail of telefoon
2. Medewerker noteert de bestelling in een spreadsheet of op papier
3. Voorraad wordt handmatig gecheckt
4. Bestelling wordt ingepakt en klaargelegd of verstuurd
5. Klant betaalt via bankoverschrijving of contant
6. Orderbevestiging wordt via WhatsApp of e-mail verstuurd
7. Retouren worden ad hoc en per geval afgehandeld

### 3.2 Gewenst Proces (Soll)

Met het nieuwe platform verloopt het hele proces digitaal en geautomatiseerd. Zo werkt het straks:

1. Klant gaat naar de webshop en kiest producten
2. Systeem controleert automatisch de voorraad
3. Klant maakt een account aan, vult adresgegevens in en betaalt online
4. Systeem stuurt automatisch een orderbevestiging per e-mail
5. Magazijnmedewerker ontvangt digitaal een picklijst en verwerkt de order
6. Klant krijgt een track & trace link en kan de orderstatus volgen in zijn account
7. Retouren worden ingediend via een formulier in het klantportaal

### 3.3 SIPOC

Het SIPOC-diagram geeft een snel overzicht van het hele proces, van leverancier tot klant:

| Suppliers | Inputs | Process | Outputs | Customers |
|---|---|---|---|---|
| Cacaoleveranciers | Grondstoffen, receptuur | Productie & kwaliteitscontrole | Chocoladeproducten | Eindklanten |
| Klant / Webshop | Bestelgegevens, betaling | Orderverwerking & verzending | Pakket + bevestiging | Retailpartners |
| Betaalprovider | Betaalautorisiatie | Financiële verwerking | Facturen, kasdata | CFO / boekhouding |
| Marketingteam | Campagnes, acties | Marketing & branding | Naamsbekendheid | Potentiële klanten |
| ERP / voorraad | Voorraadmutaties | Voorraadbeheer | Actuele voorraadstatus | COO, magazijn |

### 3.4 Knelpunten en Gap-analyse

Dit zijn de grootste verschillen tussen hoe het nu gaat en hoe we willen dat het gaat:

| Knelpunt | Nu (Ist) | Gewenst (Soll) | Prioriteit |
|---|---|---|---|
| Geen centraal bestelkanaal | Bestellingen via losse kanalen | Een webshop voor alles | Hoog |
| Handmatig voorraadbeheer | Spreadsheets, fouten zijn snel gemaakt | Realtime koppeling met het systeem | Hoog |
| Geen klantaccounts | Geen bestelhistorie of klantdata | Account met profielbeheer en punten | Hoog |
| Ongestructureerd betaalproces | Bankoverschrijving of contant | Geïntegreerde betaalprovider | Hoog |
| Geen rapportages | Geen inzicht in omzet of orders | Dashboards en exportfuncties | Middel |
| Geen retourproces | Per geval anders afgehandeld | Vast retourformulier in klantportaal | Middel |
| Geen marketingdata | Geen klik- of conversiedata | Analytics en CRM-koppeling | Laag |

---

## 4. Productvisie

In dit hoofdstuk beschrijf ik wat het systeem moet worden en waarom. Ik gebruik het Product Vision Board om dit op een overzichtelijke manier in kaart te brengen.

### 4.1 Product Vision Board

| Aspect | Beschrijving |
|---|---|
| **DOELGROEP** | Jongvolwassenen 18-30 jr, Werkende volwassenen 30-45 jr, Gelegenheidskopers 20-50 jr, Retail partners, Interne medewerkers |
| **BEHOEFTEN** | Makkelijk bestellen vanuit huis, Account met bestelhistorie, Duidelijk productoverzicht, Cadeauverpakkingen bestellen, Info over cacaoherkomst, Vlotte betaal- en leverervaring |
| **PRODUCT** | Webshop met productoverzicht, Klantaccounts, Winkelwagen & checkout, Orderbeheer voor medewerkers, Koppeling met voorraad, Loyaliteitsprogramma |
| **BUSINESS GOALS** | Meer omzet via online kanaal, Minder overproductie, Hogere klantloyaliteit, Beter voorraadbeheer, Sterkere online merkbeleving, Schaalbaar naar retail |

### 4.2 Toelichting op de Productvisie

Het Chocobooost bestelplatform is een webapplicatie die de premium uitstraling van het merk vertaalt naar een digitale winkelomgeving. Klanten kunnen er eenvoudig chocolade bestellen, hun account beheren en loyaltypunten sparen. Medewerkers krijgen via dezelfde omgeving tools voor orderbeheer, voorraadinzicht en marketingacties.

Het platform helpt ons om:

- Online meer te verkopen via een professionele, mobiele webshop
- Klanten terug te laten komen via een loyaltyprogramma
- Overproductie te verminderen dankzij een realtime koppeling met de voorraad
- Marketingdata te verzamelen voor betere en gerichtere campagnes
- Retailpartners een eigen bestelomgeving te geven

**Productvisie:** Wij willen chocoladeliefhebbers een online plek geven waar bestellen net zo lekker voelt als het product zelf — snel, mooi en vertrouwd, precies zoals Chocobooost is.

---

**Versie 2.0 — Markdown Formaat**
