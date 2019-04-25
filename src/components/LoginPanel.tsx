import React, { Component } from 'react';
import '../styles/LoginPanel.css';

export default class LoginPanel extends Component {
  render() {
    return (
      <div className="row mt-3">
        <div className="col-xs-12 col-md-8">
          <div className="card border-primary mb-3">
            <div className="card-header">Connexion</div>
            <div className="card-body">
              <h4 className="card-title">Hello !</h4>
              <form>
                <fieldset>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email</label>
                    <input className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="adresse@example.com" type="email"></input>
                    <small id="emailHelp" className="form-text text-muted">Votre email ne sera jamais divulgué à un tiers.</small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Mot de passe</label>
                    <input className="form-control" id="exampleInputPassword1" placeholder="Mot de passe" type="password"></input>
                  </div>
                  <div className="text-right">
                    <button type="submit" className="btn btn-primary">&gt;</button>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}