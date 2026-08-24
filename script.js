// ==========================
// BUKA UNDANGAN
// ==========================

function bukaUndangan() {

    const cover =
        document.getElementById("cover");

    const isiUndangan =
        document.getElementById("isi-undangan");

    const musik =
        document.getElementById("musik");

    const tombolMusik =
        document.getElementById("tombol-musik");

    document.querySelector(".bottom-nav").style.display = "flex";


    cover.classList.add("hide");


    setTimeout(function () {

        cover.style.display =
            "none";

        isiUndangan.style.display =
            "block";

        tombolMusik.style.display =
            "block";

    }, 800);


    musik.play().catch(function () {

        console.log(
            "Musik tidak dapat diputar otomatis."
        );

    });

}


// ==========================
// NAMA TAMU OTOMATIS
// ==========================

const parameter =
    new URLSearchParams(
        window.location.search
    );

const namaTamu =
    parameter.get("to");


if (namaTamu) {

    document.getElementById(
        "nama-tamu"
    ).innerText =
        namaTamu;

}


// ==========================
// MUSIK
// ==========================

function aturMusik() {

    const musik =
        document.getElementById("musik");

    const tombol =
        document.getElementById(
            "tombol-musik"
        );


    if (musik.paused) {

        musik.play();

        tombol.innerHTML =
            "🎵";

        tombol.style.animationPlayState =
            "running";

    }

    else {

        musik.pause();

        tombol.innerHTML =
            "🔇";

        tombol.style.animationPlayState =
            "paused";

    }

}


// ==========================
// COUNTDOWN
// ==========================

// Akad:
// Sabtu, 28 November 2026
// pukul 08.00 WIB

const tanggalAkad =
    new Date(
        "2026-11-28T08:00:00+07:00"
    ).getTime();


const timerCountdown =
    setInterval(function () {

        const sekarang =
            new Date().getTime();

        const selisih =
            tanggalAkad - sekarang;


        if (selisih <= 0) {

            clearInterval(
                timerCountdown
            );

            document.getElementById(
                "hari-count"
            ).innerText = "0";

            document.getElementById(
                "jam-count"
            ).innerText = "0";

            document.getElementById(
                "menit-count"
            ).innerText = "0";

            document.getElementById(
                "detik-count"
            ).innerText = "0";

            return;

        }


        const hari =
            Math.floor(
                selisih /
                (1000 * 60 * 60 * 24)
            );


        const jam =
            Math.floor(
                (
                    selisih %
                    (1000 * 60 * 60 * 24)
                ) /
                (1000 * 60 * 60)
            );


        const menit =
            Math.floor(
                (
                    selisih %
                    (1000 * 60 * 60)
                ) /
                (1000 * 60)
            );


        const detik =
            Math.floor(
                (
                    selisih %
                    (1000 * 60)
                ) /
                1000
            );


        document.getElementById(
            "hari-count"
        ).innerText =
            hari;


        document.getElementById(
            "jam-count"
        ).innerText =
            jam;


        document.getElementById(
            "menit-count"
        ).innerText =
            menit;


        document.getElementById(
            "detik-count"
        ).innerText =
            detik;

    }, 1000);


// ==========================
// SALIN REKENING
// ==========================

function salinRekening(nomor) {

    navigator.clipboard
        .writeText(nomor)
        .then(function () {

            alert(
                "Nomor rekening berhasil disalin!"
            );

        })
        .catch(function () {

            alert(
                "Nomor rekening gagal disalin."
            );

        });

}

// ==========================
// ANIMASI SAAT SCROLL
// ==========================

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {

    const tinggiLayar = window.innerHeight;

    revealElements.forEach(function (element) {

        const posisiElement =
            element.getBoundingClientRect().top;

        if (posisiElement < tinggiLayar - 80) {

            element.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

window.addEventListener("load", revealOnScroll);

revealOnScroll();

// ==========================
// LIGHTBOX GALERI
// ==========================

function bukaLightbox(src) {

    const lightbox =
        document.getElementById("lightbox");

    const gambar =
        document.getElementById("lightbox-img");


    gambar.src = src;

    lightbox.hidden = false;

    document.body.style.overflow =
        "hidden";

}


function tutupLightbox() {

    const lightbox =
        document.getElementById("lightbox");

    lightbox.hidden = true;

    document.body.style.overflow =
        "auto";

}


// Klik background hitam untuk menutup
document
    .getElementById("lightbox")
    .addEventListener("click", function () {

        tutupLightbox();

    });

    const sections = document.querySelectorAll(
    "#mempelai, #acara, #galeri, #gift"
);

const navLinks = document.querySelectorAll(
    ".bottom-nav a"
);

window.addEventListener("scroll", function () {

    let current = "";

    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 200;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(function (link) {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {
            link.classList.add("active");
        }

    });

});