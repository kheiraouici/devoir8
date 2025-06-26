const mongoose = require('mongoose');

const dataSchema = mongoose.Schema(
    {
        id_nom: {
            type: Number,
            require: true,
            unique: [true, "L'identifiant de la réservation doit être unique"]
        },

        nom: {
            type: String,
            require: true
        },

        specialite: {
            type: String,
            trim: true,
            require: true
        },

        note: {
            type: Number,
            trim: true,
            require: true
        },

        ville: {
            type: String,
            require: true
        }, 

        apropos: {
            type: String,
            require: true
        },
         email: {
            type: string,
            require: true
        },
         categorie: {
            type: string,
            require: true
        },
         top: {
            type: String,
            require: true
        }
    }
);

const Data = mongoose.model('data', dataSchema);
module.exports = Booking;