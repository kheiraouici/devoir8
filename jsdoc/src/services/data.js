const Data = require('../models/data');

const { body, validationResult } = require('express-validator');

/**
 * Récupère toutes les réservations et un catway spécifique.
 * @function
 * @async
 * @param {Object} req - L'objet de requête HTTP. Récupère l'id d'un catways dans l'url.
 * @param {Object} res - L'objet de réponse HTTP. Fait le rendu de la page Réservation.
 * @param {Function} next - La fonction middleware suivante.
 */
exports.getAll = async (req, res, next) => {
    try {
        const id = req.params.id
        let data = await Data.find({});
        
        
        if (data) {
            return res.render('data', { title: 'artisan', data: data });
        }
    } catch (e) {
        return res.status(501).json(e);
    }
}

/**
 * Récupère une réservation spécifique par son ID et le catway associé.
 * @function
 * @async
 * @param {Object} req - L'objet de requête HTTP. Récupère l'id d'un catways et l'id d'une réservation dans l'url.
 * @param {Object} res - L'objet de réponse HTTP. Fait le rendu de la page Information de la réservation
 * @param {Function} next - La fonction middleware suivante.
 */
exports.getById = async (req, res, next) => {
    const id = req.params.id
    const idReservation = req.params.idReservation 

    try {
        let data = await data.findById(id);

        if (data) {
            let data = await data.findById(id_nom)
                if (booking) {
                    //res.status(200).json(booking);
                    return res.render('artisan', { title: 'artisan', data: data })
                }
            return res.status(404).json("Aucun artisan trouvé");
        }

        return res.status(404).json('data-not-found');
    } catch (e) {
        return res.status(501).json(e);
    }
}

/**
 * Ajoute une nouvelle réservation.
 * @function
 * @async
 * @param {Object} req - L'objet de requête HTTP. Récupère les champs nécessaire à la création (bookingId, clientName, boatName, checkIn, checkOut) dans le corp de la requette.
 * @param {Object} res - L'objet de réponse HTTP. Renvoie le status de la requette 200 si tout c'est bien passé, 400 ou 501 si une erreur est apparu.
 * @param {Function} next - La fonction middleware suivante.
 */
exports.add = [
    // Définition des règles de validation
        body('id_nom').isNumeric().withMessage("L'id doit être un nombre."),
        body('nom').trim().isLength({ min: 3 }).withMessage('Le nom du client doit contenir au moins 3 caractères'),
        body('note').isNumeric().isLength({ min: 3 }).withMessage('Le nom du bâteau doit contenir au moins 3 caractères'),
        body('ville').trim().withMessage('lettre'),
        body('email').trim().withMessage('lettre'),
        body('site').trim().withMessage("Lettre."),
        body('categorie').trim().isLength({ min: 3 }).withMessage(' doit contenir au moins 3 caractères'),
        body('top').trim().isLength({ min: 3 }).withMessage(' doit contenir au moins 3 caractères'),
        
    // Fonction de traitement de la requête
    async (req, res, next) => {

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const id = req.params.id;
        let data = await data.findById(id);

        if (data) {
            const temp = ({
                id_nom: req.body.id_nom,
                nom: data.nom,
                specialite: req.body.specialite,
                note: req.body.note,
                apropos: req.body.apropos,
                email: req.body.email,
                categorie: req.body.categorie,
                top: req.body.top
            })
    
            try {
                let data = await data.create(temp);
    
                return res.status(201).json(data);
            } catch (e) {
                return res.status(501).json(e);
            }
        }
    }
];

/**
 * Met à jour une réservation existante.
 * @function
 * @async
 * @param {Object} req - L'objet de requête HTTP. Récupère les champs nécessaire à la création (bookingId, clientName, boatName, checkIn, checkOut) dans le corp de la requette.
 * @param {Object} res - L'objet de réponse HTTP. Revoie les message de succés ou d'erreur selon l'échec ou la réussite de la requette.
 * @param {Function} next - La fonction middleware suivante.
 */
exports.update = [
    body('id_nom').isNumeric().withMessage("L'id doit être un nombre."),
        body('nom').trim().isLength({ min: 3 }).withMessage('Le nom du client doit contenir au moins 3 caractères'),
        body('note').isNumeric().isLength({ min: 3 }).withMessage('Le nom du bâteau doit contenir au moins 3 caractères'),
        body('ville').trim().withMessage('lettre'),
        body('email').trim().withMessage('lettre'),
        body('site').trim().withMessage("Lettre."),
        body('categorie').trim().isLength({ min: 3 }).withMessage(' doit contenir au moins 3 caractères'),
        body('top').trim().isLength({ min: 3 }).withMessage(' doit contenir au moins 3 caractères'),
        
    // Fonction de traitement de la requête
    async (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const id = req.params.id;
        let data = await Data.findById(id);

        if (data) {
            const temp = ({
                id_nom: req.body.id_nom,
                nom: data.nom,
                specialite: req.body.specialite,
                note: req.body.note,
                apropos: req.body.apropos,
                email: req.body.email,
                categorie: req.body.categorie,
                top: req.body.top
            })
    
            const id_nom = req.params.id_nom;
    
            try {
                let data = await Data.findById(id_nom);
    
                if (data) {
                    Object.keys(temp).forEach((key) => {
                        if (!!temp[key]) {
                            data[key] = temp[key];
                        }
                    });
    
                    await data.save();
                    return res.status(201).json(data);
                }
    
                return res.status(404).json("artisan_not_found");
            } catch (e) {
                return res.status(501).json(e);
            }
        }
    }
];

/**
 * Supprime une réservation.
 * @function
 * @async
 * @param {Object} req - L'objet de requête HTTP. Récupère l'id du catwayt ainsi que l'id de la réservation dans l'URL de la requette 
 * @param {Object} res - L'objet de réponse HTTP. Renvoie les codes correspondant à un succés ou à un echec. 
 * @param {Function} next - La fonction middleware suivante.
 */
exports.delete = async (req, res, next) => {
    const id = req.params.id;
    let data = await data.findById(id);

    if (data) {
        const id_nom = req.params.id_nom;

        try {
            await Booking.deleteOne({ _id: id_nom });
    
            return res.status(204).json('delete_ok');
        } catch (e) {
            return res.status(501).json(e)
        }
    }
};
