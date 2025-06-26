const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const mongoose = require('mongoose');
const dataController = require('../services/data');
const Data = require('../models/data');


describe('data Controller - getAll', function() {
  let req, res, next;

  beforeEach(() => {
    req = {
      params: {
        id: new mongoose.Types.ObjectId().toString()
      }
    };
    res = {
      render: sinon.spy(),
      status: sinon.stub().returnsThis(),
      json: sinon.spy()
    };
    next = sinon.spy();
  });

  afterEach(() => {
    sinon.restore();
  });

  it('should render artisan page with  data', async function() {
    const mockData = [
      { _id: new mongoose.Types.ObjectId(), name: 'data 1' },
      { _id: new mongoose.Types.ObjectId(), name: 'Data 2' }
    ];
    

    sinon.stub(Data, 'find').resolves(mockData);
    

    await dataController.getAll(req, res, next);

    expect(Data.find.calledOnce).to.be.true;
  
     expect(res.render.calledOnce).to.be.true;
    expect(res.render.firstCall.args[0]).to.equal('data');
    expect(res.render.firstCall.args[1]).to.deep.equal({
      title: 'artisan',
      data: mockData,
      
    });
  });

  it('should return 501 status when Booking.find fails', async function() {
    const error = new Error('Database error');
    sinon.stub(Data, 'find').rejects(error);

    await dataController.getAll(req, res, next);

    expect(Data.find.calledOnce).to.be.true;
    expect(res.status.calledOnceWith(501)).to.be.true;
    expect(res.json.calledOnceWith(error)).to.be.true;
  });

  it('should return 501 status findById fails', async function() {
    const error = new Error(' not found');
    sinon.stub(Data, 'find').resolves([]);
    sinon.stub(Data, 'findById').rejects(error);

    await dataController.getAll(req, res, next);

    expect(Data.find.calledOnce).to.be.true;
    expect(Data.findById.calledOnceWith(req.params.id)).to.be.true;
    expect(res.status.calledOnceWith(501)).to.be.true;
    expect(res.json.calledOnceWith(error)).to.be.true;
  });

  it('should not render page when no data are found', async function() {
    sinon.stub(Data, 'find').resolves(null);
    const mockData = { _id: req.params.id, name: 'Test' };
    sinon.stub(Catway, 'findById').resolves(mockData);

    await DataController.getAll(req, res, next);

    expect(Data.find.calledOnce).to.be.true;
    expect(Data.findById.calledOnceWith(req.params.id)).to.be.true;
    expect(res.render.called).to.be.false;
  });
});

describe('Data Controller - getById', function() {
    let req, res, next;
  
    beforeEach(() => {
      req = {
        params: {
          id: new mongoose.Types.ObjectId().toString(),
          id_nom: new mongoose.Types.ObjectId().toString()
        }
      };
      res = {
        render: sinon.spy(),
        status: sinon.stub().returnsThis(),
        json: sinon.spy()
      };
      next = sinon.spy();
    });
  
    afterEach(() => {
      sinon.restore();
    });
  
    it('should render page', async function() {
      const mockData = { _id: req.params.id, name: 'Test data' };

     sinon.stub(Data, 'findById').resolves(mockData);
  
  
      await DataController.getById(req, res, next);
  
      expect(Data.findById.calledOnceWith(req.params.id)).to.be.true;
      expect(res.render.calledOnce).to.be.true;
      expect(res.render.firstCall.args[0]).to.equal('dataInfo');
      expect(res.render.firstCall.args[1]).to.deep.equal({
        title: 'Information artisan',
        data: mockData,
      
      });
    });
  
    it('should return 404 status when catway is not found', async function() {
      sinon.stub(Data, 'findById').resolves(null);
  
      await dataController.getById(req, res, next);
  
      expect(Data.findById.calledOnceWith(req.params.id)).to.be.true;
      expect(res.status.calledOnceWith(404)).to.be.true;
      expect(res.json.calledOnceWith('data-not-found')).to.be.true;
    });
  
    it('should return 404 status when booking is not found', async function() {
      const mockData = { _id: req.params.id, name: 'Test data' };
      sinon.stub(Data, 'findById').resolves(mockData);
     
  
      await DataController.getById(req, res, next);
  
      expect(Data.findById.calledOnceWith(req.params.id)).to.be.true;
      expect(res.status.calledOnceWith(404)).to.be.true;
      expect(res.json.calledOnceWith('Aucun artisan  trouvé')).to.be.true;
    });
  
    it('should return 501 status on database error', async function() {
      const error = new Error('Database error');
      sinon.stub(Data, 'findById').rejects(error);
  
      await dataController.getById(req, res, next);
  
      expect(Data.findById.calledOnceWith(req.params.id)).to.be.true;
      expect(res.status.calledOnceWith(501)).to.be.true;
      expect(res.json.calledOnceWith(error)).to.be.true;
    });
});

