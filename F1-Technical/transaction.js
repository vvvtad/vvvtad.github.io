
// async-await
function fetchTransaction() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ message: "Transaction successful!" });
        }, 2000);
    });
}

async function displayTransaction() {
    console.log("Processing transaction...");

    try {
        const data = await fetchTransaction();
        console.log("Success:", data.message);

        document.getElementById("status").style.display = "none";

        const detailElements = document.querySelectorAll(".details");

        detailElements.forEach(el => {
            if (el.tagName === "TABLE") {
                el.style.display = "table";
            } else {
                el.style.display = "block";
            }
        });
    } catch (error) {
        console.error("Error:", error);

        document.getElementById("status").innerText =
            "Transaction failed. Please try again.";
    }
}

displayTransaction();
// async-await

//structured clone
const messageEl = document.getElementById("time");
const updateMessage = () => {
    const time = new Intl.DateTimeFormat("en-PH", {
        dateStyle: "medium",
        timeStyle: "medium"
    }).format(new Date());

    messageEl.textContent =
        `${ time }`;
};

updateMessage();
//structured clone