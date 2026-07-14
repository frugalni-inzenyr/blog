# Krizový plán smrti: Jak zařídit, aby banky po vašem odchodu nezmrazily rodinný cash flow

> [!NOTE]
> **⚡ TL;DR:**
> - **Problém:** Smrtí majitele účtu banky okamžitě zmrazí jeho soukromé finance. Rodina může zůstat měsíce bez příjmů (Cash Flow Crunch) během dědického řízení.
> - **Systémová chyba:** Disponentská práva nepomohou. Banky je při úmrtí často blokují.
> - **Záplata (Hotfix):** Směrování nájmů přes s.r.o. (firma neumírá), reálné spolumajitelství účtů, nastavení *beneficiary* u brokerů a notářský zápis správce pozůstalosti podle § 1556 OZ.


Inženýři se učí stavět systémy odolné proti selhání (fault-tolerant systems). Navrhují záložní servery, redundanci dat a plány obnovy (Disaster Recovery). 

Když ale Frugální Inženýr analyzoval rodinný finanční systém pro případ své náhlé smrti (vstupní událost: *Inženýr zítra zemře*), zjistil, že systém má kritický bod selhání (Single Point of Failure).

Tím bodem jsou **české banky a jejich chování během dědického řízení**.

---

### 🚨 Chyba v systému: Cash Flow Crunch

Většina lidí věří, že když dají partnerovi „disponentská práva“ ke svým účtům, mají krizové řízení vyřešené. 

To je ale fatální omyl. Banky se o úmrtí dozví velmi rychle (přes registry). V tu vteřinu nastává standardní proces: **soukromé účty zemřelého jsou zmrazeny a disponentská práva zanikají nebo jsou zablokována**. Peníze se stávají součástí dědického řízení, které v ČR běžně trvá 6 až 12 měsíců.

Pokud má člověk většinu majetku v investicích a nemovitostech a partnerovi chodí nájmy na osobní účet, rodina se ze dne na den ocitne bez provozní hotovosti. Mají sice na papíře miliony, ale nemají z čeho zaplatit rohlíky a zálohy na energie.

Tuto chybu musel Frugální Inženýr „debugovat“ a nasadit na ni čtyři bezpečnostní záplaty.

---

### 🛡️ Záplata 1: Firma neumírá (Routing přes s.r.o.)

První a nejstabilnější redundancí je využití právnické osoby. Frugální Inženýr vlastní několik investičních bytů. Kdyby nájmy tekly na jeho soukromý účet, po jeho smrti se zastaví.

*   **Implementace:** Všechny nájemní vztahy a inkasa plateb jsou směřovány přes firemní účet jeho s.r.o. 
*   **Proč to funguje:** Firma na rozdíl od fyzické osoby neumírá. Smrtí jednatele firemní účet nezaniká a banka ho nezmrazí. Partner/ka je v s.r.o. jmenován/a jako druhý jednatel s plným samostatným právem. Druhý den po úmrtí může firma normálně platit zálohy, přijímat nájmy a posílat peníze dál.

---

### 🛡️ Záplata 2: Spolumajitelství vs. Disponent

Pokud se zakládají rodinné účty, je bezpečnější se vyhnout modelu „jeden vlastník + jeden disponent“. 

*   **Implementace:** U bank, které to umožňují (v ČR např. mBank nebo Fio), je nutné nastavit účet jako **spolumajitelství** (joint account), kde jsou oba partneři rovnocennými spoluvlastníky.
*   **Proč to funguje:** Smrtí jednoho ze spolumajitelů účet nezaniká. Druhý majitel má k penězům nadále plný přístup a banka nemůže účet jednostranně zablokovat.

---

### 🛡️ Záplata 3: Správce pozůstalosti (§ 1556 OZ)

Pokud má člověk složitější majetkovou strukturu (akcie, byty, s.r.o.), samotné účty nestačí. Potřebuje člověka, který bude majetek spravovat v mezidobí, než notář uzavře dědictví.

