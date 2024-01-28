export const regex = {
    regexString: /^[a-zA-ZÀ-ÖØ-öø-ÿ ]+$/,
    regexInt: /^[0-9]+$/,
    regexInt5Characters: /^\d{5}$/,
    regexEmail: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    regexStringInt: /^[a-zA-ZÀ-ÖØ-öø-ÿ0-9 ]+$/,
    regexAlphaNum: /^[a-zA-Z0-9]+$/,
    regexDate: /^\d{4}-\d{2}-\d{2}$/,
}

export const allCreateClientFields = {
    "last_name": {
        "regex": regex.regexString,
        "errorMessage": "Le nom ne doit pas contenir de caractères spéciaux"
    },
    "first_name": {
        "regex": regex.regexString,
        "errorMessage": "Le prénom ne doit pas contenir de caractères spéciaux"
    },
    "email": {
        "regex": regex.regexEmail,
        "errorMessage": "L'email n'est pas conforme"
    },
    "phone": {
        "regex": regex.regexInt,
        "errorMessage": "Le numéro de téléphone ne doit pas contenir de caractères spéciaux"
    },
    "billing_address": {
        "regex": regex.regexStringInt,
        "errorMessage": "L'addresse n'est pas conforme"
    },
    "billing_zip_code": {
        "regex": regex.regexInt5Characters,
        "errorMessage": "Le code postal doit contenir 5 chiffres"
    },
    "billing_city": {
        "regex": regex.regexString,
        "errorMessage": "La ville ne doit pas contenir de caractères spéciaux"
    },
    "delivery_address": {
        "regex": regex.regexStringInt,
        "errorMessage": "L'addresse n'est pas conforme"
    },
    "delivery_zip_code": {
        "regex": regex.regexInt5Characters,
        "errorMessage": "Le code postal doit contenir 5 chiffres"
    },
    "delivery_city": {
        "regex": regex.regexString,
        "errorMessage": "La ville ne doit pas contenir de caractères spéciaux"
    },

};

export const allUpdateConnctedUserFields = {
    "userLastName": {
        "regex": regex.regexString,
        "errorMessage": "Le nom ne doit pas contenir de caractères spéciaux"
    },
    "userFirstName": {
        "regex": regex.regexString,
        "errorMessage": "Le prénom ne doit pas contenir de caractères spéciaux"
    },
    "userEmail": {
        "regex": regex.regexEmail,
        "errorMessage": "L'email n'est pas conforme"
    },
    "userPhoneNumber": {
        "regex": /^[0-9\s]+$/,//regex.regexInt,
        "errorMessage": "Le numéro de téléphone ne doit pas contenir de caractères spéciaux"
    },
};

export const allOrderFields = {
    "order_number": {
        "regex": regex.regexAlphaNum,
        "errorMessage": "Les caractères spéciaux ne sont pas autorisés"
    },
    "quantity": {
        "regex": regex.regexInt,
        "errorMessage": "Quantité invalide, uniquement des chiffres sont autorisés"
    },
    "log_size": {
        "regex": regex.regexInt,
        "errorMessage": "Taille invalide, uniquement des chiffres sont autorisés"
    },
    "client_id": {
        "regex": regex.regexInt,
        "errorMessage": "Mauvais utilisateur seléctionné"
    },
    "delivery_price": {
        "regex": regex.regexInt,
        "errorMessage": "Prix invalide, uniquement des chiffres sont autorisés"
    },
    "order_price": {
        "regex": regex.regexInt,
        "errorMessage": "Prix invalide, uniquement des chiffres sont autorisés"
    },
    "order_date": {
        "regex": regex.regexDate,
        "errorMessage": "Prix invalide, uniquement des chiffres sont autorisés"
    },
    "delivery_date": {
        "regex": regex.regexDate,
        "errorMessage": "Prix invalide, uniquement des chiffres sont autorisés"
    },
};