describe('Data Controller - add', function() {
    let req, res, next;
  
    beforeEach(() => {
      req = {
        params: { id: new mongoose.Types.ObjectId().toString() },
        body: {
          id_nom: '123',
          nom: 'John Doe',
          note: '11',
          ville: '2023-06-01',
          apropos:'carpe diem',
          email:'johndoe@gmail.com',
          site:'https://johndoe.com',
          categorie:'boucher',
          top:'faux'
        
        }
      };
      res = {
        status: sinon.stub().returnsThis(),
        json: sinon.spy()
      };
      next = sinon.spy();
    });
  
    afterEach(() => {
      sinon.restore();
    });
  
   
      // Exécute les middlewares de validation
      for (const middleware of dataController.add.slice(0, -1)) {
        await middleware(req, res, next);
      }
  
      // Exécute la fonction principale
      await dataController.add[dataController.add.length - 1](req, res, next);
  
      expect(Data.findById.calledOnceWith(req.params.id)).to.be.true;
      expect(Data.create.calledOnce).to.be.true;
      expect(res.status.calledOnceWith(201)).to.be.true;
      expect(res.json.calledOnceWith(mockData)).to.be.true;
    });
  
    it('should return 400 status with validation errors for invalid input', async function() {
      req.body.id_nom = 'not a number';
      req.body.nom = 'Jo';
      req.body.checkIn = 'invalid artisan';
  
      // Exécute les middlewares de validation
      for (const middleware of DataController.add.slice(0, -1)) {
        await middleware(req, res, next);
      }
  
      // Exécute la fonction principale
      await dataController.add[dataController.add.length - 1](req, res, next);
  
      expect(res.status.calledOnceWith(400)).to.be.true;
      expect(res.json.calledOnce).to.be.true;
      const errors = res.json.firstCall.args[0].errors;
      expect(errors).to.be.an('array').that.has.lengthOf(3);
      expect(errors[0].msg).to.equal("L'id doit être un nombre.");
      expect(errors[1].msg).to.equal('Le nom de ')
      expect(errors[2].msg).to.equal('checkIn doit être une date');
    });
  
    it('should propagate error when Data.findById fails', async function() {
        const error = new Error('Database error');
        sinon.stub(Data, 'findById').rejects(error);
    
        // Exécute les middlewares de validation
        for (const middleware of DataController.add.slice(0, -1)) {
          await middleware(req, res, next);
        }
    
        // Exécute la fonction principale
        try {
          await dataController.add[bookingController.add.length - 1](req, res, next);
          // Si nous arrivons ici, le test devrait échouer car nous attendons une erreur
          expect.fail('Expected an error to be thrown');
        } catch (e) {
          expect(e).to.equal(error);
        }
    
        expect(Data.findById.calledOnceWith(req.params.id)).to.be.true;
    });
  
    it('should do nothing when catway is not found', async function() {
        sinon.stub(Data, 'findById').resolves(null);
    
        // Exécute les middlewares de validation
        for (const middleware of dataController.add.slice(0, -1)) {
          await middleware(req, res, next);
        }
    
        // Exécute la fonction principale
        await dataController.add[dataController.add.length - 1](req, res, next);
    
        expect(Data.findById.calledOnceWith(req.params.id)).to.be.true;
        const jsonResponse = res.json.firstCall.args[0];
        expect(res.status.called).to.be.false;
        expect(res.json.called).to.be.false;
    });
    
  
    it('should return 400 status with validation errors for invalid input', async function() {
      req.body.bookingId = 'not a number';
      req.body.clientName = 'Jo';
      req.body.checkIn = 'invalid date';
  
  
      

describe('Data Controller - delete', function() {
    let req, res, next;
  
    beforeEach(() => {
      req = {
        params: {
          id: new mongoose.Types.ObjectId().toString(),
          idReservation: new mongoose.Types.ObjectId().toString()
        }
      };
      res = {
        status: sinon.stub().returnsThis(),
        json: sinon.spy()
      };
      next = sinon.spy();
    });
  
    afterEach(() => {
      sinon.restore();
    });
  
    it('should delete a booking and return 204 status on success', async function() {
      const mockData = { _id: req.params.id };
      
      sinon.stub(Data, 'findById').resolves(mockData);
      const deleteOneStub = sinon.stub(Data, 'deleteOne').resolves({ deletedCount: 1 });
  
      await dataController.delete(req, res, next);
  
      expect(Data.findById.calledOnceWith(req.params.id)).to.be.true;
      expect(deleteOneStub.calledOnceWith({ _id: req.params.idReservation })).to.be.true;
      expect(res.status.calledOnceWith(204)).to.be.true;
      expect(res.json.calledOnceWith('delete_ok')).to.be.true;
    });
  
    it('should return 501 status on database error', async function() {
      const mockData = { _id: req.params.id };
      const dbError = new Error('Database error');
      
      sinon.stub(Data, 'findById').resolves(mockData);
      sinon.stub(Booking, 'deleteOne').rejects(dbError);
  
      await dataController.delete(req, res, next);
  
      expect(Data.findById.calledOnceWith(req.params.id)).to.be.true;
      expect(res.status.calledOnceWith(501)).to.be.true;
      expect(res.json.calledOnceWith(dbError)).to.be.true;
    });
  
    it('should do nothing when data is not found', async function() {
      sinon.stub(Data, 'findById').resolves(null);
      const deleteOneStub = sinon.stub(Booking, 'deleteOne');
  
      await dataController.delete(req, res, next);
  
      expect(Data.findById.calledOnceWith(req.params.id)).to.be.true;
      expect(deleteOneStub.called).to.be.false;
      expect(res.status.called).to.be.false;
      expect(res.json.called).to.be.false;
    });
  
    it('should return 204 status even if no booking was found to delete', async function() {
      const mockData = { _id: req.params.id };
      
      sinon.stub(Data, 'findById').resolves(mockData);
      const deleteOneStub = sinon.stub(Booking, 'deleteOne').resolves({ deletedCount: 0 });
  
      await bookingController.delete(req, res, next);
  
      expect(Data.findById.calledOnceWith(req.params.id)).to.be.true;
      expect(deleteOneStub.calledOnceWith({ _id: req.params.idReservation })).to.be.true;
      expect(res.status.calledOnceWith(204)).to.be.true;
      expect(res.json.calledOnceWith('delete_ok')).to.be.true;
    });
})}