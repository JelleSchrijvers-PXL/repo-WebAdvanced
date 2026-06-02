function resolvePromise() {
    return new Promise((resolve, reject) => {
        let success = true;

        /* Timeout van 1000ms om asynchroon gedrag te simuleren */
        setTimeout(() => {
            if (success) {
                resolve("Operatie geslaagd!");
            } else {
                reject("Er is een fout opgetreden.");
            }
        }, 5000);
    });
}

function rejectPromise() {
    return new Promise((resolve, reject) => {
        let success = false;

        /* Timeout van 1000ms om asynchroon gedrag te simuleren */
        setTimeout(() => {
            if (success) {
                resolve("Operatie geslaagd!");
            } else {
                reject("Er is een fout opgetreden.");
            }
        }, 5000);
    });
}

const resolveButton = document.querySelector("#resolve");
const rejectButton = document.querySelector("#reject");
const output = document.querySelector("p");

resolveButton.addEventListener("click", () => {
    output.textContent = "Loading...";
    resolvePromise()
        .then((message) => {
            /* Deze code wordt uitgevoerd omdat de promise `resolve` aanroept */
            output.textContent = message;
        })
        .catch((error) => {
            output.textContent = error;
        })
        .finally(() => {
            /**
             * Dit wordt altijd uitgevoerd, ongeacht of de fetch resolved of rejected is.
             * Dit wordt vaak gebruikt om loading indicators te verbergen.
             */
            output.textContent += " (afgehandeld)";
        });
});

rejectButton.addEventListener("click", () => {
    output.textContent = "Loading...";
    rejectPromise()
        .then((message) => {
            output.textContent = message;
        })
        .catch((error) => {
            /* Deze code wordt uitgevoerd omdat de promise `reject` aanroept */
            output.textContent = error;
        })
        .finally(() => {
            /**
             * Dit wordt altijd uitgevoerd, ongeacht of de fetch resolved of rejected is.
             * Dit wordt vaak gebruikt om loading indicators te verbergen.
             */
            output.textContent += " (afgehandeld)";
        });
});

output.textContent = "Loading...";
rejectPromise()
    .then((message) => {
        output.textContent = message;
    })
    .catch((error) => {
        /* Deze code wordt uitgevoerd omdat de promise `reject` aanroept */
        output.textContent = error;
    })
    .finally(() => {
        /**
         * Dit wordt altijd uitgevoerd, ongeacht of de fetch resolved of rejected is.
         * Dit wordt vaak gebruikt om loading indicators te verbergen.
         */
        output.textContent += " (afgehandeld)";
    });
console.log(" de code is al helemaal tot beneden uitgevoerd ....");