*   **Implementace:** Návštěva notáře a sepsání závěti, jejíž klíčovou součástí je jmenování blízké osoby **správcem pozůstalosti podle § 1556 nového občanského zákoníku**.
*   **Proč to funguje:** Správce pozůstalosti získává ze zákona právo spravovat a řídit majetek (včetně s.r.o., hlasování na valných hromadách a nakládání s účty) ihned po úmrtí, aniž by musel čekat na finální rozhodnutí o dědictví. Je to jakýsi dočasný „krizový manažer“ pozůstalého jmění.

> [!NOTE]
> **☕ Podpořte Frugálního Inženýra:**
> Pokud vám tento článek přinesl hodnotu, uvolnil mentální kapacitu nebo vás inspiroval k optimalizaci vlastního rodinného kódu, můžete kliknutím níže podpořit tento projekt:
> 
> <a href="https://www.buymeacoffee.com/frugalni.inzenyr" target="_blank" rel="noopener noreferrer" class="bmc-button">🍺 Pozvat Frugálního Inženýra na pivo</a>

---

### 🛡️ Záplata 4: Beneficiary u zahraničních brokerů

Pokud se drží ETF u zahraničních brokerů (Interactive Brokers, Degiro apod.), české dědické právo k nim doputuje jen velmi pomalu a složitě. Zahraniční právo má ale skvělý nástroj:

*   **Implementace:** V nastavení profilu brokera (např. IBKR) vyplňte sekci **Trusted Contact Person** nebo přímo **Transfer on Death (TOD) / Beneficiary**.
*   **Proč to funguje:** V případě úmrtí přechází portfolio přímo na určenou osobu na základě smluvního ujednání s brokerem, čímž se obchází zdlouhavé soudní dědické řízení v ČR i v zahraničí.

---

### 🏁 Závěr inženýra

Mít postavený skvělý investiční plán, který generuje 7 % reálně, je k ničemu, pokud celý systém zkolabuje na tom, že bankovní úředník po úmrtí majitele zmáčkne tlačítko „blokovat“. 

Disaster Recovery plán není paranoia. Je to základní hygiena každého, kdo to s finanční nezávislostí a bezpečností své rodiny myslí vážně. Prověření systémových přístupů a ošetření Single Point of Failure dřív, než systém nahlásí fatální chybu, je tak nezbytným krokem.

---

### 📚 Zdroje a legislativa

1. **Chování účtů po smrti a dispoziční práva:** 
   - *Zákon č. 21/1992 Sb., o bankách, § 38b* – Definuje povinnost banky pokračovat v provádění platebních transakcí po smrti majitele účtu, pokud majitel neurčil jinak, avšak disponentská práva jsou u řady českých bank (např. ČSOB, KB, Moneta) okamžitě blokována nebo omezena, jakmile se banka dozví o úmrtí z registru obyvatel.
   - *Peníze.cz / Měšec.cz:* [Běžný účet po smrti majitele: Na co má právo disponent?](https://www.mesec.cz/) a [Jak banky blokují karty a přístupy po úmrtí](https://www.penize.cz/).

2. **Právní institut správce pozůstalosti:**
   - *Zákon č. 89/2012 Sb., občanský zákoník, § 1556 a následující* – Definuje pravomoci a jmenování správce pozůstalosti. Závěť se jmenováním správce pozůstalosti sepisuje notářským zápisem a správce má právo spravovat majetek (včetně s.r.o. a účtů) ihned po úmrtí zůstavitele po dobu dědického řízení.

3. **Spolumajitelství účtů (Joint Accounts):**
   - *Obchodní podmínky bank v ČR (např. mBank, Fio banka)* – Umožňují zřídit účet v režimu spolumajitelství (dva rovnocenní majitelé), kdy smrtí jednoho z nich účet nepatří do blokace a druhý s ním může nadále plně disponovat (na rozdíl od disponenta).

