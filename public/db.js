let db;

const request = window.indexedDB.open("BudgetStore", 1);

request.onupgradeneeded = function (event) {
  db = event.target.result;

  const BudgetStore = db.createObjectStore("BudgetStore", {
    autoIncrement: true
  });
};

request.onsuccess = function (event) {
  db = event.target.result;

  if (navigator.onLine) {
    checkDatabase();
  }
};

request.onerror = function (event) {
  console.log(event.target.errorCode)
};

function saveRecord(record) {
  db = request. result;
  const transaction = db.transaction(["BudgetStore"], "readwrite");
  const budgetStore = transaction.objectStore("BudgetStore");

  budgetStore.add(record);
}

