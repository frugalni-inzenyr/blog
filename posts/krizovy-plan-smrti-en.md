# Death and Bank Freezes: How to Keep Family Cash Flow Alive (Shell Companies and Estate Hacks)

> [!NOTE]
> **⚡ TL;DR:**
> - **Problem:** When an account owner dies, banks instantly freeze their personal finances. The family can be left for months without cash flow during probate.
> - **System Bug:** Simple power of attorney or "authorized user" access is useless. Banks typically revoke or block them immediately upon death.
> - **Hotfix:** Routing income through a shell company (companies don't die), utilizing true joint accounts, setting up broker beneficiaries, and designating an estate administrator (such as under Czech CC § 1556 or local equivalents).


Engineers are trained to build fault-tolerant systems. They design backup servers, data redundancy, and Disaster Recovery (DR) plans.

However, when the Frugal Engineer analyzed the family's financial system in the event of his sudden death (input event: *engineer dies tomorrow*), he discovered a critical Single Point of Failure (SPOF).

That point is **the banking system and its behavior during the probate process**.

---

### 🚨 The System Bug: The Cash Flow Crunch

Most people believe that giving their partner "authorized user" rights or power of attorney over their accounts solves emergency access.

This is a fatal mistake. Banks learn about deaths very quickly through registries. The second they do, the standard protocol kicks in: **all personal accounts of the deceased are frozen, and power of attorney privileges are instantly revoked**. The funds are locked and sent to the probate courts, a process that commonly takes 6 to 12 months in Europe.

If the majority of a person's wealth is tied up in investments and rental real estate, and the rents flow into their personal account, the family will find themselves without operational cash overnight. They might be millionaires on paper, but they won't have cash to buy groceries or pay utility bills.

The Frugal Engineer had to debug this flaw and deploy four system patches.

---

### 🛡️ Patch 1: Companies Don't Die (Routing via LLC / s.r.o.)

The first and most robust redundancy is using a corporate entity (LLC / s.r.o.). The Frugal Engineer owns several rental apartments. If the rent payments flowed directly to his personal account, they would stop instantly upon his death.

*   **Implementation:** All lease agreements and rent collections are routed through the corporate bank account of his LLC.
*   **Why it works:** Unlike natural persons, corporations do not die. The corporate account is not frozen when a managing director passes away. The partner is registered as a co-director with full, independent signing authority. The day after the engineer passes, the company can continue to pay bills, collect rents, and distribute funds.

---

### 🛡️ Patch 2: Joint Ownership vs. Authorized User

When setting up family bank accounts, it is safer to avoid the "one owner + one authorized user" model.

*   **Implementation:** Set up accounts as **joint accounts**, where both partners are equal co-owners of the assets.
*   **Why it works:** The death of one co-owner does not terminate the account. The surviving owner maintains full access, and the bank cannot unilaterally freeze the funds.

---

### 🛡️ Patch 3: Appoint an Estate Administrator

If a person has a complex asset structure (ETFs, real estate, LLC shares), joint accounts aren't enough. They need someone who can legally manage the assets during the transition period before the court settles the inheritance.

*   **Implementation:** Draft a will that explicitly appoints a close person as the **estate administrator** (in the Czech Republic, this is done via § 1556 of the Civil Code; other jurisdictions have executors or personal administrators).
*   **Why it works:** The estate administrator receives the legal authority to manage and run the estate's assets (including voting in the LLC, paying corporate taxes, and accessing necessary funds) immediately upon the owner's death, bypassing the months-long wait for the final probate ruling.

> [!NOTE]
> **☕ Support the Frugal Engineer:**
> If this article has brought you value, freed up mental bandwidth, or inspired you to optimize your own family code, you can support this project by clicking below:
> 
> <a href="https://www.buymeacoffee.com/frugalni.inzenyr" target="_blank" rel="noopener noreferrer" class="bmc-button">🍺 Buy the Frugal Engineer a beer</a>

---

### 🛡️ Patch 4: TOD and Beneficiary Designations for Brokers

If ETFs are held with international brokers (Interactive Brokers, Degiro, etc.), local probate courts will take a very long time to communicate with them. Fortunately, international brokers have standard tools:

*   **Implementation:** Fill out the **Transfer on Death (TOD)** or **Beneficiary Designation** in the broker account settings.
*   **Why it works:** Upon proof of death, the portfolio is directly transferred to the designated beneficiary by contract with the broker, bypassing the domestic probate court completely.

---

### 🏁 Engineer's Summary

Having a perfect investment plan that generates 7% real returns is useless if the entire system collapses because a bank clerk presses "freeze" after you leave.

A Disaster Recovery plan is not paranoia. It is basic hygiene for anyone who takes financial independence and the safety of their family seriously. Verifying system access permissions and resolving the Single Point of Failure before the system reports a fatal crash is therefore a necessary step.

---

### 📚 Sources and Legal Framework

1. **Bank Accounts Upon Death & Authorized Users:**
   - *Act No. 21/1992 Coll., on Banks, § 38b (Czech Republic)* – Regulates bank account behavior after client demise. While standing orders remain active, user authorization (disponent rights) is immediately suspended or revoked by many major domestic banks (CSOB, KB, Moneta) once notified of the death.
   - *Public Resources:* Financial analytics portals (Měšec.cz, Peníze.cz) on the limitations of powers of attorney and card freezes during probate.

2. **Estate Administrator (Legal hack):**
   - *Act No. 89/2012 Coll., Civil Code, § 1556 et seq. (Czech Republic)* – Outlines the rights and designation of an estate administrator. Designated via a notary deed, they bypass standard probate wait-times and can manage property portfolios, business entities (LLC shares), and specific financial accounts immediately.

3. **Co-ownership of Bank Accounts (Joint Accounts):**
   - *Banking terms of service (e.g. mBank, Fio Banka)* – Detail joint account frameworks where both partners are equal co-owners. Upon one co-owner's demise, the account remains unfrozen, allowing the surviving co-owner to maintain full liquidity.

