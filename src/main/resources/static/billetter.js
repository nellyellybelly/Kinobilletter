const KinoBilletter = [];

function validateFirstname(firstname) {
    const firstnameRegex = /^[a-zA-ZæøåÆØÅ\s]+$/;
    return firstnameRegex.test(firstname);
}

function validateLastname(lastname) {
    const lastnameRegex = /^[a-zA-ZæøåÆØÅ\s]+$/;
    return lastnameRegex.test(lastname);
}

function validatePhone(phone) {
    const phoneRegex = /^\d{8}$/;
    return phoneRegex.test(phone);
}

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function visKinoBilletter() {
    let ut = "<table><tr>" +
        "<th>Fornavn</th><th>Etternavn</th><th>Telefonnummer</th><th>Epostadresse</th><th>Antall billetter</th>" + "</tr>";

    for (let p of KinoBilletter) {
        ut += "<tr>";
        ut += "<td>" + p.Fornavn + "</td><td>" + p.Etternavn + "</td><td>" + p.Telefonnummer + "</td><td>" + p.Epostadresse + "</td><td>" + p.AntallBilletter + "</td>";
        ut += "</tr>";
    }
    document.getElementById("Kinobilletter").innerHTML = ut;
}

function registrer() {
    const Fornavn = document.getElementById("Fornavn").value;
    const Etternavn = document.getElementById("Etternavn").value;
    const Telefonnummer = document.getElementById("Telefonnummer").value;
    const Epostadresse = document.getElementById("Epostadresse").value;
    const AntallBilletter = document.getElementById("Antall_billetter").value;
    const filmvalg = document.getElementById("filmvalg").value;
    const feilMeldinger = [];

    if (Fornavn === '') {
        feilMeldinger.push('Fyll inn fornavn');
    } else if (!validateFirstname(Fornavn)) {
        feilMeldinger.push('Du må skrive inn ditt fornavn med bokstaver');
    }

    if (Etternavn === '') {
        feilMeldinger.push('Fyll inn etternavn');
    } else if (!validateLastname(Etternavn)) {
        feilMeldinger.push('Du må skrive inn ditt etternavn med bokstaver');
    }

    if (Telefonnummer === '') {
        feilMeldinger.push('Fyll inn telefonnummer');
    } else if (!validatePhone(Telefonnummer)) {
        feilMeldinger.push('Telefonnummer må være et 8-sifret tall');
    }

    if (Epostadresse === '') {
        feilMeldinger.push('Fyll inn e-postadresse');
    } else if (!validateEmail(Epostadresse)) {
        feilMeldinger.push('Vennligst skriv inn en gyldig e-postadresse');
    }

    if (AntallBilletter === '') {
        feilMeldinger.push('Velg antall billetter');
    }

    if (filmvalg === '') {
        feilMeldinger.push('Velg en film');
    }

    if (feilMeldinger.length > 0) {
        // Vis alle feilmeldinger
        document.getElementById('feilMeldinger').innerText = feilMeldinger.join('\n');
        return;
    } else {
        document.getElementById('feilMeldinger').innerText = '';
    }

    const person = {
        Fornavn: Fornavn,
        Etternavn: Etternavn,
        Telefonnummer: Telefonnummer,
        Epostadresse: Epostadresse,
        AntallBilletter: AntallBilletter,
        Filmvalg: filmvalg
    };

    KinoBilletter.push(person);
    document.getElementById("Fornavn").value = "";
    document.getElementById("Etternavn").value = "";
    document.getElementById("Telefonnummer").value = "";
    document.getElementById("Epostadresse").value = "";
    document.getElementById("Antall_billetter").value = "";
    document.getElementById("filmvalg").selectedIndex = 0;
    visKinoBilletter();
}

function slettAlleBillettene() {
    KinoBilletter.length = 0;
    document.getElementById("Kinobilletter").innerHTML = "";
    document.getElementById("Antall_billetter").value = "";
}