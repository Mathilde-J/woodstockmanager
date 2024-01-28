export const setErrorsFromResponseStatus = (statusCode, errorMessage) => {

    switch (statusCode) {
        case 401:
            return errorMessage ?? "Vous n'êtes pas autorisé à executer cette action";
        case 404:
            return errorMessage ?? "Une erreur est survenue";
        case 500:
            return errorMessage ?? "Une erreur du serveur est survenue";
        case 422:
            return errorMessage.message
        default:
          return "Une erreur est survenue";
    }

}