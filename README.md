# 🏠 Smart Address Validator  
A lightweight full-stack microservice that validates Indian addresses using pincode intelligence and heuristic scoring.  
Built to demonstrate real-world problem solving aligned with **Swift's mission** of improving checkout, shipping accuracy, and reducing RTO.

---

## 🚀 Overview  
This microservice validates an address by:

- Verifying the **pincode** using India's Postal API  
- Auto-detecting **city & state** from the pincode  
- Checking if the user-entered **city/state match** the actual region  
- Applying heuristic scoring based on:
  - Region mismatch  
  - Missing house/flat number  
  - Short/incomplete address  
- Returning a structured response with:
  - ✔ Validity result  
  - ✔ Score (/100)  
  - ✔ Issues found  
  - ✔ Suggested correct region  
  - ✔ Delivery confidence  

This helps reduce bad addresses → fewer delivery failures → lower RTO.

---

## 🎯 Why This Project  

One major reason for failed deliveries in India:  
**incorrect addresses + region mismatch**.

This microservice acts as a plug-and-play API that brands can integrate into checkout to:

- Improve address accuracy  
- Auto-correct incorrect locations  
- Predict deliverability  
- Reduce RTO losses  

---

## 🧩 Tech Stack

### **Frontend**
- React (JavaScript)
- Axios
- Modern CSS (no external libraries)
- Vite dev environment

### **Backend**
- Node.js + Express
- Axios (for Postal API)
- Custom scoring algorithm

---

## 🔧 Installation & Setup

### **1. Clone the repository**

```bash
git clone https://github.com/rajeev2004/Address-Validator.git
cd Address-Validator
```

### **2.Backend Setup (address-validator-service)**

```bash
cd backend
npm install
node server.js
```

### **3.Frontend Setup (address-validator-ui)**

```bash
cd frontend
npm install
npm run dev
```

### **4.Service Available on:**

http://localhost:5173 

## 🌍 Live Demo

https://rajeev2004.github.io/Address-Validator/