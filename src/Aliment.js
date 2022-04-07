// un aliment
export default class Aliment {
    constructor (id, nom, quantite) {
    this._id = id;
    this._nom = nom;
    this._quantite = quantite;
    }
    get id() {
    return this._id
    }
    get nom() {
    return this._nom;
    }

    get quantite() {
    return this._quantite
    }
    // modifier quantite
    plusUn() {
    this._quantite = this._quantite + 1;
    }
    
    pourAfficher() {
    return `${this._nom} (${ this._quantite})`;
    }
   }