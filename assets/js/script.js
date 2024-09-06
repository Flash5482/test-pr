    const btn = document.getElementById("footerBtn");

        btn.addEventListener("click",  () => {
            const moreText = document.getElementById("expandableContent");
            if (moreText.style.display === "none" || !moreText.style.display) {
                moreText.style.display = "block"; // Show the extra text
                this.textContent = "Read Less"; // Change button text
            } else {
                moreText.style.display = "none"; // Hide the extra text
                this.textContent = "Read More"; // Revert button text
            }
        });
